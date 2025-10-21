// Dictionary cache and functions
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
    this.genders = genders // {"mun": "defenition for mundane", etc.}
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

// ^^==== CACHE =====^^



modules.push("DictionaryData")