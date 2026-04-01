import pandas as pd
import re

def read_excel_data_dict():
    df = pd.read_excel('dictionary.xlsx')
    data_list = df.iloc[:, 0:5].values.tolist()
    return data_list

def read_excel_data_common():
    df = pd.read_excel('common.xlsx')
    phrases = df.iloc[1:, 0:3].values.tolist()
    proverbs = df.iloc[1:, 4:8].values.tolist()
    return phrases, proverbs

def clean_definition(def_text):
    return re.sub(r'\s*\([^)]*\)\s*', ' ', def_text).strip()

GENDERS = {
    "mag": "IDS.GENDERS.MAG",
    "mun": "IDS.GENDERS.MUN",
    "a": "IDS.GENDERS.A",
    "e": "IDS.GENDERS.E",
    "r": "IDS.GENDERS.R",
    "mon": "IDS.GENDERS.MON",
    "i": "IDS.GENDERS.I",
    "animates": "IDS.GENDER_GROUPS.ANIM",
    "animate": "IDS.GENDER_GROUPS.ANIM",
    "inanimates": "IDS.GENDER_GROUPS.INANIM",
    "inanimate": "IDS.GENDER_GROUPS.INANIM",
    "all": "IDS.GENDER_GROUPS.A"
}

dictionarydata = """
// vv==== CACHE =====vv

DICTIONARY.addArray(Array.of(
WORDS_HERE
));

// ^^==== CACHE =====^^

DICTIONARY.ALL_GENDERS.MAP = (() => {
    const sources = [
        [DICTIONARY.NOUNS.MAP,        IDS.GENDERS.N],
        [DICTIONARY.VERBS.MAP,        IDS.GENDERS.V],
        [DICTIONARY.ADJECTIVES.MAP,   IDS.GENDERS.ADJ],
        [DICTIONARY.ADVERBS.MAP,      IDS.GENDERS.ADV],
        [DICTIONARY.AUXILIARIES.MAP,  IDS.GENDERS.AUX],
        [DICTIONARY.PREPOSITIONS.MAP, IDS.GENDERS.PP],
        [DICTIONARY.PARTICLES.MAP,    IDS.GENDERS.PART],
        [DICTIONARY.DETERMINERS.MAP,  IDS.GENDERS.DET],
        [DICTIONARY.CONJUNCTIONS.MAP, IDS.GENDERS.CON],
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
            result[key] = new Grouped(IDS.OTHER.ML, typeMap, Object.values(IDS.GENDERS));
        }
    }

    return Object.fromEntries(
        Object.entries(result).sort(([a], [b]) => a.localeCompare(b))
    );
})();

function generateFlat(map) {
    return Object.values(map).flatMap(value => {
        if (!(value instanceof Grouped)) return [value];
        if (value.type === IDS.OTHER.ML) return Object.values(value.values).flatMap(v => v instanceof Grouped && v.type === IDS.OTHER.MD ? Object.values(v.values) : [v]);
        if (value.type === IDS.OTHER.MD) return Object.values(value.values);
        return [value];
    });
}

DICTIONARY.NOUNS.FLAT = generateFlat(DICTIONARY.NOUNS.MAP);
DICTIONARY.VERBS.FLAT = generateFlat(DICTIONARY.VERBS.MAP);
DICTIONARY.ADJECTIVES.FLAT = generateFlat(DICTIONARY.ADJECTIVES.MAP);
DICTIONARY.ADVERBS.FLAT = generateFlat(DICTIONARY.ADVERBS.MAP);
DICTIONARY.AUXILIARIES.FLAT = generateFlat(DICTIONARY.AUXILIARIES.MAP);
DICTIONARY.PREPOSITIONS.FLAT = generateFlat(DICTIONARY.PREPOSITIONS.MAP);
DICTIONARY.PARTICLES.FLAT = generateFlat(DICTIONARY.PARTICLES.MAP);
DICTIONARY.DETERMINERS.FLAT = generateFlat(DICTIONARY.DETERMINERS.MAP);
DICTIONARY.CONJUNCTIONS.FLAT = generateFlat(DICTIONARY.CONJUNCTIONS.MAP);
DICTIONARY.ALL_GENDERS.FLAT = generateFlat(DICTIONARY.ALL_GENDERS.MAP);

// oh my god

COMMON.PHRASES.MAP ={
PHRASES_HERE
}
    
COMMON.PROVERBS.MAP ={
PROVRBS_HERE
}

"""

