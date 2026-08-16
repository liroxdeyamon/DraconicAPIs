META = {
    // Basic info
    ID: "dr_dr",
    NAME: "Classic Draconic",
    DESCRIPTION: "Unmodified version of the conlang.",
    // Attribution
    AUTHOR: "human1011", // in this case human1011 is author of the whole conlang
    MAINTAINERS: ["_eXeCutie", "SuPDuZz", "LiroxDeYamon"], // people keeping dialect up to date
    // Dependencies
    DEPENDENCIES: [
        // "Map.js": ["dr_ex", "dr_ex"], // executes code from another dialect on map load BEFORE this map
        // "Dictionary.js": ["dr_ex", "dr_ex"], // executes code from another dialect on dictionary load BEFORE this dictionary
        // you get it
    ],
    // Update things
    // Classic draconic's updates are monitored in draconic-changes channel on discord
    // Code changes don't count as an update, unless they change the dialect in some way
    REVISION: 8, // aka version or smth, increment on update, please do not farm revisions via minor changes
    LAST_UPDATED: "2026-01-13", // YYYY-MM-DD format
    STATUS: "WIP" // WIP - there be alot of changes; STABLE - the dialect is done, but there be additions sometimes (like new words or phrases); ARCHIVED - no changes will be made anymore
}

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
        NP: 'Non-Past',
        F: 'Future'
    },
    PERSON: {
        1: 'First',
        2: 'Second',
        3: 'Third'
    },
    CHARACTERS: {
        V: "Vowel",
        C: "Consonant",
        P: "Pyric",
        I: "Sheet Ignore",
        D: "Different", // ??
        O: "Optional"
    },
    FORMS: {
        R: 'Regular',
        E: 'Elative'
    },
    WORDS: {
        // Object.keys(IDS.WORDS) >> [N, V, ..., CON]
        // Object.values(IDS.WORDS) >> [Noun, Verb, ..., Conjuction]
        // just a reminder :3
        N: "Noun",
        V: "Verb",
        ADJ: "Adjective",
        ADV: "Adverb",
        AUX: "Auxiliary",
        PP: "Preposition",
        PART: "Particle",
        DET: "Determiner",
        CON: "Conjuction"
    },
    PHRASES: {
        PHR: "Phrase",
        PROV: "Proverb"
    },
    GENDERS: {
        E: "Exalted",
        R: "Rational",
        MON: "Monstrous",
        I: "Irrational",
        MAG: "Magical",
        MUN: "Mundane",
        A: "Abstract",
    },
    GENDER_GROUPS: {
        ANIM: "Animates",
        INANIM: "Inanimates",
        A: "All"
    },
    GROUPS_UNPACKED: {
    },
    OTHER: {
        ML: "MultiLexemic",
        MD: "MultiDeclensional",
        L: "Lexemic"
    }
}

IDS.GROUPS_UNPACKED = {
    [IDS.GENDER_GROUPS.ANIM]:   [IDS.GENDERS.E, IDS.GENDERS.R, IDS.GENDERS.MON, IDS.GENDERS.I],
    [IDS.GENDER_GROUPS.INANIM]: [IDS.GENDERS.MAG, IDS.GENDERS.MUN, IDS.GENDERS.A],
    [IDS.GENDER_GROUPS.A]:      Object.values(IDS.GENDERS),
    ANIM: IDS.GROUPS_UNPACKED[IDS.GENDER_GROUPS.ANIM],
    INANIM: IDS.GROUPS_UNPACKED[IDS.GENDER_GROUPS.INANIM],
    A: IDS.GROUPS_UNPACKED[IDS.GENDER_GROUPS.A],
    ANIMATES: IDS.GROUPS_UNPACKED[IDS.GENDER_GROUPS.ANIM],
    INANIMIMATES: IDS.GROUPS_UNPACKED[IDS.GENDER_GROUPS.INANIM],
    ALL: IDS.GROUPS_UNPACKED[IDS.GENDER_GROUPS.A],
};

// ============================ CLASSES ============================

function choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomWord(type) {
    return choice(Object.values(DICTIONARY[type].MAP));
}

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

class Lexeme {
    constructor(text, definition, forms, usage_notes, type) {
        this.text = text;
        this.definition = definition;
        this.forms = forms;
        this.usage_notes = usage_notes;
        this.type = type;
    }
}

class Word extends Lexeme {
    constructor(text, definition, forms, usage_notes, type) {
        super(text, definition, forms, usage_notes, type);
        this.word = text; // compatibility
    }

    splitForms() {
        if (!this.forms) return [this.word];
        return [this.word, ...this.forms.split(", ")];
    }
}

class Noun extends Word {
    constructor(word, declension, gender, usage_notes = "") {
        super(word, undefined, undefined, usage_notes, IDS.WORDS.N);
        this.declension = declension;
        this.genders = {};
        for (const [k, v] of Object.entries(gender)) {
            const unpacked = Object.entries(IDS.GROUPS_UNPACKED).find(([gk]) => gk === k);
            if (unpacked) for (const g of unpacked[1]) this.genders[g] = v;
            else this.genders[k] = v;
        }
        this.definition = Object.entries(combineGenders(this.genders)).map(([k, v]) => `${k}: ${v}`).join("\n")
    }
}

class Verb extends Word {
    constructor(word, definition, forms, usage_notes = "") {
        super(word, definition, forms, usage_notes, IDS.WORDS.V);
    }
}

class Adjective extends Word {
    constructor(word, declension, definition, forms, usage_notes = "") {
        super(word, definition, forms, usage_notes, IDS.WORDS.ADJ);
        this.declension = declension;
    }
}

class Adverb extends Word {
    constructor(word, definition, forms, usage_notes = "") {
        super(word, definition, forms, usage_notes, IDS.WORDS.ADV);
    }
}

class Auxiliary extends Word {
    constructor(word, definition, forms, usage_notes = "") {
        super(word, definition, forms, usage_notes, IDS.WORDS.AUX);
    }
}

class Preposition extends Word {
    constructor(word, definition, usage_notes = "") {
        super(word, definition, undefined, usage_notes, IDS.WORDS.PP);
    }
}

class Particle extends Word {
    constructor(word, definition, usage_notes = "") {
        super(word, definition, undefined, usage_notes, IDS.WORDS.PART);
    }
}

class Determiner extends Word {
    constructor(word, definition, usage_notes = "") {
        super(word, definition, undefined, usage_notes, IDS.WORDS.DET);
    }
}

class Conjunction extends Word {
    constructor(word, definition, usage_notes = "") {
        super(word, definition, undefined, usage_notes, IDS.WORDS.CON);
    }
}

class Phrase extends Lexeme {
    constructor(text, definition, usage_notes = "") {
        super(text, definition, undefined, usage_notes, IDS.PHRASES.PHR);
    }
}

class Proverb extends Lexeme {
    constructor(text, definition, usage_notes = "") {
        super(text, definition, undefined, usage_notes, IDS.PHRASES.PROV);
    }
}

class AffixMatch {
    constructor(type, affix, variants, paths) {
        this.affix = affix
        this.variants = variants
        this.paths = paths
        this.type = type
    }
}

class Grouped {
    constructor(type, map, acceptable, unifiedType = null) {
        this.values = {}
        this.acceptable = acceptable
        this.unifiedType = unifiedType
        this.available = []
        for (const key of acceptable) {
            if (key in map) {
                this.values[key] = map[key]
                this.available.push(key)
            }
        }
        this.type = type
    }
}

class MultiDeclensional extends Grouped {
    constructor(map, unifiedType) {
        super(IDS.OTHER.MD, map, Array.of(1,2,3,4), unifiedType);
    }
}

class MultiLexemic extends Grouped {
    constructor(map) {
        super(IDS.OTHER.ML, map, Object.values(IDS.WORDS));
    }
}

class Lexemic extends Grouped {
    constructor(word) {
        super(IDS.OTHER.L, {[word.type]: word}, Object.values(IDS.WORDS))
    }
}

class Conjugated {
    constructor(word) {
        this.word = word;
    }
}

class ConjugatedNoun extends Conjugated {
    constructor(word, mood = null, gender = null, count = null) {
        super(word)
        this.mood = mood || IDS.MOODS.D
        this.gender = gender
        this.count = count || IDS.NUMBERS.S
    }

    toAdjective() {
        return new ConjugatedAdjective(this.word, this.mood, this.gender, this.count, true)
    }

    conjugate() {
        if (!this.gender || !this.count || !this.mood) return this.word.text
        return CHARACTERS.entriesToText(AFFIXES.SUFFIXES.connect(this.word.text, AFFIXES.SUFFIXES[this.word.type].MAP[this.mood][this.gender][this.count][this.word.declension])) 
    }

    definition(include_extras = true) {
        extra = []
        if (this.mood) extra.push(this.mood);
        if (this.gender) extra.push(this.gender);
        if (this.count) extra.push(this.count);
        
        var ret;
        if (!this.gender) ret = this.word.definition
        else ret = this.word.genders[this.gender]
        
        return ret + (extra.length > 0 && include_extras ? ` (${extra.join(", ")})` : "") 
    }

    random() {
        this.word = randomWord(IDS.WORDS.N);
        this.mood = choice(Object.values(IDS.MOODS));
        const availableGenders = Object.keys(this.word.genders);
        this.gender = availableGenders.length ? choice(availableGenders) : null;
        this.count = choice(Object.values(IDS.NUMBERS));
        return this;
    }
}

class ConjugatedAdjective extends Conjugated {
    constructor(word, original_mood = null, original_gender = null, original_count = null, from_noun = false) {
        super(word)
        this.original_gender = original_gender
        this.from_noun = from_noun
        this.original_mood = original_mood
        this.original_count = original_count
    }

    toNoun() {
        if (!this.from_noun) return null
        return new ConjugatedNoun(this.word, this.original_mood, this.original_gender, this.original_count)
    }

    conjugate() {
        return (this.from_noun ? "i" : "") + this.word.text
    }

    definition(include_extras = true) {
        return this.word.definition + (include_extras && this.from_noun ? " (made from noun)" : "")
    }

    random() {
        this.word = randomWord(IDS.WORDS.ADJ);
        this.from_noun = false;
        this.original_mood = null;
        this.original_gender = null;
        this.original_count = null;
        return this;
    }
}

class ConjugatedVerb extends Conjugated {
    constructor(word, tense = null, aspect = null, subject_gender = null, subject_count = null, subject_person = null, object_gender = null, object_count = null, object_person = null) {
        super(word)
        this.tense = tense || IDS.TENSE.NP
        this.aspect = aspect || IDS.ASPECT.E
        this.subject_gender = subject_gender
        this.subject_count = subject_count || IDS.NUMBERS.S
        this.subject_person = subject_person || 1
        this.object_gender = object_gender
        this.object_count = object_count || IDS.NUMBERS.S
        this.object_person = object_person || 1
    }

    temp_form_map = {
        [IDS.ASPECT.E+"-"+IDS.TENSE.NP]: 0,
        [IDS.ASPECT.E+"-"+IDS.TENSE.P]: 1,
        [IDS.ASPECT.G+"-"+IDS.TENSE.NP]: 2,
        [IDS.ASPECT.G+"-"+IDS.TENSE.P]: 3
    }

    conjugate() {
        var root;
        if (this.tense == IDS.TENSE.F) root = "llo " + this.word.splitForms()[this.temp_form_map[this.aspect+"-"+IDS.TENSE.NP]]
        else root = this.word.splitForms()[this.temp_form_map[this.aspect+"-"+this.tense]]

        object_present = (this.object_gender && this.object_person && this.object_count)
        subject_present = (this.subject_gender && this.subject_person && this.subject_count)

        if (!object_present && !subject_present) return root
        if (!object_present && subject_present) return AFFIXES.SUFFIXES.connect(root, AFFIXES.PREFIXES.Verb.MAP[this.object_person][this.object_count][this.object_gender])
        if (object_present && !subject_present) return AFFIXES.PREFIXES.connect(root, AFFIXES.PREFIXES.Verb.MAP[this.subject_person][this.subject_count][this.subject_gender])
        return AFFIXES.connect(AFFIXES.PREFIXES.Verb.MAP[this.subject_person][this.subject_count][this.subject_gender], root, AFFIXES.PREFIXES.Verb.MAP[this.object_person][this.object_count][this.object_gender])
    }

    definition(include_extras = true) {
        extra_subject = []
        extra_object = []
        extra = []

        extra_subject.push(IDS.PERSON[this.subject_person]+" person");
        extra_subject.push(this.subject_count);
        extra_subject.push(this.subject_gender);

        extra_object.push(IDS.PERSON[this.object_person]+" person");
        extra_object.push(this.object_count);
        extra_object.push(this.object_gender);

        if (this.tense) extra.push(this.tense+" tense");
        if (this.aspect) extra.push(this.aspect);
        if (!extra_subject.some(e => e === null)) extra.push(`subject: (${extra_subject.join(", ")})`);
        else extra.push(`subject: self`);
        if (!extra_object.some(e => e === null)) extra.push(`object: (${extra_object.join(", ")})`);

        return this.word.definition + (extra.length > 0 && include_extras ? ` (${extra.join(", ")})` : "")
    }

    random() {
        this.word = randomWord(IDS.WORDS.V);
        this.tense = choice(Object.values(IDS.TENSE));
        this.aspect = choice(Object.values(IDS.ASPECT));

        this.subject_person = choice(Object.keys(IDS.PERSON).map(Number));
        this.subject_count = choice(Object.values(IDS.NUMBERS));
        this.subject_gender = choice(Object.values(IDS.GENDERS));

        const hasObject = Math.random() < 0.5;
        if (hasObject) {
            this.object_person = choice(Object.keys(IDS.PERSON).map(Number));
            this.object_count = choice(Object.values(IDS.NUMBERS));
            this.object_gender = choice(Object.values(IDS.GENDERS));
        } else {
            this.object_person = null;
            this.object_count = null;
            this.object_gender = null;
        }
        return this;
    }
}

