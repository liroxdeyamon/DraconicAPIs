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