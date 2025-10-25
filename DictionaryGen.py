import pandas as pd
import re

def read_excel_data():
    df = pd.read_excel('dict.xlsx')
    data_list = df.iloc[:, 0:5].values.tolist()
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


def process_declesion(entry):
    declension = "1"
    if "(" in entry[0] and ")" in entry[0]:
        parts = entry[0].split("(")
        word = parts[0].strip()
        declension = parts[1].split(")")[0].strip()
    else:
        word = entry[0].strip()

    return word, declension


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
  constructor(word, declension, genders, usage_notes) {
    this.type = "n"
    this.word = word
    this.declension = declension
    this.genders = genders
    this.usage_notes = usage_notes
  }
}

class Verb {
  constructor(word, defenition, froms, usage_notes) {
    this.type = "v"
    this.word = word
    this.defenition = defenition
    this.froms = froms
    this.usage_notes = usage_notes
  }
}

class Adjective {
  constructor(word, declesion, defenition, froms, usage_notes) {
    this.type = "adj"
    this.word = word
    this.declesion = declesion
    this.defenition = defenition
    this.froms = froms
    this.usage_notes = usage_notes
  }
}

class Adverb {
  constructor(word, defenition, froms, usage_notes) {
    this.type = "adv"
    this.word = word
    this.defenition = defenition
    this.froms = froms
    this.usage_notes = usage_notes
  }
}

class Auxiliary {
  constructor(word, defenition, froms, usage_notes) {
    this.type = "aux"
    this.word = word
    this.defenition = defenition
    this.froms = froms
    this.usage_notes = usage_notes
  }
}

class Preposition {
  constructor(word, defenition, usage_notes) {
    this.type = "pp"
    this.word = word
    this.defenition = defenition
    this.usage_notes = usage_notes
  }
}

class Particle {
  constructor(word, defenition, usage_notes) {
    this.type = "part"
    this.word = word
    this.defenition = defenition
    this.usage_notes = usage_notes
  }
}

class Determiner {
  constructor(word, defenition, usage_notes) {
    this.type = "det"
    this.word = word
    this.defenition = defenition
    this.usage_notes = usage_notes
  }
}

class Conjunction {
  constructor(word, defenition, usage_notes) {
    this.type = "con"
    this.word = word
    this.defenition = defenition
    this.usage_notes = usage_notes
  }
}


// vv==== CACHE =====vv

const NOUNS = {
NOUNS_HERE
}

const VERBS = {
VERBS_HERE
}

const ADJECTIVES = {
ADJECTIVES_HERE
}

const ADVERBS = {
ADVERBS_HERE
}

const AUXILIARIES = {
AUXILIARIES_HERE
}

const PREPOSITIONS = {
PREPOSITIONS_HERE
}

const PARTICLES = {
PARTICLES_HERE
}

const DETERMINERS = {
DETERMINERS_HERE
}

const CONJUNCTIONS = {
CONJUNCTIONS_HERE
}

// ^^==== CACHE =====^^

const ALL_WORDS = Object.fromEntries(
    Object.entries({
        ...NOUNS,
        ...VERBS,
        ...ADJECTIVES,
        ...ADVERBS,
        ...AUXILIARIES,
        ...PREPOSITIONS,
        ...PARTICLES
    }).sort(([aKey], [bKey]) => aKey.localeCompare(bKey))
);

modules.push("DictionaryData")

// oh my god
"""



def process_notes(text):
    return str(text).replace('"', "'").replace("nan", "")

if __name__ == "__main__":
    nouns, verbs, adjectives, adverbs, auxiliaries, prepositions, particles, determiners, conjunctions = [], [], [], [], [], [], [], [], []
    data = read_excel_data()
    for i in data:
        if i[1] == "n":
            word, dec = process_declesion(i)
            nouns.append(f'"{word}{dec}": new Noun("{word}", {dec}, {process_genders(i)}, "{process_notes(i[4])}")'.replace("\n", "").replace("-", ""))
        elif i[1] == "v":
            verbs.append(f'"{i[0]}": new Verb("{i[0]}", "{process_notes(i[2])}", "{i[3]}", "{process_notes(i[4])}")'.replace("\n", "").replace("-", ""))
        elif i[1] == "adj":
            word, dec = process_declesion(i)
            adjectives.append(f'"{word}{dec}": new Adjective("{word}", {dec}, "{process_notes(i[2])}", "{i[3]}", "{process_notes(i[4])}")'.replace("\n", "").replace("-", ""))
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
    with open("./js/DictionaryData.js", "w", encoding="utf-8") as f:
        f.write(dictionarydata
                .replace("NOUNS_HERE", ",\n".join(nouns))
                .replace("ADVERBS_HERE", ",\n".join(adverbs))
                .replace("VERBS_HERE", ",\n".join(verbs))
                .replace("ADJECTIVES_HERE", ",\n".join(adjectives))
                .replace("AUXILIARIES_HERE", ",\n".join(auxiliaries))
                .replace("PREPOSITIONS_HERE", ",\n".join(prepositions))
                .replace("PARTICLES_HERE", ",\n".join(particles))
                .replace("DETERMINERS_HERE", ",\n".join(determiners))
                .replace("CONJUNCTIONS_HERE", ",\n".join(conjunctions)))