// ============================ MAPS ============================

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
            allophones: { "/t̪̚/": allophones["word-final"] },
            sound: soundPath + "0-0.mp3"
        }),
        "cáll": new Character({ // 1
            name: "cáll", name_ipa: "/t͡s̠ɑ̤ˁɬ/",
            letter: "c", letter_rom: ["c"], letter_ipa: "/t͡s̠/", letter_glyph: "\uE001", letter_discord: ":c_:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: { "/t͡ʃ/": allophones["before i"] },
            sound: soundPath + "0-1.mp3"
        }),
        "kû": new Character({ // 2
            name: "kû", name_ipa: "/kṳˁː/",
            letter: "k", letter_rom: ["k"], letter_ipa: "/k/", letter_glyph: "\uE002", letter_discord: ":k_:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: {
                "/c/": allophones["before i"],
                "/g̥/": allophones["intervoc"],
                "/k̚/": allophones["word-final"]
            },
            sound: soundPath + "0-2.mp3"
        }),
        "qath": new Character({ // 3
            name: "qath", name_ipa: "/qɑθ/",
            letter: "q", letter_rom: ["q"], letter_ipa: "/q/", letter_glyph: "\uE003", letter_discord: ":q_:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: {
                "/ɢ̥/": allophones["intervoc"],
                "/q̚/": allophones["word-final"]
            },
            sound: soundPath + "0-3.mp3"
        }),
        "q̇os": new Character({ // 4
            name: "q̇os", name_ipa: "/ʡos̠/",
            letter: "q̇", letter_rom: ["Q"], letter_ipa: "/ʡ/", letter_glyph: "\uE004", letter_discord: ":Q_:",
            text: mainText + " If you struggle while pronouncing this, try looking up aryepiglottic folds, and mess around with how to contract them.",
            prop: [IDS.CHARACTERS.C],
            allophones: {
                "/ʡ̆/": allophones["intervoc"],
                "/ʡ̚/": allophones["word-final"]
            },
            sound: soundPath + "0-4.mp3"
        }),
        "ax": new Character({ // 5
            name: "ax", name_ipa: "/ax/",
            letter: "'", letter_rom: ["'", "´", "`"], letter_ipa: "/ʔ/", letter_glyph: "\uE005", letter_discord: ":__:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: {
                "/ʔ̞/": allophones["intervoc"],
                "/ʔ̚/": allophones["word-final"]
            },
            sound: soundPath + "0-5.mp3"
        }),

        //row 1
        "trō": new Character({ // 6
            name: "trō", name_ipa: "/t̪roː/",
            letter: "tr", letter_rom: ["tr"], letter_ipa: "/t̪r/", letter_glyph: "\uE006", letter_discord: ":tr:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: { "/t̪r̥/": "before voiceless obstruents" },
            sound: soundPath + "1-0.mp3"
        }),
        "sēl": new Character({ // 7
            name: "sēl", name_ipa: "/s̠ēl̪/",
            letter: "s", letter_rom: ["s"], letter_ipa: "/s̠/", letter_glyph: "\uE007", letter_discord: ":s_:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: { "/ʃ/": allophones["before i"] },
            sound: soundPath + "1-1.mp3"
        }),
        "kxæŋ": new Character({ // 8
            name: "kxæŋ", name_ipa: "/k͡xaŋ/",
            letter: "kx", letter_rom: ["kx"], letter_ipa: "/k͡x/", letter_glyph: "\uE008", letter_discord: ":kx:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: { "/c͡ç/": allophones["before i"] },
            sound: soundPath + "1-2.mp3"
        }),
        "qχē": new Character({ // 9
            name: "qχē", name_ipa: "/q͡χeː/",
            letter: "qχ", letter_rom: ["qX"], letter_ipa: "/q͡χ/", letter_glyph: "\uE009", letter_discord: ":qX:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: {},
            sound: soundPath + "1-3.mp3"
        }),
        "qħán": new Character({ // 10
            name: "qħán", name_ipa: "/qˤʰɑ̤ˤn̥/",
            letter: "qħ", letter_rom: ["qH"], letter_ipa: "/qˤʰ/", letter_glyph: "\uE00a", letter_discord: ":qH:",
            text: mainText + " " + pyricHText,
            prop: [IDS.CHARACTERS.C, IDS.CHARACTERS.P],
            allophones: {},
            sound: soundPath + "1-4.mp3"
        }),
        "q̇ħón": new Character({ // 11
            name: "q̇ħón", name_ipa: "/ʡˤʰo̤ˤn̥/",
            letter: "q̇ħ", letter_rom: ["QH"], letter_ipa: "/ʡˤʰ/", letter_glyph: "\uE00b", letter_discord: ":QH:",
            text: mainText + " " + pyricHText,
            prop: [IDS.CHARACTERS.C, IDS.CHARACTERS.P],
            allophones: {},
            sound: soundPath + "1-5.mp3"
        }),

        //row 2
        "od": new Character({ // 12
            name: "od", name_ipa: "/oð/",
            letter: "d", letter_rom: ["d"], letter_ipa: "/ð/", letter_glyph: "\uE00c", letter_discord: ":d_:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: {},
            sound: soundPath + "2-0.mp3"
        }),
        "ēz": new Character({ // 13
            name: "ēz", name_ipa: "/eːz̠/",
            letter: "z", letter_rom: ["z"], letter_ipa: "/z̠/", letter_glyph: "\uE00d", letter_discord: ":z_:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: { "/ʒ/": allophones["before i"] },
            sound: soundPath + "2-1.mp3"
        }),
        "āg": new Character({ // 14
            name: "āg", name_ipa: "/ɑːɣ/",
            letter: "g", letter_rom: ["g"], letter_ipa: "/ɣ/", letter_glyph: "\uE00e", letter_discord: ":g_:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: { "/ʝ/": allophones["before i"] },
            sound: soundPath + "2-2.mp3"
        }),
        "fe": new Character({ // 15
            name: "fe", name_ipa: "/ɸe/",
            letter: "f", letter_rom: ["f"], letter_ipa: "/ɸ/", letter_glyph: "\uE00f", letter_discord: ":f_:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: {
                "/f/": "when adjecent to 'th'",
                "/β/": "intervocalically or adjecent to z, g",
                "/v/": "when adjecent to d"
            },
            sound: soundPath + "2-3.mp3"
        }),
        "thyn": new Character({ // 16
            name: "thyn", name_ipa: "/θən̥/",
            letter: "th", letter_rom: ["th"], letter_ipa: "/θ/", letter_glyph: "\uE010", letter_discord: ":th:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: {},
            sound: soundPath + "2-4.mp3"
        }),
        "llī": new Character({ // 17
            name: "llī", name_ipa: "/ɬiː/",
            letter: "ll", letter_rom: ["ll"], letter_ipa: "/ɬ/", letter_glyph: "\uE011", letter_discord: ":ll:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: { "/ɮ/": allophones["intervoc"] },
            sound: soundPath + "2-5.mp3"
        }),

        //row 3
        "xæ": new Character({ // 18
            name: "xæ", name_ipa: "/xa/",
            letter: "x", letter_rom: ["x"], letter_ipa: "/x/", letter_glyph: "\uE012", letter_discord: ":x_:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: { "/ç/": allophones["before i"] },
            sound: soundPath + "3-0.mp3"
        }),
        "χy": new Character({ // 19
            name: "χy", name_ipa: "/χə/",
            letter: "χ", letter_rom: ["X"], letter_ipa: "/χ/", letter_glyph: "\uE013", letter_discord: ":X_:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: {},
            sound: soundPath + "3-1.mp3"
        }),
        "har": new Character({ // 20
            name: "har", name_ipa: "/hɑr/",
            letter: "h", letter_rom: ["h"], letter_ipa: "/h/", letter_glyph: "\uE014", letter_discord: ":h_:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: {},
            sound: soundPath + "3-2.mp3"
        }),
        "χħáth": new Character({ // 21
            name: "χħáth", name_ipa: "/χˤʰɑ̤ˤθ/",
            letter: "χħ", letter_rom: ["XH"], letter_ipa: "/χˤʰ/", letter_glyph: "\uE015", letter_discord: ":XH:",
            table_prop: { "size": 1.2 },
            text: mainText,
            prop: [IDS.CHARACTERS.C, IDS.CHARACTERS.P],
            allophones: {},
            sound: soundPath + "3-3.mp3"
        }),
        "ħâ": new Character({ // 22
            name: "ħâ", name_ipa: "/ħɑ̤ˤː/",
            letter: "ħ", letter_rom: ["H"], letter_ipa: "/ħ/", letter_glyph: "\uE016", letter_discord: ":H_:",
            text: mainText,
            prop: [IDS.CHARACTERS.C, IDS.CHARACTERS.P],
            allophones: {},
            sound: soundPath + "3-4.mp3"
        }),
        "rox": new Character({ // 23
            name: "rox", name_ipa: "/r̥ox/",
            letter: "r", letter_rom: ["r"], letter_ipa: "/ɾ/", letter_glyph: "\uE017", letter_discord: ":r_:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: { "/r̥/": "word-init" },
            sound: soundPath + "3-5.mp3"
        }),

        //row 4
        "lel": new Character({ // 24
            name: "lel", name_ipa: "/l̥el̪/",
            letter: "l", letter_rom: ["l"], letter_ipa: "/l̪/", letter_glyph: "\uE018", letter_discord: ":l_:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: { "/l̥/": "word-init" },
            sound: soundPath + "4-0.mp3"
        }),
        "eχ": new Character({ // 25
            name: "eχ", name_ipa: "/eχ/",
            letter: "e", letter_rom: ["e"], letter_ipa: "/e/", letter_glyph: "\uE019", letter_discord: ":e_:",
            text: mainText,
            prop: [IDS.CHARACTERS.V],
            allophones: {},
            sound: soundPath + "4-1.mp3"
        }),
        "æfu": new Character({ // 26
            name: "æfu", name_ipa: "/aɸu/",
            letter: "æ", letter_rom: ["ae"], letter_ipa: "/a/", letter_glyph: "\uE01a", letter_discord: ":ae:",
            text: mainText,
            prop: [IDS.CHARACTERS.V],
            allophones: {},
            sound: soundPath + "4-2.mp3"
        }),
        "y´": new Character({ // 27
            name: "y´", name_ipa: "/əʔ/",
            letter: "y", letter_rom: ["y"], letter_ipa: "/ə/", letter_glyph: "\uE01b", letter_discord: ":y_:",
            text: mainText,
            prop: [IDS.CHARACTERS.V],
            allophones: {},
            sound: soundPath + "4-3.mp3"
        }),
        "a´": new Character({ // 28
            name: "a´", name_ipa: "/ɑʔ/",
            letter: "a", letter_rom: ["a"], letter_ipa: "/ɑ/", letter_glyph: "\uE01c", letter_discord: ":a_:",
            text: mainText,
            prop: [IDS.CHARACTERS.V],
            allophones: { "/ɑ̤ˤ/ (á)": allophones["pyric"] },
            sound: soundPath + "4-4.mp3"
        }),
        "o´": new Character({ // 29
            name: "o´", name_ipa: "/oʔ/",
            letter: "o", letter_rom: ["o"], letter_ipa: "/o/", letter_glyph: "\uE01d", letter_discord: ":o_:",
            text: mainText,
            prop: [IDS.CHARACTERS.V],
            allophones: { "/o̤ˤ/ (ó)": allophones["pyric"] },
            sound: soundPath + "4-5.mp3"
        }),

        //row 5
        "u´": new Character({ // 30
            name: "u´", name_ipa: "/uʔ/",
            letter: "u", letter_rom: ["u"], letter_ipa: "/u/", letter_glyph: "\uE01e", letter_discord: ":u_:",
            text: mainText,
            prop: [IDS.CHARACTERS.V],
            allophones: { "/ṳˤ/ (ú)": allophones["pyric"] },
            sound: soundPath + "5-0.mp3"
        }),
        "i´": new Character({ // 31
            name: "i´", name_ipa: "/iʔ/",
            letter: "i", letter_rom: ["i"], letter_ipa: "/i/", letter_glyph: "\uE01f", letter_discord: ":i_:",
            text: mainText,
            prop: [IDS.CHARACTERS.V],
            allophones: {},
            sound: soundPath + "5-1.mp3"
        }),
        "ē´": new Character({ // 32
            name: "ē´", name_ipa: "/eːʔ/",
            letter: "ē", letter_rom: ["ee"], letter_ipa: "/eː/", letter_glyph: "\uE020", letter_discord: ":ee:",
            text: mainText,
            prop: [IDS.CHARACTERS.V],
            allophones: {},
            sound: soundPath + "5-2.mp3"
        }),
        "ā´": new Character({ // 33
            name: "ā´", name_ipa: "/ɑːʔ/",
            letter: "ā", letter_rom: ["aa"], letter_ipa: "/ɑː/", letter_glyph: "\uE021", letter_discord: ":aa:",
            text: mainText,
            prop: [IDS.CHARACTERS.V],
            allophones: { "/ɑ̤ˤː/ (â)": allophones["pyric"] },
            sound: soundPath + "5-3.mp3"
        }),
        "ō´": new Character({ // 34
            name: "ō´", name_ipa: "/oːʔ/",
            letter: "ō", letter_rom: ["oo"], letter_ipa: "/oː/", letter_glyph: "\uE022", letter_discord: ":oo:",
            text: mainText,
            prop: [IDS.CHARACTERS.V],
            allophones: { "/o̤ˤː/ (ô)": allophones["pyric"] },
            sound: soundPath + "5-4.mp3"
        }),
        "ū´": new Character({ // 35
            name: "ū´", name_ipa: "/uːʔ/",
            letter: "ū", letter_rom: ["uu"], letter_ipa: "/uː/", letter_glyph: "\uE023", letter_discord: ":uu:",
            text: mainText,
            prop: [IDS.CHARACTERS.V],
            allophones: { "/ṳˁː/ (û)": allophones["pyric"] },
            sound: soundPath + "5-5.mp3"
        }),

        //row 6
        "ī´": new Character({ // 36
            name: "ī´", name_ipa: "/iːʔ/",
            letter: "ī", letter_rom: ["ii"], letter_ipa: "/iː/", letter_glyph: "\uE024", letter_discord: ":ii:",
            text: mainText,
            prop: [IDS.CHARACTERS.V],
            allophones: {},
            sound: soundPath + "6-0.mp3"
        }),
        "má": new Character({ // 37
            name: "má", name_ipa: "/m̥ɑ̤ˤ/",
            letter: "m", letter_rom: ["m"], letter_ipa: "/m/", letter_glyph: "\uE025", letter_discord: ":m_:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: { "/m̥/": "word-init" },
            sound: soundPath + "6-1.mp3"
        }),
        "naχ": new Character({ // 38
            name: "naχ", name_ipa: "/n̥ɑχ/",
            letter: "n", letter_rom: ["n"], letter_ipa: "/n/", letter_glyph: "\uE026", letter_discord: ":n_:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: {
                "/n̥/": "word-initially, word-finally or before voicelss obstruent",
                "/n̪/": "before dentals",
                "/ŋ/": "before velars and uvulars"
            },
            sound: soundPath + "6-2.mp3"
        }),
        "yŋ": new Character({ // 39
            name: "yŋ", name_ipa: "/əŋ/",
            letter: "ŋ", letter_rom: ["ng"], letter_ipa: "/ŋ/", letter_glyph: "\uE027", letter_discord: ":ng_:",
            text: mainText,
            prop: [IDS.CHARACTERS.C],
            allophones: {
                "/ŋ̥/": "before voiceless velars",
                "/ɴ̥/": "before uvulars"
            },
            sound: soundPath + "6-3.mp3"
        }),
        "á´": new Character({ // 40
            name: "á´", name_ipa: "/ɑ̤ˤʔ/",
            letter: "á", letter_rom: ["A"], letter_ipa: "/ɑ̤ˤ/", letter_glyph: "\uE01c\uE028", letter_discord: ":a_::_pyr:",
            text: mainText + " " + pyricVowelText,
            prop: [IDS.CHARACTERS.V, IDS.CHARACTERS.P],
            table_prop: { "xoffset": 4 },
            sound: soundPath + "6-5.mp3"
        }),
        "ó´": new Character({ // 41
            name: "ó´", name_ipa: "/o̤ˤʔ/",
            letter: "ó", letter_rom: ["O"], letter_ipa: "/o̤ˤ/", letter_glyph: "\uE01d\uE028", letter_discord: ":o_::_pyr:",
            text: mainText + " " + pyricVowelText,
            prop: [IDS.CHARACTERS.V, IDS.CHARACTERS.P],
            table_prop: { "size": 0.9, "xoffset": -3 },
            sound: soundPath + "7-0.mp3"
        }),
        // row 7
        "ú´": new Character({ // 42
            name: "ú´", name_ipa: "/ṳˤʔ/",
            letter: "ú", letter_rom: ["U"], letter_ipa: "/ṳˤ/", letter_glyph: "\uE01e\uE028", letter_discord: ":u_::_pyr:",
            text: mainText + " " + pyricVowelText,
            prop: [IDS.CHARACTERS.V, IDS.CHARACTERS.P],
            table_prop: { "size": 1.1, "xoffset": 4 },
            sound: soundPath + "7-1.mp3"
        }),
        "â´": new Character({ // 43
            name: "â´", name_ipa: "/ɑ̤ˤːʔ/",
            letter: "â", letter_rom: ["AA"], letter_ipa: "/ɑ̤ˤː/", letter_glyph: "\uE021\uE028", letter_discord: ":aa::_pyr:",
            text: mainText + " " + pyricVowelText,
            prop: [IDS.CHARACTERS.V, IDS.CHARACTERS.P],
            table_prop: { "xoffset": 5 },
            sound: soundPath + "7-2.mp3"
        }),
        "ô´": new Character({ // 44
            name: "ô´", name_ipa: "/o̤ˤːʔ/",
            letter: "ô", letter_rom: ["OO"], letter_ipa: "/o̤ˤː/", letter_glyph: "\uE022\uE028", letter_discord: ":oo::_pyr:",
            text: mainText + " " + pyricVowelText,
            prop: [IDS.CHARACTERS.V, IDS.CHARACTERS.P],
            table_prop: { "size": 1.2, "xoffset": 4 },
            sound: soundPath + "7-3.mp3"
        }),
        "û´": new Character({ // 45
            name: "û´", name_ipa: "/ṳˤːʔ/",
            letter: "û", letter_rom: ["UU"], letter_ipa: "/ṳˤː/", letter_glyph: "\uE023\uE028", letter_discord: ":uu::_pyr:",
            text: mainText + " " + pyricVowelText,
            prop: [IDS.CHARACTERS.V, IDS.CHARACTERS.P],
            table_prop: { "size": 0.9, "xoffset": -4 },
            sound: soundPath + "7-4.mp3"
        }),
        "q̇em": new Character({ // 46
            name: "q̇em", name_ipa: "/ʡem/",
            letter: "", letter_rom: ["#"], letter_ipa: "", letter_glyph: "\uE029", letter_discord: ":Qem:",
            text: `pronounced {name_ipa}, unlike most of the other symbols, this one doesn"t have a direct translation to a romanized way of writing. \n
        In draconic the symbol has three different uses, it can be used as a rough equivelent of a hyphen, which means it can be optionally used to connect compounds or conjoin propositions to their nouns.\n
        It can also stand in for the number 0, or proceed a string of letters to indicate that they are numbers.\n
        In shorthand writing, it can also stand in for the word q̇e that means "none"`,
            prop: [IDS.CHARACTERS.D],
            table_prop: { "size": 0.6 },
        }),
        "seleŋ": new Character({ // 47
            name: "seleŋ", name_ipa: "/s̠el̪eŋ/",
            letter: "", letter_rom: [""], letter_ipa: "", letter_glyph: "\uE02a", letter_discord: ":seleng:",
            text: `pronounced {name_ipa}, unlike most of the other symbols, this one doesn"t have a direct translation to a romanized way of writing. \n
        It can however be used as a rough equivalent of a quotation mark or an asterisk. It can optionally be used to mark parentheticals, quotes, proper nouns, or even just for emphasis. \n
        Though it is seldom used in formal writing.`,
            prop: [IDS.CHARACTERS.D],
        }),
        //row 8
        "q̇ħóll": new Character({ // 48
            name: "q̇ħóll", name_ipa: "/ʡho̤ˤɬ/",
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
            sound: soundPath + "6-4.mp3"
        }),
        " ": new Character({ // 49
            name: " ", name_ipa: "",
            letter: " ", letter_rom: [" "], letter_ipa: "", letter_glyph: " ", letter_discord: "   ",
            text: "SPACEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
            prop: [IDS.CHARACTERS.I],
        })
    },
    get FLAT() { return Object.values(this.MAP); },

    random(vowels = true, consonants = true, pyric_vowels = true, pyric_consonants = true) {
        const pool = [];

        for (const e of CHARACTERS.FLAT) {
            if (!e) continue;

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
        text = text.replace(/<a?:([^:>]+):\d+>/g, ":$1:")

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

    entriesToField(entries, field, ignore_optional = false) {
        return entries.filter(e => !(ignore_optional && e.prop?.includes(IDS.CHARACTERS.O))).map(e => Array.isArray(e[field]) ? e[field][0] || "" : e[field] || "").join("");
    },

    textToEntriesByAnyText(text) { return CHARACTERS.entriesFromField(text, ["letter_discord", "letter", "letter_rom", "letter_glyph"]); },

    textToEntriesByText(text) { return CHARACTERS.entriesFromField(text, ["letter"]); },

    textToEntriesByRom(text) { return CHARACTERS.entriesFromField(text, ["letter_rom"]); },

    textToEntriesByDiscord(text) { return CHARACTERS.entriesFromField(text, ["letter_discord"]); },

    textToEntriesByGlyph(text) { return CHARACTERS.entriesFromField(text, ["letter_glyph"]); },

    entriesToText(entries, ignore_optional = false) { return CHARACTERS.entriesToField(entries, "letter", ignore_optional); },

    entriesToRom(entries, ignore_optional = false) { return CHARACTERS.entriesToField(entries, "letter_rom", ignore_optional); },

    entriesToDiscord(entries, ignore_optional = false) { return CHARACTERS.entriesToField(entries, "letter_discord", ignore_optional); },

    entriesToGlyphs(entries, ignore_optional = false) { return CHARACTERS.entriesToField(entries, "letter_glyph", ignore_optional); },

    getPyricEquivalent(entry) {
        if (!entry || !entry.prop.includes(IDS.CHARACTERS.V)) return null;
        return CHARACTERS.FLAT.find(e =>
            e.prop.includes(IDS.CHARACTERS.V) &&
            e.prop.includes(IDS.CHARACTERS.P) &&
            e.letter_rom.some(l => l.toLowerCase() === entry.letter_rom[0].toLowerCase())
        ) || null;
    }
}

function description(entry) {
    if (!entry.text) return;
    return entry.text
        .replaceAll('{name}', entry.name || '')
        .replaceAll('{name_ipa}', entry.name_ipa || '')
        .replaceAll('{letter_rom}', entry.letter_rom?.join('" or a "') || '')
        .replaceAll('{letter_ipa}', entry.letter_ipa || '')
        .replaceAll('{letter}', entry.letter || '');
}

Object.entries(CHARACTERS.MAP).forEach(([key, value]) => {
    value.description = description(value);
});

// todo: move somewhere else
function combineGenders(entry) {
    const defMap = {}
    for (const [gender, def] of Object.entries(entry)) {
        if (!defMap[def]) defMap[def] = []
        defMap[def].push(gender)
    }

    const result = {}
    for (const [def, genders] of Object.entries(defMap)) {
        const animCheck = IDS.GROUPS_UNPACKED[IDS.GENDER_GROUPS.ANIM].every(g => genders.includes(g))
        const inanimCheck = IDS.GROUPS_UNPACKED[IDS.GENDER_GROUPS.INANIM].every(g => genders.includes(g))
        const allCheck = IDS.GROUPS_UNPACKED[IDS.GENDER_GROUPS.A].every(g => genders.includes(g))

        if (allCheck) result[IDS.GENDER_GROUPS.A] = def
        else if (animCheck) result[IDS.GENDER_GROUPS.ANIM] = def
        else if (inanimCheck) result[IDS.GENDER_GROUPS.INANIM] = def
        else result[genders.join(", ")] = def
    }
    return result
}


// ---------------------------- AFFIXES ----------------------------

function getAllValues(obj) {
    return Object.values(obj).flatMap(val =>
        typeof val === 'object' && val !== null ? getAllValues(val) : val
    );
}

function generateSuffixMatches(suffixes, type) {
    const result = {};
    const suffixPaths = {};
    if (type === IDS.WORDS.N || type === IDS.WORDS.ADJ) {
        for (const mood in suffixes) {
            for (const gender in suffixes[mood]) {
                for (const num in suffixes[mood][gender]) {
                    for (const decl in suffixes[mood][gender][num]) {
                        const suf = suffixes[mood][gender][num][decl];
                        if (!suf) continue;
                        if (!suffixPaths[suf]) suffixPaths[suf] = [];
                        suffixPaths[suf].push([mood, gender, num, Number(decl)]);
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
                    if (!suffixPaths[suf]) suffixPaths[suf] = [];
                    suffixPaths[suf].push([Number(person), num, gender]);
                }
            }
        }
    }
    for (const suf in suffixPaths) {
        const entries = CHARACTERS.textToEntriesByAnyText(suf);
        let variants;
        if (!entries?.length) {
            console.warn(`Could not parse suffix: ${suf}`);
            continue
        }
        const firstEntry = entries[0];
        if (firstEntry.prop?.includes(IDS.CHARACTERS.O)) variants = [CHARACTERS.entriesToText(entries), CHARACTERS.entriesToText(entries, true)];
        else if (firstEntry.prop?.includes(IDS.CHARACTERS.V)) {
            const pyric = CHARACTERS.getPyricEquivalent(firstEntry);
            variants = pyric != null ? [suf, CHARACTERS.entriesToText([pyric, ...entries.slice(1)])] : [suf];
        } else variants = [suf];
        result[suf] = new AffixMatch(type, suf, variants, suffixPaths[suf]);
    }
    return result;
}

function generatePrefixMatches(prefixesMap, type) {
    const result = {};
    const prefixPaths = {};
    for (const person in prefixesMap) {
        for (const num in prefixesMap[person]) {
            for (const gender in prefixesMap[person][num]) {
                const pref = prefixesMap[person][num][gender];
                if (!pref) continue;
                if (!prefixPaths[pref]) {
                    prefixPaths[pref] = [];
                }
                prefixPaths[pref].push([Number(person), num, gender]);
            }
        }
    }
    for (const pref in prefixPaths) {
        const entries = CHARACTERS.textToEntriesByAnyText(pref);
        let variants;
        if (entries?.length) {
            const lastEntry = entries[entries.length - 1];
            variants = lastEntry.prop?.includes(IDS.CHARACTERS.V) ? [pref + CHARACTERS.MAP["ax"].letter, pref] : [pref];
        } else {
            variants = [pref];
        }
        result[pref] = new AffixMatch(type, pref, variants, prefixPaths[pref]);
    }
    return result;
}

function generateDeterminerMatches(determinersMap, type) {
    const result = {};

    for (const gender in determinersMap) {
        const det = determinersMap[gender];
        if (det) {
            result[det] = new AffixMatch(type, det, [det], [[gender]]);
        }
    }

    return result;
}

AFFIXES = {
    SUFFIXES: {
        [IDS.WORDS.N]: {
            MAP: {
                [IDS.MOODS.D]: {
                    [IDS.GENDERS.E]: {
                        [IDS.NUMBERS.S]: { 1: "ēn", 2: "æn", 3: "ēn", 4: "ħán" },
                        [IDS.NUMBERS.D]: { 1: "(ē)χen", 2: "(y)χen", 3: "(o)χen", 4: "ħóχħon" },
                        [IDS.NUMBERS.P]: { 1: "illyn", 2: "ān", 3: "ē'yn", 4: "q̇yn" }
                    },
                    [IDS.GENDERS.R]: {
                        [IDS.NUMBERS.S]: { 1: "ēf", 2: "(a)xef", 3: "lef", 4: "lef" },
                        [IDS.NUMBERS.D]: { 1: "eχef", 2: "hyf", 3: "(o)χef", 4: "(o)χef" },
                        [IDS.NUMBERS.P]: { 1: "yf", 2: "hyf", 3: "'yf", 4: "'yf" }
                    },
                    [IDS.GENDERS.MON]: {
                        [IDS.NUMBERS.S]: { 1: "ô", 2: "ô", 3: "ô", 4: "ô" },
                        [IDS.NUMBERS.D]: { 1: "yħq̇ô", 2: "q̇ô", 3: "q̇ô", 4: "ûq̇ô" },
                        [IDS.NUMBERS.P]: { 1: "oħô", 2: "q̇ô", 3: "q̇ô", 4: "ûq̇ô" }
                    },
                    [IDS.GENDERS.I]: {
                        [IDS.NUMBERS.S]: { 1: "llūl", 2: "cūl", 3: "cūl", 4: "cūl" },
                        [IDS.NUMBERS.D]: { 1: "(æ)llūl", 2: "(')illūl", 3: "(')illūl", 4: "(')illūl" },
                        [IDS.NUMBERS.P]: { 1: "(æ)llūl", 2: "(')illūl", 3: "(')illūl", 4: "(')illūl" } // /\(/o.o\)/\ - Spooky the spider
                    },
                    [IDS.GENDERS.MAG]: {
                        [IDS.NUMBERS.S]: { 1: "(ō)χ", 2: "huχ", 3: "huχ", 4: "q̇ħúχ" },
                        [IDS.NUMBERS.D]: { 1: "uχ", 2: "'ūχ", 3: "'ūχ", 4: "(')ūχ" },
                        [IDS.NUMBERS.P]: { 1: "uχ", 2: "'ūχ", 3: "'ūχ", 4: "(')ūχ" }
                    },
                    [IDS.GENDERS.MUN]: {
                        [IDS.NUMBERS.S]: { 1: "(e)rk", 2: "tyk", 3: "tyk", 4: "(á)rk" },
                        [IDS.NUMBERS.D]: { 1: "ōrk", 2: "ōrk", 3: "ōrk", 4: "(')urk" },
                        [IDS.NUMBERS.P]: { 1: "ōrk", 2: "ōrk", 3: "ōrk", 4: "(')urk" }
                    },
                    [IDS.GENDERS.A]: {
                        [IDS.NUMBERS.S]: { 1: "(y)q̇", 2: "(o)q̇", 3: "(o)q̇", 4: "(ú)ħáq̇" },
                        [IDS.NUMBERS.D]: { 1: "āq̇", 2: "ōq̇", 3: "ōq̇", 4: "ūq̇" },
                        [IDS.NUMBERS.P]: { 1: "āq̇", 2: "ōq̇", 3: "ōq̇", 4: "ūq̇" }
                    }
                },
                [IDS.MOODS.R]: {
                    [IDS.GENDERS.E]: {
                        [IDS.NUMBERS.S]: { 1: "oħân", 2: "ħân", 3: "ēqân", 4: "qân" },
                        [IDS.NUMBERS.D]: { 1: "ħân", 2: "(ō)n", 3: "on", 4: "ħûn" },
                        [IDS.NUMBERS.P]: { 1: "illyrn", 2: "(ō)rn", 3: "ē'yrn", 4: "q̇yrn" }
                    },
                    [IDS.GENDERS.R]: {
                        [IDS.NUMBERS.S]: { 1: "oħâf", 2: "ħâf", 3: "(o)qâf", 4: "(o)qâf" },
                        [IDS.NUMBERS.D]: { 1: "īllyf", 2: "(')ūllef", 3: "yf", 4: "yf" },
                        [IDS.NUMBERS.P]: { 1: "īllyf", 2: "(')ūllef", 3: "ūlef", 4: "'ūlef" }
                    },
                    [IDS.GENDERS.MON]: {
                        [IDS.NUMBERS.S]: { 1: "oħô", 2: "qâħó", 3: "qâħó", 4: "ô" },
                        [IDS.NUMBERS.D]: { 1: "ūħó", 2: "q̇ô", 3: "q̇ô", 4: "ûq̇ô" },
                        [IDS.NUMBERS.P]: { 1: "ōq̇ô", 2: "q̇ô", 3: "q̇ô", 4: "ûq̇ô" }
                    },
                    [IDS.GENDERS.I]: {
                        [IDS.NUMBERS.S]: { 1: "llūl", 2: "qâllūl", 3: "qâllūl", 4: "qâllūl" },
                        [IDS.NUMBERS.D]: { 1: "(y)ll'ūl", 2: "(')llūl", 3: "(')llūl", 4: "(')llūl" },
                        [IDS.NUMBERS.P]: { 1: "(y)ll'ūl", 2: "(')ūcūl", 3: "(')ūcūl", 4: "(')ūcūl" }
                    },
                    [IDS.GENDERS.MAG]: {
                        [IDS.NUMBERS.S]: { 1: "(ō)ħúχħ", 2: "(y)q̇ħôχ", 3: "(y)q̇ħôχ", 4: "q̇ħôχ" },
                        [IDS.NUMBERS.D]: { 1: "(a)lluχ", 2: "(y)lūrχ", 3: "(y)lūrχ", 4: "(')ūrχ" },
                        [IDS.NUMBERS.P]: { 1: "(a)lluχ", 2: "(y)lūrχ", 3: "(y)lūrχ", 4: "(')ūrχ" }
                    },
                    [IDS.GENDERS.MUN]: {
                        [IDS.NUMBERS.S]: { 1: "(o)ħárk", 2: "ħárk", 3: "ħárk", 4: "q̇ħárk" },
                        [IDS.NUMBERS.D]: { 1: "ōrk", 2: "ōrk", 3: "ōrk", 4: "(')urk" },
                        [IDS.NUMBERS.P]: { 1: "ōrk", 2: "ōrk", 3: "ōrk", 4: "(')urk" }
                    },  // /\(/o.o\)/\ - Spooky the spider
                    [IDS.GENDERS.A]: {
                        [IDS.NUMBERS.S]: { 1: "aħôq̇", 2: "(y)q̇ħôq̇", 3: "(y)q̇ħôq̇", 4: "áq̇ħôq̇" },
                        [IDS.NUMBERS.D]: { 1: "āq̇", 2: "ōq̇", 3: "ōq̇", 4: "ūq̇" },
                        [IDS.NUMBERS.P]: { 1: "āq̇", 2: "ōq̇", 3: "ōq̇", 4: "ūq̇" }
                    }
                }
            },
            FLAT: {},
            MATCHES: {}
        },
        [IDS.WORDS.V]: {
            MAP: {
                1: {
                    [IDS.NUMBERS.S]: { [IDS.GENDERS.E]: "(o)n", [IDS.GENDERS.R]: "(y)f", [IDS.GENDERS.MON]: "(u)ħó", [IDS.GENDERS.I]: "llul", [IDS.GENDERS.MAG]: "(u)χ", [IDS.GENDERS.MUN]: "(u)r", [IDS.GENDERS.A]: "(y)q̇" },
                    [IDS.NUMBERS.D]: { [IDS.GENDERS.E]: "(')æ­n", [IDS.GENDERS.R]: "(')æf", [IDS.GENDERS.MON]: "(')ô", [IDS.GENDERS.I]: "(')allūl", [IDS.GENDERS.MAG]: "(')ōχ", [IDS.GENDERS.MUN]: "(')ar", [IDS.GENDERS.A]: "(y)q̇" },
                    [IDS.NUMBERS.P]: { [IDS.GENDERS.E]: "(')æ­n", [IDS.GENDERS.R]: "(')æf", [IDS.GENDERS.MON]: "(')ô", [IDS.GENDERS.I]: "(')allūl", [IDS.GENDERS.MAG]: "(')ōχ", [IDS.GENDERS.MUN]: "(')ar", [IDS.GENDERS.A]: "(y)q̇" }
                },
                2: {
                    [IDS.NUMBERS.S]: { [IDS.GENDERS.E]: "(u)n", [IDS.GENDERS.R]: "(u)f", [IDS.GENDERS.MON]: "(u)ħó", [IDS.GENDERS.I]: "llul", [IDS.GENDERS.MAG]: "(u)χ", [IDS.GENDERS.MUN]: "(u)r", [IDS.GENDERS.A]: "(u)q̇" },
                    [IDS.NUMBERS.D]: { [IDS.GENDERS.E]: "(o)nēn", [IDS.GENDERS.R]: "nef", [IDS.GENDERS.MON]: "(á)ħó", [IDS.GENDERS.I]: "(á)llul", [IDS.GENDERS.MAG]: "(ó)nōχ", [IDS.GENDERS.MUN]: "(á)r", [IDS.GENDERS.A]: "ħóq̇" },
                    [IDS.NUMBERS.P]: { [IDS.GENDERS.E]: "ħen", [IDS.GENDERS.R]: "ħáf", [IDS.GENDERS.MON]: "(á)ħó", [IDS.GENDERS.I]: "(á)llul", [IDS.GENDERS.MAG]: "(ó)nōχ", [IDS.GENDERS.MUN]: "(á)r", [IDS.GENDERS.A]: "ħóq̇" }
                },
                3: {
                    [IDS.NUMBERS.S]: { [IDS.GENDERS.E]: "tón", [IDS.GENDERS.R]: "ħyf", [IDS.GENDERS.MON]: "(o)ħó", [IDS.GENDERS.I]: "llul", [IDS.GENDERS.MAG]: "ħuχ", [IDS.GENDERS.MUN]: "(u)r", [IDS.GENDERS.A]: "(ú)q̇" },
                    [IDS.NUMBERS.D]: { [IDS.GENDERS.E]: "(q̇)ân", [IDS.GENDERS.R]: "(y)q̇ħáf", [IDS.GENDERS.MON]: "ħó", [IDS.GENDERS.I]: "(ú)cul", [IDS.GENDERS.MAG]: "ħúχ", [IDS.GENDERS.MUN]: "(ú)r", [IDS.GENDERS.A]: "(u)q̇" },
                    [IDS.NUMBERS.P]: { [IDS.GENDERS.E]: "tun", [IDS.GENDERS.R]: "if", [IDS.GENDERS.MON]: "ħó", [IDS.GENDERS.I]: "(ú)cul", [IDS.GENDERS.MAG]: "ħúχ", [IDS.GENDERS.MUN]: "(ú)r", [IDS.GENDERS.A]: "(u)q̇" }
                }
            },
            FLAT: {},
            MATCHES: {}
        },
        [IDS.WORDS.ADJ]: {
            get MAP() { return AFFIXES.SUFFIXES[IDS.WORDS.N].MAP; },
            get FLAT() { return AFFIXES.SUFFIXES[IDS.WORDS.N].FLAT; },
            MATCHES: {}
        },
        [IDS.WORDS.DET]: {
            MAP: {
                [IDS.GENDERS.E]: "hyn",
                [IDS.GENDERS.R]: "hyf",
                [IDS.GENDERS.MON]: "ħó",
                [IDS.GENDERS.I]: "llīl",
                [IDS.GENDERS.MAG]: "huχ",
                [IDS.GENDERS.MUN]: "thok",
                [IDS.GENDERS.A]: "hoq̇"
            },
            FLAT: {},
            MATCHES: {} // TODO: edit this thingi
        },

        match(input, map, returnAll = true) {
            return AFFIXES.match(input, map, false, returnAll)
        },

        connectGetEntries(text, suffix) {
            return AFFIXES.connect("", text, suffix)
        },

        connect(text, suffix) {
            return CHARACTERS.entriesToText(AFFIXES.connect("", text, suffix))
        },

        MATCHES: {}
    },
    PREFIXES: {
        [IDS.WORDS.V]: {
            MAP: {
                1: {
                    [IDS.NUMBERS.S]: { [IDS.GENDERS.E]: "xen", [IDS.GENDERS.R]: "xef", [IDS.GENDERS.MON]: "χħô", [IDS.GENDERS.I]: "xellu", [IDS.GENDERS.MAG]: "xo", [IDS.GENDERS.MUN]: "xyr", [IDS.GENDERS.A]: "xy" },
                    [IDS.NUMBERS.D]: { [IDS.GENDERS.E]: "xyn", [IDS.GENDERS.R]: "xyf", [IDS.GENDERS.MON]: "xóħ", [IDS.GENDERS.I]: "llu", [IDS.GENDERS.MAG]: "ho", [IDS.GENDERS.MUN]: "ry", [IDS.GENDERS.A]: "hy" },
                    [IDS.NUMBERS.P]: { [IDS.GENDERS.E]: "hen", [IDS.GENDERS.R]: "hef", [IDS.GENDERS.MON]: "hô", [IDS.GENDERS.I]: "llu", [IDS.GENDERS.MAG]: "ho", [IDS.GENDERS.MUN]: "ry", [IDS.GENDERS.A]: "hy" }
                },
                2: {
                    [IDS.NUMBERS.S]: { [IDS.GENDERS.E]: "syn", [IDS.GENDERS.R]: "sy", [IDS.GENDERS.MON]: "sô", [IDS.GENDERS.I]: "sucu", [IDS.GENDERS.MAG]: "su", [IDS.GENDERS.MUN]: "syr", [IDS.GENDERS.A]: "su" },
                    [IDS.NUMBERS.D]: { [IDS.GENDERS.E]: "són", [IDS.GENDERS.R]: "sónlli", [IDS.GENDERS.MON]: "sónq̇ħó", [IDS.GENDERS.I]: "sóncu", [IDS.GENDERS.MAG]: "thâ", [IDS.GENDERS.MUN]: "thár", [IDS.GENDERS.A]: "thá" },
                    [IDS.NUMBERS.P]: { [IDS.GENDERS.E]: "tháħ", [IDS.GENDERS.R]: "tháll", [IDS.GENDERS.MON]: "tháq̇ħó", [IDS.GENDERS.I]: "thácu", [IDS.GENDERS.MAG]: "thâ", [IDS.GENDERS.MUN]: "thár", [IDS.GENDERS.A]: "thá" }
                },
                3: {
                    [IDS.NUMBERS.S]: { [IDS.GENDERS.E]: "ten", [IDS.GENDERS.R]: "tolli", [IDS.GENDERS.MON]: "tô", [IDS.GENDERS.I]: "tócu", [IDS.GENDERS.MAG]: "toħ", [IDS.GENDERS.MUN]: "try", [IDS.GENDERS.A]: "to" },
                    [IDS.NUMBERS.D]: { [IDS.GENDERS.E]: "q̇yn", [IDS.GENDERS.R]: "q̇yll", [IDS.GENDERS.MON]: "q̇ħó", [IDS.GENDERS.I]: "q̇ácu", [IDS.GENDERS.MAG]: "tū", [IDS.GENDERS.MUN]: "tur", [IDS.GENDERS.A]: "tu" },
                    [IDS.NUMBERS.P]: { [IDS.GENDERS.E]: "tyn", [IDS.GENDERS.R]: "tyf", [IDS.GENDERS.MON]: "tuħ", [IDS.GENDERS.I]: "tīll", [IDS.GENDERS.MAG]: "tū", [IDS.GENDERS.MUN]: "tur", [IDS.GENDERS.A]: "tu" }
                }
            },
            FLAT: {},
            MATCHES: {}
        },

        match(input, map, returnAll = false) {
            return AFFIXES.match(input, map, true, returnAll)
        },

        connectGetEntries(text, prefix) {
            return AFFIXES.connect(prefix, text, "")
        },

        connect(text, prefix) {
            return CHARACTERS.entriesToText(AFFIXES.connect(prefix, text, ""))
        },

        MATCHES: {}
    },

    match(input, map, isPrefix = false, returnAll = true) {
        let best = null;
        let bestLen = 0;
        const matches = [];

        for (const [key, val] of Object.entries(map)) {
            if (val instanceof AffixMatch) {
                const matchedVariants = [];
                for (const v of val.variants) {
                    if (typeof v !== "string") continue;
                    if (isPrefix ? input.startsWith(v) : input.endsWith(v)) matchedVariants.push(v);
                }

                if (matchedVariants.length === 0) continue;

                const longestMatch = Math.max(...matchedVariants.map(v => v.length));
                if (returnAll) matches.push(new AffixMatch(val.type, val.affix, matchedVariants, val.paths));
                else if (longestMatch > bestLen) {
                    best = new AffixMatch(val.type, val.affix, matchedVariants, val.paths);
                    bestLen = longestMatch;
                }
                continue;
            }

            const isMatch = isPrefix ? input.startsWith(key) : input.endsWith(key);
            if (isMatch) {
                if (returnAll) {
                    matches.push(val);
                } else if (key.length > bestLen) {
                    best = val;
                    bestLen = key.length;
                }
            }
        }

        if (returnAll) {
            if (matches.length === 0) return null;

            return matches.sort((a, b) => {
                const getLen = (item) => {
                    if (item instanceof AffixMatch) return Math.max(...item.variants.map(v => v.length));
                    return typeof item === "string" ? item.length : (item.affix ? item.affix.length : 0);
                };
                return getLen(b) - getLen(a);
            });
        }

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
            if (last_prefix && (first_text.prop.includes(IDS.CHARACTERS.V) || last_prefix == first_text)) {
                prefix_entries.push(CHARACTERS.MAP["ax"]);
            }

        }

        if (suffix_entries) {
            const last_text = text_entries[text_entries.length - 1];
            let first_suffix = suffix_entries[0];
            if (last_text == first_suffix) {
                suffix_entries.unshift(CHARACTERS.MAP["ax"]);
            }

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

    connectGetEntries(prefix = "", text = "", suffix = "") {
        const entries = AFFIXES.connectSplit(prefix, text, suffix);
        return entries.flat();
    },

    connect(prefix = "", text = "", suffix = "") {
        return CHARACTERS.entriesToText(AFFIXES.connectGetEntries(prefix, text, suffix));
    }
}

AFFIXES.SUFFIXES[IDS.WORDS.N].FLAT = getAllValues(AFFIXES.SUFFIXES[IDS.WORDS.N].MAP);
AFFIXES.SUFFIXES[IDS.WORDS.N].MATCHES = generateSuffixMatches(AFFIXES.SUFFIXES[IDS.WORDS.N].MAP, IDS.WORDS.N);
AFFIXES.SUFFIXES[IDS.WORDS.V].FLAT = getAllValues(AFFIXES.SUFFIXES[IDS.WORDS.V].MAP);
AFFIXES.SUFFIXES[IDS.WORDS.V].MATCHES = generateSuffixMatches(AFFIXES.SUFFIXES[IDS.WORDS.V].MAP, IDS.WORDS.V);
AFFIXES.SUFFIXES[IDS.WORDS.ADJ].MATCHES = generateSuffixMatches(AFFIXES.SUFFIXES[IDS.WORDS.ADJ].MAP, IDS.WORDS.ADJ);
AFFIXES.SUFFIXES[IDS.WORDS.DET].FLAT = getAllValues(AFFIXES.SUFFIXES[IDS.WORDS.DET].MAP);
AFFIXES.SUFFIXES[IDS.WORDS.DET].MATCHES = generateDeterminerMatches(AFFIXES.SUFFIXES[IDS.WORDS.DET].MAP, IDS.WORDS.DET);
AFFIXES.PREFIXES[IDS.WORDS.V].FLAT = getAllValues(AFFIXES.PREFIXES[IDS.WORDS.V].MAP);
AFFIXES.PREFIXES[IDS.WORDS.V].MATCHES = generatePrefixMatches(AFFIXES.PREFIXES[IDS.WORDS.V].MAP, IDS.WORDS.V);

AFFIXES.SUFFIXES.MATCHES = {
    ...AFFIXES.SUFFIXES[IDS.WORDS.V].MATCHES,
    ...AFFIXES.SUFFIXES[IDS.WORDS.ADJ].MATCHES,
    ...AFFIXES.SUFFIXES[IDS.WORDS.N].MATCHES,
    ...AFFIXES.SUFFIXES[IDS.WORDS.DET].MATCHES
};
AFFIXES.PREFIXES.MATCHES = {
    ...AFFIXES.PREFIXES[IDS.WORDS.V].MATCHES
};

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

const VARIATION_MAP = (() => {
    const couples = [
        ["'", "`", "'"],
        ["a", "ā", "á", "à", "â", "aa"],
        ["o", "ō", "ó", "ò", "ô", "oo"],
        ["u", "ū", "ú", "ù", "û", "uu"],
        ["i", "ī", "ii"],
        ["e", "ē", "ee"],
        ["ae", "æ"],
        ["ng", "ŋ"],
        ["Q", "q̇"],
        ["H", "ħ"],
        ["X", "χ"]
    ];
    const map = new Map();
    for (const g of couples) {
        for (const c of g) map.set(c.toLowerCase(), g.map(x => x.toLowerCase()));
    }
    return map;
})();

function generateVariations(str) {
    function expand(s, i = 0) {
        if (i >= s.length) return [s];
        for (let len = Math.min(3, s.length - i); len >= 1; len--) {
            const sub = s.slice(i, i + len);
            const group = VARIATION_MAP.get(sub);
            if (group) {
                const rest = expand(s, i + len);
                return group.flatMap(v => rest.map(r => v + r));
            }
        }
        return expand(s, i + 1).map(r => s[i] + r);
    }
    return expand(str);
}

function charTriples(str, accurate = false) {
    const triples = new Set();
    const variations = accurate ? generateVariations(str) : [str];
    for (const v of variations) {
        if (v.length > 3) {
            for (let i = 0; i < v.length - 2; i++) triples.add(v.slice(i, i + 3));
        } else triples.add(v);
    }
    return triples;
}

function scoreTriples(qTrip, qTripBasic, wordBoundaryRegex, q, text) {
    const tTrip = charTriples(text);
    let common = 0;
    for (const tri of qTrip) {
        if (tTrip.has(tri)) common++;
    }
    let score = common / Math.max(1, qTripBasic.size) * 200;
    if (text === q) score += 300;
    else if (text.startsWith(q)) score += 100;
    else {
        const exactMatches = (text.match(wordBoundaryRegex) || []).length;
        score += exactMatches * 70;
        if (exactMatches === 0 && text.includes(q)) score += 10;
    }
    return score + 20 / Math.max(1, text.length);
}

function fuzzyFetch(query, list, is_word, limit = 5) {
    const q = query.toLowerCase();
    const qTrip = charTriples(q, true);
    const qTripBasic = charTriples(q);
    const wordBoundaryRegex = new RegExp(`\\b${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
    const results = [];
    for (const item of list) {
        let variants = is_word ? item.splitForms() : [item.definition];
        if (!Array.isArray(variants)) variants = [variants];
        let score = 0;
        for (const variant of variants) score = Math.max(score, scoreTriples(qTrip, qTripBasic, wordBoundaryRegex, q, String(variant).toLowerCase()));
        if (score > 0) results.push({ item, score });
    }
    results.sort((a, b) => b.score - a.score);
    return results.slice(0, limit).map(r => r.item);
}

function createWordCategory(extras = {}) {
    return {
        MAP: {},
        FLAT: [],
        fetch(keyword) { return basicSearch(keyword, this.FLAT); },
        fetchByDefinition(def) { return basicSearchByGender(def, this.FLAT); },
        random() { return this.FLAT[Math.floor(Math.random() * this.FLAT.length)]; },
        fuzzyFetchByDefinition(def, limit = 5) { return fuzzyFetch(def, this.FLAT, false, limit); },
        fuzzyFetchByWord(word, limit = 5) { return fuzzyFetch(word, this.FLAT, true, limit); },
        ...extras
    };
}

function unpack(entry) {
    if (!(entry instanceof Grouped)) return [entry];
    const words = Object.values(entry.values);
    if (entry instanceof MultiDeclensional) return words;
    return words.flatMap(unpack);
}

DICTIONARY = {
    [IDS.WORDS.N]: createWordCategory({ SUFFIXES: AFFIXES.SUFFIXES[IDS.WORDS.N] }),
    [IDS.WORDS.V]: createWordCategory({ SUFFIXES: AFFIXES.SUFFIXES[IDS.WORDS.V], PREFIXES: AFFIXES.PREFIXES[IDS.WORDS.V] }),
    [IDS.WORDS.ADJ]: createWordCategory({ SUFFIXES: AFFIXES.SUFFIXES[IDS.WORDS.ADJ] }),
    [IDS.WORDS.ADV]: createWordCategory(),
    [IDS.WORDS.AUX]: createWordCategory(),
    [IDS.WORDS.PP]: createWordCategory(),
    [IDS.WORDS.PART]: createWordCategory(),
    [IDS.WORDS.DET]: createWordCategory({
        SUFFIXES: AFFIXES.SUFFIXES[IDS.WORDS.DET],
        fetch(keyword) { return basicSearch(keyword, this.FLAT) || this.IRREGULARS.fetch(keyword); },
        fuzzyFetchByWord(word, limit = 5) {
            const std = fuzzyFetch(word, this.FLAT, true, limit);
            const irr = this.IRREGULARS.fuzzyFetchByWord(word, limit);
            return [...std, ...irr].slice(0, limit);
        },
        IRREGULARS: {
            MAP: {
                [IDS.DET_TYPES.NA]: new Determiner("q̇e", "Negative Article"),
                [IDS.GENDERS.E]: {
                    [IDS.DET_TYPES.DA]: { [IDS.NUMBERS.S]: new Determiner("tyn", "Definite Article, Singular, Exalted"), [IDS.NUMBERS.P]: new Determiner("tōn", "Definite Article, Plural, Exalted") },
                    [IDS.DET_TYPES.PDEM]: { [IDS.NUMBERS.S]: new Determiner("sēn", "Proximal Demonstrative, Singular, Exalted"), [IDS.NUMBERS.P]: new Determiner("sōn", "Proximal Demonstrative, Plural, Exalted") },
                    [IDS.DET_TYPES.DDEM]: { [IDS.NUMBERS.S]: new Determiner("lēn", "Distal Demonstrative, Singular, Exalted"), [IDS.NUMBERS.P]: new Determiner("li'ōn", "Distal Demonstrative, Plural, Exalted") },
                },
                [IDS.GENDERS.R]: {
                    [IDS.DET_TYPES.DA]: { [IDS.NUMBERS.S]: new Determiner("tyf", "Definite Article, Singular, Rational"), [IDS.NUMBERS.P]: new Determiner("tōf", "Definite Article, Plural, Rational") },
                    [IDS.DET_TYPES.PDEM]: { [IDS.NUMBERS.S]: new Determiner("sēf", "Proximal Demonstrative, Singular, Exalted"), [IDS.NUMBERS.P]: new Determiner("sōf", "Proximal Demonstrative, Plural, Rational") },
                    [IDS.DET_TYPES.DDEM]: { [IDS.NUMBERS.S]: new Determiner("lēf", "Distal Demonstrative, Singular, Exalted"), [IDS.NUMBERS.P]: new Determiner("li'ōf", "Distal Demonstrative, Plural, Rational") },
                },
                [IDS.GENDERS.MON]: {
                    [IDS.DET_TYPES.DA]: { [IDS.NUMBERS.S]: new Determiner("tó", "Definite Article, Singular, Monstrous"), [IDS.NUMBERS.P]: new Determiner("tô", "Definite Article, Plural, Monstrous") },
                    [IDS.DET_TYPES.PDEM]: { [IDS.NUMBERS.S]: new Determiner("sēħó", "Proximal Demonstrative, Singular, Monstrous"), [IDS.NUMBERS.P]: new Determiner("sōħó", "Proximal Demonstrative, Plural, Monstrous") },
                    [IDS.DET_TYPES.DDEM]: { [IDS.NUMBERS.S]: new Determiner("lēħó", "Distal Demonstrative, Singular, Monstrous"), [IDS.NUMBERS.P]: new Determiner("li'ô", "Distal Demonstrative, Plural, Monstrous") },
                },
                [IDS.GENDERS.I]: {
                    [IDS.DET_TYPES.DA]: { [IDS.NUMBERS.S]: new Determiner("tīl", "Definite Article, Singular, Irrational"), [IDS.NUMBERS.P]: new Determiner("tūl", "Definite Article, Plural, Irrational") },
                    [IDS.DET_TYPES.PDEM]: { [IDS.NUMBERS.S]: new Determiner("sēllīl", "Proximal Demonstrative, Singular, Irrational"), [IDS.NUMBERS.P]: new Determiner("sōllīl", "Proximal Demonstrative, Plural, Irrational") },
                    [IDS.DET_TYPES.DDEM]: { [IDS.NUMBERS.S]: new Determiner("lēllīl", "Distal Demonstrative, Singular, Irrational"), [IDS.NUMBERS.P]: new Determiner("li'llīl", "Distal Demonstrative, Plural, Irrational") },
                },
                [IDS.GENDERS.MAG]: {
                    [IDS.DET_TYPES.DA]: { [IDS.NUMBERS.S]: new Determiner("tuχ", "Definite Article, Singular, Magical"), [IDS.NUMBERS.P]: new Determiner("tōχ", "Definite Article, Plural, Magical") },
                    [IDS.DET_TYPES.PDEM]: { [IDS.NUMBERS.S]: new Determiner("sēhuχ", "Proximal Demonstrative, Singular, Magical"), [IDS.NUMBERS.P]: new Determiner("sōhuχ", "Proximal Demonstrative, Plural, Magical") },
                    [IDS.DET_TYPES.DDEM]: { [IDS.NUMBERS.S]: new Determiner("lēhuχ", "Distal Demonstrative, Singular, Magical"), [IDS.NUMBERS.P]: new Determiner("li'ōχ", "Distal Demonstrative, Plural, Magical") },
                },
                [IDS.GENDERS.MUN]: {
                    [IDS.DET_TYPES.DA]: { [IDS.NUMBERS.S]: new Determiner("tyrk", "Definite Article, Singular, Mundane"), [IDS.NUMBERS.P]: new Determiner("tōk", "Definite Article, Plural, Mundane") },
                    [IDS.DET_TYPES.PDEM]: { [IDS.NUMBERS.S]: new Determiner("sērk", "Proximal Demonstrative, Singular, Mundane"), [IDS.NUMBERS.P]: new Determiner("sōthok", "Proximal Demonstrative, Plural, Mundane") },
                    [IDS.DET_TYPES.DDEM]: { [IDS.NUMBERS.S]: new Determiner("lērk", "Distal Demonstrative, Singular, Mundane"), [IDS.NUMBERS.P]: new Determiner("li'ōk", "Distal Demonstrative, Plural, Mundane") },
                },
                [IDS.GENDERS.A]: {
                    [IDS.DET_TYPES.DA]: { [IDS.NUMBERS.S]: new Determiner("toq̇", "Definite Article, Singular, Abstract"), [IDS.NUMBERS.P]: new Determiner("tōq̇", "Definite Article, Plural, Abstract") },
                    [IDS.DET_TYPES.PDEM]: { [IDS.NUMBERS.S]: new Determiner("sēhoq̇", "Proximal Demonstrative, Singular, Abstract"), [IDS.NUMBERS.P]: new Determiner("sōhoq̇", "Proximal Demonstrative, Plural, Abstract") },
                    [IDS.DET_TYPES.DDEM]: { [IDS.NUMBERS.S]: new Determiner("lēhoq̇", "Distal Demonstrative, Singular, Abstract"), [IDS.NUMBERS.P]: new Determiner("li'ōq̇", "Distal Demonstrative, Plural, Abstract") },
                }
            },
            get FLAT() { 
                return Object.values(this.MAP).flatMap(g => g instanceof Determiner ? g : Object.values(g)).flatMap(v => (v instanceof Determiner ? v : Object.values(v))); 
            },
            fetch(keyword) { return basicSearch(keyword, this.FLAT); },
            random() { return this.FLAT[Math.floor(Math.random() * this.FLAT.length)]; },
            fuzzyFetchByWord(word, limit = 5) { return fuzzyFetch(word, this.FLAT, true, limit); }
        },
    }),
    [IDS.WORDS.CON]: createWordCategory(),
    ALL_WORDS: {
        MAP: {},
        FLAT: [],
        fetch(keyword) { return basicSearch(keyword, DICTIONARY.ALL_WORDS.FLAT); },
        fetchByDefinition(def) { return basicSearchByGender(def, DICTIONARY.ALL_WORDS.FLAT); },
        random() { return DICTIONARY.ALL_WORDS.FLAT[Math.floor(Math.random() * DICTIONARY.ALL_WORDS.FLAT.length)]; },
        fuzzyFetchByDefinition(def, limit = 5) { return fuzzyFetch(def, DICTIONARY.ALL_WORDS.FLAT, false, limit); },
        fuzzyFetchByWord(word, limit = 5) { return fuzzyFetch(word, DICTIONARY.ALL_WORDS.FLAT, true, limit); },
    },
    random() { return DICTIONARY.ALL_WORDS.FLAT[Math.floor(Math.random() * DICTIONARY.ALL_WORDS.FLAT.length)]; },
    fuzzyFetchByDefinition(def, limit = 5) { return fuzzyFetch(def, DICTIONARY.ALL_WORDS.FLAT, false, limit); },
    fuzzyFetchByWord(word, limit = 5) { return fuzzyFetch(word, DICTIONARY.ALL_WORDS.FLAT, true, limit); },
    getLink(word) { return DICTIONARY.ALL_WORDS.MAP[word] ?? null; }, // unsafe to edit, will alter all copies of it inside dictionary
    getCopy(obj) {
        if (obj === null || typeof obj !== 'object') return obj;
        if (Array.isArray(obj)) return obj.map(item => DICTIONARY.getCopy(item));
        const clone = Object.create(Object.getPrototypeOf(obj));
        for (const key of Object.keys(obj)) { clone[key] = DICTIONARY.getCopy(obj[key]); }
        return clone;
    },
    has(word) { return word in DICTIONARY.ALL_WORDS.MAP; }, 
    add(obj) {
        const { word, type } = obj;
        const typeMap = DICTIONARY[type].MAP;
        const ex = typeMap[word];

        if (type === IDS.WORDS.N || type === IDS.WORDS.ADJ) {
            if (ex instanceof MultiDeclensional) {
                ex.values[obj.declension] = obj;
                if (!ex.available.includes(obj.declension)) ex.available.push(obj.declension);
            } else if (ex instanceof Word) {
                const md = new MultiDeclensional({}, type);
                md.values[ex.declension] = ex;
                md.values[obj.declension] = obj;
                md.available = [ex.declension, obj.declension];
                typeMap[word] = md;
            } else typeMap[word] = obj;
        } else typeMap[word] = obj;

        const val = typeMap[word];
        const aw = DICTIONARY.ALL_WORDS.MAP[word];

        if (!aw) DICTIONARY.ALL_WORDS.MAP[word] = val instanceof MultiDeclensional ? val : new Lexemic(val);
        else if (aw instanceof MultiLexemic) {
            aw.values[type] = val;
            if (!aw.available.includes(type)) aw.available.push(type);
        } else if (aw.available.includes(type)) {
            if (val instanceof MultiDeclensional) DICTIONARY.ALL_WORDS.MAP[word] = val;
            else aw.values[type] = val;
        } else DICTIONARY.ALL_WORDS.MAP[word] = new MultiLexemic({ ...aw.values, [type]: val });

        return DICTIONARY.getLink(obj.word);
    },
    addArray(arr) {arr.forEach(obj => {DICTIONARY.add(obj)})},
    remove(word, type = null, declension = null) {
        const aw = DICTIONARY.ALL_WORDS.MAP[word];
        if (!aw) return false;

        const types = type ? [type] : [...aw.available];

        for (const t of types) {
            const entry = DICTIONARY[t]?.MAP[word];
            if (!entry) continue;

            if (declension !== null && entry instanceof MultiDeclensional) {
                delete entry.values[declension];
                entry.available = entry.available.filter(d => d !== declension);
                if (entry.available.length === 1) DICTIONARY[t].MAP[word] = entry.values[entry.available[0]];
                else if (entry.available.length === 0) delete DICTIONARY[t].MAP[word];
            } else delete DICTIONARY[t].MAP[word];

            if (!DICTIONARY[t]?.MAP[word]) {
                delete aw.values[t];
                aw.available = aw.available.filter(a => a !== t);
            } else aw.values[t] = DICTIONARY[t].MAP[word];
        }

        if (aw.available.length === 0) delete DICTIONARY.ALL_WORDS.MAP[word];
        else if (aw.available.length === 1 && aw instanceof MultiLexemic) DICTIONARY.ALL_WORDS.MAP[word] = new Lexemic(aw.values[aw.available[0]]);
        return true;
    }, // this removes all appearances of words with this id, to remove specific declension or word type, add those fields
    // ex: DICTIONARY.remove("someword", IDS.WORDS.N, 1) --> will remove someword's noun with 1st declension
    // ex: DICTIONARY.remove("someword", IDS.WORDS.ADJ) --> will remove someword's all adjectives
    generateFlats() {
        for (const type of Object.values(IDS.WORDS)) { 
            const cat = DICTIONARY[type];
            const regularWords = Object.values(cat.MAP).flatMap(unpack);
            const irregularWords = cat.IRREGULARS ? cat.IRREGULARS.FLAT : [];
            cat.FLAT = [...irregularWords, ...regularWords];
        }
        DICTIONARY.ALL_WORDS.FLAT = Object.values(IDS.WORDS).flatMap(type => DICTIONARY[type].FLAT);
    }
}

// ---------------------------- NUMBRES ----------------------------

NUMBERS = {
    DIGITS: ["q̇em", "χu", "eχ", "fo", "se", "aq", "qah", "hog", "xēχ", "χyz", "ez", "fyz", "selz", "agz", "qaz", "hyz"],
    DIGITS_SUFFIXES: ["", "u", "eχ", "o", "ys", "aq", "ga", "yg"],
    DIGITS_MULTIPLES: { 16: "sē", 24: "fōrz", 32: "sēlz", 40: "qāz", 48: "qōz", 56: "hōz", 64: "lān" },
    DIGITS_POWERS: { 512: "lāran", 4_096: "xeglārn", 32_768: "táħû", 262_144: "torħû" },

    DIGITS_SHORT: {"t": 1, "c": 2, "k": 3, "q": 4, "q̇": 5, "'": 6, "tr": 7, "kx": 16, "qχ": 24, "qħ": 32, "q̇ħ": 40, "d": 48, "z": 56, "g": 64, "f": 512, "th": 4096, "ll": 32768, "x": 262144},

    numberToText(n) {
        if (n === 0) return this.DIGITS[0];
        
        let parts = [];
        let remaining = n;
        
        const scales = [
            ...Object.keys(this.DIGITS_POWERS).map(Number).sort((a, b) => b - a),
            ...Object.keys(this.DIGITS_MULTIPLES).map(Number).sort((a, b) => b - a)
        ];
        
        for (let scale of scales) {
            if (remaining >= scale) {
                let count = Math.floor(remaining / scale);
                remaining %= scale;
                
                const scaleName = this.DIGITS_POWERS[scale] || this.DIGITS_MULTIPLES[scale];
                parts.push(count === 1 ? scaleName : `${this.numberToText(count)} ${scaleName}`);
            }
        }
        
        if (remaining > 0 && remaining <= 15) {
            if (parts.length > 0 && remaining <= 7) {
                parts[parts.length - 1] += this.DIGITS_SUFFIXES[remaining];
            } else {
                parts.push(this.DIGITS[remaining]);
            }
        }
        
        return parts.join(" si ").replace(/sē([æaeiouyāēīōū])/gi, "sēh$1");
    },
    
    numberToTextShort(n) {
        if (n === 0) return "#";
        let result = "#";
        const keys = Object.keys(NUMBERS.DIGITS_SHORT).sort((a, b) => 
            NUMBERS.DIGITS_SHORT[b] - NUMBERS.DIGITS_SHORT[a]
        );
        
        for (let key of keys) {
            const value = NUMBERS.DIGITS_SHORT[key];
            if (n >= value) {
                let count = Math.floor(n / value);
                n = n % value;
                
                if (count === 1) {
                    result += key;
                } else {
                    const countStr = NUMBERS.numberToTextShort(count).slice(1);
                    result += countStr + key;
                }
            }
        }
        return result;
    },

    textToNumberShort(text) {
        if (!text || text === "#") return 0;
        text = text.replace(/^#/, '');
        if (text === '') return 0;
        
        const entries = CHARACTERS.textToEntriesByAnyText(text);
        if (!entries || entries.length === 0) return 0;
        
        let symbolString = '';
        for (let entry of entries) {
            if (entry.letter) symbolString += entry.letter;
        }
        
        const sortedKeys = Object.keys(NUMBERS.DIGITS_SHORT).sort((a, b) => 
            b.length - a.length || NUMBERS.DIGITS_SHORT[b] - NUMBERS.DIGITS_SHORT[a]
        );
        
        let values = [];
        let i = 0;
        
        while (i < symbolString.length) {
            let matched = false;
            for (let key of sortedKeys) {
                if (symbolString.substring(i, i + key.length) === key) {
                    values.push(NUMBERS.DIGITS_SHORT[key]);
                    i += key.length;
                    matched = true;
                    break;
                }
            }
            if (!matched) i++;
        }
        
        if (values.length === 0) return 0;
        
        let total = 0;
        
        for (let i = 0; i < values.length; i++) {
            if (i + 1 < values.length && values[i + 1] > values[i]) {
                total += values[i] * values[i + 1];
                i++;
            } else {
                total += values[i];
            }
        }
        
        return total;
    },

    textToNumber(text) {
        return "NOOO DONT MAKE ME DO THIS";
    },

    testShortConversion(iterations = 1000, maxNumber = 10000) {
        let errors = 0;
        
        for (let i = 0; i < iterations; i++) {
            let original = Math.floor(Math.random() * maxNumber);
            let short = NUMBERS.numberToTextShort(original);
            let converted = NUMBERS.textToNumberShort(short);
            
            if (original !== converted) {
                console.log(`Error: ${original} != ${converted} (short: ${short})`);
                errors++;
            }
        }
        
        console.log(`Tested ${iterations}, ${errors} errors`);
        return errors;
    },

    testShortConversionUntilError() {
        let n = 1;
        while (true) {
            let short = NUMBERS.numberToTextShort(n);
            let converted = NUMBERS.textToNumberShort(short);
            if (n !== converted) {
                console.log(`Error at ${n}: ${n} != ${converted} (short: ${short})`);
                return n;
            }
            n++;
            console.log(n)
        }
}
}

// ---------------------------- MISC ----------------------------
// TODO edit idk

PRONOUNS = {
    MAP: {
        [IDS.GENDERS.E]: {
            [IDS.NUMBERS.S]: { 1: { [IDS.CASE.S]: "xēn", [IDS.CASE.O]: "xon" }, 2: { [IDS.CASE.S]: "syn", [IDS.CASE.O]: "sun" }, 3: { [IDS.CASE.S]: "tēn", [IDS.CASE.O]: "tôn" } },
            [IDS.NUMBERS.D]: { 1: { [IDS.CASE.S]: "xefyn", [IDS.CASE.O]: "xō'æ­n" }, 2: { [IDS.CASE.S]: "sônen", [IDS.CASE.O]: "sônēn" }, 3: { [IDS.CASE.S]: "toq̇án", [IDS.CASE.O]: "toq̇ân" } },
            [IDS.NUMBERS.P]: { 1: { [IDS.CASE.S]: "hēn", [IDS.CASE.O]: "he'æ­n" }, 2: { [IDS.CASE.S]: "tháħán", [IDS.CASE.O]: "thâħen" }, 3: { [IDS.CASE.S]: "tun", [IDS.CASE.O]: "tūn" } }
        },
        [IDS.GENDERS.R]: {
            [IDS.NUMBERS.S]: { 1: { [IDS.CASE.S]: "xēf", [IDS.CASE.O]: "xyf" }, 2: { [IDS.CASE.S]: "syf", [IDS.CASE.O]: "suf" }, 3: { [IDS.CASE.S]: "toq̇llif", [IDS.CASE.O]: "tôħyf" } },
            [IDS.NUMBERS.D]: { 1: { [IDS.CASE.S]: "xef", [IDS.CASE.O]: "xō'æf" }, 2: { [IDS.CASE.S]: "sônllif", [IDS.CASE.O]: "sônēf" }, 3: { [IDS.CASE.S]: "toq̇âf", [IDS.CASE.O]: "toq̇ħáf" } },
            [IDS.NUMBERS.P]: { 1: { [IDS.CASE.S]: "hēf", [IDS.CASE.O]: "he'æf" }, 2: { [IDS.CASE.S]: "thâllif", [IDS.CASE.O]: "tháħáf" }, 3: { [IDS.CASE.S]: "tyf", [IDS.CASE.O]: "tūq̇llif" } }
        },
        [IDS.GENDERS.MON]: {
            [IDS.NUMBERS.S]: { 1: { [IDS.CASE.S]: "χħô", [IDS.CASE.O]: "xūħó" }, 2: { [IDS.CASE.S]: "sô", [IDS.CASE.O]: "sūħó" }, 3: { [IDS.CASE.S]: "tô", [IDS.CASE.O]: "tōħó" } },
            [IDS.NUMBERS.D]: { 1: { [IDS.CASE.S]: "χħôfó", [IDS.CASE.O]: "xo'ô" }, 2: { [IDS.CASE.S]: "sónq̇ħô", [IDS.CASE.O]: "sônô" }, 3: { [IDS.CASE.S]: "tyq̇âq̇ħó", [IDS.CASE.O]: "tyq̇âħó" } },
            [IDS.NUMBERS.P]: { 1: { [IDS.CASE.S]: "hô", [IDS.CASE.O]: "he'ô" }, 2: { [IDS.CASE.S]: "thâq̇ħô", [IDS.CASE.O]: "thâħó" }, 3: { [IDS.CASE.S]: "tūħó", [IDS.CASE.O]: "tūħó" } }
        },
        [IDS.GENDERS.I]: {
            [IDS.NUMBERS.S]: { 1: { [IDS.CASE.S]: "xellūl", [IDS.CASE.O]: "xullūl" }, 2: { [IDS.CASE.S]: "sucūl", [IDS.CASE.O]: "sillūl" }, 3: { [IDS.CASE.S]: "tócūl", [IDS.CASE.O]: "tôllūl" } },
            [IDS.NUMBERS.D]: { 1: { [IDS.CASE.S]: "hyllūl", [IDS.CASE.O]: "hellūl	" }, 2: { [IDS.CASE.S]: "sóncūl", [IDS.CASE.O]: "sónllūl" }, 3: { [IDS.CASE.S]: "tyq̇ácūl", [IDS.CASE.O]: "tyq̇állūl" } },
            [IDS.NUMBERS.P]: { 1: { [IDS.CASE.S]: "hyllūl", [IDS.CASE.O]: "hellūl	" }, 2: { [IDS.CASE.S]: "thâcūl", [IDS.CASE.O]: "thâllūl" }, 3: { [IDS.CASE.S]: "tīllūl", [IDS.CASE.O]: "tûcūl" } }
        },
        [IDS.GENDERS.MAG]: {
            [IDS.NUMBERS.S]: { 1: { [IDS.CASE.S]: "xōχ", [IDS.CASE.O]: "xūχ" }, 2: { [IDS.CASE.S]: "sōχ", [IDS.CASE.O]: "sūχ" }, 3: { [IDS.CASE.S]: "toħúχ", [IDS.CASE.O]: "tōħúχ" } },
            [IDS.NUMBERS.P]: { 1: { [IDS.CASE.S]: "hōχ", [IDS.CASE.O]: "hūχ" }, 2: { [IDS.CASE.S]: "thâhuχ	", [IDS.CASE.O]: "fônōχ" }, 3: { [IDS.CASE.S]: "tūχ", [IDS.CASE.O]: "tūħúχ" } }
        },
        [IDS.GENDERS.MUN]: {
            [IDS.NUMBERS.S]: { 1: { [IDS.CASE.S]: "xerk", [IDS.CASE.O]: "χūrk" }, 2: { [IDS.CASE.S]: "surk", [IDS.CASE.O]: "thârk" }, 3: { [IDS.CASE.S]: "tork", [IDS.CASE.O]: "târk" } },
            [IDS.NUMBERS.P]: { 1: { [IDS.CASE.S]: "herk", [IDS.CASE.O]: "hārk" }, 2: { [IDS.CASE.S]: "surk", [IDS.CASE.O]: "thârk" }, 3: { [IDS.CASE.S]: "tūrk", [IDS.CASE.O]: "tūrk" } }
        },
        [IDS.GENDERS.A]: {
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
        [IDS.GENDER_GROUPS.ANIM]: {
            [IDS.COR_TYPES.INT]: { [IDS.CASE.S]: "hā", [IDS.CASE.O]: "halláħ" },
            [IDS.COR_TYPES.R]: { [IDS.CASE.S]: "sē", [IDS.CASE.O]: "sēlláħ" },
            [IDS.COR_TYPES.COR]: { [IDS.CASE.S]: "thare", [IDS.CASE.O]: "tharlláħ" },
        },
        [IDS.GENDER_GROUPS.INANIM]: {
            [IDS.COR_TYPES.INT]: { [IDS.CASE.S]: "hox", [IDS.CASE.O]: "hóqħ" },
            [IDS.COR_TYPES.R]: { [IDS.CASE.S]: "six", [IDS.CASE.O]: "sôqħ" },
            [IDS.COR_TYPES.COR]: { [IDS.CASE.S]: "tharx", [IDS.CASE.O]: "tharáqħ" },
        },
        [IDS.GENDERS.E]: {
            [IDS.COR_TYPES.INT]: { [IDS.CASE.S]: "hālen", [IDS.CASE.O]: "hallħân" },
            [IDS.COR_TYPES.R]: { [IDS.CASE.S]: "sēlen", [IDS.CASE.O]: "sēllħân" },
            [IDS.COR_TYPES.COR]: { [IDS.CASE.S]: "tharlen", [IDS.CASE.O]: "tharħân" },
            [IDS.COR_TYPES.PDEM]: { [IDS.CASE.S]: "sēn", [IDS.CASE.O]: "sōhyn" },
            [IDS.COR_TYPES.DDEM]: { [IDS.CASE.S]: "lēn", [IDS.CASE.O]: "li'ōn" },
        },
        [IDS.GENDERS.R]: {
            [IDS.COR_TYPES.INT]: { [IDS.CASE.S]: "hāllef", [IDS.CASE.O]: "hallħâf" },
            [IDS.COR_TYPES.R]: { [IDS.CASE.S]: "sēllef", [IDS.CASE.O]: "sēllħâf" },
            [IDS.COR_TYPES.COR]: { [IDS.CASE.S]: "tharllef", [IDS.CASE.O]: "tharħâf" },
            [IDS.COR_TYPES.PDEM]: { [IDS.CASE.S]: "sēf", [IDS.CASE.O]: "sōhyf" },
            [IDS.COR_TYPES.DDEM]: { [IDS.CASE.S]: "lēf", [IDS.CASE.O]: "li'ōf" },
        },
        [IDS.GENDERS.MON]: {
            [IDS.COR_TYPES.INT]: { [IDS.CASE.S]: "hālló", [IDS.CASE.O]: "hallħô" },
            [IDS.COR_TYPES.R]: { [IDS.CASE.S]: "sēlló", [IDS.CASE.O]: "sēllħô" },
            [IDS.COR_TYPES.COR]: { [IDS.CASE.S]: "tharlló", [IDS.CASE.O]: "tharħô" },
            [IDS.COR_TYPES.PDEM]: { [IDS.CASE.S]: "sēħó", [IDS.CASE.O]: "sōħó" },
            [IDS.COR_TYPES.DDEM]: { [IDS.CASE.S]: "lēħó", [IDS.CASE.O]: "li'ô" },
        },
        [IDS.GENDERS.I]: {
            [IDS.COR_TYPES.INT]: { [IDS.CASE.S]: "hāllcīl", [IDS.CASE.O]: "hallħīl" },
            [IDS.COR_TYPES.R]: { [IDS.CASE.S]: "sēllcīl", [IDS.CASE.O]: "sēllħīl" },
            [IDS.COR_TYPES.COR]: { [IDS.CASE.S]: "tharcīl", [IDS.CASE.O]: "tharħīl" },
            [IDS.COR_TYPES.PDEM]: { [IDS.CASE.S]: "sēllīl", [IDS.CASE.O]: "sōllīl" },
            [IDS.COR_TYPES.DDEM]: { [IDS.CASE.S]: "lēllīl", [IDS.CASE.O]: "li'llīl" },
        },
        [IDS.GENDERS.MAG]: {
            [IDS.COR_TYPES.INT]: { [IDS.CASE.S]: "huχuχ", [IDS.CASE.O]: "hoqħôχ" },
            [IDS.COR_TYPES.R]: { [IDS.CASE.S]: "siχuχ", [IDS.CASE.O]: "suqħôχ" },
            [IDS.COR_TYPES.COR]: { [IDS.CASE.S]: "tharχuχ", [IDS.CASE.O]: "tharqħôχ" },
            [IDS.COR_TYPES.PDEM]: { [IDS.CASE.S]: "sēhuχ", [IDS.CASE.O]: "sōhuχ" },
            [IDS.COR_TYPES.DDEM]: { [IDS.CASE.S]: "lēhuχ", [IDS.CASE.O]: "li'ōχ" },
        },
        [IDS.GENDERS.MUN]: {
            [IDS.COR_TYPES.INT]: { [IDS.CASE.S]: "hotok", [IDS.CASE.O]: "hoqħárk" },
            [IDS.COR_TYPES.R]: { [IDS.CASE.S]: "sitok", [IDS.CASE.O]: "suqħárk" },
            [IDS.COR_TYPES.COR]: { [IDS.CASE.S]: "thartok", [IDS.CASE.O]: "tharqħárk" },
            [IDS.COR_TYPES.PDEM]: { [IDS.CASE.S]: "sērk", [IDS.CASE.O]: "sōthok" },
            [IDS.COR_TYPES.DDEM]: { [IDS.CASE.S]: "lērk", [IDS.CASE.O]: "li'ōk" },
        },
        [IDS.GENDERS.A]: {
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
                [IDS.GENDERS.E]: {
                    1: { [IDS.NUMBERS.S]: "xirōd", [IDS.NUMBERS.D]: "xynrōd", [IDS.NUMBERS.P]: "herōd" },
                    2: { [IDS.NUMBERS.S]: "syrōd", [IDS.NUMBERS.D]: "sórōd", [IDS.NUMBERS.P]: "thárōd" },
                    3: { [IDS.NUMBERS.S]: "terōd", [IDS.NUMBERS.D]: "q̇yrōd", [IDS.NUMBERS.P]: "tyrōd" }
                },
                [IDS.GENDERS.R]: {
                    1: { [IDS.NUMBERS.S]: "xirōd", [IDS.NUMBERS.D]: "xynrōd", [IDS.NUMBERS.P]: "herōd" },
                    2: { [IDS.NUMBERS.S]: "syrōd", [IDS.NUMBERS.D]: "súrōd", [IDS.NUMBERS.P]: "thórōd" },
                    3: { [IDS.NUMBERS.S]: "turōd", [IDS.NUMBERS.D]: "q̇yrōd", [IDS.NUMBERS.P]: "tyrōd" }
                },
                [IDS.GENDERS.MON]: {
                    1: { [IDS.NUMBERS.S]: "χħórōd", [IDS.NUMBERS.D]: "xórōd", [IDS.NUMBERS.P]: "hôd" },
                    2: { [IDS.NUMBERS.S]: "sórôd", [IDS.NUMBERS.D]: "sórôd", [IDS.NUMBERS.P]: "thôrōd" },
                    3: { [IDS.NUMBERS.S]: "tórôd", [IDS.NUMBERS.D]: "q̇ħôd", [IDS.NUMBERS.P]: "tyrōd" }
                },
                [IDS.GENDERS.I]: {
                    1: { [IDS.NUMBERS.S]: "xerōd", [IDS.NUMBERS.D]: "llyrōd", [IDS.NUMBERS.P]: "llyrōd" },
                    2: { [IDS.NUMBERS.S]: "surōd", [IDS.NUMBERS.D]: "sórōd", [IDS.NUMBERS.P]: "thórōd" },
                    3: { [IDS.NUMBERS.S]: "túrōd", [IDS.NUMBERS.D]: "q̇órōd", [IDS.NUMBERS.P]: "turōd" }
                },
                [IDS.GENDERS.MAG]: {
                    1: { [IDS.NUMBERS.S]: "xyrōd", [IDS.NUMBERS.D]: "hyrōd", [IDS.NUMBERS.P]: "hyrōd" },
                    2: { [IDS.NUMBERS.S]: "sōd", [IDS.NUMBERS.D]: "thárōd", [IDS.NUMBERS.P]: "thárōd" },
                    3: { [IDS.NUMBERS.S]: "tórōd", [IDS.NUMBERS.D]: "tyrōd", [IDS.NUMBERS.P]: "tyrōd" }
                },
                [IDS.GENDERS.MUN]: {
                    1: { [IDS.NUMBERS.S]: "rōd", [IDS.NUMBERS.D]: "rōd", [IDS.NUMBERS.P]: "rōd" },
                    2: { [IDS.NUMBERS.S]: "syrōd", [IDS.NUMBERS.D]: "thárōd", [IDS.NUMBERS.P]: "thárōd" },
                    3: { [IDS.NUMBERS.S]: "tryrōd", [IDS.NUMBERS.D]: "tyrōd", [IDS.NUMBERS.P]: "tyrōd" }
                },
                [IDS.GENDERS.A]: {
                    1: { [IDS.NUMBERS.S]: "rōd", [IDS.NUMBERS.D]: "rōd", [IDS.NUMBERS.P]: "rōd" },
                    2: { [IDS.NUMBERS.S]: "syrōd", [IDS.NUMBERS.D]: "thárōd", [IDS.NUMBERS.P]: "thárōd" },
                    3: { [IDS.NUMBERS.S]: "trōd", [IDS.NUMBERS.D]: "trōd", [IDS.NUMBERS.P]: "trōd" }
                },
            },
            [IDS.TENSE.NP]: {
                [IDS.GENDERS.E]: {
                    1: { [IDS.NUMBERS.S]: "xelur", [IDS.NUMBERS.D]: "xylur", [IDS.NUMBERS.P]: "helur" },
                    2: { [IDS.NUMBERS.S]: "sylur", [IDS.NUMBERS.D]: "sólur", [IDS.NUMBERS.P]: "thálur" },
                    3: { [IDS.NUMBERS.S]: "telur", [IDS.NUMBERS.D]: "q̇ylur", [IDS.NUMBERS.P]: "tylur" }
                },
                [IDS.GENDERS.R]: {
                    1: { [IDS.NUMBERS.S]: "xilur", [IDS.NUMBERS.D]: "xylur", [IDS.NUMBERS.P]: "hilur" },
                    2: { [IDS.NUMBERS.S]: "sylur", [IDS.NUMBERS.D]: "sóllur", [IDS.NUMBERS.P]: "thállur" },
                    3: { [IDS.NUMBERS.S]: "tollur", [IDS.NUMBERS.D]: "q̇yllur", [IDS.NUMBERS.P]: "tylur" }
                },
                [IDS.GENDERS.MON]: {
                    1: { [IDS.NUMBERS.S]: "χħólur", [IDS.NUMBERS.D]: "xólur", [IDS.NUMBERS.P]: "hôlur" },
                    2: { [IDS.NUMBERS.S]: "sôlur", [IDS.NUMBERS.D]: "sóq̇ħūr", [IDS.NUMBERS.P]: "tháq̇ħūr" },
                    3: { [IDS.NUMBERS.S]: "tôlur", [IDS.NUMBERS.D]: "q̇ħólur", [IDS.NUMBERS.P]: "tūr" }
                },
                [IDS.GENDERS.I]: {
                    1: { [IDS.NUMBERS.S]: "xellur", [IDS.NUMBERS.D]: "llūr", [IDS.NUMBERS.P]: "llūr" },
                    2: { [IDS.NUMBERS.S]: "sūlur", [IDS.NUMBERS.D]: "sócūr", [IDS.NUMBERS.P]: "thácūr" },
                    3: { [IDS.NUMBERS.S]: "tócūr", [IDS.NUMBERS.D]: "q̇ácūr", [IDS.NUMBERS.P]: "tillūr" }
                },
                [IDS.GENDERS.MAG]: {
                    1: { [IDS.NUMBERS.S]: "xolur", [IDS.NUMBERS.D]: "holur", [IDS.NUMBERS.P]: "holur" },
                    2: { [IDS.NUMBERS.S]: "sūr", [IDS.NUMBERS.D]: "thâlur", [IDS.NUMBERS.P]: "thâlur" },
                    3: { [IDS.NUMBERS.S]: "tólur", [IDS.NUMBERS.D]: "tūlur", [IDS.NUMBERS.P]: "tūlur" }
                },
                [IDS.GENDERS.MUN]: {
                    1: { [IDS.NUMBERS.S]: "xur", [IDS.NUMBERS.D]: "rur", [IDS.NUMBERS.P]: "rur" },
                    2: { [IDS.NUMBERS.S]: "sur", [IDS.NUMBERS.D]: "thûr", [IDS.NUMBERS.P]: "thûr" },
                    3: { [IDS.NUMBERS.S]: "trur", [IDS.NUMBERS.D]: "tūr", [IDS.NUMBERS.P]: "tūr" }
                },
                [IDS.GENDERS.A]: {
                    1: { [IDS.NUMBERS.S]: "lur", [IDS.NUMBERS.D]: "lur", [IDS.NUMBERS.P]: "lur" },
                    2: { [IDS.NUMBERS.S]: "sulur", [IDS.NUMBERS.D]: "thálur", [IDS.NUMBERS.P]: "thálur" },
                    3: { [IDS.NUMBERS.S]: "tolur", [IDS.NUMBERS.D]: "tulur", [IDS.NUMBERS.P]: "tulur" }
                },
            }
        },
        [IDS.ASPECT.G]: {

            [IDS.TENSE.P]: {
                [IDS.GENDERS.E]: {
                    1: { [IDS.NUMBERS.S]: "xelōd", [IDS.NUMBERS.D]: "xylōd", [IDS.NUMBERS.P]: "helōd" },
                    2: { [IDS.NUMBERS.S]: "sylōd", [IDS.NUMBERS.D]: "sólōd", [IDS.NUMBERS.P]: "thálōd" },
                    3: { [IDS.NUMBERS.S]: "telōd", [IDS.NUMBERS.D]: "q̇ylōd", [IDS.NUMBERS.P]: "tylōd" }
                },
                [IDS.GENDERS.R]: {
                    1: { [IDS.NUMBERS.S]: "xelōd", [IDS.NUMBERS.D]: "xylōd", [IDS.NUMBERS.P]: "helōd" },
                    2: { [IDS.NUMBERS.S]: "sylōd", [IDS.NUMBERS.D]: "sóllōd", [IDS.NUMBERS.P]: "thállōd" },
                    3: { [IDS.NUMBERS.S]: "tollōd", [IDS.NUMBERS.D]: "q̇yllōd", [IDS.NUMBERS.P]: "tylōd" }
                },
                [IDS.GENDERS.MON]: {
                    1: { [IDS.NUMBERS.S]: "χħólōd", [IDS.NUMBERS.D]: "xólōd", [IDS.NUMBERS.P]: "hôlōd" },
                    2: { [IDS.NUMBERS.S]: "sólōd", [IDS.NUMBERS.D]: "súrōd", [IDS.NUMBERS.P]: "thórōd" },
                    3: { [IDS.NUMBERS.S]: "tólōd", [IDS.NUMBERS.D]: "q̇ħólōd", [IDS.NUMBERS.P]: "tulrōd" }
                },
                [IDS.GENDERS.I]: {
                    1: { [IDS.NUMBERS.S]: "xyrōd", [IDS.NUMBERS.D]: "llurōd", [IDS.NUMBERS.P]: "llurōd" },
                    2: { [IDS.NUMBERS.S]: "sūlōd", [IDS.NUMBERS.D]: "sūrōd", [IDS.NUMBERS.P]: "thûrōd" },
                    3: { [IDS.NUMBERS.S]: "tūrōd", [IDS.NUMBERS.D]: "q̇ūrōd", [IDS.NUMBERS.P]: "tīrōd" }
                },
                [IDS.GENDERS.MAG]: {
                    1: { [IDS.NUMBERS.S]: "xolrōd", [IDS.NUMBERS.D]: "holrōd", [IDS.NUMBERS.P]: "holrōd" },
                    2: { [IDS.NUMBERS.S]: "sūrōd", [IDS.NUMBERS.D]: "thâlrōd", [IDS.NUMBERS.P]: "thâlrōd" },
                    3: { [IDS.NUMBERS.S]: "tólrōd", [IDS.NUMBERS.D]: "tūlōd", [IDS.NUMBERS.P]: "tūlōd" }
                },
                [IDS.GENDERS.MUN]: {
                    1: { [IDS.NUMBERS.S]: "xurōd", [IDS.NUMBERS.D]: "rylōd", [IDS.NUMBERS.P]: "rylōd" },
                    2: { [IDS.NUMBERS.S]: "surōd", [IDS.NUMBERS.D]: "thûrōd", [IDS.NUMBERS.P]: "thûrōd" },
                    3: { [IDS.NUMBERS.S]: "trulōd", [IDS.NUMBERS.D]: "turōd", [IDS.NUMBERS.P]: "turōd" }
                },
                [IDS.GENDERS.A]: {
                    1: { [IDS.NUMBERS.S]: "lyrōd", [IDS.NUMBERS.D]: "lyrōd", [IDS.NUMBERS.P]: "lyrōd" },
                    2: { [IDS.NUMBERS.S]: "surōd", [IDS.NUMBERS.D]: "thálōd", [IDS.NUMBERS.P]: "thálōd" },
                    3: { [IDS.NUMBERS.S]: "tolōd", [IDS.NUMBERS.D]: "tulōd", [IDS.NUMBERS.P]: "tulōd" }
                },
            },
            [IDS.TENSE.NP]: {
                [IDS.GENDERS.E]: {
                    1: { [IDS.NUMBERS.S]: "xelūrχ", [IDS.NUMBERS.D]: "xylūrχ", [IDS.NUMBERS.P]: "helūrχ" },
                    2: { [IDS.NUMBERS.S]: "sylūrχ", [IDS.NUMBERS.D]: "sólūrχ", [IDS.NUMBERS.P]: "thálūrχ" },
                    3: { [IDS.NUMBERS.S]: "telūrχ", [IDS.NUMBERS.D]: "q̇ylūrχ", [IDS.NUMBERS.P]: "tylūrχ" }
                },
                [IDS.GENDERS.R]: {
                    1: { [IDS.NUMBERS.S]: "xilūrχ", [IDS.NUMBERS.D]: "xylūrχ", [IDS.NUMBERS.P]: "hilūrχ" },
                    2: { [IDS.NUMBERS.S]: "sylūrχ", [IDS.NUMBERS.D]: "sóllurχ", [IDS.NUMBERS.P]: "thállurχ" },
                    3: { [IDS.NUMBERS.S]: "tollurχ", [IDS.NUMBERS.D]: "q̇yllurχ", [IDS.NUMBERS.P]: "tylūrχ" }
                },
                [IDS.GENDERS.MON]: {
                    1: { [IDS.NUMBERS.S]: "χħólurχ", [IDS.NUMBERS.D]: "xólūrχ", [IDS.NUMBERS.P]: "hólūrχ" },
                    2: { [IDS.NUMBERS.S]: "sólūrχ", [IDS.NUMBERS.D]: "sûryχ", [IDS.NUMBERS.P]: "thûryχ" },
                    3: { [IDS.NUMBERS.S]: "tólūrχ", [IDS.NUMBERS.D]: "q̇ħûrχ", [IDS.NUMBERS.P]: "turyχ" }
                },
                [IDS.GENDERS.I]: {
                    1: { [IDS.NUMBERS.S]: "xellurχ", [IDS.NUMBERS.D]: "llūryχ", [IDS.NUMBERS.P]: "llūryχ" },
                    2: { [IDS.NUMBERS.S]: "sulūrχ", [IDS.NUMBERS.D]: "sūryχ", [IDS.NUMBERS.P]: "thûryχ" },
                    3: { [IDS.NUMBERS.S]: "tûryχ", [IDS.NUMBERS.D]: "q̇ûryχ", [IDS.NUMBERS.P]: "tillūrχ" }
                },
                [IDS.GENDERS.MAG]: {
                    1: { [IDS.NUMBERS.S]: "xolūrχ", [IDS.NUMBERS.D]: "holūrχ", [IDS.NUMBERS.P]: "holūrχ" },
                    2: { [IDS.NUMBERS.S]: "sūryχ", [IDS.NUMBERS.D]: "thálūrχ", [IDS.NUMBERS.P]: "thálūrχ" },
                    3: { [IDS.NUMBERS.S]: "tólūrχ", [IDS.NUMBERS.D]: "tulūrχ", [IDS.NUMBERS.P]: "tulūrχ" }
                },
                [IDS.GENDERS.MUN]: {
                    1: { [IDS.NUMBERS.S]: "xūrχ", [IDS.NUMBERS.D]: "rūχ", [IDS.NUMBERS.P]: "rūχ" },
                    2: { [IDS.NUMBERS.S]: "sūrχ", [IDS.NUMBERS.D]: "thûryχ", [IDS.NUMBERS.P]: "thûryχ" },
                    3: { [IDS.NUMBERS.S]: "trūrχ", [IDS.NUMBERS.D]: "tūryχ", [IDS.NUMBERS.P]: "tūryχ" }
                },
                [IDS.GENDERS.A]: {
                    1: { [IDS.NUMBERS.S]: "lūrχ", [IDS.NUMBERS.D]: "lūrχ", [IDS.NUMBERS.P]: "lūrχ" },
                    2: { [IDS.NUMBERS.S]: "sulūrχ", [IDS.NUMBERS.D]: "thálūrχ", [IDS.NUMBERS.P]: "thálūrχ" },
                    3: { [IDS.NUMBERS.S]: "tolūrχ", [IDS.NUMBERS.D]: "tulūrχ", [IDS.NUMBERS.P]: "tulūrχ" }
                },
            }
        }
    }
}

COMMON = {
    PHRASES: {
        MAP: {},
    },
    PROVERBS: {
        MAP: {}
    }
}
