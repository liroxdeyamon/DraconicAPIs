function createSandbox() {
    const sandbox = {};
    const handler = {
        has: () => true,
        get(target, key) {
            if (key in target) return target[key];
            return globalThis[key];
        },
        set(target, key, value) {
            target[key] = value;
            return true;
        }
    };
    const proxy = new Proxy(sandbox, handler);
    function run(code) {
        const transformed = code
            .replace(/"use strict";?/g, '')
            .replace(/'use strict';?/g, '')
            .replace(/^\s*function\s+([a-zA-Z_$][\w$]*)/gm, (_, name) => `var ${name} = function ${name}`)
            .replace(/^\s*class\s+([a-zA-Z_$][\w$]*)/gm, (_, name) => `var ${name} = class ${name}`);
        return new Function('proxy', `with(proxy) { ${transformed} }`)(proxy);
    }
    return { sandbox: proxy, run };
}

export const DIALECTS = {
    MAP: {
        "dr_dr": "https://draconicconlang.github.io/APIs/dialects/dr_dr/",
        "dr_ex": "https://draconicconlang.github.io/APIs/dialects/dr_ex/"
    },

    async loadUrl(url, dictionary = true, experimental = false, deprecated = false) {
        const { sandbox, run } = createSandbox();

        async function fetchScript(baseUrl, file) {
            const res = await fetch(baseUrl + file);
            if (!res.ok) return '';
            return await res.text();
        }

        const ownMapCode = await fetchScript(url, "Map.js");
        let meta = null;
        if (ownMapCode) {
            const { sandbox: tempSandbox, run: tempRun } = createSandbox();
            try { tempRun(ownMapCode); } catch (_) {}
            meta = tempSandbox.META ?? null;
        }

        async function loadFile(file) {
            let code = '';
            const deps = meta?.DEPENDENCIES?.[file];
            if (Array.isArray(deps)) {
                for (const depId of deps) {
                    const depUrl = DIALECTS.MAP[depId];
                    if (depUrl) code += await fetchScript(depUrl, file) + '\n';
                }
            }
            code += await fetchScript(url, file);
            return code;
        }

        run(await loadFile("Map.js"));

        const filesToLoad = [
            [dictionary,   "Dictionary.js"],
            [experimental, "Experimental.js"],
            [deprecated,   "Deprecated.js"],
        ];

        for (const [enabled, file] of filesToLoad) {
            if (!enabled) continue;
            const code = await loadFile(file);
            if (code.trim()) run(code);
        }

        return sandbox;
    },

    async load(id, dictionary = true, experimental = false, deprecated = false) {
        return await this.loadUrl(this.MAP[id], dictionary, experimental, deprecated);
    }
};