def process_genders(entry):
    result = {}
    text = entry[2].strip()
    lines = [l for l in text.split('\n') if l.startswith('-')]

    def add(abbrs, meaning):
        for a in abbrs:
            a = a.strip().strip('.').strip()
            if not a:
                continue
            if a in GENDERS:
                g = GENDERS[a]
                if isinstance(g, list):
                    for x in g:
                        result[x] = result.get(x, '') + ('; ' if x in result else '') + meaning
                else:
                    result[g] = result.get(g, '') + ('; ' if g in result else '') + meaning

    if lines:
        for l in lines:
            p = l[2:].split(') ', 1)
            if len(p) == 2:
                abbrs = [x.strip() for x in p[0].strip('(.)').split(',')]
                add(abbrs, p[1].strip())
    else:
        if text.startswith('(') and ')' in text:
            gsrc, remaining_text = text.split(')', 1)
            extracted_src = gsrc.strip('()')
            test_abbrs = [a.strip() for a in extracted_src.replace('.', '').split(',') if a.strip()]
            if any(abbr in GENDERS for abbr in test_abbrs):
                src = extracted_src
                text = remaining_text
            else:
                src = re.sub(r'[().,]', '', entry[3])
        else:
            src = re.sub(r'[().,]', '', entry[3])
        abbrs = [a.strip() for a in src.split() if a]
        add(abbrs, text.strip())

    return result

def process_genders_dict(d):
    items = ", ".join(f'[{k}]: "{v}"' for k, v in d.items())
    return "{" + items + "}"

def process_declension(entry):
    declension = "1"
    if "(" in entry[0] and ")" in entry[0]:
        parts = entry[0].split("(")
        word = parts[0].strip()
        declension = parts[1].split(")")[0].strip()
    else:
        word = entry[0].strip()

    return word, declension

def process_notes(text):
    return str(text).replace('"', "'").replace("nan", "")

def process_final(text):
    return text.replace("\n", "").replace("-", "").replace(', ""', "")

if __name__ == "__main__":
    every = []
    
    phrases, proverbs = [], []
    
    phrases_data, proverbs_data = read_excel_data_common()
    data = read_excel_data_dict()
    for i in data:
        if i[1] == "n":
            word, dec = process_declension(i)
            every.append(process_final(f'new Noun("{word}", {dec}, {process_genders_dict(process_genders(i))}, "{process_notes(i[4])}")'))
        elif i[1] == "adj":
            word, dec = process_declension(i)
            every.append(process_final(f'new Adjective("{word}", {dec}, "{process_notes(i[2])}", "{i[3]}", "{process_notes(i[4])}")'))
        elif i[1] == "v": every.append(process_final(f'new Verb("{i[0]}", "{process_notes(i[2])}", "{i[3]}", "{process_notes(i[4])}")'))            
        elif i[1] == "adv": every.append(process_final(f'new Adverb("{i[0]}", "{process_notes(i[2])}", "{i[3]}", "{process_notes(i[4])}")'))
        elif i[1] == "aux": every.append(process_final(f'new Auxiliary("{i[0]}", "{process_notes(i[2])}", "{i[3]}", "{process_notes(i[4])}")'))
        elif i[1] == "pp": every.append(process_final(f'new Preposition("{i[0]}", "{process_notes(i[2])}", "{process_notes(i[4])}")'))
        elif i[1] == "part": every.append(process_final(f'new Particle("{i[0]}", "{process_notes(i[2])}", "{process_notes(i[4])}")'))
        elif i[1] == "det": every.append(process_final(f'new Determiner("{i[0]}", "{process_notes(i[2])}", "{process_notes(i[4])}")'))
        elif i[1] == "con": every.append(process_final(f'new Conjunction("{i[0]}", "{process_notes(i[2])}", "{process_notes(i[4])}")'))

    for i in phrases_data:
        if "nan" not in str(i[0]):
            phrases.append(f'new Phrase("{i[0]}", "{process_notes(i[1])}", "{process_notes(i[2])}")'.replace("\n", "").replace("-", ""))

    for i in proverbs_data:
        if "nan" not in str(i[0]):
            proverbs.append(f'new Proverb("{i[0]}", "{process_notes(i[1])}", "{process_notes(i[2])}")'.replace("\n", "").replace("-", ""))


    with open("../Dictionary.js", "w", encoding="utf-8") as f:
        f.write(dictionarydata
                .replace("WORDS_HERE", ",\n".join(every))
                .replace("PHRASES_HERE", ",\n".join(phrases))
                .replace("PROVRBS_HERE", ",\n".join(proverbs)))