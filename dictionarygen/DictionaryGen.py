import pandas as pd
import re

def read_excel_data():
    df = pd.read_excel('dictionarygen/dict.xlsx')
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
            gsrc, text = text.split(')', 1)
            src = gsrc.strip('()') or entry[3].strip('()')
        else:
            src = entry[3].strip('()')
        abbrs = [a.strip() for a in src.replace('.', '').split(',') if a]
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


// vv==== CACHE =====vv

NOUNS.MAP = {
NOUNS_HERE
}

VERBS.MAP = {
VERBS_HERE
}

ADJECTIVES.MAP = {
ADJECTIVES_HERE
}

ADVERBS.MAP = {
ADVERBS_HERE
}

AUXILIARIES.MAP = {
AUXILIARIES_HERE
}

PREPOSITIONS.MAP = {
PREPOSITIONS_HERE
}

PARTICLES.MAP = {
PARTICLES_HERE
}

DETERMINERS.MAP = {
DETERMINERS_HERE
}

CONJUNCTIONS.MAP = {
CONJUNCTIONS_HERE
}

// ^^==== CACHE =====^^

ALL_WORDS.MAP = Object.entries({
    ...NOUNS,
    ...VERBS,
    ...ADJECTIVES,
    ...ADVERBS,
    ...AUXILIARIES,
    ...PREPOSITIONS,
    ...PARTICLES,
    ...DETERMINERS,
    ...CONJUNCTIONS,
})
.sort(([aKey], [bKey]) => aKey.localeCompare(bKey))
.flatMap(([key, value]) => {
    if (typeof value === 'object' && !Array.isArray(value) && Object.values(value)[0] instanceof Noun)
        return Object.values(value)
    return [value]
});

function basicSearch(keyword, wordmap) {
  const lower = keyword.toLowerCase()
  return wordmap.filter(w => w.word && w.word.toLowerCase().includes(lower))
}


NOUNS.fetch = function(keyword) {return basicSearch(keyword, NOUNS.FLAT)}
VERBS.fetch = function(keyword) {return basicSearch(keyword, VERBS.FLAT)}
ADJECTIVES.fetch = function(keyword) {return basicSearch(keyword, ADJECTIVES.FLAT)}
ADVERBS.fetch = function(keyword) {return basicSearch(keyword, ADVERBS.FLAT)}
AUXILIARIES.fetch = function(keyword) {return basicSearch(keyword, AUXILIARIES.FLAT)}
PREPOSITIONS.fetch = function(keyword) {return basicSearch(keyword, PREPOSITIONS.FLAT)}
PARTICLES.fetch = function(keyword) {return basicSearch(keyword, PARTICLES.FLAT)}
DETERMINERS.fetch = function(keyword) {return basicSearch(keyword, DETERMINERS.FLAT)}
CONJUNCTIONS.fetch = function(keyword) {return basicSearch(keyword, CONJUNCTIONS.FLAT)}
ALL_WORDS.fetch = function(keyword) {return basicSearch(keyword, ALL_WORDS.FLAT)}

function basicSearchByDefinition(definition, wordmap) {
  return (Array.isArray(wordmap) ? wordmap : Object.values(wordmap))
    .filter(w => w.definition && JSON.stringify(w.definition).toLowerCase().includes(definition.toLowerCase()))
}

function basicSearchByGender(definition, wordmap) {
  return (Array.isArray(wordmap) ? wordmap : Object.values(wordmap))
    .filter(w => w.genders && JSON.stringify(w.genders).toLowerCase().includes(definition.toLowerCase()))
}

NOUNS.fetchByDefinition = function(def) {return basicSearchByGender(def, NOUNS.FLAT)}
VERBS.fetchByDefinition = function(def) {return basicSearchByDefinition(def, VERBS.FLAT)}
ADJECTIVES.fetchByDefinition = function(def) {return basicSearchByDefinition(def, ADJECTIVES.FLAT)}
ADVERBS.fetchByDefinition = function(def) {return basicSearchByDefinition(def, ADVERBS.FLAT)}
AUXILIARIES.fetchByDefinition = function(def) {return basicSearchByDefinition(def, AUXILIARIES.FLAT)}
PREPOSITIONS.fetchByDefinition = function(def) {return basicSearchByDefinition(def, PREPOSITIONS.FLAT)}
PARTICLES.fetchByDefinition = function(def) {return basicSearchByDefinition(def, PARTICLES.FLAT)}
DETERMINERS.fetchByDefinition = function(def) {return basicSearchByDefinition(def, DETERMINERS.FLAT)}
CONJUNCTIONS.fetchByDefinition = function(def) {return basicSearchByDefinition(def, CONJUNCTIONS.FLAT)}
ALL_WORDS.fetchByDefinition = function(def) {return basicSearchByDefinition(def, ALL_WORDS.FLAT)}

WORD_UTILS.combineGenders = function(entry) {
  const animates = GENDERS_ANIMATES.AFFECTED.map(g => g.NAME)
  const inanimates = GENDERS_INANIMATES.AFFECTED.map(g => g.NAME)

  const defMap = {}
  for (const [gender, def] of Object.entries(entry)) {
    if (!defMap[def]) defMap[def] = []
    defMap[def].push(gender)
  }

  const result = {}
  for (const [def, genders] of Object.entries(defMap)) {
    const animCheck = animates.every(g => genders.includes(g))
    const inanimCheck = inanimates.every(g => genders.includes(g))
    const allCheck = [...animates, ...inanimates].every(g => genders.includes(g))

    if (allCheck) result[GENDERS_ALL.NAME] = def
    else if (animCheck) result[GENDERS_ANIMATES.NAME] = def
    else if (inanimCheck) result[GENDERS_INANIMATES.NAME] = def
    else result[genders.join(", ")] = def
  }
  return result
}

modules.push("DictionaryData")

// oh my god
"""



def process_notes(text):
    return str(text).replace('"', "'").replace("nan", "")

if __name__ == "__main__":
    noun_dict = {}
    adj_dict = {}
    verbs, adverbs, auxiliaries, prepositions, particles, determiners, conjunctions = [], [], [], [], [], [], []
    
    data = read_excel_data()
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

    nouns = [f'"{word}": {{{",".join(f"{k}: {v}" for k,v in sorted(decls.items()))}}}'
             if len(decls) > 1 else f'"{word}": {list(decls.values())[0]}'
             for word, decls in sorted(noun_dict.items())]
    
    adjectives = [f'"{word}": {{{",".join(f"{k}: {v}" for k,v in sorted(decls.items()))}}}'
                 if len(decls) > 1 else f'"{word}": {list(decls.values())[0]}'
                 for word, decls in sorted(adj_dict.items())]

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

