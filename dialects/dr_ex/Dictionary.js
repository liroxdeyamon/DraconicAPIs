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
DICTIONARY.ALL_WORDS.MAP = Object.fromEntries(
    Object.entries({
        ...DICTIONARY.NOUNS.MAP,
        ...DICTIONARY.VERBS.MAP,
        ...DICTIONARY.ADJECTIVES.MAP,
        ...DICTIONARY.ADVERBS.MAP,
        ...DICTIONARY.AUXILIARIES.MAP,
        ...DICTIONARY.PREPOSITIONS.MAP,
        ...DICTIONARY.PARTICLES.MAP,
        ...DICTIONARY.DETERMINERS.MAP,
        ...DICTIONARY.CONJUNCTIONS.MAP,
    })
    .sort(([aKey], [bKey]) => aKey.localeCompare(bKey))
    .map(([key, value]) => {
        if (typeof value === 'object' && !Array.isArray(value) && Object.values(value)[0] instanceof Noun) {
            return [key, value];
        }
        return [key, value];
    })
);

function generateFlat(map) {
    return Object.values(map).flatMap(value => {
        if (value.word === undefined) {
            return Object.values(value);
        }
        return [value];
    });
};

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