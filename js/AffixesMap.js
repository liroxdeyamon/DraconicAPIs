// Affixes and conjugation
window.modules = window.modules || []

if (!window.modules.includes("MainMap")) {
    throw new Error("AffixesMap requires MainMap to be loaded first.")
}

if (!window.modules.includes("CharacterMap")) {
    throw new Error("AffixesMap requires CharacterMap to be loaded first.")
}



NOUNS.SUFFIXES.MAP = {
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
}

ADJECTIVES.SUFFIXES.MAP = NOUNS.SUFFIXES.MAP;

VERBS.PREFIXES.MAP = {
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
}

VERBS.SUFFIXES.MAP = {
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
}

const PRONOUNS = {
    // what the fuck
}

function flattenSuffixes(suffixes, type) {
    const result = {};

    function processForms(forms, moodOrPerson, genderKey, numberKey) {
        for (const formKey in forms) {
            const suf = forms[formKey];
            if (!suf) continue;

            let variants = [];
            const entries = entries_from_field(suf, ["letter"], true);
            if (entries.length && entries[0].prop) {
                if (entries[0].prop.includes(REG.OPTIONAL)) {
                    variants.push(entries_to_text(entries));
                    variants.push(entries_to_text(entries, true));
                } else if (entries[0].prop.includes(REG.VOWEL)) {
                    variants.push(suf);
                    const pyric = get_pyric_equivalent(entries[0]);
                    if (pyric != null) variants.push(entries_to_text([pyric, ...entries.slice(1)]));
                } else variants.push(suf);
            } else console.log(`huh? ${suf} ${forms[formKey]} ${entries}`)

            const declensions = type === "n"
                ? Object.entries(forms).filter(([_, val]) => val === suf).map(([key]) => Number(key))
                : [Number(moodOrPerson)];

            const highestNumber = forms[IDS.NUMBERS.P] === suf ? IDS.NUMBERS.P : numberKey;

            result[suf] = [variants, declensions, type, moodOrPerson, genderKey, highestNumber];
        }
    }

    if (type === "n") {
        for (const moodKey in suffixes) {
            const genders = suffixes[moodKey];
            for (const genderKey in genders) {
                const numbers = genders[genderKey];
                for (const numberKey in numbers) {
                    processForms(numbers[numberKey], moodKey, genderKey, numberKey);
                }
            }
        }
    } else if (type === "v") {
        for (const personKey in suffixes) {
            const numbers = suffixes[personKey];
            for (const numberKey in numbers) {
                const genders = numbers[numberKey];
                for (const genderKey in genders) {
                    const singleForm = { [personKey]: genders[genderKey] };
                    processForms(singleForm, personKey, genderKey, numberKey);
                }
            }
        }
    }

    return result;
}



// NOUNS.SUFFIXES.FLAT = flattenSuffixes(NOUN_SUFFIXES, "n");
// ADJECTIVES.SUFFIXES.FLAT = NOUNS.SUFFIXES.FLAT;
// VERBS.SUFFIXES.FLAT  = flattenSuffixes(VERB_OBJECT_SUFFIXES, "v");

WORD_UTILS.matchSuffix = function(input, suffixMap) {
    for (const suf in suffixMap) {
        const [variants] = suffixMap[suf];
        for (const variant of variants) {
            if (typeof variant === "string" && input.endsWith(variant)) {
                return suffixMap[suf];
            }
        }
    }
    return null;
}

WORD_UTILS.connectSplit = function(prefix = "", text = "", suffix = "") {
    let text_entries = text_to_entries(text);
    let prefix_entries = text_to_entries(prefix);
    let suffix_entries = text_to_entries(suffix);
    if (!text_entries) return [];
    const last_text = text_entries[text_entries.length - 1];
    // const first_text = text_entries[0];

    if (prefix_entries) {
        // No rules?
    }

    if (suffix_entries) {
        let first_suffix = suffix_entries[0];

        if (first_suffix) {
            if (first_suffix.prop.includes(window.REG.VOWEL)) {
                if (first_suffix.prop.includes(window.REG.OPTIONAL)) {
                    if (last_text && last_text.prop.includes(window.REG.VOWEL)) {
                        suffix_entries.shift();
                    }
                } else if (last_text && last_text.prop.includes(window.REG.VOWEL)) {
                    if (last_text.prop.includes(window.REG.PYRIC)) {
                        const pyric = get_pyric_equivalent(first_suffix);
                        if (pyric) first_suffix = pyric;
                        suffix_entries[0] = first_suffix;
                    }
                    text_entries.pop();
                }
            } else if (first_suffix.prop.includes(window.REG.CONSONANT) && first_suffix.prop.includes(window.REG.OPTIONAL)) {
                if (!last_text || !last_text.prop.includes(window.REG.VOWEL)) {
                    suffix_entries.shift();
                }
            }
        }
    }

    return [prefix_entries, text_entries, suffix_entries];
}

WORD_UTILS.connect = function(prefix = "", text = "", suffix = "") {
    const entries = connect_split(prefix, text, suffix);
    return entries.flat();
}

WORD_UTILS.connectSuffix = function(text, suffix) { return connect("", text, suffix) }
WORD_UTILS.connectPrefix = function(text, prefix) { return connect(prefix, text, "") }


// function getAllValues(obj) {
//     return Object.values(obj).flatMap(val =>
//         typeof val === 'object' && val !== null ? getAllValues(val) : val
//     );
// }

window.modules.push("AffixesMap")