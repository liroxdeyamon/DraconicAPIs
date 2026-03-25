// // if no dependencies
// DICTIONARY.NOUNS.MAP = {
// "afuχ": new Noun("afuχ", 3, {'Magical': 'life cycle, circle of life', 'Mundane': 'wheel', 'Abstract': 'cycle, circle'}, ""),
// "axa": {1: new Noun("axa", 1, {'Abstract': 'negativity; negation'}, ""),2: new Noun("axa", 2, {'Monstrous': 'eyebat; cyclops', 'Magical': 'eye', 'Mundane': 'eye', 'Abstract': 'sight, vision'}, "")},
// "cellâlq": new Noun("cellâlq", 3, {'Monstrous': 'giant fire elemental, especially if violent', 'Irrational': 'flame as personified', 'Magical': 'firestorm, inferno; (definite) Hell', 'Mundane': 'cinder, ember', 'Abstract': 'uncontained or unchecked power; plague'}, ""),
// // ...
// } // repeat for every lexeme/phrase type, better to use generator

// if have dependencies
DICTIONARY.NOUNS.MAP = {...DICTIONARY.NOUNS.MAP, ...{
"afuχ": new Noun("afuχ", 3, {'Magical': 'life cycle, circle of life', 'Mundane': 'wheel', 'Abstract': 'cycle, circle'}, ""),
"axa": {1: new Noun("axa", 1, {'Abstract': 'negativity; negation'}, ""),2: new Noun("axa", 2, {'Monstrous': 'eyebat; cyclops', 'Magical': 'eye', 'Mundane': 'eye', 'Abstract': 'sight, vision'}, "")},
"cellâlq": new Noun("cellâlq", 3, {'Monstrous': 'giant fire elemental, especially if violent', 'Irrational': 'flame as personified', 'Magical': 'firestorm, inferno; (definite) Hell', 'Mundane': 'cinder, ember', 'Abstract': 'uncontained or unchecked power; plague'}, ""),
// ...
}} // repeat for every lexeme/phrase type, better to use generator


// for consistency
DICTIONARY.ALL_WORDS.MAP = (() => {
    const sources = [
        [DICTIONARY.NOUNS.MAP,        IDS.WORDS.N],
        [DICTIONARY.VERBS.MAP,        IDS.WORDS.V],
        [DICTIONARY.ADJECTIVES.MAP,   IDS.WORDS.ADJ],
        [DICTIONARY.ADVERBS.MAP,      IDS.WORDS.ADV],
        [DICTIONARY.AUXILIARIES.MAP,  IDS.WORDS.AUX],
        [DICTIONARY.PREPOSITIONS.MAP, IDS.WORDS.PP],
        [DICTIONARY.PARTICLES.MAP,    IDS.WORDS.PART],
        [DICTIONARY.DETERMINERS.MAP,  IDS.WORDS.DET],
        [DICTIONARY.CONJUNCTIONS.MAP, IDS.WORDS.CON],
    ];

    const collected = {};
    for (const [map, wordType] of sources) {
        for (const [key, value] of Object.entries(map)) {
            if (!(key in collected)) collected[key] = [];
            collected[key].push({ entry: value, wordType });
        }
    }

    const result = {};
    for (const [key, entries] of Object.entries(collected)) {
        if (entries.length === 1) {
            result[key] = entries[0].entry;
        } else {
            const typeMap = {};
            for (const { entry, wordType } of entries) {
                typeMap[entry.unifiedType ?? entry.type ?? wordType] = entry;
            }
            result[key] = new Grouped(IDS.OTHER.ML, typeMap, Object.values(IDS.WORDS));
        }
    }

    return Object.fromEntries(
        Object.entries(result).sort(([a], [b]) => a.localeCompare(b))
    );
})();

DICTIONARY.NOUNS.FLAT = generateFlat(DICTIONARY.NOUNS.MAP);
DICTIONARY.VERBS.FLAT = generateFlat(DICTIONARY.VERBS.MAP);
DICTIONARY.ADJECTIVES.FLAT = generateFlat(DICTIONARY.ADJECTIVES.MAP);
DICTIONARY.ADVERBS.FLAT = generateFlat(DICTIONARY.ADVERBS.MAP);
DICTIONARY.AUXILIARIES.FLAT = generateFlat(DICTIONARY.AUXILIARIES.MAP);
DICTIONARY.PREPOSITIONS.FLAT = generateFlat(DICTIONARY.PREPOSITIONS.MAP);
DICTIONARY.PARTICLES.FLAT = generateFlat(DICTIONARY.PARTICLES.MAP);
DICTIONARY.DETERMINERS.FLAT = generateFlat(DICTIONARY.DETERMINERS.MAP);
DICTIONARY.CONJUNCTIONS.FLAT = generateFlat(DICTIONARY.CONJUNCTIONS.MAP);
DICTIONARY.ALL_WORDS.FLAT = generateFlat(DICTIONARY.ALL_WORDS.MAP);