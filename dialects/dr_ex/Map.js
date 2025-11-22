const DIALECTS = {
    MAP: {
        "dr_dr": "https://draconicconlang.github.io/APIs/dialects/dr_dr/"
    },
    
    async load(id, dictionary = true, experimental = false, deprecated = false) {
        const base = this.MAP[id];
        let allCode = '';
        
        async function fetchScript(file) {
            const res = await fetch(base + file);
            if (!res.ok) return;
            return await res.text();
        }
        
        // Fetch all scripts
        allCode += await fetchScript("Map.js") || '';
        if (dictionary) allCode += '\n' + (await fetchScript("Dictionary.js") || '');
        if (experimental) allCode += '\n' + (await fetchScript("Experimental.js") || '');
        if (deprecated) allCode += '\n' + (await fetchScript("Deprecated.js") || '');
        
        // load code from files and execute it in sandbox
        allCode += '\nreturn this;';
        const sandbox = new Function(allCode).call({});
        
        return sandbox; // Map and Dictionary objects, you may unpack them later if you wish like
        // const DR = DIALECTS.load("dr_dr");
        // Object.assign(globalThis, DR);
    }
};

// Usage
DIALECTS.load("dr_dr").then(DR => {
    console.log("Loaded DR:", DR);
    window.DR = DR;
});