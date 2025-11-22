META = {
    ID: "dr_dr", // for getDialect and getDialectList
    NAME: "Regular Draconic",
    AUTHOR: "human1011", // in this case human1011 is author of the whole conlang
    DESCRIPTION: "Unmodified version of the conlang.",
    REVISION: "WIP", // aka version or smth, increment on update
    LISTED: true // for getDialect and getDialectList
}

// ============================ CLASSES ============================

class Character {
  constructor({
    name, name_ipa, letter, letter_rom, letter_ipa,
    letter_glyph, letter_discord, text = mainText,
    prop = [], table_prop = {}, allophones = {}, sound = null
  }) {
    this.name = name
    this.name_ipa = name_ipa
    this.letter = letter
    this.letter_rom = letter_rom
    this.letter_ipa = letter_ipa
    this.letter_glyph = letter_glyph
    this.letter_discord = letter_discord
    this.text = text
    this.prop = prop
    this.table_prop = table_prop
    this.allophones = allophones
    this.sound = sound
  }
}

class Noun {
  constructor(word, declension, genders, usage_notes) {
    this.type = "n"
    this.word = word
    this.declension = declension
    this.genders = genders
    this.usage_notes = usage_notes
  }
}

class Verb {
  constructor(word, definition, forms, usage_notes) {
    this.type = "v"
    this.word = word
    this.definition = definition
    this.forms = forms
    this.usage_notes = usage_notes
  }
}

class Adjective {
  constructor(word, declension, definition, forms, usage_notes) {
    this.type = "adj"
    this.word = word
    this.declension = declension
    this.definition = definition
    this.forms = forms
    this.usage_notes = usage_notes
  }
}

class Adverb {
  constructor(word, definition, forms, usage_notes) {
    this.type = "adv"
    this.word = word
    this.definition = definition
    this.forms = forms
    this.usage_notes = usage_notes
  }
}

class Auxiliary {
  constructor(word, definition, forms, usage_notes) {
    this.type = "aux"
    this.word = word
    this.definition = definition
    this.forms = forms
    this.usage_notes = usage_notes
  }
}

class Preposition {
  constructor(word, definition, usage_notes) {
    this.type = "pp"
    this.word = word
    this.definition = definition
    this.usage_notes = usage_notes
  }
}

class Particle {
  constructor(word, definition, usage_notes) {
    this.type = "part"
    this.word = word
    this.definition = definition
    this.usage_notes = usage_notes
  }
}

class Determiner {
  constructor(word, definition, usage_notes) {
    this.type = "det"
    this.word = word
    this.definition = definition
    this.usage_notes = usage_notes
  }
}

class Conjunction {
  constructor(word, definition, usage_notes) {
    this.type = "con"
    this.word = word
    this.definition = definition
    this.usage_notes = usage_notes
  }
}


// ============================ MAPS ============================

// ---------------------------- IDS ----------------------------

IDS = {
    NUMBERS: {
        S: "Singular",
        D: "Dual",
        P: "Plural"
    },
    CASE: {
        S: "Subject",
        O: "Oblique",
    },
    MOODS: {
        D: "Directive",
        R: "Recessive",
    },
    DET_TYPES: {
        NA: 'Negative-Article',
        DA: 'Definite-Article',
        PDEM: 'Proximal-Demonstrative',
        DDEM: 'Distal-Demonstrative',
    },
    COR_TYPES: {
        INT: 'Interrogative',
        R: 'Relative',
        COR: 'Correlative',
        PDEM: 'Proximal-Demonstrative',
        DDEM: 'Distal-Demonstrative',
    },
    ASPECT: {
        E: 'Episodic',
        G: 'Gnomic'
    },
    TENSE: {
        P: 'Past',
        NP: 'Non-Past'
    },
    CHARACTERS: {
        V: "Vowel",
        C: "Consonant",
        P: "Pyric",
        I: "Sheet Ignore",
        D: "Different", // ??
        O: "Optional"
    }
}


// ---------------------------- CHARACTERS ----------------------------

const mainText = 'pronounced {name_ipa}, represented with a "{letter_rom}" in the romanized way of writing, and "{letter}" in normal. The symbol makes the sound {letter_ipa} when spoken.'
const pyricHText = 'Letters containig /ħ/ are pronounced by dragon using /h/ and breathing out fire. Humans can use a lighter or stick to the /ħ/'
const pyricVowelText = 'Some letters following by q̇ħóll are considered pyric, and pronounced by dragon breathing out fire. Humans can use a lighter or stick to alternative sound.'
const soundPath = "https://supduzz.github.io/Draconic/assets/sound/symbol-" // hosted on sup's pages

allophones = {
  "before i": 'placed before "i" or "ī"',
  "before obs": "placed before obstruent",
  "word-init": "word-initially and before voiceless obstruents",
  "word-final": "placed word-finally or before obstruent",
  "intervoc": "intervocalically",
  "pyric": "placed before q̇ħóll"
}

