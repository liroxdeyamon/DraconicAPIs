# NEW DIALECT SUBMISSIONS ARE PAUSED UNTIL CLASSIC DRACONIC IS FULLY STANDARDIZED
# NOTICE
If you decide to include your dialect in here, you should comply with these rules:
- **Licensing**: The Draconic Language is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/), so you need to license your dialect the same and state original author.
- **Stay consistent**: Some developers may not want to struggle to integrate your dialect into their projects. Avoid changing names or structures arbitrarily, unless Classic ones are changed. In other words - stick to Classic Draconic's structure.
- **Deprecate properly**: If you remove or replace functions or mappings, mark them as deprecated in the original JS and include them in Deprecated.js to maintain compatibility. You may leave them as-is without updates. If they cannot work under any circumstances, you may delete them.
- **Work in branches**: Make all changes in separate branches rather than directly in the main one. When you are done updating and testing everything, you may create a pull request. (Or you can host it on your side, just let me know, and the repo need to be public as well)
- **Respect other's boundaries**: Do not edit other's dialects in any way. Classic Draconic is maintained by LiroxDeYamon, _eXeCutie and SuPDuZz.
#### Happy codding!

# FILE STRUCTURE
## ./assets/
Assets for the dialect.

Contains images, audio, font, etc, may contain files like generators or other unsorted files.

## ./Map.js
Main data and functions.

Contains METAdata, various MAPs, and main functions.

## ./Dictionary.js
The dictionary.

Contains all words, phrases and their properties.

## ./Deprecated.js
Deprecated functions and mappings, which won't be updated but still exist for compatibility.

Some functions may be deleted if they cannot work under any circumstances.

## ./Experimental.js
Experimental functions and maps that weren't meant to be used yet.

After necessary testing and fixing, functions can be migrated to Map.js

# MAP.JS
## META
Contains main information of the dialect.

**ID** is 

**NAME**, **DESCRIPTION**, and **AUTHOR** are self-explanatory

**MAINTAINERS** are the people who keep the dialect alive: bug fixes, dictionary updates, and refactors in case of deprecation. If there are no maintainers, the author must be one of them.

**DEPENDENCIES** are files from other dialects that are loaded **before** this dialect's files. For example, `"Map.js": ["dr_dr"]` would load `Map.js` from the `"dr_dr"` dialect first, and only then this dialect's `Map.js`.

**REVISION** is like the version of the dialect, except its incremented on updates, changing the dialects in some way, not just code changes. Keep updates' size exact or more to Classic Draconic's ones (draconic-changes channel on human1011's discord) to avoid farming revisions via minor changes.

**LAST_UPDATED** is the date of last revision. Keep it in YYYY-MM-DD format.

**STATUS** is the current state of the dialect. It can be:
- **WIP** - there will be lots of changes, the dialect is not done yet
- **STABLE** - the dialect is basically done, but there be additions sometimes (like new words or phrases)
- **ARCHIVED** - no changes will be made anymore, only bug fixes if necessary, or not ¯\\\_(ツ)\_/¯

## IDS
Key-value pairs of IDs and their values.

Includes both short and long from of something, for example lexeme type.

Used for consistency and to avoid typos.

## MAIN STRUCTURE
### MAP
Key-value pairs for various things *(maps for short)*.

### FLAT
Arrays of values of maps *(flats for short)*, pregenerated for performance *(hopefully)*.

Usually found in pairs with maps.

### MATCHES
Pregenerated objects used for affix matching.

Consists of the affix, its word type, all possible paths to that affix and all possible variants of that affix.

Usually found in affix map holders *(`AFFIXES.WORD.MATCHES`)*

### Grouped
Object meant for combining lexemes with same word but different word types/declensions.

Consists of word, type *(for now either `IDS.OTHER.ML` - MultiLexemic or `IDS.OTHER.MD` - MultiDeclensional)* its combined type *(if possible)*, available types array *(may be integers if type is MD)*, and acceptable types array.

Be aware that MultiDeclensional can appear inside MultiLexemic's Noun or Adjective, see `"fēl"`.

Usually found in `DICTIONARY.ALL_WORDS.MAP`

## CHARACTERS
Map holder for characters, where map consists of string-`Character` pairs *(charmap for short)*.

Contains auxiliary functions for converting text to `Character` arrays *(entries for short)* and back to text.

### Character
Object for Draconic character.

Consists of 

Usually found in charmap.

## GENDERS
## AFFIXES
## DICTIONARY

# BASIC GUIDE
Keep in mind that if you don't add dependencies, you would need to write all the code yourself.

Examples here are shown for case **WITH** main dependency as Classic Draconic

All examples can be found in **Example Draconic** unlisted dialect *(`"dr_ex"`)*.

## Metadata
```js
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
```

## Letters
Classic Draconic already have 40+ letters, but in case you want to add more, you can add this to your `Map.js`:
```js
CHARACTERS.MAP["character_name"] = new Character({
    name: "character_name", name_ipa: "/example_ipa/",
    letter: "t", letter_rom: ["t"], letter_ipa: "/t̪/", letter_glyph: "\uE000", letter_discord: ":t_:",
    text: mainText,
    prop: [IDS.CHARACTERS.C],
    allophones: { "/t̪̚/": allophones["word-final"] },
    sound: soundPath + "0-0.mp3"
});
```

If you want to change properties:
```js
CHARACTERS.MAP["character_name"]["some_property"] = somevalue;
```

Elif you want to delete a letter: 
```js
delete CHARACTERS.MAP["character_name"];
```

After all manipulations, if some of your letters' descriptions contains values with `"{}"`, it's better to use this:
```js
Object.entries(CHARACTERS.MAP).forEach(([key, value]) => {
    value.description = description(value);
});
```

## Words
Adding words:
```js
DICTIONARY.NOUNS.MAP = {...DICTIONARY.NOUNS.MAP, ...{
"afuχ": new Noun("afuχ", 3, {'Magical': 'life cycle, circle of life', 'Mundane': 'wheel', 'Abstract': 'cycle, circle'}, ""),
"axa": {1: new Noun("axa", 1, {'Abstract': 'negativity; negation'}, ""),2: new Noun("axa", 2, {'Monstrous': 'eyebat; cyclops', 'Magical': 'eye', 'Mundane': 'eye', 'Abstract': 'sight, vision'}, "")},
"cellâlq": new Noun("cellâlq", 3, {'Monstrous': 'giant fire elemental, especially if violent', 'Irrational': 'flame as personified', 'Magical': 'firestorm, inferno; (definite) Hell', 'Mundane': 'cinder, ember', 'Abstract': 'uncontained or unchecked power; plague'}, ""),
// ...
}} // repeat for every lexeme/phrase type
```

Deleting or editing words is the same as deleting/editing characters

Though, it's better to use generator of some sort, so you can easily convert `.csv` into `.js`.

At the end, please generate ALL_WORDS and cache all of your dictionary flats:
```js
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
```

## Affixes

```js

```

# Conclusion
If you have any questions or suggestions, you can ask in this repo's discussions/issues or in the [**DraconicAPIs** branch of draconic-tools channel](https://discord.com/channels/1315098863694250075/1433758501577953280) on [human1011's discord](https://discord.com/invite/By5MxEy6MT). 