META = {
    // Basic info
    ID: "dr_ex",
    NAME: "Example Draconic",
    DESCRIPTION: "Example version of the conlang.",
    // Attribution
    AUTHOR: "Example Author", // example author
    MAINTAINERS: ["Examle Maintainer"], // people keeping dialect up to date
    // Dependencies
    DEPENDENCIES: {
        "Map.js": ["dr_dr"], // maps from main draconic
        "Dictionary.js": ["dr_dr"], // dictionary from main draconic
        "Experimental.js": ["dr_dr"], // experimental features from main draconic
        "Deprecated.js": ["dr_dr"] // deprecated fearures from main draconic  
    },
    // Update things
    // Classic draconic's updates are monitored in draconic-changes channel on discord
    // Code changes don't count as an update, unless they change the dialect in some way
    REVISION: 8, // aka version or smth, increment on update, please do not farm revisions via minor changes
    LAST_UPDATED: "2026-01-13", // YYYY-MM-DD format
    STATUS: "WIP" // WIP - there be alot of changes; STABLE - the dialect is done, but there be additions sometimes (like new words or phrases); ARCHIVED - no changes will be made anymore
}


// LETTERWORKS
// Adding exmaple letter
CHARACTERS.MAP["character_name"] = new Character({
    name: "character_name", name_ipa: "/example_ipa/",
    letter: "t", letter_rom: ["t"], letter_ipa: "/t̪/", letter_glyph: "\uE000", letter_discord: ":t_:",
    text: mainText,
    prop: [IDS.CHARACTERS.C],
    allophones: { "/t̪̚/": allophones["word-final"] },
    sound: soundPath + "0-0.mp3"
});

// Changing first letter's description
CHARACTERS.MAP["toru"]["text"] = "this is a {letter}"

// Deleting xæ
delete CHARACTERS.MAP["xæ"];

// Updating descriptions
Object.entries(CHARACTERS.MAP).forEach(([key, value]) => {
    value.description = description(value);
}); // not workin? why? todo: fix

// WORDCRAFTS


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

    // Collect all entries, grouping by key, tagged with their source word type
    const collected = {};
    for (const [map, wordType] of sources) {
        for (const [key, value] of Object.entries(map)) {
            if (!(key in collected)) collected[key] = [];
            collected[key].push({ entry: value, wordType });
        }
    }

    // Build final map: wrap duplicates in a Grouped (ML)
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