CHARACTERS = {
    MAP: {
    //row 0
    "toru": new Character({ // 0
        name: "toru", name_ipa: "/t̪oru/",
        letter: "t", letter_rom: ["t"], letter_ipa: "/t̪/", letter_glyph: "\uE000", letter_discord: ":t_:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {"/t̪̚/": allophones["word-final"]},
        sound: soundPath+"0-0.mp3"
    }),
    "cáll": new Character({ // 1
        name: "cáll",  name_ipa: "/t͡s̠ɑ̤ˁɬ/",
        letter: "c", letter_rom: ["c"], letter_ipa: "/t͡s̠/", letter_glyph: "\uE001", letter_discord: ":c_:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {"/t͡ʃ/": allophones["before i"]},
        sound: soundPath+"0-1.mp3"
    }),
    "kû": new Character({ // 2
        name: "kû",  name_ipa: "/kṳˁː/",
        letter: "k", letter_rom: ["k"], letter_ipa: "/k/", letter_glyph: "\uE002", letter_discord: ":k_:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {
            "/c/": allophones["before i"],
            "/g̥/": allophones["intervoc"],
            "/k̚/": allophones["word-final"]
        },
        sound: soundPath+"0-2.mp3"
    }),
    "qath": new Character({ // 3
        name: "qath",  name_ipa: "/qɑθ/",
        letter: "q", letter_rom: ["q"], letter_ipa: "/q/", letter_glyph: "\uE003", letter_discord: ":q_:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {
            "/ɢ̥/": allophones["intervoc"],
            "/q̚/": allophones["word-final"]
        },
        sound: soundPath+"0-3.mp3"
    }),
    "q̇os": new Character({ // 4
        name: "q̇os",  name_ipa: "/ʡos̠/",
        letter: "q̇", letter_rom: ["Q"], letter_ipa: "/ʡ/", letter_glyph: "\uE004", letter_discord: ":Q_:",
        text: mainText+" If you struggle while pronouncing this, try looking up aryepiglottic folds, and mess around with how to contract them.",
        prop: [IDS.CHARACTERS.C],
        allophones: {
            "/ʡ̆/" :allophones["intervoc"],
            "/ʡ̚/": allophones["word-final"]
        },
        sound: soundPath+"0-4.mp3"
    }),
    "ax": new Character({ // 5
        name: "ax",  name_ipa: "/ax/",
        letter: "'", letter_rom: ["'", "´", "`"], letter_ipa: "/ʔ/", letter_glyph: "\uE005", letter_discord: ":__:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {
            "/ʔ̞/": allophones["intervoc"],
            "/ʔ̚/": allophones["word-final"]
        },
        sound: soundPath+"0-5.mp3"
    }),

    //row 1
    "trō": new Character({ // 6
        name: "trō",  name_ipa: "/t̪roː/",
        letter: "tr", letter_rom: ["tr"], letter_ipa: "/t̪r/", letter_glyph: "\uE006", letter_discord: ":tr:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {"/t̪r̥/": "before voiceless obstruents"},
        sound: soundPath+"1-0.mp3"
    }),
    "sēl": new Character({ // 7
        name: "sēl",  name_ipa: "/s̠ēl̪/",
        letter: "s", letter_rom: ["s"], letter_ipa: "/s̠/", letter_glyph: "\uE007", letter_discord: ":s_:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {"/ʃ/": allophones["before i"]},
        sound: soundPath+"1-1.mp3"
    }),
    "kxæŋ": new Character({ // 8
        name: "kxæŋ",  name_ipa: "/k͡xaŋ/",
        letter: "kx", letter_rom: ["kx"], letter_ipa: "/k͡x/", letter_glyph: "\uE008", letter_discord: ":kx:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {"/c͡ç/": allophones["before i"]},
        sound: soundPath+"1-2.mp3"
    }),
    "qχē": new Character({ // 9
        name: "qχē",  name_ipa: "/q͡χeː/",
        letter: "qχ", letter_rom: ["qX"], letter_ipa: "/q͡χ/", letter_glyph: "\uE009", letter_discord: ":qX:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {},
        sound: soundPath+"1-3.mp3"
    }),
    "qħán": new Character({ // 10
        name: "qħán",  name_ipa: "/qˤʰɑ̤ˤn̥/",
        letter: "qħ", letter_rom: ["qH"], letter_ipa: "/qˤʰ/", letter_glyph: "\uE00a", letter_discord: ":qH:",
        text: mainText + " " + pyricHText,
        prop: [IDS.CHARACTERS.C, IDS.CHARACTERS.P],
        allophones: {},
        sound: soundPath+"1-4.mp3"
    }),
    "q̇ħón": new Character({ // 11
        name: "q̇ħón",  name_ipa: "/ʡˤʰo̤ˤn̥/",
        letter: "q̇ħ", letter_rom: ["QH"], letter_ipa: "/ʡˤʰ/", letter_glyph: "\uE00b", letter_discord: ":QH:",
        text: mainText + " " + pyricHText,
        prop: [IDS.CHARACTERS.C, IDS.CHARACTERS.P],
        allophones: {},
        sound: soundPath+"1-5.mp3"
    }),

    //row 2
    "od": new Character({ // 12
        name: "od",  name_ipa: "/oð/",
        letter: "d", letter_rom: ["d"], letter_ipa: "/ð/", letter_glyph: "\uE00c", letter_discord: ":d_:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {},
        sound: soundPath+"2-0.mp3"
    }),
    "ēz": new Character({ // 13
        name: "ēz",  name_ipa: "/eːz̠/",
        letter: "z", letter_rom: ["z"], letter_ipa: "/z̠/", letter_glyph: "\uE00d", letter_discord: ":z_:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {"/ʒ/": allophones["before i"]},
        sound: soundPath+"2-1.mp3"
    }),
    "āg": new Character({ // 14
        name: "āg",  name_ipa: "/ɑːɣ/",
        letter: "g", letter_rom: ["g"], letter_ipa: "/ɣ/", letter_glyph: "\uE00e", letter_discord: ":g_:",   
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {"/ʝ/": allophones["before i"]},
        sound: soundPath+"2-2.mp3"
    }),
    "fe": new Character({ // 15
        name: "fe",  name_ipa: "/ɸe/",
        letter: "f", letter_rom: ["f"], letter_ipa: "/ɸ/", letter_glyph: "\uE00f", letter_discord: ":f_:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {
        "/f/": "when adjecent to 'th'", 
        "/β/": "intervocalically or adjecent to z, g", 
        "/v/": "when adjecent to d"
        },
        sound: soundPath+"2-3.mp3"
    }),
    "thyn": new Character({ // 16
        name: "thyn",  name_ipa: "/θən̥/",
        letter: "th", letter_rom: ["th"], letter_ipa: "/θ/", letter_glyph: "\uE010", letter_discord: ":th:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {},
        sound: soundPath+"2-4.mp3"
    }),
    "llī": new Character({ // 17
        name: "llī",  name_ipa: "/ɬiː/",
        letter: "ll", letter_rom: ["ll"], letter_ipa: "/ɬ/", letter_glyph: "\uE011", letter_discord: ":ll:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {"/ɮ/": allophones["intervoc"]},
        sound: soundPath+"2-5.mp3"
    }),

    //row 3
    "xæ": new Character({ // 18
        name: "xæ",  name_ipa: "/xa/",
        letter: "x", letter_rom: ["x"], letter_ipa: "/x/", letter_glyph: "\uE012", letter_discord: ":x_:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {"/ç/": allophones["before i"]},
        sound: soundPath+"3-0.mp3"
    }),
    "χy": new Character({ // 19
        name: "χy",  name_ipa: "/χə/",
        letter: "χ", letter_rom: ["X"], letter_ipa: "/χ/", letter_glyph: "\uE013", letter_discord: ":X_:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {},
        sound: soundPath+"3-1.mp3"
    }),
    "har": new Character({ // 20
        name: "har",  name_ipa: "/hɑr/",
        letter: "h", letter_rom: ["h"], letter_ipa: "/h/", letter_glyph: "\uE014", letter_discord: ":h_:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {},
        sound: soundPath+"3-2.mp3"
    }),
    "χħáth": new Character({ // 21
        name: "χħáth",  name_ipa: "/χˤʰɑ̤ˤθ/",
        letter: "χħ", letter_rom: ["XH"], letter_ipa: "/χˤʰ/", letter_glyph: "\uE015", letter_discord: ":XH:",
        table_prop: {"size": 1.2},
        text: mainText,
        prop: [IDS.CHARACTERS.C, IDS.CHARACTERS.P],
        allophones: {},
        sound: soundPath+"3-3.mp3"
    }),
    "ħâ": new Character({ // 22
        name: "ħâ",  name_ipa: "/ħɑ̤ˤː/",
        letter: "ħ", letter_rom: ["H"], letter_ipa: "/ħ/", letter_glyph: "\uE016", letter_discord: ":H_:",
        text: mainText,
        prop: [IDS.CHARACTERS.C, IDS.CHARACTERS.P],
        allophones: {},
        sound: soundPath+"3-4.mp3"
    }),
    "rox": new Character({ // 23
        name: "rox",  name_ipa: "/r̥ox/",
        letter: "r", letter_rom: ["r"], letter_ipa: "/ɾ/", letter_glyph: "\uE017", letter_discord: ":r_:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {"/r̥/": "word-init"},
        sound: soundPath+"3-5.mp3"
    }), 

    //row 4
    "lel": new Character({ // 24
        name: "lel",  name_ipa: "/l̥el̪/",
        letter: "l", letter_rom: ["l"], letter_ipa: "/l̪/", letter_glyph: "\uE018", letter_discord: ":l_:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {"/l̥/": "word-init"},
        sound: soundPath+"4-0.mp3"
    }),
    "eχ": new Character({ // 25
        name: "eχ",  name_ipa: "/eχ/",
        letter: "e", letter_rom: ["e"], letter_ipa: "/e/", letter_glyph: "\uE019", letter_discord: ":e_:",
        text: mainText,
        prop: [IDS.CHARACTERS.V],
        allophones: {},
        sound: soundPath+"4-1.mp3"
    }),
    "æfu": new Character({ // 26
        name: "æfu",  name_ipa: "/aɸu/",
        letter: "æ", letter_rom: ["ae"], letter_ipa: "/a/", letter_glyph: "\uE01a", letter_discord: ":ae:",
        text: mainText,
        prop: [IDS.CHARACTERS.V],
        allophones: {},
        sound: soundPath+"4-2.mp3"
    }),
    "y´": new Character({ // 27
        name: "y´",  name_ipa: "/əʔ/",
        letter: "y", letter_rom: ["y"], letter_ipa: "/ə/", letter_glyph: "\uE01b", letter_discord: ":y_:",
        text: mainText,
        prop: [IDS.CHARACTERS.V],
        allophones: {},
        sound: soundPath+"4-3.mp3"
    }),
    "a´": new Character({ // 28
        name: "a´",  name_ipa: "/ɑʔ/",
        letter: "a", letter_rom: ["a"], letter_ipa: "/ɑ/", letter_glyph: "\uE01c", letter_discord: ":a_:",
        text: mainText,
        prop: [IDS.CHARACTERS.V],
        allophones: {"/ɑ̤ˤ/ (á)": allophones["pyric"]},
        sound: soundPath+"4-4.mp3"
    }),
    "o´": new Character({ // 29
        name: "o´",  name_ipa: "/oʔ/",
        letter: "o", letter_rom: ["o"], letter_ipa: "/o/", letter_glyph: "\uE01d", letter_discord: ":o_:",
        text: mainText,
        prop: [IDS.CHARACTERS.V],
        allophones: {"/o̤ˤ/ (ó)": allophones["pyric"]},
        sound: soundPath+"4-5.mp3"
    }), 

    //row 5
    "u´": new Character({ // 30
        name: "u´",  name_ipa: "/uʔ/",
        letter: "u", letter_rom: ["u"], letter_ipa: "/u/", letter_glyph: "\uE01e", letter_discord: ":u_:",
        text: mainText,
        prop: [IDS.CHARACTERS.V],
        allophones: {"/ṳˤ/ (ú)": allophones["pyric"]},
        sound: soundPath+"5-0.mp3"
    }),
    "i´": new Character({ // 31
        name: "i´",  name_ipa: "/iʔ/",
        letter: "i", letter_rom: ["i"], letter_ipa: "/i/", letter_glyph: "\uE01f", letter_discord: ":i_:",
        text: mainText,
        prop: [IDS.CHARACTERS.V],
        allophones: {},
        sound: soundPath+"5-1.mp3"
    }),
    "ē´": new Character({ // 32
        name: "ē´",  name_ipa: "/eːʔ/",
        letter: "ē", letter_rom: ["ee"], letter_ipa: "/eː/", letter_glyph: "\uE020", letter_discord: ":ee:",
        text: mainText,
        prop: [IDS.CHARACTERS.V],
        allophones: {},
        sound: soundPath+"5-2.mp3"
    }),
    "ā´": new Character({ // 33
        name: "ā´",  name_ipa: "/ɑːʔ/",
        letter: "ā", letter_rom: ["aa"], letter_ipa: "/ɑː/", letter_glyph: "\uE021", letter_discord: ":aa:",
        text: mainText,
        prop: [IDS.CHARACTERS.V],
        allophones: {"/ɑ̤ˤː/ (â)": allophones["pyric"]},
        sound: soundPath+"5-3.mp3"
    }),
    "ō´": new Character({ // 34
        name: "ō´",  name_ipa: "/oːʔ/",
        letter: "ō", letter_rom: ["oo"], letter_ipa: "/oː/", letter_glyph: "\uE022", letter_discord: ":oo:",
        text: mainText,
        prop: [IDS.CHARACTERS.V],
        allophones: {"/o̤ˤː/ (ô)": allophones["pyric"]},
        sound: soundPath+"5-4.mp3"
    }),
    "ū´": new Character({ // 35
        name: "ū´",  name_ipa: "/uːʔ/",
        letter: "ū", letter_rom: ["uu"], letter_ipa: "/uː/", letter_glyph: "\uE023", letter_discord: ":uu:",
        text: mainText,
        prop: [IDS.CHARACTERS.V],
        allophones: {"/ṳˁː/ (û)": allophones["pyric"]},
        sound: soundPath+"5-5.mp3"
    }), 

    //row 6
    "ī´": new Character({ // 36
        name: "ī´",  name_ipa: "/iːʔ/",
        letter: "ī", letter_rom: ["ii"], letter_ipa: "/iː/", letter_glyph: "\uE024", letter_discord: ":ii:",
        text: mainText,
        prop: [IDS.CHARACTERS.V],
        allophones: {},
        sound: soundPath+"6-0.mp3"
    }),
    "má": new Character({ // 37
        name: "má",  name_ipa: "/m̥ɑ̤ˤ/",
        letter: "m", letter_rom: ["m"], letter_ipa: "/m/", letter_glyph: "\uE025", letter_discord: ":m_:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {"/m̥/": "word-init"},
        sound: soundPath+"6-1.mp3"
    }),
    "naχ": new Character({ // 38
        name: "naχ",  name_ipa: "/n̥ɑχ/",
        letter: "n", letter_rom: ["n"], letter_ipa: "/n/", letter_glyph: "\uE026", letter_discord: ":n_:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {
        "/n̥/": "word-initially, word-finally or before voicelss obstruent",
        "/n̪/": "before dentals",
        "/ŋ/": "before velars and uvulars"
        },
        sound: soundPath+"6-2.mp3"
    }),
    "yŋ": new Character({ // 39
        name: "yŋ",  name_ipa: "/əŋ/",
        letter: "ŋ", letter_rom: ["ng"], letter_ipa: "/ŋ/", letter_glyph: "\uE027", letter_discord: ":ng_:",
        text: mainText,
        prop: [IDS.CHARACTERS.C],
        allophones: {
        "/ŋ̥/": "before voiceless velars",
        "/ɴ̥/": "before uvulars"
        },
        sound: soundPath+"6-3.mp3"
    }),
    "á´": new Character({ // 40
        name: "á´",  name_ipa: "/ɑ̤ˤʔ/",
        letter: "á", letter_rom: ["A"], letter_ipa: "/ɑ̤ˤ/", letter_glyph: "\uE01c\uE028", letter_discord: ":a_::_pyr:",
        text: mainText + " " + pyricVowelText,
        prop: [IDS.CHARACTERS.V, IDS.CHARACTERS.P],
        table_prop: {"xoffset": 4},
        sound: soundPath+"6-5.mp3"
    }),
    "ó´": new Character({ // 41
        name: "ó´",  name_ipa: "/o̤ˤʔ/",
        letter: "ó", letter_rom: ["O"], letter_ipa: "/o̤ˤ/", letter_glyph: "\uE01d\uE028", letter_discord: ":o_::_pyr:",
        text: mainText + " " + pyricVowelText,
        prop: [IDS.CHARACTERS.V, IDS.CHARACTERS.P],
        table_prop: {"size": 0.9, "xoffset": -3},
        sound: soundPath+"7-0.mp3"
    }),
    // row 7
    "ú´": new Character({ // 42
        name: "ú´",  name_ipa: "/ṳˤʔ/",
        letter: "ú", letter_rom: ["U"], letter_ipa: "/ṳˤ/", letter_glyph: "\uE01e\uE028", letter_discord: ":u_::_pyr:",
        text: mainText + " " + pyricVowelText,
        prop: [IDS.CHARACTERS.V, IDS.CHARACTERS.P],
        table_prop: {"size": 1.1, "xoffset": 4},
        sound: soundPath+"7-1.mp3"
    }),
    "â´": new Character({ // 43
        name: "â´",  name_ipa: "/ɑ̤ˤːʔ/",
        letter: "â", letter_rom: ["AA"], letter_ipa: "/ɑ̤ˤː/", letter_glyph: "\uE021\uE028", letter_discord: ":aa::_pyr:",
        text: mainText + " " + pyricVowelText,
        prop: [IDS.CHARACTERS.V, IDS.CHARACTERS.P],
        table_prop: {"xoffset": 5},
        sound: soundPath+"7-2.mp3"
    }),
    "ô´": new Character({ // 44
        name: "ô´",  name_ipa: "/o̤ˤːʔ/",
        letter: "ô", letter_rom: ["OO"], letter_ipa: "/o̤ˤː/", letter_glyph: "\uE022\uE028", letter_discord: ":oo::_pyr:",
        text: mainText + " " + pyricVowelText,
        prop: [IDS.CHARACTERS.V, IDS.CHARACTERS.P],
        table_prop: {"size": 1.2, "xoffset": 4},
        sound: soundPath+"7-3.mp3"
    }),
    "û´": new Character({ // 45
        name: "û´",  name_ipa: "/ṳˤːʔ/",
        letter: "û", letter_rom: ["UU"], letter_ipa: "/ṳˤː/", letter_glyph: "\uE023\uE028", letter_discord: ":uu::_pyr:",
        text: mainText + " " + pyricVowelText,
        prop: [IDS.CHARACTERS.V, IDS.CHARACTERS.P],
        table_prop: {"size": 0.9, "xoffset": -4},
        sound: soundPath+"7-4.mp3"
    }),
    "q̇em": new Character({ // 46
        name: "q̇em",  name_ipa: "/ʡem/",
        letter: "", letter_rom: [""], letter_ipa: "", letter_glyph: "\uE029", letter_discord: ":Qem:",
        text: `pronounced {name_ipa}, unlike most of the other symbols, this one doesn"t have a direct translation to a romanized way of writing. \n
        In draconic the symbol has three different uses, it can be used as a rough equivelent of a hyphen, which means it can be optionally used to connect compounds or conjoin propositions to their nouns.\n
        It can also stand in for the number 0, or proceed a string of letters to indicate that they are numbers.\n
        In shorthand writing, it can also stand in for the word q̇e that means "none"`,
        prop: [IDS.CHARACTERS.D],
        table_prop: {"size": 0.6},
    }),
    "seleŋ": new Character({ // 47
        name: "seleŋ",  name_ipa: "/s̠el̪eŋ/",
        letter: "", letter_rom: [""], letter_ipa: "", letter_glyph: "\uE02a", letter_discord: ":seleng:",
        text: `pronounced {name_ipa}, unlike most of the other symbols, this one doesn"t have a direct translation to a romanized way of writing. \n
        It can however be used as a rough equivalent of a quotation mark or an asterisk. It can optionally be used to mark parentheticals, quotes, proper nouns, or even just for emphasis. \n
        Though it is seldom used in formal writing.`,
        prop: [IDS.CHARACTERS.D],
    }),
    //row 8
    "q̇ħóll": new Character({ // 48
        name: "q̇ħóll",  name_ipa: "/ʡho̤ˤɬ/",
        letter: "", letter_rom: [""], letter_ipa: "", letter_glyph: "\uE028", letter_discord: ":_pyr:",
        text: "{name} pronounced {name_ipa} is the symbol representing pyrification it does not do anything in and of its own. It however changes vowels to pyric vowels when placed after one. Pyric letters pronounced are by dragons breathing out fire, humans can use a ligher or stick to alternative sound (see allophones).",
        prop: [IDS.CHARACTERS.I],
        allophones: {
            "a pronounced /ɑ/": "á pronounced /ɑ̤ˤ/",
            "o pronounced /o/": "ó pronounced /o̤ˤ/",
            "u pronounced /u/": "ú pronounced /ṳˤ/",
            "ā pronounced /ɑː/": "â pronounced /ɑ̤ˤː/",
            "ō pronounced /oː/": "ô pronounced /o̤ˤː/",
            "ū pronounced /uː/": "û pronounced /ṳˁː/"
        },
        sound: soundPath+"6-4.mp3"
    }),
    " ": new Character({ // 49
        name: " ",  name_ipa: "",
        letter: " ", letter_rom: [" "], letter_ipa: "", letter_glyph: " ", letter_discord: "   ",
        text: "SPACEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
        prop: [IDS.CHARACTERS.I],
    })
    },
    get FLAT() { return Object.values(this.MAP); },

    random(vowels = true, consonants = true, pyric_vowels = true, pyric_consonants = true) {
        const pool = [];

        for (const e of CHARACTERS) {
            if (!e.name) continue;

            if (e.prop.includes(IDS.CHARACTERS.C) && consonants) pool.push(e);
            if (e.prop.includes(IDS.CHARACTERS.P) && pyric_consonants) pool.push(e);
            if (e.prop.includes(IDS.CHARACTERS.V) && vowels) pool.push(e);
            if (e.prop.includes(IDS.CHARACTERS.V) && pyric_vowels && e.prop.includes(IDS.CHARACTERS.P)) pool.push(e);
        }

        if (!pool.length) return null;
        return pool[Math.floor(Math.random() * pool.length)];
    },

    entriesFromField(text, fieldNames) {
        const result = [];
        let i = 0;
        let inParen = false;
        
        while (i < text.length) {
            if (text[i] === '(') { inParen = true; i++; continue; }
            if (text[i] === ')') { inParen = false; i++; continue; }
            
            let best = null, bestLen = 0;
            
            for (const e of CHARACTERS.FLAT) {
            for (const f of fieldNames) {
                const fv = e[f];
                const vals = Array.isArray(fv) ? fv : (fv ? [fv] : []);
                for (const v of vals) {
                if (v.length <= bestLen || text[i] !== v[0] || i + v.length > text.length) continue;
                let match = true;
                for (let c = 1; c < v.length; c++) {
                    if (text[i + c] !== v[c]) { match = false; break; }
                }
                if (match) { best = e; bestLen = v.length; }
                }
            }
            }
            
            if (best) {
            if (inParen) {
                const m = { ...best, prop: [...(best.prop || []), IDS.CHARACTERS.O] };
                result.push(m);
            } else {
                result.push(best);
            }
            i += bestLen;
            } else {
            i++;
            }
        }
        
        return result;
    },

    getEntryByField(text, field) {
        let match = null
        let matchLength = 0
        for (const e of CHARACTERS.FLAT) {
            const value = e[field]
            const values = Array.isArray(value) ? value : [value]
            for (const val of values) {
            if (!val) continue
            if (text.startsWith(val) && val.length > matchLength) {
                match = e
                matchLength = val.length
            }
            }
        }
        return match
    },

    textToEntriesByAnyText(text) { return entriesFromField(text, ["letter", "letter_rom", "letter_discord", "letter_glyph"]); },

    textToEntriesByText(text) { return CHARACTERS.entriesFromField(text, ["letter"]); },

    textToEntriesByRom(text) { return CHARACTERS.entriesFromField(text, ["letter_rom"]); },

    textToEntriesByDiscord(text) { return CHARACTERS.entriesFromField(text, ["letter_discord"]); },

    textToEntriesByGlyph(text) { return CHARACTERS.entriesFromField(text, ["letter_glyph"]); },

    entriesToText(entries, ignore_optional = false) {
        return entries.filter(e => !(ignore_optional && e.prop?.includes(IDS.CHARACTERS.O))).map(e => e.letter || "").join("");
    },

    entriesToRom(entries, ignore_optional = false) {
        return entries.filter(e => !(ignore_optional && e.prop?.includes(IDS.CHARACTERS.O))).map(e => e.letter_rom[0] || "").join("");
    },

    entriesToDiscord(entries, ignore_optional = false) {
        return entries.filter(e => !(ignore_optional && e.prop?.includes(IDS.CHARACTERS.O))).map(e => e.letter_discord || "").join("");
    },

    entriesToGlyphs(entries, ignore_optional = false) {
        return entries.filter(e => !(ignore_optional && e.prop?.includes(IDS.CHARACTERS.O))).map(e => e.letter_glyph || "").join("");
    },

    getPyricEquivalent(entry) {
        if (!entry || !entry.prop.includes(IDS.CHARACTERS.V)) return null;
        return CHARACTERS.FLAT.find(e =>
            e.prop.includes(IDS.CHARACTERS.V) &&
            e.prop.includes(IDS.CHARACTERS.P) &&
            e.letter_rom.some(l => l.toLowerCase() === entry.letter_rom[0].toLowerCase())
        ) || null;
    }
}

