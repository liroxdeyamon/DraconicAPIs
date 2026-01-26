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
    'mag': ['Magical'],
    'mun': ['Mundane'],
    'a': ['Abstract'],
    'e': ['Exalted'],
    'r': ['Rational'],
    'mon': ['Monstrous'],
    'i': ['Irrational'],
    'animates': ['Exalted', 'Rational', 'Monstrous', 'Irrational'],
    'animate': ['Exalted', 'Rational', 'Monstrous', 'Irrational'],
    'inanimates': ['Magical', 'Mundane', 'Abstract'],
    'inanimate': ['Magical', 'Mundane', 'Abstract'],
    'all': ['Exalted', 'Rational', 'Monstrous', 'Irrational',
            'Magical', 'Mundane', 'Abstract']
}

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
            # Check if the extracted source contains valid gender abbreviations
            test_abbrs = [a.strip() for a in extracted_src.replace('.', '').split(',') if a.strip()]
            if any(abbr in GENDERS for abbr in test_abbrs):
                # Use the extracted gender source
                src = extracted_src
                text = remaining_text
            else:
                # Fall back to entry[3]
                src = re.sub(r'[().,]', '', entry[3])
        else:
            src = re.sub(r'[().,]', '', entry[3])
        abbrs = [a.strip() for a in src.split() if a]
        add(abbrs, text.strip())

    return result


def process_declension(entry):
    declension = "1"
    if "(" in entry[0] and ")" in entry[0]:
        parts = entry[0].split("(")
        word = parts[0].strip()
        declension = parts[1].split(")")[0].strip()
    else:
        word = entry[0].strip()

    return word, declension


dictionarydata = """
// vv==== CACHE =====vv

DICTIONARY.NOUNS.MAP = {
NOUNS_HERE
}

DICTIONARY.VERBS.MAP = {
VERBS_HERE
}

DICTIONARY.ADJECTIVES.MAP = {
ADJECTIVES_HERE
}

DICTIONARY.ADVERBS.MAP = {
ADVERBS_HERE
}

DICTIONARY.AUXILIARIES.MAP = {
AUXILIARIES_HERE
}

DICTIONARY.PREPOSITIONS.MAP = {
PREPOSITIONS_HERE
}

DICTIONARY.PARTICLES.MAP = {
PARTICLES_HERE
}

DICTIONARY.DETERMINERS.MAP = {
DETERMINERS_HERE
}

DICTIONARY.CONJUNCTIONS.MAP = {
CONJUNCTIONS_HERE
}

// ^^==== CACHE =====^^

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

// oh my god

COMMON.PHRASES.MAP ={
PHRASES_HERE
}
    
COMMON.PROVERBS.MAP ={
PROVRBS_HERE
}

"""



def process_notes(text):
    return str(text).replace('"', "'").replace("nan", "")

if __name__ == "__main__":
    noun_dict = {}
    adj_dict = {}
    verbs, adverbs, auxiliaries, prepositions, particles, determiners, conjunctions = [], [], [], [], [], [], []
    
    phrases, proverbs = [], []
    
    phrases_data, proverbs_data = read_excel_data_common()
    data = read_excel_data_dict()
    for i in data:
        if i[1] == "n":
            word, dec = process_declension(i)
            if word not in noun_dict:
                noun_dict[word] = {}
            noun_dict[word][dec] = f'new Noun("{word}", {dec}, {process_genders(i)}, "{process_notes(i[4])}")'.replace("\n", "").replace("-", "")
        elif i[1] == "adj":
            word, dec = process_declension(i)
            if word not in adj_dict:
                adj_dict[word] = {}
            adj_dict[word][dec] = f'new Adjective("{word}", {dec}, "{process_notes(i[2])}", "{i[3]}", "{process_notes(i[4])}")'.replace("\n", "").replace("-", "")
        elif i[1] == "v":
            verbs.append(f'"{i[0]}": new Verb("{i[0]}", "{process_notes(i[2])}", "{i[3]}", "{process_notes(i[4])}")'.replace("\n", "").replace("-", ""))

        elif i[1] == "adv":
            adverbs.append(f'"{i[0]}": new Adverb("{i[0]}", "{process_notes(i[2])}", "{i[3]}", "{process_notes(i[4])}")'.replace("\n", "").replace("-", ""))
        elif i[1] == "aux":
            auxiliaries.append(f'"{i[0]}": new Auxiliary("{i[0]}", "{process_notes(i[2])}", "{i[3]}", "{process_notes(i[4])}")'.replace("\n", "").replace("-", ""))
        elif i[1] == "pp":
            prepositions.append(f'"{i[0]}": new Preposition("{i[0]}", "{process_notes(i[2])}", "{process_notes(i[4])}")'.replace("\n", "").replace("-", ""))
        elif i[1] == "part":
            particles.append(f'"{i[0]}": new Particle("{i[0]}", "{process_notes(i[2])}", "{process_notes(i[4])}")'.replace("\n", "").replace("-", ""))
        elif i[1] == "det":
            determiners.append(f'"{i[0]}": new Determiner("{i[0]}", "{process_notes(i[2])}", "{process_notes(i[4])}")'.replace("\n", "").replace("-", ""))
        elif i[1] == "con":
            conjunctions.append(f'"{i[0]}": new Conjunction("{i[0]}", "{process_notes(i[2])}", "{process_notes(i[4])}")'.replace("\n", "").replace("-", ""))


    for i in phrases_data:
        if "nan" not in str(i[0]):
            phrases.append(f'"{i[0]}": new Phrase("{i[0]}", "{process_notes(i[1])}", "{process_notes(i[2])}")'.replace("\n", "").replace("-", ""))

    for i in proverbs_data:
        if "nan" not in str(i[0]):
            proverbs.append(f'"{i[0]}": new Proverb("{i[0]}", "{process_notes(i[1])}", "{process_notes(i[2])}")'.replace("\n", "").replace("-", ""))


    nouns = [f'"{word}": {{{",".join(f"{k}: {v}" for k,v in sorted(decls.items()))}}}'
             if len(decls) > 1 else f'"{word}": {list(decls.values())[0]}'
             for word, decls in sorted(noun_dict.items())]
    
    adjectives = [f'"{word}": {{{",".join(f"{k}: {v}" for k,v in sorted(decls.items()))}}}'
                 if len(decls) > 1 else f'"{word}": {list(decls.values())[0]}'
                 for word, decls in sorted(adj_dict.items())]

    with open("../Dictionary.js", "w", encoding="utf-8") as f:
        f.write(dictionarydata
                .replace("NOUNS_HERE", ",\n".join(nouns))
                .replace("ADVERBS_HERE", ",\n".join(adverbs))
                .replace("VERBS_HERE", ",\n".join(verbs))
                .replace("ADJECTIVES_HERE", ",\n".join(adjectives))
                .replace("AUXILIARIES_HERE", ",\n".join(auxiliaries))
                .replace("PREPOSITIONS_HERE", ",\n".join(prepositions))
                .replace("PARTICLES_HERE", ",\n".join(particles))
                .replace("DETERMINERS_HERE", ",\n".join(determiners))
                .replace("CONJUNCTIONS_HERE", ",\n".join(conjunctions))
                .replace("PHRASES_HERE", ",\n".join(phrases))
                .replace("PROVRBS_HERE", ",\n".join(proverbs)))