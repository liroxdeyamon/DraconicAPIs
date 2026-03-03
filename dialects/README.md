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

Example usage:
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
## IDS
## MAIN STRUCTURE
### MAP
### FLAT
### MATCHES
## CHARACTERS
## GENDERS
## AFFIXES
## DICTIONARY


# Conslusion
If you have any questions or suggestions, you can ask in this repo's discussions/issues or in the [**DraconicAPIs** branch of draconic-tools channel](https://discord.com/channels/1315098863694250075/1433758501577953280) on [human1011's discord](https://discord.com/invite/By5MxEy6MT). 