function description(entry){
  if(!entry.text) return;
  return entry.text
    .replaceAll('{name}', entry.name||'')
    .replaceAll('{name_ipa}', entry.name_ipa||'')
    .replaceAll('{letter_rom}', entry.letter_rom?.join('" or a "')||'')
    .replaceAll('{letter_ipa}', entry.letter_ipa||'')
    .replaceAll('{letter}', entry.letter||'');
}

Object.entries(CHARACTERS.MAP).forEach(([key, value]) => {
    value.description = description(value);
});


// ---------------------------- GENDERS ----------------------------

GENDERS = {
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

    get ALL_GENDERS() {
        return {
            NAME: "All",
            AFFECTED: [this.MAP.E, this.MAP.R, this.MAP.MON, this.MAP.I, this.MAP.MAG, this.MAP.MUN, this.MAP.A],
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
    },

    combineGenders(entry) {
        const defMap = {}
        for (const [gender, def] of Object.entries(entry)) {
            if (!defMap[def]) defMap[def] = []
            defMap[def].push(gender)
        }

        const result = {}
        for (const [def, genders] of Object.entries(defMap)) {
            const animCheck = GENDERS.ANIMATES.FLAT.NAME.every(g => genders.includes(g))
            const inanimCheck = GENDERS.INANIMATES.FLAT.NAME.every(g => genders.includes(g))
            const allCheck = [...GENDERS.ANIMATES.FLAT.NAME, ...GENDERS.INANIMATES.FLAT.NAME].every(g => genders.includes(g))

            if (allCheck) result[GENDERS.ALL_GENDERS.NAME] = def
            else if (animCheck) result[GENDERS.ANIMATES.NAME] = def
            else if (inanimCheck) result[GENDERS.INANIMATES.NAME] = def
            else result[genders.join(", ")] = def
        }
        return result
    }
};


// ---------------------------- AFFIXES ----------------------------

function getAllValues(obj) {
    return Object.values(obj).flatMap(val =>
        typeof val === 'object' && val !== null ? getAllValues(val) : val
    );
}

function generateSuffixMatches(suffixes, type) {
    const result = {};
    const isNoun = type === "n";

    const suffixPaths = {};

    if (isNoun) {
        for (const mood in suffixes) {
            for (const gender in suffixes[mood]) {
                for (const num in suffixes[mood][gender]) {
                    for (const decl in suffixes[mood][gender][num]) {
                        const suf = suffixes[mood][gender][num][decl];
                        if (!suf) continue;

                        if (!suffixPaths[suf]) {
                            suffixPaths[suf] = { mood, gender, numbers: new Set(), declensions: new Set() };
                        }
                        suffixPaths[suf].numbers.add(num);
                        suffixPaths[suf].declensions.add(Number(decl));
                    }
                }
            }
        }
    } else {
        for (const person in suffixes) {
            for (const num in suffixes[person]) {
                for (const gender in suffixes[person][num]) {
                    const suf = suffixes[person][num][gender];
                    if (!suf) continue;

                    if (!suffixPaths[suf]) {
                        suffixPaths[suf] = { person: Number(person), gender, numbers: new Set() };
                    }
                    suffixPaths[suf].numbers.add(num);
                }
            }
        }
    }

    for (const suf in suffixPaths) {
        const entries = CHARACTERS.textToEntriesByAnyText(suf);
        let variants;

        if (entries?.length) {
            const firstEntry = entries[0];
            if (firstEntry.prop?.includes(IDS.CHARACTERS.O)) {
                variants = [CHARACTERS.entriesToText(entries), CHARACTERS.entriesToText(entries, true)];
            } else if (firstEntry.prop?.includes(IDS.CHARACTERS.V)) {
                const pyric = CHARACTERS.getPyricEquivalent(firstEntry);
                variants = pyric != null
                    ? [suf, CHARACTERS.entriesToText([pyric, ...entries.slice(1)])]
                    : [suf];
            } else {
                variants = [suf];
            }
        } else {
            console.warn(`Could not parse suffix: ${suf}`);
            variants = [suf];
        }

        const path = suffixPaths[suf];
        const numbers = Array.from(path.numbers);

        result[suf] = isNoun
            ? [suf, variants, [path.mood, path.gender, numbers, Array.from(path.declensions).sort((a, b) => a - b)], "n"]
            : [suf, variants, [path.person, numbers, path.gender], "v"];
    }

    return result;
}

function generatePrefixMatches(prefixesMap) {
    const result = {};
    const prefixPaths = {};

    for (const person in prefixesMap) {
        for (const num in prefixesMap[person]) {
            for (const gender in prefixesMap[person][num]) {
                const prefix = prefixesMap[person][num][gender];
                if (!prefix) continue;

                if (!prefixPaths[prefix]) {
                    prefixPaths[prefix] = { person: Number(person), gender, numbers: new Set() };
                }
                prefixPaths[prefix].numbers.add(num);
            }
        }
    }

    for (const prefix in prefixPaths) {
        const entries = CHARACTERS.textToEntriesByAnyText(prefix);
        let variants;

        if (entries?.length) {
            const lastEntry = entries[entries.length - 1];
            variants = lastEntry.prop?.includes(IDS.CHARACTERS.V) ? [prefix + CHARACTERS.MAP["ax"].letter, prefix] : [prefix];
        } else {
            variants = [prefix];
        }

        const path = prefixPaths[prefix];
        result[prefix] = [prefix, variants, [path.person, Array.from(path.numbers), path.gender], "v"];
    }

    return result;
}

AFFIXES = {
    SUFFIXES: {
        NOUNS: {
            MAP: {
                [IDS.MOODS.D]: {
                    [GENDERS.MAP.E.NAME]: {
                        [IDS.NUMBERS.S]: { 1: "ēn", 2: "æn", 3: "ēn", 4: "ħán" },
                        [IDS.NUMBERS.D]: { 1: "(ē)χen", 2: "(y)χen", 3: "(o)χen", 4: "ħóχħon" },
                        [IDS.NUMBERS.P]: { 1: "illyn", 2: "ān", 3: "ē'yn", 4: "q̇yn" }
                    },
                    [GENDERS.MAP.R.NAME]: {
                        [IDS.NUMBERS.S]: { 1: "ēf", 2: "(a)xef", 3: "lef", 4: "lef" },
                        [IDS.NUMBERS.D]: { 1: "eχef", 2: "hyf", 3: "(o)χef", 4: "(o)χef" },
                        [IDS.NUMBERS.P]: { 1: "yf", 2: "hyf", 3: "'yf", 4: "'yf" }
                    },
                    [GENDERS.MAP.MON.NAME]: {
                        [IDS.NUMBERS.S]: { 1: "ô", 2: "ô", 3: "ô", 4: "ô" },
                        [IDS.NUMBERS.D]: { 1: "yħq̇ô", 2: "q̇ô", 3: "q̇ô", 4: "ûq̇ô" },
                        [IDS.NUMBERS.P]: { 1: "oħô", 2: "q̇ô", 3: "q̇ô", 4: "ûq̇ô" }
                    },
                    [GENDERS.MAP.I.NAME]: {
                        [IDS.NUMBERS.S]: { 1: "llūl", 2: "cūl", 3: "cūl", 4: "cūl" },
                        [IDS.NUMBERS.D]: { 1: "(æ)llūl", 2: "(')illūl", 3: "(')illūl", 4: "(')illūl" },
                        [IDS.NUMBERS.P]: { 1: "(æ)llūl", 2: "(')illūl", 3: "(')illūl", 4: "(')illūl" } // /\(/o.o\)/\ - Spooky the spider
                    },
                    [GENDERS.MAP.MAG.NAME]: {
                        [IDS.NUMBERS.S]: { 1: "(ō)χ", 2: "huχ", 3: "huχ", 4: "q̇ħúχ" },
                        [IDS.NUMBERS.D]: { 1: "uχ", 2: "'ūχ", 3: "'ūχ", 4: "(')ūχ" },
                        [IDS.NUMBERS.P]: { 1: "uχ", 2: "'ūχ", 3: "'ūχ", 4: "(')ūχ" }
                    },
                    [GENDERS.MAP.MUN.NAME]: {
                        [IDS.NUMBERS.S]: { 1: "(e)rk", 2: "tyk", 3: "tyk", 4: "(á)rk" },
                        [IDS.NUMBERS.D]: { 1: "ōrk", 2: "ōrk", 3: "ōrk", 4: "(')urk" },
                        [IDS.NUMBERS.P]: { 1: "ōrk", 2: "ōrk", 3: "ōrk", 4: "(')urk" }
                    },
                    [GENDERS.MAP.A.NAME]: {
                        [IDS.NUMBERS.S]: { 1: "(y)q̇", 2: "(o)q̇", 3: "(o)q̇", 4: "(ú)ħáq̇" },
                        [IDS.NUMBERS.D]: { 1: "āq̇", 2: "ōq̇", 3: "ōq̇", 4: "ūq̇" },
                        [IDS.NUMBERS.P]: { 1: "āq̇", 2: "ōq̇", 3: "ōq̇", 4: "ūq̇" }
                    }
                },
                [IDS.MOODS.R]: {
                    [GENDERS.MAP.E.NAME]: {
                        [IDS.NUMBERS.S]: { 1: "oħân", 2: "ħân", 3: "ēqân", 4: "qân" },
                        [IDS.NUMBERS.D]: { 1: "ħân", 2: "(ō)n", 3: "on", 4: "ħûn" },
                        [IDS.NUMBERS.P]: { 1: "illyrn", 2: "(ō)rn", 3: "ē'yrn", 4: "q̇yrn" }
                    },
                    [GENDERS.MAP.R.NAME]: {
                        [IDS.NUMBERS.S]: { 1: "oħâf", 2: "ħâf", 3: "(o)qâf", 4: "(o)qâf" },
                        [IDS.NUMBERS.D]: { 1: "īllyf", 2: "(')ūllef", 3: "yf", 4: "yf" },
                        [IDS.NUMBERS.P]: { 1: "īllyf", 2: "(')ūllef", 3: "ūlef", 4: "'ūlef" }
                    },
                    [GENDERS.MAP.MON.NAME]: {
                        [IDS.NUMBERS.S]: { 1: "oħô", 2: "qâħó", 3: "qâħó", 4: "ô" },
                        [IDS.NUMBERS.D]: { 1: "ūħó", 2: "q̇ô", 3: "q̇ô", 4: "ûq̇ô" },
                        [IDS.NUMBERS.P]: { 1: "ōq̇ô", 2: "q̇ô", 3: "q̇ô", 4: "ûq̇ô" }
                    },
                    [GENDERS.MAP.I.NAME]: {
                        [IDS.NUMBERS.S]: { 1: "llūl", 2: "qâllūl", 3: "qâllūl", 4: "qâllūl" },
                        [IDS.NUMBERS.D]: { 1: "(y)ll'ūl", 2: "(')llūl", 3: "(')llūl", 4: "(')llūl" },
                        [IDS.NUMBERS.P]: { 1: "(y)ll'ūl", 2: "(')ūcūl", 3: "(')ūcūl", 4: "(')ūcūl" }
                    },
                    [GENDERS.MAP.MAG.NAME]: {
                        [IDS.NUMBERS.S]: { 1: "(ō)ħúχħ", 2: "(y)q̇ħôχ", 3: "(y)q̇ħôχ", 4: "q̇ħôχ" },
                        [IDS.NUMBERS.D]: { 1: "(a)lluχ", 2: "(y)lūrχ", 3: "(y)lūrχ", 4: "(')ūrχ" },
                        [IDS.NUMBERS.P]: { 1: "(a)lluχ", 2: "(y)lūrχ", 3: "(y)lūrχ", 4: "(')ūrχ" }
                    },
                    [GENDERS.MAP.MUN.NAME]: {
                        [IDS.NUMBERS.S]: { 1: "(o)ħárk", 2: "ħárk", 3: "ħárk", 4: "q̇ħárk" },
                        [IDS.NUMBERS.D]: { 1: "ōrk", 2: "ōrk", 3: "ōrk", 4: "(')urk" },
                        [IDS.NUMBERS.P]: { 1: "ōrk", 2: "ōrk", 3: "ōrk", 4: "(')urk" }
                    },  // /\(/o.o\)/\ - Spooky the spider
                    [GENDERS.MAP.A.NAME]: {
                        [IDS.NUMBERS.S]: { 1: "aħôq̇", 2: "(y)q̇ħôq̇", 3: "(y)q̇ħôq̇", 4: "áq̇ħôq̇" },
                        [IDS.NUMBERS.D]: { 1: "āq̇", 2: "ōq̇", 3: "ōq̇", 4: "ūq̇" },
                        [IDS.NUMBERS.P]: { 1: "āq̇", 2: "ōq̇", 3: "ōq̇", 4: "ūq̇" }
                    }
                }
            },
            get FLAT() { return getAllValues(AFFIXES.SUFFIXES.NOUNS.MAP); },
            get MATCHES() { return generateSuffixMatches(AFFIXES.SUFFIXES.NOUNS.MAP, "n"); }
        },
        VERBS: {
            MAP: {
                1: {
                    [IDS.NUMBERS.S]: { [GENDERS.MAP.E.NAME]: "(o)n", [GENDERS.MAP.R.NAME]: "(y)f", [GENDERS.MAP.MON.NAME]: "(u)ħó", [GENDERS.MAP.I.NAME]: "llul", [GENDERS.MAP.MAG.NAME]: "(u)χ", [GENDERS.MAP.MUN.NAME]: "(u)r", [GENDERS.MAP.A.NAME]: "(y)q̇" },
                    [IDS.NUMBERS.D]: { [GENDERS.MAP.E.NAME]: "(')æ­n", [GENDERS.MAP.R.NAME]: "(')æf", [GENDERS.MAP.MON.NAME]: "(')ô", [GENDERS.MAP.I.NAME]: "(')allūl", [GENDERS.MAP.MAG.NAME]: "(')ōχ", [GENDERS.MAP.MUN.NAME]: "(')ar", [GENDERS.MAP.A.NAME]: "(y)q̇" },
                    [IDS.NUMBERS.P]: { [GENDERS.MAP.E.NAME]: "(')æ­n", [GENDERS.MAP.R.NAME]: "(')æf", [GENDERS.MAP.MON.NAME]: "(')ô", [GENDERS.MAP.I.NAME]: "(')allūl", [GENDERS.MAP.MAG.NAME]: "(')ōχ", [GENDERS.MAP.MUN.NAME]: "(')ar", [GENDERS.MAP.A.NAME]: "(y)q̇" }
                },
                2: {
                    [IDS.NUMBERS.S]: { [GENDERS.MAP.E.NAME]: "(u)n", [GENDERS.MAP.R.NAME]: "(u)f", [GENDERS.MAP.MON.NAME]: "(u)ħó", [GENDERS.MAP.I.NAME]: "llul", [GENDERS.MAP.MAG.NAME]: "(u)χ", [GENDERS.MAP.MUN.NAME]: "(u)r", [GENDERS.MAP.A.NAME]: "(u)q̇" },
                    [IDS.NUMBERS.D]: { [GENDERS.MAP.E.NAME]: "(o)nēn", [GENDERS.MAP.R.NAME]: "nef", [GENDERS.MAP.MON.NAME]: "(á)ħó", [GENDERS.MAP.I.NAME]: "(á)llul", [GENDERS.MAP.MAG.NAME]: "(ó)nōχ", [GENDERS.MAP.MUN.NAME]: "(á)r", [GENDERS.MAP.A.NAME]: "ħóq̇" },
                    [IDS.NUMBERS.P]: { [GENDERS.MAP.E.NAME]: "ħen", [GENDERS.MAP.R.NAME]: "ħáf", [GENDERS.MAP.MON.NAME]: "(á)ħó", [GENDERS.MAP.I.NAME]: "(á)llul", [GENDERS.MAP.MAG.NAME]: "(ó)nōχ", [GENDERS.MAP.MUN.NAME]: "(á)r", [GENDERS.MAP.A.NAME]: "ħóq̇" }
                },
                3: {
                    [IDS.NUMBERS.S]: { [GENDERS.MAP.E.NAME]: "tón", [GENDERS.MAP.R.NAME]: "ħyf", [GENDERS.MAP.MON.NAME]: "(o)ħó", [GENDERS.MAP.I.NAME]: "llul", [GENDERS.MAP.MAG.NAME]: "ħuχ", [GENDERS.MAP.MUN.NAME]: "(u)r", [GENDERS.MAP.A.NAME]: "(ú)q̇" },
                    [IDS.NUMBERS.D]: { [GENDERS.MAP.E.NAME]: "(q̇)ân", [GENDERS.MAP.R.NAME]: "(y)q̇ħáf", [GENDERS.MAP.MON.NAME]: "ħó", [GENDERS.MAP.I.NAME]: "(ú)cul", [GENDERS.MAP.MAG.NAME]: "ħúχ", [GENDERS.MAP.MUN.NAME]: "(ú)r", [GENDERS.MAP.A.NAME]: "(u)q̇" },
                    [IDS.NUMBERS.P]: { [GENDERS.MAP.E.NAME]: "tun", [GENDERS.MAP.R.NAME]: "if", [GENDERS.MAP.MON.NAME]: "ħó", [GENDERS.MAP.I.NAME]: "(ú)cul", [GENDERS.MAP.MAG.NAME]: "ħúχ", [GENDERS.MAP.MUN.NAME]: "(ú)r", [GENDERS.MAP.A.NAME]: "(u)q̇" }
                }
            },
            get FLAT() { return getAllValues(AFFIXES.SUFFIXES.VERBS.MAP); },
            get MATCHES() { return generateSuffixMatches(AFFIXES.SUFFIXES.VERBS.MAP, "v"); }
        },
        ADJECTIVES: {
            get MAP() { return AFFIXES.SUFFIXES.NOUNS.MAP; },
            get FLAT() { return AFFIXES.SUFFIXES.NOUNS.FLAT; },
            get MATCHES() { return AFFIXES.SUFFIXES.NOUNS.MATHES; }
        },
        DETERMINERS: {
            MAP: {
                [GENDERS.MAP.E.NAME]: "hyn",
                [GENDERS.MAP.R.NAME]: "hyf",
                [GENDERS.MAP.MON.NAME]: "ħó",
                [GENDERS.MAP.I.NAME]: "llīl",
                [GENDERS.MAP.MAG.NAME]: "huχ",
                [GENDERS.MAP.MUN.NAME]: "thok",
                [GENDERS.MAP.A.NAME]: "hoq̇"
            },
            get FLAT() { return getAllValues(AFFIXES.SUFFIXES.DETERMINERS.MAP); },
            get MATCHES() { return Object.entries(AFFIXES.SUFFIXES.DETERMINERS.MAP)
                           .reduce((acc, [gender, affix]) => { acc[affix] = gender; return acc;}, {}); }
                    // TODO: edit this thingi
        },

        match(input, map, returnAll = false) {
            return AFFIXES.match(input, map, false, returnAll)
        },

        connect(text, suffix) {
            return AFFIXES.connect("", text, suffix)
        }
    },
    PREFIXES: {
        VERBS: {
            MAP: {
                1: {
                    [IDS.NUMBERS.S]: { [GENDERS.MAP.E.NAME]: "xen", [GENDERS.MAP.R.NAME]: "xef", [GENDERS.MAP.MON.NAME]: "χħô", [GENDERS.MAP.I.NAME]: "xellu", [GENDERS.MAP.MAG.NAME]: "xo", [GENDERS.MAP.MUN.NAME]: "xyr", [GENDERS.MAP.A.NAME]: "xy" },
                    [IDS.NUMBERS.D]: { [GENDERS.MAP.E.NAME]: "xyn", [GENDERS.MAP.R.NAME]: "xyf", [GENDERS.MAP.MON.NAME]: "xóħ", [GENDERS.MAP.I.NAME]: "llu", [GENDERS.MAP.MAG.NAME]: "ho", [GENDERS.MAP.MUN.NAME]: "ry", [GENDERS.MAP.A.NAME]: "hy" },
                    [IDS.NUMBERS.P]: { [GENDERS.MAP.E.NAME]: "hen", [GENDERS.MAP.R.NAME]: "hef", [GENDERS.MAP.MON.NAME]: "hô", [GENDERS.MAP.I.NAME]: "llu", [GENDERS.MAP.MAG.NAME]: "ho", [GENDERS.MAP.MUN.NAME]: "ry", [GENDERS.MAP.A.NAME]: "hy" }
                },
                2: {
                    [IDS.NUMBERS.S]: { [GENDERS.MAP.E.NAME]: "syn", [GENDERS.MAP.R.NAME]: "sy", [GENDERS.MAP.MON.NAME]: "sô", [GENDERS.MAP.I.NAME]: "sucu", [GENDERS.MAP.MAG.NAME]: "su", [GENDERS.MAP.MUN.NAME]: "syr", [GENDERS.MAP.A.NAME]: "su" },
                    [IDS.NUMBERS.D]: { [GENDERS.MAP.E.NAME]: "són", [GENDERS.MAP.R.NAME]: "sónlli", [GENDERS.MAP.MON.NAME]: "sónq̇ħó", [GENDERS.MAP.I.NAME]: "sóncu", [GENDERS.MAP.MAG.NAME]: "thâ", [GENDERS.MAP.MUN.NAME]: "thár", [GENDERS.MAP.A.NAME]: "thá" },
                    [IDS.NUMBERS.P]: { [GENDERS.MAP.E.NAME]: "tháħ", [GENDERS.MAP.R.NAME]: "tháll", [GENDERS.MAP.MON.NAME]: "tháq̇ħó", [GENDERS.MAP.I.NAME]: "thácu", [GENDERS.MAP.MAG.NAME]: "thâ", [GENDERS.MAP.MUN.NAME]: "thár", [GENDERS.MAP.A.NAME]: "thá" }
                },
                3: {
                    [IDS.NUMBERS.S]: { [GENDERS.MAP.E.NAME]: "ten", [GENDERS.MAP.R.NAME]: "tolli", [GENDERS.MAP.MON.NAME]: "tô", [GENDERS.MAP.I.NAME]: "tócu", [GENDERS.MAP.MAG.NAME]: "toħ", [GENDERS.MAP.MUN.NAME]: "try", [GENDERS.MAP.A.NAME]: "to" },
                    [IDS.NUMBERS.D]: { [GENDERS.MAP.E.NAME]: "q̇yn", [GENDERS.MAP.R.NAME]: "q̇yll", [GENDERS.MAP.MON.NAME]: "q̇ħó", [GENDERS.MAP.I.NAME]: "q̇ácu", [GENDERS.MAP.MAG.NAME]: "tū", [GENDERS.MAP.MUN.NAME]: "tur", [GENDERS.MAP.A.NAME]: "tu" },
                    [IDS.NUMBERS.P]: { [GENDERS.MAP.E.NAME]: "tyn", [GENDERS.MAP.R.NAME]: "tyf", [GENDERS.MAP.MON.NAME]: "tuħ", [GENDERS.MAP.I.NAME]: "tīll", [GENDERS.MAP.MAG.NAME]: "tū", [GENDERS.MAP.MUN.NAME]: "tur", [GENDERS.MAP.A.NAME]: "tu" }
                }
            },
            get FLAT() { return getAllValues(AFFIXES.PREFIXES.VERBS.MAP); },
            get MATCHES() { generatePrefixMatches(AFFIXES.PREFIXES.VERBS.MAP); }
        },

        match(input, map, returnAll = false) {
            return AFFIXES.match(input, map, true, returnAll)
        },

        connect(text, prefix) {
            return AFFIXES.connect(prefix, text, "")
        }
    },

    match(input, map, isPrefix = false, returnAll = false) {
        if (!input || typeof input !== "string") return null;

        const matches = [];
        let best = null;
        let bestLen = 0;

        for (const [key, val] of Object.entries(map)) {
            const variants = Array.isArray(val[1]) ? val[1] : [key];
            for (const v of variants) {
                if (typeof v !== "string") continue;
                const match = isPrefix ? input.startsWith(v) : input.endsWith(v);
                if (!match) continue;

                if (returnAll) matches.push(val);
                else if (v.length > bestLen) {
                    best = val;
                    bestLen = v.length;
                }
            }
        }

        if (returnAll) return matches.length ? matches : null;
        return best;
    },

    connectSplit(prefix = "", text = "", suffix = "") {
        let text_entries = CHARACTERS.textToEntriesByAnyText(text);
        let prefix_entries = CHARACTERS.textToEntriesByAnyText(prefix);
        let suffix_entries = CHARACTERS.textToEntriesByAnyText(suffix);

        if (!text_entries) return [];

        if (prefix_entries) {
            const first_text = text_entries[0];
            const last_prefix = prefix_entries[prefix_entries.length - 1];
            if (last_prefix && last_prefix.prop.includes(IDS.CHARACTERS.V) && first_text.prop.includes(IDS.CHARACTERS.V)) {
                prefix_entries.push(CHARACTERS.MAP["ax"])
            }

        }

        if (suffix_entries) {
            const last_text = text_entries[text_entries.length - 1];
            let first_suffix = suffix_entries[0];

            if (first_suffix) {
                if (first_suffix.prop.includes(IDS.CHARACTERS.V)) {
                    if (first_suffix.prop.includes(IDS.CHARACTERS.O)) {
                        if (last_text && last_text.prop.includes(IDS.CHARACTERS.V)) {
                            suffix_entries.shift();
                        }
                    } else if (last_text && last_text.prop.includes(IDS.CHARACTERS.V)) {
                        if (last_text.prop.includes(IDS.CHARACTERS.P)) {
                            const pyric = CHARACTERS.getPyricEquivalent(first_suffix);
                            if (pyric) first_suffix = pyric;
                            suffix_entries[0] = first_suffix;
                        }
                        text_entries.pop();
                    }
                } else if (first_suffix.prop.includes(IDS.CHARACTERS.C) && first_suffix.prop.includes(IDS.CHARACTERS.O)) {
                    if (!last_text || !last_text.prop.includes(IDS.CHARACTERS.V)) {
                        suffix_entries.shift();
                    }
                }
            }
        }

        return [prefix_entries, text_entries, suffix_entries];
    },

    connect(prefix = "", text = "", suffix = "") {
        const entries = AFFIXES.connectSplit(prefix, text, suffix);
        return entries.flat();
    }
}


// ---------------------------- DICTIONARY ----------------------------

function basicSearch(keyword, wordmap) {
  const lower = keyword.toLowerCase()
  return wordmap.filter(w => w.word && w.word.toLowerCase().includes(lower))
}

function basicSearchByDefinition(definition, wordmap) {
  return (Array.isArray(wordmap) ? wordmap : Object.values(wordmap))
    .filter(w => w.definition && JSON.stringify(w.definition).toLowerCase().includes(definition.toLowerCase()))
}

function basicSearchByGender(definition, wordmap) {
  return (Array.isArray(wordmap) ? wordmap : Object.values(wordmap))
    .filter(w => w.genders && JSON.stringify(w.genders).toLowerCase().includes(definition.toLowerCase()))
}

function mergedSearchByDefinition(definition, wordmap) {
  return (Array.isArray(wordmap) ? wordmap : Object.values(wordmap))
    .filter(w => 
      (w.definition && JSON.stringify(w.definition).toLowerCase().includes(definition.toLowerCase())) ||
      (w.genders && JSON.stringify(w.genders).toLowerCase().includes(definition.toLowerCase()))
    );
}

DICTIONARY = {
    NOUNS: {
        MAP: {},
        get FLAT() {
            return Object.values(this.MAP).flatMap(v => typeof v === 'object' && !v.word ? Object.values(v) : [v])
        },
        SUFFIXES: AFFIXES.SUFFIXES.NOUNS,
        fetch(keyword) { return basicSearch(keyword, DICTIONARY.NOUNS.FLAT); },
        fetchByDefinition(def) { return basicSearchByGender(def, DICTIONARY.NOUNS.FLAT); }
    },

    VERBS: {
        MAP: {},
        get FLAT() {
            return Object.values(this.MAP).flatMap(v => typeof v === 'object' && !v.word ? Object.values(v) : [v])
        },
        SUFFIXES: AFFIXES.SUFFIXES.VERBS,
        PREFIXES: AFFIXES.PREFIXES.VERBS,
        fetch(keyword) { return basicSearch(keyword, DICTIONARY.VERBS.FLAT); },
        fetchByDefinition(def) { return basicSearchByGender(def, DICTIONARY.VERBS.FLAT); }
    },

    ADJECTIVES: {
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
        fetch(keyword) { return basicSearch(keyword, DICTIONARY.ADJECTIVES.FLAT); },
        fetchByDefinition(def) { return basicSearchByGender(def, DICTIONARY.ADJECTIVES.FLAT); }
    },
    
    ADVERBS: {
        MAP: {},
        get FLAT() {
            return Object.values(this.MAP);
        },
        fetch(keyword) { return basicSearch(keyword, DICTIONARY.ADVERBS.FLAT); },
        fetchByDefinition(def) { return basicSearchByGender(def, DICTIONARY.ADVERBS.FLAT); }
    },
    
    AUXILIARIES: {
        MAP: {},
        get FLAT() {
            return Object.values(this.MAP);
        },
        fetch(keyword) { return basicSearch(keyword, DICTIONARY.AUXILIARIES.FLAT); },
        fetchByDefinition(def) { return basicSearchByGender(def, DICTIONARY.AUX.FLAT); }
    },
    
    PREPOSITIONS: {
        MAP: {},
        get FLAT() {
            return Object.values(this.MAP);
        },
        fetch(keyword) { return basicSearch(keyword, DICTIONARY.PREPOSITIONS.FLAT); },
        fetchByDefinition(def) { return basicSearchByGender(def, DICTIONARY.PREPOSITIONS.FLAT); }
    },
    
    PARTICLES: {
        MAP: {},
        get FLAT() {
            return Object.values(this.MAP);
        },
        fetch(keyword) { return basicSearch(keyword, DICTIONARY.PARTICLES.FLAT); },
        fetchByDefinition(def) { return basicSearchByGender(def, DICTIONARY.PARTICLES.FLAT); }
    },
    
    DETERMINERS: {
        REGULARS: {
            MAP: {},
            get FLAT() {
                return Object.values(this.MAP);
            },
        },
        SUFFIXES: AFFIXES.SUFFIXES.DETERMINERS.MAP,
        IRREGULARS: AFFIXES.SUFFIXES.DETERMINERS.IRREGULARS,
        fetch(keyword) { return basicSearch(keyword, DICTIONARY.DETERMINERS.FLAT); },
        fetchByDefinition(def) { return basicSearchByGender(def, DICTIONARY.DETERMINERS.FLAT); }
    },

    CONJUNCTIONS: {
        MAP: {},
        get FLAT() {
            return Object.values(this.MAP);
        },
        fetch(keyword) { return basicSearch(keyword, DICTIONARY.CONJUNCTIONS.FLAT); },
        fetchByDefinition(def) { return basicSearchByGender(def, DICTIONARY.CONJUNCTIONS.FLAT); }
    },

    ALL_WORDS: {
        MAP: {},
        get FLAT() {
            return Object.values(this.MAP);
        },
        fetch(keyword) { return basicSearch(keyword, DICTIONARY.ALL_WORDS.FLAT); },
        fetchByDefinition(def) { return mergedSearchByDefinition(def, DICTIONARY.ALL_WORDS.FLAT); }
    }
}


// ---------------------------- NUMBRES ----------------------------

NUMBERS = {
    DIGITS: ["q̇em","χu","eχ","fo","se","aq","qah","hog","xēχ","χyz","ez","fyz","selz","agz","qaz","hyz"],
    DIGITS_SUFFIXES: ["","u","eχ","o","ys","aq","ga","yg"],
    DIGITS_MULTIPLES: {16:"sē",24:"fōrz",32:"sēlz",40:"qāz",48:"qōz",56:"hōz",64:"lān"},
    DIGITS_POWERS: {512: "lāran", 4_096: "xeglārn", 32_768: "táħû", 262_144: "torħû"},

    numberToText(n) {
        if (n === 0) return NUMBERS.DIGITS[0];
        
        let parts = [];
        let remaining = n;
        
        const powers = [262_144, 32_768, 4_096, 512];
        for (let power of powers) {
            if (remaining >= power) {
                let count = Math.floor(remaining / power);
                remaining = remaining % power;
                
                if (count === 1) {
                    parts.push(NUMBERS.DIGITS_POWERS[power]);
                } else {
                    let countStr = NUMBERS.numberToText(count);
                    parts.push(countStr + " " + NUMBERS.DIGITS_POWERS[power]);
                }
            }
        }

        const multiples = [64, 56, 48, 40, 32, 24, 16]; //edit 
    
        for (let mult of multiples) {
            if (remaining >= mult) {
                let count = Math.floor(remaining / mult);
                remaining = remaining % mult;
                
                if (count === 1) {
                    parts.push(NUMBERS.DIGITS_MULTIPLES[mult]);
                } else {
                    let countStr = NUMBERS.numberToText(count);
                    parts.push(countStr + " " + NUMBERS.DIGITS_MULTIPLES[mult]);
                }
            }
        }
        
        if (remaining > 0 && remaining <= 15) {
            if (parts.length > 0 && remaining <= 7) {
                parts[parts.length - 1] += NUMBERS.DIGITS_SUFFIXES[remaining];
            } else {
                parts[parts.length - 1] += NUMBERS.DIGITS_SUFFIXES[remaining];
                parts.push(NUMBERS.DIGITS[remaining]);
            }
        }
        
        return parts.join(" si ");
    },

    textToNumber(text) {
        return "NOOO DONT MAKE ME DO THIS";
    }
}


// ---------------------------- MISC ----------------------------
// TODO edit idk

PRONOUNS = {
    MAP: {
        [GENDERS.MAP.E.NAME]: {
            [IDS.NUMBERS.S]: { 1: { [IDS.CASE.S]: "xēn", [IDS.CASE.O]: "xon" }, 2: { [IDS.CASE.S]: "syn", [IDS.CASE.O]: "sun" }, 3: { [IDS.CASE.S]: "tēn", [IDS.CASE.O]: "tôn" } },
            [IDS.NUMBERS.D]: { 1: { [IDS.CASE.S]: "xefyn", [IDS.CASE.O]: "xō'æ­n" }, 2: { [IDS.CASE.S]: "sônen", [IDS.CASE.O]: "sônēn" }, 3: { [IDS.CASE.S]: "toq̇án", [IDS.CASE.O]: "toq̇ân" } },
            [IDS.NUMBERS.P]: { 1: { [IDS.CASE.S]: "hēn", [IDS.CASE.O]: "he'æ­n" }, 2: { [IDS.CASE.S]: "tháħán", [IDS.CASE.O]: "thâħen" }, 3: { [IDS.CASE.S]: "tun", [IDS.CASE.O]: "tūn" } }
        },
        [GENDERS.MAP.R.NAME]: {
            [IDS.NUMBERS.S]: { 1: { [IDS.CASE.S]: "xēf", [IDS.CASE.O]: "xyf" }, 2: { [IDS.CASE.S]: "syf", [IDS.CASE.O]: "suf" }, 3: { [IDS.CASE.S]: "toq̇llif", [IDS.CASE.O]: "tôħyf" } },
            [IDS.NUMBERS.D]: { 1: { [IDS.CASE.S]: "xef", [IDS.CASE.O]: "xō'æf" }, 2: { [IDS.CASE.S]: "sônllif", [IDS.CASE.O]: "sônēf" }, 3: { [IDS.CASE.S]: "toq̇âf", [IDS.CASE.O]: "toq̇ħáf" } },
            [IDS.NUMBERS.P]: { 1: { [IDS.CASE.S]: "hēf", [IDS.CASE.O]: "he'æf" }, 2: { [IDS.CASE.S]: "thâllif", [IDS.CASE.O]: "tháħáf" }, 3: { [IDS.CASE.S]: "tyf", [IDS.CASE.O]: "tūq̇llif" } }
        },
        [GENDERS.MAP.MON.NAME]: {
            [IDS.NUMBERS.S]: { 1: { [IDS.CASE.S]: "χħô", [IDS.CASE.O]: "xūħó" }, 2: { [IDS.CASE.S]: "sô", [IDS.CASE.O]: "sūħó" }, 3: { [IDS.CASE.S]: "tô", [IDS.CASE.O]: "tōħó" } },
            [IDS.NUMBERS.D]: { 1: { [IDS.CASE.S]: "χħôfó", [IDS.CASE.O]: "xo'ô" }, 2: { [IDS.CASE.S]: "sónq̇ħô", [IDS.CASE.O]: "sônô" }, 3: { [IDS.CASE.S]: "tyq̇âq̇ħó", [IDS.CASE.O]: "tyq̇âħó" } },
            [IDS.NUMBERS.P]: { 1: { [IDS.CASE.S]: "hô", [IDS.CASE.O]: "he'ô" }, 2: { [IDS.CASE.S]: "thâq̇ħô", [IDS.CASE.O]: "thâħó" }, 3: { [IDS.CASE.S]: "tūħó", [IDS.CASE.O]: "tūħó" } }
        },
        [GENDERS.MAP.I.NAME]: {
            [IDS.NUMBERS.S]: { 1: { [IDS.CASE.S]: "xellūl", [IDS.CASE.O]: "xullūl" }, 2: { [IDS.CASE.S]: "sucūl", [IDS.CASE.O]: "sillūl" }, 3: { [IDS.CASE.S]: "tócūl", [IDS.CASE.O]: "tôllūl" } },
            [IDS.NUMBERS.D]: { 1: { [IDS.CASE.S]: "hyllūl", [IDS.CASE.O]: "hellūl	" }, 2: { [IDS.CASE.S]: "sóncūl", [IDS.CASE.O]: "sónllūl" }, 3: { [IDS.CASE.S]: "tyq̇ácūl", [IDS.CASE.O]: "tyq̇állūl" } },
            [IDS.NUMBERS.P]: { 1: { [IDS.CASE.S]: "hyllūl", [IDS.CASE.O]: "hellūl	" }, 2: { [IDS.CASE.S]: "thâcūl", [IDS.CASE.O]: "thâllūl" }, 3: { [IDS.CASE.S]: "tīllūl", [IDS.CASE.O]: "tûcūl" } }
        },
        [GENDERS.MAP.MAG.NAME]: {
            [IDS.NUMBERS.S]: { 1: { [IDS.CASE.S]: "xōχ", [IDS.CASE.O]: "xūχ" }, 2: { [IDS.CASE.S]: "sōχ", [IDS.CASE.O]: "sūχ" }, 3: { [IDS.CASE.S]: "toħúχ", [IDS.CASE.O]: "tōħúχ" } },
            [IDS.NUMBERS.P]: { 1: { [IDS.CASE.S]: "hōχ", [IDS.CASE.O]: "hūχ" }, 2: { [IDS.CASE.S]: "thâhuχ	", [IDS.CASE.O]: "fônōχ" }, 3: { [IDS.CASE.S]: "tūχ", [IDS.CASE.O]: "tūħúχ" } }
        },
        [GENDERS.MAP.MUN.NAME]: {
            [IDS.NUMBERS.S]: { 1: { [IDS.CASE.S]: "xerk", [IDS.CASE.O]: "χūrk" }, 2: { [IDS.CASE.S]: "surk", [IDS.CASE.O]: "thârk" }, 3: { [IDS.CASE.S]: "tork", [IDS.CASE.O]: "târk" } },
            [IDS.NUMBERS.P]: { 1: { [IDS.CASE.S]: "herk", [IDS.CASE.O]: "hārk" }, 2: { [IDS.CASE.S]: "surk", [IDS.CASE.O]: "thârk" }, 3: { [IDS.CASE.S]: "tūrk", [IDS.CASE.O]: "tūrk" } }
        },
        [GENDERS.MAP.A.NAME]: {
            [IDS.NUMBERS.S]: { 1: { [IDS.CASE.S]: "xyq̇", [IDS.CASE.O]: "xyq̇" }, 2: { [IDS.CASE.S]: "sūq̇", [IDS.CASE.O]: "sūq̇" }, 3: { [IDS.CASE.S]: "tōq̇", [IDS.CASE.O]: "tōħûq̇" } },
            [IDS.NUMBERS.P]: { 1: { [IDS.CASE.S]: "hyq̇", [IDS.CASE.O]: "hyq̇" }, 2: { [IDS.CASE.S]: "thâq̇", [IDS.CASE.O]: "thâq̇" }, 3: { [IDS.CASE.S]: "tūq̇", [IDS.CASE.O]: "tūq̇" } }
        }
    },
    get FLAT() {
        return Object.values(this.MAP);
    },
}


WORDCLASSES = {
    N: { NAME: "Noun", SHORT: "n" },
    V: { NAME: "Verb", SHORT: "v" },
    ADJ: { NAME: "Adjective", SHORT: "adj" },
    ADV: { NAME: "Adverb", SHORT: "adv" },
    AUX: { NAME: "Auxilary", SHORT: "aux" },
    PP: { NAME: "Preposition", SHORT: "pp" },
    PART: { NAME: "Particle", SHORT: "part" },
    PN: { NAME: "Pronoun", SHORT: "pn" }, // r u sure we need it in here?
    DET: { NAME: "Determiner", SHORT: "det" },
    CON: { NAME: "Conjunction", SHORT: "con" },
}


CORRELATIVES = {
    MAP: {
        [GENDERS.ANIMATES.NAME]: {
            [IDS.COR_TYPES.INT]: { [IDS.CASE.S]: "hā", [IDS.CASE.O]: "halláħ" },
            [IDS.COR_TYPES.R]: { [IDS.CASE.S]: "sē", [IDS.CASE.O]: "sēlláħ" },
            [IDS.COR_TYPES.COR]: { [IDS.CASE.S]: "thare", [IDS.CASE.O]: "tharlláħ" },
        },
        [GENDERS.INANIMATES.NAME]: {
            [IDS.COR_TYPES.INT]: { [IDS.CASE.S]: "hox", [IDS.CASE.O]: "hóqħ" },
            [IDS.COR_TYPES.R]: { [IDS.CASE.S]: "six", [IDS.CASE.O]: "sôqħ" },
            [IDS.COR_TYPES.COR]: { [IDS.CASE.S]: "tharx", [IDS.CASE.O]: "tharáqħ" },
        },
        [GENDERS.MAP.E.NAME]: {
            [IDS.COR_TYPES.INT]: { [IDS.CASE.S]: "hālen", [IDS.CASE.O]: "hallħân" },
            [IDS.COR_TYPES.R]: { [IDS.CASE.S]: "sēlen", [IDS.CASE.O]: "sēllħân" },
            [IDS.COR_TYPES.COR]: { [IDS.CASE.S]: "tharlen", [IDS.CASE.O]: "tharħân" },
            [IDS.COR_TYPES.PDEM]: { [IDS.CASE.S]: "sēn", [IDS.CASE.O]: "sōhyn" },
            [IDS.COR_TYPES.DDEM]: { [IDS.CASE.S]: "lēn", [IDS.CASE.O]: "li'ōn" },
        },
        [GENDERS.MAP.R.NAME]: {
            [IDS.COR_TYPES.INT]: { [IDS.CASE.S]: "hāllef", [IDS.CASE.O]: "hallħâf" },
            [IDS.COR_TYPES.R]: { [IDS.CASE.S]: "sēllef", [IDS.CASE.O]: "sēllħâf" },
            [IDS.COR_TYPES.COR]: { [IDS.CASE.S]: "tharllef", [IDS.CASE.O]: "tharħâf" },
            [IDS.COR_TYPES.PDEM]: { [IDS.CASE.S]: "sēf", [IDS.CASE.O]: "sōhyf" },
            [IDS.COR_TYPES.DDEM]: { [IDS.CASE.S]: "lēf", [IDS.CASE.O]: "li'ōf" },
        },
        [GENDERS.MAP.MON.NAME]: {
            [IDS.COR_TYPES.INT]: { [IDS.CASE.S]: "hālló", [IDS.CASE.O]: "hallħô" },
            [IDS.COR_TYPES.R]: { [IDS.CASE.S]: "sēlló", [IDS.CASE.O]: "sēllħô" },
            [IDS.COR_TYPES.COR]: { [IDS.CASE.S]: "tharlló", [IDS.CASE.O]: "tharħô" },
            [IDS.COR_TYPES.PDEM]: { [IDS.CASE.S]: "sēħó", [IDS.CASE.O]: "sōħó" },
            [IDS.COR_TYPES.DDEM]: { [IDS.CASE.S]: "lēħó", [IDS.CASE.O]: "li'ô" },
        },
        [GENDERS.MAP.I.NAME]: {
            [IDS.COR_TYPES.INT]: { [IDS.CASE.S]: "hāllcīl", [IDS.CASE.O]: "hallħīl" },
            [IDS.COR_TYPES.R]: { [IDS.CASE.S]: "sēllcīl", [IDS.CASE.O]: "sēllħīl" },
            [IDS.COR_TYPES.COR]: { [IDS.CASE.S]: "tharcīl", [IDS.CASE.O]: "tharħīl" },
            [IDS.COR_TYPES.PDEM]: { [IDS.CASE.S]: "sēllīl", [IDS.CASE.O]: "sōllīl" },
            [IDS.COR_TYPES.DDEM]: { [IDS.CASE.S]: "lēllīl", [IDS.CASE.O]: "li'llīl" },
        },
        [GENDERS.MAP.MAG.NAME]: {
            [IDS.COR_TYPES.INT]: { [IDS.CASE.S]: "huχuχ", [IDS.CASE.O]: "hoqħôχ" },
            [IDS.COR_TYPES.R]: { [IDS.CASE.S]: "siχuχ", [IDS.CASE.O]: "suqħôχ" },
            [IDS.COR_TYPES.COR]: { [IDS.CASE.S]: "tharχuχ", [IDS.CASE.O]: "tharqħôχ" },
            [IDS.COR_TYPES.PDEM]: { [IDS.CASE.S]: "sēhuχ", [IDS.CASE.O]: "sōhuχ" },
            [IDS.COR_TYPES.DDEM]: { [IDS.CASE.S]: "lēhuχ", [IDS.CASE.O]: "li'ōχ" },
        },
        [GENDERS.MAP.MUN.NAME]: {
            [IDS.COR_TYPES.INT]: { [IDS.CASE.S]: "hotok", [IDS.CASE.O]: "hoqħárk" },
            [IDS.COR_TYPES.R]: { [IDS.CASE.S]: "sitok", [IDS.CASE.O]: "suqħárk" },
            [IDS.COR_TYPES.COR]: { [IDS.CASE.S]: "thartok", [IDS.CASE.O]: "tharqħárk" },
            [IDS.COR_TYPES.PDEM]: { [IDS.CASE.S]: "sērk", [IDS.CASE.O]: "sōthok" },
            [IDS.COR_TYPES.DDEM]: { [IDS.CASE.S]: "lērk", [IDS.CASE.O]: "li'ōk" },
        },
        [GENDERS.MAP.A.NAME]: {
            [IDS.COR_TYPES.INT]: { [IDS.CASE.S]: "hoχoq̇", [IDS.CASE.O]: "hoqħôq̇" },
            [IDS.COR_TYPES.R]: { [IDS.CASE.S]: "siχoq̇", [IDS.CASE.O]: "suqħôq̇" },
            [IDS.COR_TYPES.COR]: { [IDS.CASE.S]: "tharχoq̇", [IDS.CASE.O]: "tharqħôq̇" },
            [IDS.COR_TYPES.PDEM]: { [IDS.CASE.S]: "sēhoq̇", [IDS.CASE.O]: "sōhoq̇" },
            [IDS.COR_TYPES.DDEM]: { [IDS.CASE.S]: "lēhoq̇", [IDS.CASE.O]: "li'ōq̇" },
        }
    }
}


LUR = {
    MAP: {
        [IDS.ASPECT.E]: {
            [IDS.TENSE.P]: {
                [GENDERS.MAP.E.NAME]: {
                    1: { [IDS.NUMBERS.S]: "xirōd", [IDS.NUMBERS.D]: "xynrōd", [IDS.NUMBERS.P]: "herōd" },
                    2: { [IDS.NUMBERS.S]: "syrōd", [IDS.NUMBERS.D]: "sórōd", [IDS.NUMBERS.P]: "thárōd" },
                    3: { [IDS.NUMBERS.S]: "terōd", [IDS.NUMBERS.D]: "q̇yrōd", [IDS.NUMBERS.P]: "tyrōd" }
                },
                [GENDERS.MAP.R.NAME]: {
                    1: { [IDS.NUMBERS.S]: "xirōd", [IDS.NUMBERS.D]: "xynrōd", [IDS.NUMBERS.P]: "herōd" },
                    2: { [IDS.NUMBERS.S]: "syrōd", [IDS.NUMBERS.D]: "súrōd", [IDS.NUMBERS.P]: "thórōd" },
                    3: { [IDS.NUMBERS.S]: "turōd", [IDS.NUMBERS.D]: "q̇yrōd", [IDS.NUMBERS.P]: "tyrōd" }
                },
                [GENDERS.MAP.MON.NAME]: {
                    1: { [IDS.NUMBERS.S]: "χħórōd", [IDS.NUMBERS.D]: "xórōd", [IDS.NUMBERS.P]: "hôd" },
                    2: { [IDS.NUMBERS.S]: "sórôd", [IDS.NUMBERS.D]: "sórôd", [IDS.NUMBERS.P]: "thôrōd" },
                    3: { [IDS.NUMBERS.S]: "tórôd", [IDS.NUMBERS.D]: "q̇ħôd", [IDS.NUMBERS.P]: "tyrōd" }
                },
                [GENDERS.MAP.I.NAME]: {
                    1: { [IDS.NUMBERS.S]: "xerōd", [IDS.NUMBERS.D]: "llyrōd", [IDS.NUMBERS.P]: "llyrōd" },
                    2: { [IDS.NUMBERS.S]: "surōd", [IDS.NUMBERS.D]: "sórōd", [IDS.NUMBERS.P]: "thórōd" },
                    3: { [IDS.NUMBERS.S]: "túrōd", [IDS.NUMBERS.D]: "q̇órōd", [IDS.NUMBERS.P]: "turōd" }
                },
                [GENDERS.MAP.MAG.NAME]: {
                    1: { [IDS.NUMBERS.S]: "xyrōd", [IDS.NUMBERS.D]: "hyrōd", [IDS.NUMBERS.P]: "hyrōd" },
                    2: { [IDS.NUMBERS.S]: "sōd", [IDS.NUMBERS.D]: "thárōd", [IDS.NUMBERS.P]: "thárōd" },
                    3: { [IDS.NUMBERS.S]: "tórōd", [IDS.NUMBERS.D]: "tyrōd", [IDS.NUMBERS.P]: "tyrōd" }
                },
                [GENDERS.MAP.MUN.NAME]: {
                    1: { [IDS.NUMBERS.S]: "rōd", [IDS.NUMBERS.D]: "rōd", [IDS.NUMBERS.P]: "rōd" },
                    2: { [IDS.NUMBERS.S]: "syrōd", [IDS.NUMBERS.D]: "thárōd", [IDS.NUMBERS.P]: "thárōd" },
                    3: { [IDS.NUMBERS.S]: "tryrōd", [IDS.NUMBERS.D]: "tyrōd", [IDS.NUMBERS.P]: "tyrōd" }
                },
                [GENDERS.MAP.A.NAME]: {
                    1: { [IDS.NUMBERS.S]: "rōd", [IDS.NUMBERS.D]: "rōd", [IDS.NUMBERS.P]: "rōd" },
                    2: { [IDS.NUMBERS.S]: "syrōd", [IDS.NUMBERS.D]: "thárōd", [IDS.NUMBERS.P]: "thárōd" },
                    3: { [IDS.NUMBERS.S]: "trōd", [IDS.NUMBERS.D]: "trōd", [IDS.NUMBERS.P]: "trōd" }
                },
            },
            [IDS.TENSE.NP]: {
                [GENDERS.MAP.E.NAME]: {
                    1: { [IDS.NUMBERS.S]: "xelur", [IDS.NUMBERS.D]: "xylur", [IDS.NUMBERS.P]: "helur" },
                    2: { [IDS.NUMBERS.S]: "sylur", [IDS.NUMBERS.D]: "sólur", [IDS.NUMBERS.P]: "thálur" },
                    3: { [IDS.NUMBERS.S]: "telur", [IDS.NUMBERS.D]: "q̇ylur", [IDS.NUMBERS.P]: "tylur" }
                },
                [GENDERS.MAP.R.NAME]: {
                    1: { [IDS.NUMBERS.S]: "xilur", [IDS.NUMBERS.D]: "xylur", [IDS.NUMBERS.P]: "hilur" },
                    2: { [IDS.NUMBERS.S]: "sylur", [IDS.NUMBERS.D]: "sóllur", [IDS.NUMBERS.P]: "thállur" },
                    3: { [IDS.NUMBERS.S]: "tollur", [IDS.NUMBERS.D]: "q̇yllur", [IDS.NUMBERS.P]: "tylur" }
                },
                [GENDERS.MAP.MON.NAME]: {
                    1: { [IDS.NUMBERS.S]: "χħólur", [IDS.NUMBERS.D]: "xólur", [IDS.NUMBERS.P]: "hôlur" },
                    2: { [IDS.NUMBERS.S]: "sôlur", [IDS.NUMBERS.D]: "sóq̇ħūr", [IDS.NUMBERS.P]: "tháq̇ħūr" },
                    3: { [IDS.NUMBERS.S]: "tôlur", [IDS.NUMBERS.D]: "q̇ħólur", [IDS.NUMBERS.P]: "tūr" }
                },
                [GENDERS.MAP.I.NAME]: {
                    1: { [IDS.NUMBERS.S]: "xellur", [IDS.NUMBERS.D]: "llūr", [IDS.NUMBERS.P]: "llūr" },
                    2: { [IDS.NUMBERS.S]: "sūlur", [IDS.NUMBERS.D]: "sócūr", [IDS.NUMBERS.P]: "thácūr" },
                    3: { [IDS.NUMBERS.S]: "tócūr", [IDS.NUMBERS.D]: "q̇ácūr", [IDS.NUMBERS.P]: "tillūr" }
                },
                [GENDERS.MAP.MAG.NAME]: {
                    1: { [IDS.NUMBERS.S]: "xolur", [IDS.NUMBERS.D]: "holur", [IDS.NUMBERS.P]: "holur" },
                    2: { [IDS.NUMBERS.S]: "sūr", [IDS.NUMBERS.D]: "thâlur", [IDS.NUMBERS.P]: "thâlur" },
                    3: { [IDS.NUMBERS.S]: "tólur", [IDS.NUMBERS.D]: "tūlur", [IDS.NUMBERS.P]: "tūlur" }
                },
                [GENDERS.MAP.MUN.NAME]: {
                    1: { [IDS.NUMBERS.S]: "xur", [IDS.NUMBERS.D]: "rur", [IDS.NUMBERS.P]: "rur" },
                    2: { [IDS.NUMBERS.S]: "sur", [IDS.NUMBERS.D]: "thûr", [IDS.NUMBERS.P]: "thûr" },
                    3: { [IDS.NUMBERS.S]: "trur", [IDS.NUMBERS.D]: "tūr", [IDS.NUMBERS.P]: "tūr" }
                },
                [GENDERS.MAP.A.NAME]: {
                    1: { [IDS.NUMBERS.S]: "lur", [IDS.NUMBERS.D]: "lur", [IDS.NUMBERS.P]: "lur" },
                    2: { [IDS.NUMBERS.S]: "sulur", [IDS.NUMBERS.D]: "thálur", [IDS.NUMBERS.P]: "thálur" },
                    3: { [IDS.NUMBERS.S]: "tolur", [IDS.NUMBERS.D]: "tulur", [IDS.NUMBERS.P]: "tulur" }
                },
            }
        },
        [IDS.ASPECT.G]: {

            [IDS.TENSE.P]: {
                [GENDERS.MAP.E.NAME]: {
                    1: { [IDS.NUMBERS.S]: "xelōd", [IDS.NUMBERS.D]: "xylōd", [IDS.NUMBERS.P]: "helōd" },
                    2: { [IDS.NUMBERS.S]: "sylōd", [IDS.NUMBERS.D]: "sólōd", [IDS.NUMBERS.P]: "thálōd" },
                    3: { [IDS.NUMBERS.S]: "telōd", [IDS.NUMBERS.D]: "q̇ylōd", [IDS.NUMBERS.P]: "tylōd" }
                },
                [GENDERS.MAP.R.NAME]: {
                    1: { [IDS.NUMBERS.S]: "xelōd", [IDS.NUMBERS.D]: "xylōd", [IDS.NUMBERS.P]: "helōd" },
                    2: { [IDS.NUMBERS.S]: "sylōd", [IDS.NUMBERS.D]: "sóllōd", [IDS.NUMBERS.P]: "thállōd" },
                    3: { [IDS.NUMBERS.S]: "tollōd", [IDS.NUMBERS.D]: "q̇yllōd", [IDS.NUMBERS.P]: "tylōd" }
                },
                [GENDERS.MAP.MON.NAME]: {
                    1: { [IDS.NUMBERS.S]: "χħólōd", [IDS.NUMBERS.D]: "xólōd", [IDS.NUMBERS.P]: "hôlōd" },
                    2: { [IDS.NUMBERS.S]: "sólōd", [IDS.NUMBERS.D]: "súrōd", [IDS.NUMBERS.P]: "thórōd" },
                    3: { [IDS.NUMBERS.S]: "tólōd", [IDS.NUMBERS.D]: "q̇ħólōd", [IDS.NUMBERS.P]: "tulrōd" }
                },
                [GENDERS.MAP.I.NAME]: {
                    1: { [IDS.NUMBERS.S]: "xyrōd", [IDS.NUMBERS.D]: "llurōd", [IDS.NUMBERS.P]: "llurōd" },
                    2: { [IDS.NUMBERS.S]: "sūlōd", [IDS.NUMBERS.D]: "sūrōd", [IDS.NUMBERS.P]: "thûrōd" },
                    3: { [IDS.NUMBERS.S]: "tūrōd", [IDS.NUMBERS.D]: "q̇ūrōd", [IDS.NUMBERS.P]: "tīrōd" }
                },
                [GENDERS.MAP.MAG.NAME]: {
                    1: { [IDS.NUMBERS.S]: "xolrōd", [IDS.NUMBERS.D]: "holrōd", [IDS.NUMBERS.P]: "holrōd" },
                    2: { [IDS.NUMBERS.S]: "sūrōd", [IDS.NUMBERS.D]: "thâlrōd", [IDS.NUMBERS.P]: "thâlrōd" },
                    3: { [IDS.NUMBERS.S]: "tólrōd", [IDS.NUMBERS.D]: "tūlōd", [IDS.NUMBERS.P]: "tūlōd" }
                },
                [GENDERS.MAP.MUN.NAME]: {
                    1: { [IDS.NUMBERS.S]: "xurōd", [IDS.NUMBERS.D]: "rylōd", [IDS.NUMBERS.P]: "rylōd" },
                    2: { [IDS.NUMBERS.S]: "surōd", [IDS.NUMBERS.D]: "thûrōd", [IDS.NUMBERS.P]: "thûrōd" },
                    3: { [IDS.NUMBERS.S]: "trulōd", [IDS.NUMBERS.D]: "turōd", [IDS.NUMBERS.P]: "turōd" }
                },
                [GENDERS.MAP.A.NAME]: {
                    1: { [IDS.NUMBERS.S]: "lyrōd", [IDS.NUMBERS.D]: "lyrōd", [IDS.NUMBERS.P]: "lyrōd" },
                    2: { [IDS.NUMBERS.S]: "surōd", [IDS.NUMBERS.D]: "thálōd", [IDS.NUMBERS.P]: "thálōd" },
                    3: { [IDS.NUMBERS.S]: "tolōd", [IDS.NUMBERS.D]: "tulōd", [IDS.NUMBERS.P]: "tulōd" }
                },
            },
            [IDS.TENSE.NP]: {
                [GENDERS.MAP.E.NAME]: {
                    1: { [IDS.NUMBERS.S]: "xelūrχ", [IDS.NUMBERS.D]: "xylūrχ", [IDS.NUMBERS.P]: "helūrχ" },
                    2: { [IDS.NUMBERS.S]: "sylūrχ", [IDS.NUMBERS.D]: "sólūrχ", [IDS.NUMBERS.P]: "thálūrχ" },
                    3: { [IDS.NUMBERS.S]: "telūrχ", [IDS.NUMBERS.D]: "q̇ylūrχ", [IDS.NUMBERS.P]: "tylūrχ" }
                },
                [GENDERS.MAP.R.NAME]: {
                    1: { [IDS.NUMBERS.S]: "xilūrχ", [IDS.NUMBERS.D]: "xylūrχ", [IDS.NUMBERS.P]: "hilūrχ" },
                    2: { [IDS.NUMBERS.S]: "sylūrχ", [IDS.NUMBERS.D]: "sóllurχ", [IDS.NUMBERS.P]: "thállurχ" },
                    3: { [IDS.NUMBERS.S]: "tollurχ", [IDS.NUMBERS.D]: "q̇yllurχ", [IDS.NUMBERS.P]: "tylūrχ" }
                },
                [GENDERS.MAP.MON.NAME]: {
                    1: { [IDS.NUMBERS.S]: "χħólurχ", [IDS.NUMBERS.D]: "xólūrχ", [IDS.NUMBERS.P]: "hólūrχ" },
                    2: { [IDS.NUMBERS.S]: "sólūrχ", [IDS.NUMBERS.D]: "sûryχ", [IDS.NUMBERS.P]: "thûryχ" },
                    3: { [IDS.NUMBERS.S]: "tólūrχ", [IDS.NUMBERS.D]: "q̇ħûrχ", [IDS.NUMBERS.P]: "turyχ" }
                },
                [GENDERS.MAP.I.NAME]: {
                    1: { [IDS.NUMBERS.S]: "xellurχ", [IDS.NUMBERS.D]: "llūryχ", [IDS.NUMBERS.P]: "llūryχ" },
                    2: { [IDS.NUMBERS.S]: "sulūrχ", [IDS.NUMBERS.D]: "sūryχ", [IDS.NUMBERS.P]: "thûryχ" },
                    3: { [IDS.NUMBERS.S]: "tûryχ", [IDS.NUMBERS.D]: "q̇ûryχ", [IDS.NUMBERS.P]: "tillūrχ" }
                },
                [GENDERS.MAP.MAG.NAME]: {
                    1: { [IDS.NUMBERS.S]: "xolūrχ", [IDS.NUMBERS.D]: "holūrχ", [IDS.NUMBERS.P]: "holūrχ" },
                    2: { [IDS.NUMBERS.S]: "sūryχ", [IDS.NUMBERS.D]: "thálūrχ", [IDS.NUMBERS.P]: "thálūrχ" },
                    3: { [IDS.NUMBERS.S]: "tólūrχ", [IDS.NUMBERS.D]: "tulūrχ", [IDS.NUMBERS.P]: "tulūrχ" }
                },
                [GENDERS.MAP.MUN.NAME]: {
                    1: { [IDS.NUMBERS.S]: "xūrχ", [IDS.NUMBERS.D]: "rūχ", [IDS.NUMBERS.P]: "rūχ" },
                    2: { [IDS.NUMBERS.S]: "sūrχ", [IDS.NUMBERS.D]: "thûryχ", [IDS.NUMBERS.P]: "thûryχ" },
                    3: { [IDS.NUMBERS.S]: "trūrχ", [IDS.NUMBERS.D]: "tūryχ", [IDS.NUMBERS.P]: "tūryχ" }
                },
                [GENDERS.MAP.A.NAME]: {
                    1: { [IDS.NUMBERS.S]: "lūrχ", [IDS.NUMBERS.D]: "lūrχ", [IDS.NUMBERS.P]: "lūrχ" },
                    2: { [IDS.NUMBERS.S]: "sulūrχ", [IDS.NUMBERS.D]: "thálūrχ", [IDS.NUMBERS.P]: "thálūrχ" },
                    3: { [IDS.NUMBERS.S]: "tolūrχ", [IDS.NUMBERS.D]: "tulūrχ", [IDS.NUMBERS.P]: "tulūrχ" }
                },
            }
        }
    }
}
