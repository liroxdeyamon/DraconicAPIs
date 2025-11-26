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
            .replace(/^\s*function\s+([a-zA-Z_$][\w$]*)/gm, (_, name) => `var ${name} = function ${name}`)
            .replace(/^\s*class\s+([a-zA-Z_$][\w$]*)/gm, (_, name) => `var ${name} = class ${name}`);

        return eval(`(function(){ with(proxy) { ${transformed} } })()`);
    }

    return { sandbox: proxy, run };
}

const DIALECTS = {
  MAP: {
    "dr_dr": "https://draconicconlang.github.io/APIs/dialects/dr_dr/"
  },

  async loadUrl(url, dictionary = true, experimental = false, deprecated = false) {
    let allCode = '';

    async function fetchScript(file) {
      const res = await fetch(url + file);
      if (!res.ok) return '';
      return await res.text();
    }

    allCode += await fetchScript("Map.js");
    if (dictionary) allCode += '\n' + (await fetchScript("Dictionary.js") || '');
    if (experimental) allCode += '\n' + (await fetchScript("Experimental.js") || '');
    if (deprecated) allCode += '\n' + (await fetchScript("Deprecated.js") || '');

    const { sandbox, run } = createSandbox();
    run(allCode);
    return sandbox;
  },

  async load(id, dictionary = true, experimental = false, deprecated = false) {
    return await loadUrl(this.MAP[id], dictionary, experimental, deprecated);
  }
};