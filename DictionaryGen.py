import pandas as pd
import re

def read_excel_data():
    df = pd.read_excel('dict.xlsx')
    data_list = df.iloc[:, 0:4].values.tolist()
    return data_list

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
    'inanimates': ['Magical', 'Mundane', 'Abstract'],
    'all': ['Exalted', 'Rational', 'Monstrous', 'Irrational',
            'Magical', 'Mundane', 'Abstract']
}

def process_genders(entry):
    result = {}
    text = entry[2].strip()
    lines = [l for l in text.split('\n') if l.startswith('-')]

    def add(abbrs, meaning):
        for a in abbrs:
            if a in GENDERS:
                g = GENDERS[a]
                if isinstance(g, list):
                    for x in g: result[x] = meaning
                else: result[g] = meaning

    if lines:
        for l in lines:
            p = l[2:].split(') ', 1)
            if len(p) == 2: add([p[0].strip('(.)')], p[1].strip())
    else:
        if text.startswith('(') and ')' in text:
            gsrc, text = text.split(')', 1)
            src = gsrc.strip('()') or entry[3].strip('()')
        else:
            src = entry[3].strip('()')
        add([a.strip() for a in src.replace('.', '').split(',') if a], text.strip())
    return result


def process_noun_entry(entry):
    declension = "1"
    if "(" in entry[0] and ")" in entry[0]:
        parts = entry[0].split("(")
        word = parts[0].strip()
        declension = parts[1].split(")")[0].strip()
    else:
        word = entry[0].strip()

    genders = process_genders(entry)
    return word, declension, genders


dictionarydata = """
modules = modules || []

if (!modules.includes("MainMap")) {
    throw new Error("DictionaryData requires MainMap to be loaded first.")
}

if (!modules.includes("CharacterMap")) {
    throw new Error("DictionaryData requires CharacterMap to be loaded first.")
}

if (!modules.includes("AffixesMap")) {
    throw new Error("DictionaryData requires AffixesMap to be loaded first.")
}


class Noun {
  constructor(word, declension, genders) {
    this.type = "n"
    this.word = word
    this.declension = declension
    this.genders = genders
  }
}

class Verb {
  constructor(word, declension, defenition, froms) {
    this.type = "v"
    this.word = word
    this.declension = declension
    this.defenition = defenition
    this.froms = froms
  }
}

class Adjective {
  constructor(word, defenition, froms) {
    this.type = "adj"
    this.word = word
    this.defenition = defenition
    this.froms = froms
  }
}

class Adverb {
  constructor(word, defenition, froms) {
    this.type = "adv"
    this.word = word
    this.defenition = defenition
    this.froms = froms
  }
}

class Auxiliary {
  constructor(word, defenition, froms) {
    this.type = "aux"
    this.word = word
    this.defenition = defenition
    this.froms = froms
  }
}

class Preposition {
  constructor(word, defenition) {
    this.type = "pp"
    this.word = word
    this.defenition = defenition
  }
}

class Particle {
  constructor(word, defenition) {
    this.type = "part"
    this.word = word
    this.defenition = defenition
  }
}


// vv==== CACHE =====vv

const NOUNS = {
    NOUNS_HERE
}

// ^^==== CACHE =====^^



modules.push("DictionaryData")
"""





if __name__ == "__main__":
    nouns = []
    data = read_excel_data()
    for i in data:
        if i[1] == "n":
            word, dec, genders = process_noun_entry(i)
            nouns.append(f'"{word}{dec}": Noun("{word}", {dec}, {genders})')
    with open("./DictionaryData.js", "w", encoding="utf-8") as f:
        f.write(dictionarydata.replace("NOUNS_HERE", ",\n".join(nouns)))

