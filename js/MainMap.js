// Locales + identifiers idk
window.modules = window.modules || []

const GENDERS = {
    MAP: {
        E: { NAME: "Exalted", SHORT: "e" },
        R: { NAME: "Rational", SHORT: "r" },
        MON: { NAME: "Monstrous", SHORT: "mon" },
        I: { NAME: "Irrational", SHORT: "i" },
        MAG: { NAME: "Magical", SHORT: "mag" },
        MUN: { NAME: "Mundane", SHORT: "mun" },
        A: { NAME: "Abstract", SHORT: "a" }
    },

    get ANIMATES() {
        return {
            NAME: "Animates",
            AFFECTED: [this.MAP.E, this.MAP.R, this.MAP.MON, this.MAP.I],
            get FLAT() {
                return {
                    NAME: this.AFFECTED.map(g => g.NAME),
                    SHORT: this.AFFECTED.map(g => g.SHORT)
                };
            }
        };
    },

    get INANIMATES() {
        return {
            NAME: "Inanimates",
            AFFECTED: [this.MAP.MAG, this.MAP.MUN, this.MAP.A],
            get FLAT() {
                return {
                    NAME: this.AFFECTED.map(g => g.NAME),
                    SHORT: this.AFFECTED.map(g => g.SHORT)
                };
            }
        };
    },

    get FLAT() {
        return {
            NAME: Object.values(this.MAP).map(g => g.NAME),
            SHORT: Object.values(this.MAP).map(g => g.SHORT)
        };
    }
};
// USAGE:
// GENDERS.MAP.X.NAME - Gender X name. GENDERS.MAP.E.NAME -> "Exalted"
// GENDERS.FLAT.NAME -> ["Exalted", "Rational", ...]
// GENDERS.FLAT.SHORT -> ["e", "r", ...]
// GENDERS.ANIMATES.AFFECTED -> [{NAME: "Exalted", SHORT: "e"}, ...]
// GENDERS.INANIMATES.FLAT.NAME -> ["Magical", "Mundane", ...]

// -
function getAllValues(obj) {
    return Object.values(obj).flatMap(val =>
        typeof val === 'object' && val !== null ? getAllValues(val) : val
    );
}
// -


const NOUNS = {
    MAP: {},
    get FLAT() {
        return Object.values(this.MAP).flatMap(v => typeof v === 'object' && !v.word ? Object.values(v) : [v])
    },
    SUFFIXES: {
        MAP: {},
        get FLAT() {
            return getAllValues(this.MAP)
        },
        FLAT_MATCHES: {}
    },
    fetch() {},
    fetchByDefinition() {}
}

const VERBS = {
    MAP: {},
    get FLAT() {
        return Object.values(this.MAP);
    },
    PREFIXES: {
        MAP: {},
        get FLAT() {
            return getAllValues(this.MAP)
        },
        FLAT_MATCHES: {}
    },
    SUFFIXES: {
        MAP: {},
        get FLAT() {
            return getAllValues(this.MAP)
        },
        FLAT_MATCHES: {}
    },
    fetch() {},
    fetchByDefinition() {}
}

const ADJECTIVES = {
    MAP: {},
    get FLAT() {
        return Object.values(this.MAP).flatMap(v => typeof v === 'object' && !v.word ? Object.values(v) : [v])
    },
    SUFFIXES: {
        MAP: {},
        get FLAT() {
            return getAllValues(this.MAP)
        },
        FLAT_MATCHES: {}
    },
    fetch() {},
    fetchByDefinition() {}
}

const ADVERBS = {
    MAP: {},
    get FLAT() {
        return Object.values(this.MAP);
    },
    fetch() {},
    fetchByDefinition() {}
}

const AUXILIARIES = {
    MAP: {},
    get FLAT() {
        return Object.values(this.MAP);
    },
    fetch() {},
    fetchByDefinition() {}
}

const PREPOSITIONS = {
    MAP: {},
    get FLAT() {
        return Object.values(this.MAP);
    },
    fetch() {},
    fetchByDefinition() {}
}

const PARTICLES = {
    MAP: {},
    get FLAT() {
        return Object.values(this.MAP);
    },
    fetch() {},
    fetchByDefinition() {}
}

const DETERMINERS = {
    MAP: {},
    get FLAT() {
        return Object.values(this.MAP);
    },
    fetch() {},
    fetchByDefinition() {}
}

const CONJUNCTIONS = {
    MAP: {},
    get FLAT() {
        return Object.values(this.MAP);
    },
    fetch() {},
    fetchByDefinition() {}
}

const ALL_WORDS = {
    MAP: {},
    get FLAT() {
        return Object.values(this.MAP);
    },
    fetch() {},
    fetchByDefinition() {}
}

const WORD_UTILS = {
    matchSuffix() {},
    matchPrefix() {},
    connectSplit() {},
    connect() {},
    connectSuffix() {},
    connectPrefix() {},
    combineGenders() {}
}

const CHARACTERS = {
    MAP: {},
    get FLAT() {
        return Object.values(this.MAP);
    },

    randomCharacter() {},

    textToEntriesByAnyText() {},
    textToEntriesByText() {},
    textToEntriesByRom() {},
    textToEntriesByDiscord() {},
    textToEntriesByGlyph() {},

    entriesToText() {},
    entriesToRom() {},
    entriesToDiscord() {},
    entriesToGlyph() {},

    getPyricEquivalent() {}
}

const NUMBERS = {
    // uhhhhhh

    numberToText() {},
    textToNumber() {}
}

const IDS = {
    NUMBERS: {
        S: "Singular",
        D: "Dual",
        P: "Plural"
    },
    TARGETS: {
        S: "Subject",
        O: "Object",
    },
    MOODS: {
        D: "Directive",
        R: "Recessive",
    }
}

// REGistry
REG = (() => {
  let counter = 0;
  function auto() {
    return ++counter;
  }
  return { auto };
})();

REG.VOWEL = REG.auto();
REG.CONSONANT = REG.auto();
REG.PYRIC = REG.auto();
REG.SHEET_IGNORE = REG.auto();
REG.DIFFERENT = REG.auto();
REG.OPTIONAL = REG.auto();

window.modules.push("MainMap")