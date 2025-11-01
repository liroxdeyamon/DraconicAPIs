
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
"afuχ": new Noun("afuχ", 3, {'Magical': 'life cycle, circle of life', 'Mundane': 'wheel', 'Abstract': 'cycle, circle'}, ""),
"axa": {1: new Noun("axa", 1, {'Abstract': 'negativity; negation'}, ""),2: new Noun("axa", 2, {'Monstrous': 'eyebat; cyclops', 'Magical': 'eye', 'Mundane': 'eye', 'Abstract': 'sight, vision'}, "")},
"cellâlq": new Noun("cellâlq", 3, {'Monstrous': 'giant fire elemental, especially if violent', 'Irrational': 'flame as personified', 'Magical': 'firestorm, inferno; (definite) Hell', 'Mundane': 'cinder, ember', 'Abstract': 'uncontained or unchecked power; plague'}, ""),
"cerχalli": new Noun("cerχalli", 1, {'Magical': 'potion vial; any container for magical substance', 'Mundane': 'vial, flask, cup, any small container for liquid'}, ""),
"cillu": new Noun("cillu", 1, {'Mundane': 'ceiling, roof; overhang', 'Abstract': 'top, highest part'}, ""),
"ciχħō": new Noun("ciχħō", 1, {'Exalted': 'expert; one who is wise and/or knowledgeable', 'Rational': 'expert; one who is wise and/or knowledgeable'}, " rarely used with Monstrous or Irrational nouns"),
"cyfox": new Noun("cyfox", 2, {'Rational': 'coward, wuss (pejorative)', 'Monstrous': 'coward, wuss (pejorative)', 'Irrational': 'coward, wuss (pejorative)', 'Magical': 'nutrient; food, meal', 'Mundane': 'food, meal', 'Abstract': 'sustenance, nutrition; potency; essence, quality'}, ""),
"câllaq": new Noun("câllaq", 3, {'Irrational': 'fire elemental', 'Magical': 'wildfire', 'Mundane': 'ash, soot', 'Abstract': 'conflagration, burning'}, ""),
"cēlq": new Noun("cēlq", 3, {'Magical': 'uncontrollable laughter', 'Abstract': 'humor; laughter'}, ""),
"cī": new Noun("cī", 3, {'Irrational': 'herb, especially for culinary use', 'Magical': 'tea; any herbal beverage', 'Mundane': 'tea; any herbal beverage'}, ""),
"ehsen": new Noun("ehsen", 3, {'Rational': 'werewolf', 'Monstrous': 'werewolf'}, ""),
"erχ": new Noun("erχ", 2, {'Magical': 'air', 'Mundane': 'air', 'Abstract': 'surroundings'}, ""),
"feru": new Noun("feru", 3, {'Magical': 'sedative; anesthesia', 'Mundane': 'milk; nectar', 'Abstract': 'drowsiness, sleepiness; sedation'}, ""),
"feŋkxō": new Noun("feŋkxō", 1, {'Rational': 'baby, infant (nondragon)', 'Monstrous': 'baby, infant (nondragon)', 'Irrational': 'baby, infant (nondragon)', 'Abstract': 'infancy (nondragon)'}, ""),
"feŋqχī": new Noun("feŋqχī", 2, {'Irrational': '(plural) offspring, progeny, young (of nonexalted beings)', 'Magical': 'elementrary particle; (biology) cell', 'Mundane': 'particulate, particle of matter; (plural) dust; cog, gear', 'Abstract': 'part, especially of a much larger whole; minutia'}, ""),
"feŋqχō": new Noun("feŋqχō", 2, {'Magical': 'lost soul; magical byproduct', 'Mundane': 'byproduct', 'Abstract': 'unimportance, insignificance; inconsequential sideeffect'}, ""),
"finluh": new Noun("finluh", 2, {'Exalted': 'fey creature', 'Rational': 'fey creature', 'Monstrous': 'fey creature', 'Irrational': 'fey creature', 'Magical': 'fey magic, fey energy; (definite) The Fey Realm', 'Mundane': 'fey item or object', 'Abstract': 'fey'}, ""),
"fu'so": new Noun("fu'so", 2, {'Monstrous': 'a viscous ooze or slime', 'Irrational': 'a viscous ooze or slime', 'Magical': 'liver', 'Mundane': 'liver'}, ""),
"fuχħālt": new Noun("fuχħālt", 2, {'Abstract': 'width'}, ""),
"fæfē": new Noun("fæfē", 1, {'Monstrous': 'fog monster', 'Magical': 'stormclouds', 'Mundane': 'thick fog', 'Abstract': 'bewilderment, incredulity'}, ""),
"fē": new Noun("fē", 1, {'Irrational': 'small air elemental; air sprite', 'Magical': 'ethereal mist; ethereal fog', 'Mundane': 'mist; light fog', 'Abstract': 'haze, daze; translucence'}, ""),
"fēl": {1: new Noun("fēl", 1, {'Magical': 'silk', 'Mundane': 'cream; yogurt'}, ""),3: new Noun("fēl", 3, {'Magical': 'siphon of energy', 'Mundane': 'drain, siphon', 'Abstract': 'drainage'}, "")},
"fēltū": new Noun("fēltū", 1, {'Exalted': 'a historically common Draconic name', 'Rational': 'a historically common Draconic name; succubus; incubus', 'Monstrous': 'succubus; incubus', 'Irrational': 'farm animal', 'Magical': 'uncontrollable laughter', 'Mundane': 'cheese', 'Abstract': 'cheeriness, gaiety; luck, good fortune'}, " the sense 'Draconic name' has become increasingly rare in the modern day"),
"fōlnty": new Noun("fōlnty", 3, {'Abstract': 'regularity, order; sequence; cleanliness'}, ""),
"fōxeh": new Noun("fōxeh", 3, {'Rational': 'prey, particularly as food', 'Monstrous': 'prey, particularly as food', 'Irrational': 'prey, particularly as food', 'Magical': 'sacrificial item, offering; meat, flesh; corpse, carcass', 'Mundane': 'meat, flesh; corpse, carcass', 'Abstract': 'embarassment; failure, rejection'}, " sense 'corpse, carcass' can never refer to the corpse of an Exalted being"),
"fōxeχaχ": new Noun("fōxeχaχ", 1, {'Exalted': 'cook, chef', 'Rational': 'cook, chef', 'Monstrous': 'cook, chef', 'Irrational': 'cook, chef', 'Magical': 'fire (as used in preparation of food)', 'Mundane': 'kitchen; kitchen appliance', 'Abstract': 'cuisine; culinary arts'}, ""),
"fū'su": new Noun("fū'su", 2, {'Magical': 'alchemical equipment', 'Mundane': 'enzyme; dissolver', 'Abstract': 'distillation; dissolution, especially for alchemy'}, ""),
"fūrχ": new Noun("fūrχ", 2, {'Magical': 'measuring instrument', 'Mundane': 'measuring instrument', 'Abstract': 'direction; linearity; Directive'}, ""),
"fūχħālt": new Noun("fūχħālt", 2, {'Exalted': 'a creature that is particularly wide', 'Rational': 'a creature that is particularly wide', 'Monstrous': 'a creature that is particularly wide', 'Irrational': 'a creature that is particularly wide'}, ""),
"ha'qu": new Noun("ha'qu", 1, {'Exalted': 'philosopher', 'Rational': 'philosopher', 'Monstrous': 'philosopher', 'Irrational': 'philosopher', 'Magical': 'Magic, as personified', 'Abstract': 'philosophy'}, ""),
"hakxu": new Noun("hakxu", 1, {'Magical': 'drive, purpose, passion', 'Mundane': 'target, mark, bullseye; reticle', 'Abstract': 'reason, purpose, rationale; goal, target'}, ""),
"hanah": new Noun("hanah", 3, {'Magical': '(definite) the ether field, the field of omnipresent ethereal energy', 'Mundane': 'field, pasture', 'Abstract': 'area, region; district, administrative division'}, ""),
"hanto": new Noun("hanto", 3, {'Exalted': 'individual', 'Rational': 'individual', 'Monstrous': 'individual', 'Irrational': 'individual', 'Magical': 'item, object', 'Mundane': 'item, object', 'Abstract': 'name; personality'}, ""),
"hantox": new Noun("hantox", 3, {'Magical': 'true name', 'Mundane': 'signature; inscription', 'Abstract': 'nickname; noun'}, ""),
"harāreχ": new Noun("harāreχ", 2, {'Magical': 'heat wave', 'Mundane': 'heat source; controlled fire', 'Abstract': 'heat; efficacy'}, ""),
"harārō": new Noun("harārō", 2, {'Rational': 'demon', 'Monstrous': 'demon', 'Irrational': 'demon', 'Magical': '(definite) The Abyss', 'Abstract': 'Abyssal (language)'}, ""),
"harī": new Noun("harī", 2, {'Magical': 'alcohol', 'Mundane': '(usually plural) tinder, dry leaves', 'Abstract': 'flammability'}, ""),
"haxær": new Noun("haxær", 2, {'Abstract': 'length; extension'}, ""),
"hexto": new Noun("hexto", 1, {'Magical': 'northern wind', 'Mundane': 'northern wind', 'Abstract': 'north'}, ""),
"hin": new Noun("hin", 3, {'Monstrous': 'ghost', 'Irrational': '(plural only) spirits generally', 'Magical': 'wind', 'Mundane': 'breeze, gust', 'Abstract': 'weather; haunting'}, ""),
"honax": new Noun("honax", 3, {'Exalted': 'herbivore, vegetarian', 'Rational': 'herbivore, vegetarian', 'Monstrous': 'herbivore, vegetarian', 'Irrational': 'herbivore, vegetarian'}, ""),
"honi": new Noun("honi", 1, {'Irrational': 'edible plant; fruit or vegetable as part of a plant', 'Magical': 'edible plant; fruit or vegetable as part of a plant', 'Mundane': 'fruit or vegetable as food', 'Abstract': 'vegetarianism, herbivorism'}, ""),
"honæh": new Noun("honæh", 4, {'Irrational': 'grass, fern, moss', 'Magical': 'magical vegetaion', 'Mundane': 'lawn, prairie, pasture', 'Abstract': '(figurative) anchor, tether, reality'}, ""),
"hā": new Noun("hā", 1, {'Exalted': "soul; a creature's life force, especially after death", 'Rational': "soul; a creature's life force, especially after death", 'Monstrous': "soul; a creature's life force, especially after death", 'Irrational': "soul; a creature's life force, especially after death", 'Magical': "soul; a creature's life force, especially after death", 'Abstract': 'quintessence'}, " typically classed as animate when referring to specific souls, and in the Magical when discussing souls generally"),
"hāreχ": new Noun("hāreχ", 2, {'Magical': 'heater; stove, oven', 'Mundane': 'heater; stove, oven', 'Abstract': 'heating; temperature'}, ""),
"hārm": new Noun("hārm", 3, {'Magical': 'magical daylight', 'Mundane': 'daylight', 'Abstract': 'day, daytime'}, ""),
"hāxær": new Noun("hāxær", 2, {'Exalted': 'any long, typically serpentine creature\n(i.) snake, serpent\n(mag., mun.) any long, typically thin and cylindrical object', 'Rational': 'any long, typically serpentine creature\n(i.) snake, serpent\n(mag., mun.) any long, typically thin and cylindrical object', 'Monstrous': 'any long, typically serpentine creature\n(i.) snake, serpent\n(mag., mun.) any long, typically thin and cylindrical object', 'Irrational': 'any long, typically serpentine creature\n(i.) snake, serpent\n(mag., mun.) any long, typically thin and cylindrical object'}, ""),
"hē": new Noun("hē", 1, {'Exalted': 'astrologer; magic user guided by the stars', 'Rational': 'astrologer; magic user guided by the stars', 'Monstrous': 'astrologer; magic user guided by the stars', 'Irrational': 'astrologer; magic user guided by the stars', 'Magical': 'constellation; star based magic; astrological instrument', 'Mundane': 'astrological instrument', 'Abstract': 'astrology; magic guided by the stars'}, ""),
"hēn": new Noun("hēn", 3, {'Irrational': 'wind or air as personified', 'Magical': 'hurricane; extremely powerful winds', 'Mundane': 'whirlwind', 'Abstract': 'disorientation, confusion; rotation'}, ""),
"hō": new Noun("hō", 1, {'Magical': 'star', 'Abstract': '(definite, plural only) the stars, as personified or referenced abstractly; the night sky'}, " sense 'star' predomitly treated as a Magical noun, but may occasionally be used in any of the animate genders, referencing someone who has passed away and whose soul is believed to be among the stars or beyond"),
"hōk": new Noun("hōk", 2, {'Exalted': 'titan', 'Magical': 'plane, dimension', 'Mundane': 'expanse, open area', 'Abstract': 'place, location, space'}, ""),
"ifū": new Noun("ifū", 1, {'Exalted': 'spitter, that which spits', 'Rational': 'spitter, that which spits', 'Monstrous': 'spitter, that which spits', 'Irrational': 'spitter, that which spits; llama', 'Abstract': 'spitting'}, ""),
"ik": new Noun("ik", 3, {'Magical': "mana; one's personal store of magical energy", 'Mundane': 'source, especially of power', 'Abstract': 'willpower, resolve; focus'}, ""),
"ikfūh": new Noun("ikfūh", 3, {'Exalted': 'widow, widower', 'Rational': 'widow, widower', 'Monstrous': 'widow, widower', 'Irrational': 'widow, widower', 'Abstract': 'regret, remorse; apology; condolences'}, ""),
"itræχnâħ": new Noun("itræχnâħ", 1, {'Magical': 'draconic magic', 'Abstract': 'Draconic (language)'}, ""),
"iχallħá": new Noun("iχallħá", 1, {'Irrational': 'canopy of a forest', 'Mundane': 'peak, summit', 'Abstract': 'maximum'}, ""),
"kax": new Noun("kax", 2, {'Magical': 'brimstone, sulfur; char', 'Mundane': 'brimstone, sulfur; char', 'Abstract': 'char, burning'}, ""),
"kaχālel": new Noun("kaχālel", 3, {'Magical': 'counterspell', 'Abstract': 'refusal, objection; indignation'}, ""),
"keχōχ": new Noun("keχōχ", 4, {'Abstract': 'change, variation; variable'}, ""),
"kith": new Noun("kith", 3, {'Irrational': 'wisp', 'Magical': 'burst of electric energy', 'Mundane': 'spark; crackle of electricity', 'Abstract': 'static electricity; an idea that comes to one suddenly, a eureka moment'}, ""),
"kixith": new Noun("kixith", 3, {'Mundane': 'electricity, as physically manifested', 'Abstract': 'electricity'}, ""),
"kura": new Noun("kura", 1, {'Magical': 'a jolt, an electric shock; (definite) true love’s kiss', 'Mundane': 'lip; rim, brim', 'Abstract': 'a kiss; contact; kissing'}, ""),
"kuχū": new Noun("kuχū", 1, {'Monstrous': '(definite) personification of the night and the monsters therein, especially in a dark forest', 'Magical': 'magical darkness', 'Abstract': 'night, nighttime'}, ""),
"kxælli": new Noun("kxælli", 3, {'Rational': 'any canine humanoid', 'Monstrous': 'any monstrous doglike creature', 'Irrational': 'dog; wolf', 'Abstract': 'dogkind or wolfkind, dogs or wolves as a group'}, " does not typically refer to werewolves"),
"kxēlkxēl": new Noun("kxēlkxēl", 3, {'Exalted': 'lightning dragon, storm dragon', 'Monstrous': 'lightning elemental', 'Irrational': 'lightning elemental', 'Magical': 'lightning'}, ""),
"kæmō": new Noun("kæmō", 3, {'Exalted': 'noble', 'Rational': 'noble', 'Monstrous': 'noble', 'Irrational': 'noble', 'Magical': 'bag of holding; magical storage', 'Mundane': 'physical storage', 'Abstract': 'genre, category, kind, class; storage'}, ""),
"kālôŋ": new Noun("kālôŋ", 3, {'Rational': 'human, person', 'Irrational': 'human child', 'Abstract': 'humanity, humans as a group'}, ""),
"kāmō": new Noun("kāmō", 3, {'Magical': 'magical impermeable membrane', 'Mundane': 'fence, wall', 'Abstract': 'division, segregation; role; border'}, ""),
"kēx": new Noun("kēx", 1, {'Exalted': 'phoenix', 'Rational': 'any winged humanoid', 'Monstrous': 'harpy', 'Irrational': 'any winged animal other than a bird', 'Magical': 'wing', 'Mundane': 'wing', 'Abstract': 'winged flight'}, " in the Irrational, the term typically refers to creatures that have been magically bestowed wings that otherwise wouldn't have them"),
"kōru": new Noun("kōru", 2, {'Magical': 'iron; (broadly) any metal', 'Mundane': 'iron; (broadly) any metal', 'Abstract': 'metal as a material'}, ""),
"kōrū": new Noun("kōrū", 1, {'Monstrous': 'amalgam, amalgamation', 'Irrational': 'robot; golem, especially of metal', 'Magical': 'steel; strong metallic alloy', 'Mundane': 'steel; strong metallic alloy', 'Abstract': 'fusion, blending; the creation of alloys; the process of amalgamation'}, ""),
"kōthuŋ": new Noun("kōthuŋ", 3, {'Exalted': 'builder, constructor; worker', 'Rational': 'builder, constructor; worker', 'Monstrous': 'builder, constructor; worker', 'Irrational': 'builder, constructor; worker', 'Magical': 'building, construction (physical); physical structure', 'Mundane': 'building, construction (physical); physical structure', 'Abstract': 'building, construction (process); theoretical structure'}, ""),
"laq̇th": new Noun("laq̇th", 1, {'Magical': 'song', 'Mundane': 'song', 'Abstract': 'song'}, " this word is Abstract when discussing musical theory or songs in the abstract, Mundane when referring to a song being sung or performed, and Magical when it either has magical effects or when it arouses much emotion"),
"lartrāχ": new Noun("lartrāχ", 2, {'Magical': 'potent acid, especially as produced biologically; bile', 'Mundane': 'acid', 'Abstract': 'acidity'}, ""),
"lepán": new Noun("lepán", 3, {'Magical': 'poison, venom, toxin', 'Abstract': 'misery; injustice, oppresion; villainy, tyranny'}, ""),
"lirq̇": new Noun("lirq̇", 3, {'Irrational': 'fruit as part of a plant, especially if sweet', 'Magical': 'magical fruit', 'Mundane': 'sweet, dessert; fruit as food; sugar', 'Abstract': 'sweetness; temptation'}, ""),
"llefāχ": new Noun("llefāχ", 1, {'Exalted': 'a Draconic name; an individual of faith; a believer', 'Rational': 'a Draconic name; an individual of faith; a believer', 'Monstrous': 'an individual of faith; a believer', 'Irrational': 'an individual of faith; a believer', 'Mundane': 'support structure', 'Abstract': 'religious faith'}, ""),
"llern": new Noun("llern", 3, {'Monstrous': 'sea monster', 'Irrational': 'sea creature; (in the plural) marine life', 'Mundane': 'sea, ocean; large body of liquid', 'Abstract': '(definite, singular only) the sea, as personified or referenced abstractly'}, ""),
"llery'": new Noun("llery'", 2, {'Abstract': 'intimacy'}, ""),
"llerēχ": new Noun("llerēχ", 1, {'Exalted': 'roommate, flatemate, housemate', 'Rational': 'roommate, flatemate, housemate', 'Monstrous': 'roommate, flatemate, housemate', 'Irrational': 'roommate, flatemate, housemate', 'Magical': 'keepsake; item of much sentimental value', 'Mundane': 'keepsake; item of much sentimental value', 'Abstract': 'cohabitation'}, ""),
"lletroħôqħ": new Noun("lletroħôqħ", 1, {'Exalted': 'chatterbox, a talkative individual', 'Rational': 'chatterbox, a talkative individual', 'Monstrous': 'chatterbox, a talkative individual', 'Irrational': 'chatterbox, a talkative individual', 'Magical': 'sprite', 'Mundane': 'noisemaker', 'Abstract': 'chatter, especially when excessive'}, ""),
"lleχa": new Noun("lleχa", 2, {'Mundane': 'mesa; plateau', 'Abstract': 'flatness'}, ""),
"lleχħôχ": new Noun("lleχħôχ", 3, {'Exalted': 'smith, forger; metallurgist', 'Rational': 'smith, forger; metallurgist', 'Monstrous': 'smith, forger; metallurgist', 'Irrational': 'smith, forger; metallurgist', 'Magical': 'smithing magic', 'Mundane': 'hammer; smithing tool', 'Abstract': 'the act of smithing or metallurgy'}, ""),
"lli": new Noun("lli", 1, {'Exalted': 'sister', 'Rational': 'sister', 'Monstrous': 'sister', 'Irrational': 'sister'}, ""),
"llifuχō": new Noun("llifuχō", 1, {'Exalted': 'a common Draconic name; a trustworthy individual', 'Rational': 'a common Draconic name; a trustworthy individual', 'Monstrous': 'a trustworthy individual', 'Irrational': 'a trustworthy individual', 'Magical': 'support, bolster, base', 'Mundane': 'support, bolster, base', 'Abstract': 'faith, trust'}, ""),
"llifāχ": new Noun("llifāχ", 1, {'Magical': 'invocation or ritual for a deity', 'Abstract': 'blind faith'}, ""),
"llihqō": new Noun("llihqō", 3, {'Monstrous': 'bear', 'Irrational': 'bear'}, ""),
"llinīna": new Noun("llinīna", 2, {'Exalted': 'any slow and hardworking creature, especially if unintelligent', 'Rational': 'any slow and hardworking creature, especially if unintelligent', 'Monstrous': 'any slow and hardworking creature, especially if unintelligent', 'Irrational': 'any slow and hardworking creature, especially if unintelligent', 'Magical': 'a spent magical source; a nonmagical item that was once magical', 'Abstract': 'exhaustion; exertion, overexertion; hard labor, especially for little gain'}, ""),
"lliqa": new Noun("lliqa", 3, {'Exalted': 'a common Draconic name; flyer, that which flies', 'Rational': 'a common Draconic name; flyer, that which flies', 'Monstrous': 'flyer, that which flies', 'Irrational': 'flyer, that which flies; bird', 'Magical': 'projectile; arrow', 'Mundane': 'projectile; arrow', 'Abstract': 'flight, the ability to fly'}, ""),
"llylurħ": new Noun("llylurħ", 4, {'Magical': 'plot, scheme, heist', 'Mundane': 'plot, scheme, heist', 'Abstract': 'plot, scheme, heist'}, ""),
"llyħáχħy": new Noun("llyħáχħy", 1, {'Exalted': 'a true friend, companion', 'Rational': 'a true friend, companion', 'Monstrous': 'a true friend, companion', 'Irrational': 'a true friend, companion', 'Magical': 'health potion', 'Mundane': 'tap, faucet', 'Abstract': 'friendship, companionship'}, ""),
"llyχaχ": new Noun("llyχaχ", 1, {'Exalted': 'friend, comrade', 'Rational': 'friend, comrade', 'Monstrous': 'friend, comrade', 'Irrational': 'friend, comrade', 'Magical': 'magnet', 'Mundane': 'flock', 'Abstract': 'cluster, congregation; magnetism'}, ""),
"llâŋ": new Noun("llâŋ", 3, {'Magical': 'contract, deed', 'Mundane': 'contract, deed', 'Abstract': 'agreement; consent'}, ""),
"llæfāre": new Noun("llæfāre", 3, {'Magical': 'connection, bond', 'Mundane': 'connection, bond', 'Abstract': 'connection, bond; idea; theory'}, ""),
"llôχħô": new Noun("llôχħô", 1, {'Magical': 'smithing or metallurgy equipment', 'Mundane': 'smithing or metallurgy equipment; forge', 'Abstract': 'smithing; metallurgy'}, ""),
"llā": new Noun("llā", 2, {'Exalted': 'mother', 'Rational': 'mother', 'Monstrous': 'mother', 'Irrational': 'mother'}, ""),
"llān": new Noun("llān", 4, {'Exalted': 'aunt; common and polite term of addres to a female Dragon', 'Rational': 'aunt; common and polite term of addres to a female Dragon', 'Monstrous': 'aunt; common and polite term of addres to a female Dragon', 'Irrational': 'aunt; common and polite term of addres to a female Dragon'}, ""),
"llēlern": new Noun("llēlern", 3, {'Magical': '(definite) the elemental plane of water', 'Mundane': 'ocean', 'Abstract': 'an expanse; a vast region'}, " sense 'ocean' now considered archaic or poetic"),
"llēlāχ": new Noun("llēlāχ", 1, {'Exalted': 'spouse, romantic partner for life', 'Rational': 'spouse, romantic partner for life', 'Monstrous': 'spouse, romantic partner for life', 'Irrational': 'spouse, romantic partner for life', 'Magical': 'love magic', 'Mundane': 'wedding, marriage ceremony', 'Abstract': 'marriage'}, ""),
"llēlēr": new Noun("llēlēr", 1, {'Monstrous': 'giant water elemental, especially if violent', 'Magical': '(literal) flood, torrent, inundation', 'Abstract': '(figurative) flood, torrent, inundation'}, ""),
"llēlī": new Noun("llēlī", 1, {'Abstract': 'Love God; romance, espeically passionate romance', 'Magical': 'romantic, passionate love; uncontrollable love'}, ""),
"llēr": new Noun("llēr", 1, {'Monstrous': 'water elemental', 'Irrational': 'water elemental', 'Magical': 'elixir; any magical liquid', 'Mundane': 'water; body of water'}, ""),
"llērārk": new Noun("llērārk", 3, {'Mundane': 'presence, accompaniment; good company', 'Abstract': 'presence, accompaniment; good company'}, ""),
"llērūroχ": new Noun("llērūroχ", 3, {'Abstract': 'cooperation, collaboration'}, ""),
"llētroħáqħ": new Noun("llētroħáqħ", 4, {'Abstract': 'conversation, discussion'}, ""),
"llēħ": new Noun("llēħ", 4, {'Magical': 'vehicle', 'Mundane': 'vehicle', 'Abstract': 'transportation'}, ""),
"llēχ": new Noun("llēχ", 3, {'Mundane': 'dinner; meal', 'Abstract': 'dinner; meal'}, ""),
"llīlq": new Noun("llīlq", 3, {'Mundane': 'drink, beverage', 'Abstract': 'drinking, consumption of liquid'}, ""),
"llīlχħá": new Noun("llīlχħá", 4, {'Rational': 'fey creature, especially tricky and whimsical', 'Monstrous': 'fey creature, especially tricky and whimsical', 'Irrational': 'fey creature, especially tricky and whimsical', 'Magical': 'fey sprite or wisp', 'Mundane': 'trick', 'Abstract': 'whimsy; fey energy'}, ""),
"llīru": new Noun("llīru", 2, {'Abstract': 'detachment, separation; disagreement; broken promise; contractual violation; divorce'}, ""),
"llīχu": new Noun("llīχu", 1, {'Magical': 'platonic or familial love; love in general', 'Abstract': 'platonic or familial love; love in general'}, ""),
"luthor": new Noun("luthor", 3, {'Exalted': 'evil individual', 'Rational': 'evil individual', 'Monstrous': 'evil individual', 'Irrational': 'evil individual', 'Magical': 'evil magic', 'Mundane': 'evil group/organization', 'Abstract': 'evil, wickedness'}, ""),
"lâl": new Noun("lâl", 4, {'Magical': 'an inanimate object', 'Mundane': 'an inanimate object', 'Abstract': 'inanimacy'}, ""),
"læll": new Noun("læll", 3, {'Exalted': 'opponent, opposition', 'Rational': 'opponent, opposition', 'Monstrous': 'opponent, opposition', 'Irrational': 'opponent, opposition', 'Magical': 'nullification; magical or elemental opposite', 'Mundane': 'counterweight, counterbalance', 'Abstract': 'opposite, opposition, reverse'}, ""),
"lōm": new Noun("lōm", 3, {'Magical': 'pyre, beacon; lighthouse', 'Mundane': 'pyre, beacon; lighthouse'}, ""),
"lōx": new Noun("lōx", 2, {'Irrational': 'unicorn', 'Magical': 'horn; alarm', 'Mundane': 'horn; alarm', 'Abstract': 'siren, alarm call'}, ""),
"lūryχ": new Noun("lūryχ", 3, {'Magical': 'flow; stream', 'Mundane': 'flow; stream', 'Abstract': 'continuity'}, ""),
"meχ": new Noun("meχ", 3, {'Magical': 'tin', 'Mundane': 'tin; coin', 'Abstract': 'tin as a material; coinage'}, ""),
"mâ": new Noun("mâ", 4, {'Exalted': 'god, goddess, deity; divine being; divinetouched', 'Rational': 'divine being; divinetouched', 'Monstrous': 'divine being; divinetouched', 'Irrational': 'divine being; divinetouched', 'Magical': 'divine magic, especially as wielded by gods', 'Abstract': 'divinity; (definite, plural) The Pantheon; the gods as a whole'}, ""),
"mân": new Noun("mân", 4, {'Exalted': 'a common Draconic name', 'Rational': 'a common Draconic name'}, ""),
"mæzyn": new Noun("mæzyn", 1, {'Mundane': 'town, village, hamlet, settlement, colony', 'Abstract': 'immigration, settlment; colonization'}, ""),
"māho": new Noun("māho", 1, {'Rational': 'any feline humanoid', 'Monstrous': 'any monstrous catlike creature', 'Irrational': 'cat', 'Abstract': 'felinekind, cats as a group'}, ""),
"naltæ": new Noun("naltæ", 2, {'Magical': 'recipe, instructions', 'Mundane': 'recipe, instructions', 'Abstract': 'way, method, means; strategy; instruction'}, " sense 'recipe, instructions' only in the magical for alchemical or ritualistic instructions"),
"naz": new Noun("naz", 2, {'Magical': 'river; vein, artery', 'Mundane': 'river; vein, artery'}, ""),
"næn": new Noun("næn", 3, {'Abstract': 'respiration'}, ""),
"nān": new Noun("nān", 3, {'Exalted': 'an animate', 'Rational': 'an animate', 'Monstrous': 'an animate', 'Irrational': 'an animate', 'Abstract': 'animacy'}, ""),
"oqurk": new Noun("oqurk", 1, {'Abstract': 'unit of measure equivalent to approximately 25 kilometers'}, ""),
"oχħó": new Noun("oχħó", 4, {'Exalted': 'a common Draconic name; fighter, soldier', 'Rational': 'fighter, soldier', 'Monstrous': 'fighter, soldier', 'Irrational': 'fighter, soldier', 'Magical': 'playfighting, especially among dragons', 'Mundane': 'bruise', 'Abstract': 'battle, physical struggle; physical violence'}, ""),
"pán": new Noun("pán", 3, {'Exalted': 'ruler; judge', 'Rational': 'ruler; judge', 'Monstrous': 'ruler; judge', 'Irrational': 'ruler; judge', 'Magical': 'karma', 'Mundane': 'court', 'Abstract': 'joy; justice'}, ""),
"qar": new Noun("qar", 1, {'Rational': 'the center of a hive mind', 'Monstrous': 'the center of a hive mind', 'Irrational': 'the center of a hive mind', 'Magical': 'heart', 'Mundane': 'heart', 'Abstract': '(figurative) heart; core, center'}, " in the Mundane, sense 'heart' is strictly anatomical, whereas in the Magical, it typically refers more to sensation or emotion"),
"qathur": new Noun("qathur", 2, {}, ""),
"qaχ": new Noun("qaχ", 2, {'Magical': 'fire, blaze', 'Mundane': 'spark; small fire; candle, torch', 'Abstract': 'life'}, ""),
"qerxex": new Noun("qerxex", 2, {'Exalted': 'owner; lord or lady', 'Rational': 'owner; lord or lady', 'Monstrous': 'owner; lord or lady', 'Irrational': 'owner; lord or lady', 'Magical': 'material component for spells', 'Mundane': 'money, currency', 'Abstract': 'purchase'}, ""),
"quχūχ": new Noun("quχūχ", 1, {'Exalted': 'a dragon who is exceptionally powerful, intelligent, or talented for their age; a gifted child; a savant'}, ""),
"qyzelleŋ": new Noun("qyzelleŋ", 3, {'Exalted': 'medic', 'Rational': 'medic', 'Monstrous': 'medic', 'Irrational': 'medic; plant with healing properties', 'Magical': 'natural healing magic', 'Mundane': 'medicinal equipment', 'Abstract': 'equality, equal rights; reciprocation'}, ""),
"qâ": new Noun("qâ", 4, {'Exalted': 'male dragon', 'Rational': 'male dragon'}, ""),
"qôk": new Noun("qôk", 3, {'Magical': 'magical stun', 'Mundane': 'cave, tunnel', 'Abstract': 'constriction, binding, bondage; tightness'}, ""),
"qû": new Noun("qû", 4, {'Exalted': 'a Draconic name', 'Rational': 'a Draconic name', 'Monstrous': 'living blade', 'Irrational': 'living blade', 'Magical': 'blade; sword, sharp instrument of war', 'Mundane': 'blade; sword, sharp instrument of war', 'Abstract': 'swordsmanship'}, ""),
"qāx": new Noun("qāx", 2, {'Exalted': 'relative', 'Rational': 'relative', 'Monstrous': 'relative', 'Irrational': 'relative', 'Magical': 'magical tether', 'Mundane': 'tether, cord, tie', 'Abstract': 'family; correlative'}, ""),
"qēdzeg": new Noun("qēdzeg", 3, {'Abstract': 'paradox, contradiction'}, ""),
"qēr'a": new Noun("qēr'a", 2, {'Magical': 'portal (to foreign plane)', 'Mundane': 'entrance', 'Abstract': 'beginning; preface, introduction; greeting'}, ""),
"qērur": new Noun("qērur", 2, {'Magical': 'portal (to home plane)', 'Mundane': 'exit', 'Abstract': 'end, ending, terminal, finish; farewell; epilogue'}, ""),
"qērx": {2: new Noun("qērx", 2, {'Exalted': 'merchant, shopkeep', 'Rational': 'merchant, shopkeep', 'Monstrous': 'merchant, shopkeep', 'Irrational': 'merchant, shopkeep', 'Magical': 'goods', 'Mundane': 'goods', 'Abstract': 'trade; economy'}, ""),3: new Noun("qērx", 3, {'Magical': 'prophesization magic; crystal ball', 'Mundane': 'crystal ball', 'Abstract': 'prediction'}, "")},
"qērxaχ": new Noun("qērxaχ", 1, {'Exalted': 'prophet; oracle', 'Rational': 'prophet; oracle', 'Monstrous': 'prophet; oracle', 'Irrational': 'prophet; oracle', 'Magical': 'temple, shrine', 'Mundane': 'temple, shrine', 'Abstract': 'prophesy'}, ""),
"qħón": new Noun("qħón", 3, {'Magical': 'tail', 'Mundane': 'tail'}, ""),
"qħôn": new Noun("qħôn", 3, {'Monstrous': 'creature with many appendages', 'Irrational': 'creature with many appendages', 'Mundane': 'tentacle; appendage'}, ""),
"qūllēl": new Noun("qūllēl", 3, {'Exalted': 'captain, head navigator', 'Rational': 'captain, head navigator', 'Monstrous': 'captain, head navigator; alpha, dominant of a group', 'Irrational': 'captain, head navigator; alpha, dominant of a group', 'Magical': 'compass', 'Mundane': 'star chart for navigational purposes', 'Abstract': 'navigation'}, ""),
"qūralli": new Noun("qūralli", 3, {'Magical': 'concentration of energy; magical nexus', 'Mundane': 'hill, mound', 'Abstract': 'convergence, concentration; nexus'}, ""),
"qūrax": new Noun("qūrax", 1, {'Irrational': 'a gigantic plant which stretches into the sky farther than can be seen', 'Magical': 'volcano', 'Mundane': 'mountain', 'Abstract': 'altitude; elevation'}, " very rarely used in the Irrational"),
"qūħ": new Noun("qūħ", 3, {'Monstrous': 'mutant rat', 'Irrational': 'mouse, rat', 'Magical': 'any negative or unintended byproduct from magical effects, especially when manmade', 'Mundane': 'waste, trash, garbage; excrement', 'Abstract': 'pollution'}, ""),
"qūχ": new Noun("qūχ", 1, {'Exalted': 'sibling', 'Rational': 'hatchling, baby dragon'}, " all senses exclusively refer to dragons"),
"q̇ehax": new Noun("q̇ehax", 2, {'Rational': 'dwarf', 'Magical': 'beard; facial hair', 'Mundane': 'beard; facial hair', 'Abstract': 'dwarvenkind'}, ""),
"q̇ehā": new Noun("q̇ehā", 2, {'Magical': 'ingredient', 'Mundane': 'ingredient; chunk, piece', 'Abstract': 'clause, phrase; section, portion'}, ""),
"q̇erō": new Noun("q̇erō", 1, {'Magical': 'southern wind', 'Mundane': 'southern wind', 'Abstract': 'south'}, ""),
"q̇etirx": new Noun("q̇etirx", 2, {'Exalted': 'novice, amateur', 'Rational': 'novice, amateur', 'Monstrous': 'novice, amateur', 'Irrational': 'novice, amateur', 'Abstract': 'easiness, simplicity, triviality'}, ""),
"q̇o": new Noun("q̇o", 3, {}, ""),
"q̇o'ōk": new Noun("q̇o'ōk", 3, {'Magical': 'magical exhaustion', 'Mundane': 'load, mass, ton', 'Abstract': 'encumbrance; weight, mass'}, ""),
"q̇u'o": new Noun("q̇u'o", 4, {'Monstrous': 'carnivorous plant', 'Irrational': 'carnivorous plant', 'Abstract': 'digestion; pondering, deep thought'}, ""),
"q̇ħónlli": new Noun("q̇ħónlli", 1, {'Mundane': 'finger, digit, claw', 'Abstract': 'number, numeral; count'}, ""),
"q̇ħôlli": new Noun("q̇ħôlli", 1, {'Magical': 'reservoir', 'Mundane': 'reservoir; pond, lake'}, ""),
"q̇ū": new Noun("q̇ū", 1, {'Magical': 'pocket dimension; small extradimensional space', 'Mundane': 'lair; residence, place of lodging; habitat', 'Abstract': 'residency, habitation'}, ""),
"q̇ūhīn": new Noun("q̇ūhīn", 1, {'Magical': 'allergen', 'Mundane': 'allergen', 'Abstract': 'reframing, reinterpretation, reassessment; allergy'}, ""),
"qχeħâħ": new Noun("qχeħâħ", 4, {'Mundane': 'dictionary', 'Abstract': 'translation; deciphering, decryption; interpretation'}, ""),
"qχúqχú": new Noun("qχúqχú", 1, {'Magical': 'magical thunder', 'Mundane': 'thunder', 'Abstract': 'acoustic volume, loudness'}, ""),
"qχēl": new Noun("qχēl", 1, {'Magical': 'dragon scale; scale', 'Mundane': 'scale', 'Abstract': 'resilience; toughness, resistance, material strength'}, ""),
"raq": new Noun("raq", 3, {'Magical': 'magical object or trinket', 'Mundane': 'object, thing; trinket', 'Abstract': 'thing, matter, concern'}, ""),
"rom": new Noun("rom", 3, {'Magical': 'moon, moonlight', 'Mundane': 'dim light', 'Abstract': 'goal, beacon, guiding principle'}, ""),
"rutrill": new Noun("rutrill", 2, {'Magical': 'disease, malady, affliction', 'Mundane': 'disease, malady, affliction', 'Abstract': 'disease, malady, affliction'}, ""),
"rāreχ": new Noun("rāreχ", 2, {'Magical': 'body heat', 'Abstract': 'warmth; gentleness, finesse'}, ""),
"rārthq̇": new Noun("rārthq̇", 4, {'Exalted': 'a charmer; a charismatic individual', 'Rational': 'a charmer; a charismatic individual', 'Monstrous': 'a charmer; a charismatic individual', 'Irrational': 'a charmer; a charismatic individual', 'Magical': 'entrancement magic, charming magic', 'Mundane': 'a status symbol', 'Abstract': 'trance'}, ""),
"saqmeχ": new Noun("saqmeχ", 3, {'Magical': 'bronze; brass', 'Mundane': 'bronze; brass', 'Abstract': 'bronze; brass'}, ""),
"saχ": new Noun("saχ", 3, {'Magical': 'copper', 'Mundane': 'copper', 'Abstract': 'copper'}, ""),
"seleŋ": new Noun("seleŋ", 1, {'Mundane': 'decor; frill, ruffle, fringe', 'Abstract': 'fringe, margin'}, ""),
"selleŋaχ": new Noun("selleŋaχ", 1, {'Exalted': 'addict', 'Rational': 'addict', 'Monstrous': 'addict', 'Irrational': 'addict', 'Magical': 'infatuation, obsession, especially magical', 'Abstract': 'addiction'}, ""),
"seq̇": new Noun("seq̇", 4, {'Exalted': 'term of endearment', 'Rational': 'term of endearment', 'Monstrous': 'term of endearment', 'Irrational': 'term of endearment', 'Magical': 'gift, present', 'Mundane': 'gift, present', 'Abstract': 'giving, donation, charity'}, ""),
"seŋ": new Noun("seŋ", 3, {'Abstract': 'desire, yearning'}, ""),
"seŋaχ": new Noun("seŋaχ", 1, {'Exalted': 'romantic partner, boyfriend or girlfriend', 'Rational': 'romantic partner, boyfriend or girlfriend', 'Monstrous': 'romantic partner, boyfriend or girlfriend', 'Irrational': 'romantic partner, boyfriend or girlfriend', 'Abstract': 'relationship'}, ""),
"sin'ær": new Noun("sin'ær", 2, {'Abstract': 'flimsiness, strucural weakness; timidity'}, ""),
"sirtell": new Noun("sirtell", 1, {'Monstrous': 'Cancer (mythology)', 'Irrational': 'crustacean; (by extension) snail, any shelled creature', 'Magical': 'castle, fortress; stronghold, bunker', 'Mundane': 'castle, fortress; stronghold, bunker', 'Abstract': 'safety, security'}, ""),
"siŋæ": new Noun("siŋæ", 2, {'Abstract': 'auxiliary verb'}, ""),
"soq": new Noun("soq", 3, {'Abstract': 'definition, meaning, denotation'}, ""),
"soqaχ": new Noun("soqaχ", 4, {'Mundane': 'sketch; rough draft; prototype', 'Abstract': 'concept, plan; determiner'}, ""),
"sulyn": new Noun("sulyn", 3, {'Magical': 'paralytic', 'Abstract': 'nap, rest; hibernation; coma, comatose state; paralysis'}, ""),
"sylχħâllu": new Noun("sylχħâllu", 3, {'Mundane': 'line, queue', 'Abstract': 'sentence, lyric, verse'}, ""),
"syχħû": new Noun("syχħû", 4, {'Rational': 'specimen', 'Monstrous': 'specimen', 'Irrational': 'specimen', 'Magical': 'sample; result of experiment', 'Mundane': 'sample; result of experiment', 'Abstract': 'example; instance, incident'}, ""),
"sáħ": new Noun("sáħ", 1, {'Rational': 'merfolk; swimmer; any aquatic lifeform', 'Exalted': 'swimmer; any aquatic lifeform', 'Monstrous': 'swimmer; any aquatic lifeform', 'Irrational': 'swimmer; any aquatic lifeform', 'Mundane': 'oar, paddle', 'Abstract': 'merfolkkind, merfolk as a group; a swim, swimming; the ability to swim'}, ""),
"sæntox": new Noun("sæntox", 3, {'Exalted': '(typically definite) Creator (divine); creator, especially of life', 'Rational': 'creator, especially of life', 'Monstrous': 'creator, especially of life', 'Irrational': 'creator, especially of life', 'Magical': 'lifegiving magic, animative magic', 'Abstract': 'actualization, realization; nominalization; personification; animation'}, ""),
"særxēl": new Noun("særxēl", 1, {'Irrational': 'animated armor', 'Magical': 'armor', 'Mundane': 'armor', 'Abstract': 'protection, defense, especially in combat'}, ""),
"særâ": new Noun("særâ", 1, {'Exalted': 'aquatic dragon', 'Rational': 'merfolk', 'Monstrous': 'sea monster, particularly that swims fast', 'Irrational': 'fish, particularly that swims fast', 'Mundane': 'rudder', 'Abstract': 'swimming, as a sport or activity'}, ""),
"sæx": new Noun("sæx", 2, {'Magical': 'egg', 'Mundane': 'eggshell'}, ""),
"sæxēl": new Noun("sæxēl", 1, {'Irrational': 'tree bark', 'Magical': 'magical shield; dragonscale', 'Mundane': 'shell (botanical); carapace; protective outer layer', 'Abstract': 'sphere, spheroid'}, " sense 'dragonscale' does not refer to individual dragon scales, but instead the entire outer skin layer of a dragon"),
"sæxēlsi": new Noun("sæxēlsi", 1, {'Irrational': 'germ, pathogen', 'Magical': 'fertilized egg', 'Mundane': 'seed; grain; small nut', 'Abstract': 'precursor, trigger'}, " sense 'fertilized egg' is never used for eggs of dragons or other Exalted creatures"),
"sē'ad": new Noun("sē'ad", 4, {'Magical': 'color', 'Mundane': 'decoration', 'Abstract': 'description; detail, facet, aspect; adjective, adverb'}, ""),
"sēχħú": new Noun("sēχħú", 4, {'Exalted': 'experimentalist; scientist', 'Rational': 'experimentalist; scientist', 'Monstrous': 'experimentalist; scientist', 'Irrational': 'experimentalist; scientist', 'Magical': 'experimental appratus; scientific equipment', 'Mundane': 'experimental appratus; scientific equipment', 'Abstract': 'try, attempt; experiment; science'}, ""),
"sīl": new Noun("sīl", 3, {'Magical': '(definite) the Dragon Plane', 'Mundane': 'den, housing', 'Abstract': 'home'}, ""),
"sōqaχ": new Noun("sōqaχ", 4, {'Exalted': 'artist', 'Rational': 'artist', 'Monstrous': 'artist', 'Irrational': 'artist', 'Magical': 'art', 'Mundane': 'art', 'Abstract': 'artistry, art'}, ""),
"tellex": new Noun("tellex", 2, {'Magical': 'magical writing', 'Mundane': 'letter, character, glyph, symbol; doodle, sketch', 'Abstract': 'alphabet, writing system, orthography; lexicon, vocabulary'}, ""),
"texyller": new Noun("texyller", 1, {'Abstract': 'thickness; sturdiness'}, " the 'y' is often skipped over in casual speech"),
"tharχ": new Noun("tharχ", 1, {'Exalted': 'worshipper', 'Rational': 'worshipper', 'Monstrous': 'worshipper', 'Irrational': 'worshipper', 'Magical': 'prayer', 'Mundane': 'prayerbook', 'Abstract': 'ask, inquiry, question; praying'}, ""),
"thathā'": new Noun("thathā'", 2, {'Exalted': 'interrogator; constable, sheriff', 'Rational': 'interrogator; constable, sheriff', 'Monstrous': 'interrogator; constable, sheriff', 'Irrational': 'interrogator; constable, sheriff', 'Magical': 'magic lie detection; zone of truth', 'Mundane': 'lie detector', 'Abstract': 'interrogation'}, ""),
"thelk": new Noun("thelk", 1, {'Abstract': 'unit of measure equivalent to approximately 6 meters'}, ""),
"tholyr": new Noun("tholyr", 3, {'Abstract': 'ability; possibility'}, ""),
"tholūr": new Noun("tholūr", 3, {'Abstract': 'inability; impossibility'}, ""),
"thor": new Noun("thor", 3, {'Exalted': 'good or righteous individual', 'Rational': 'good or righteous individual', 'Monstrous': 'good or righteous individual', 'Irrational': 'good or righteous individual', 'Magical': 'good or righteous magic', 'Mundane': 'good or righteous group/organization', 'Abstract': 'good, righteousness'}, ""),
"thoχō": new Noun("thoχō", 3, {'Monstrous': 'worm', 'Irrational': 'worm'}, ""),
"thu'uχu": new Noun("thu'uχu", 1, {'Exalted': 'traveler; traveling merchant', 'Rational': 'traveler; traveling merchant', 'Monstrous': 'traveler; traveling merchant', 'Irrational': 'traveler; traveling merchant', 'Magical': 'long range spell', 'Mundane': 'airborne particulates', 'Abstract': 'travel'}, ""),
"thulqā": new Noun("thulqā", 2, {'Magical': 'western wind', 'Mundane': 'western wind', 'Abstract': 'west'}, ""),
"thultur'a": new Noun("thultur'a", 2, {'Exalted': '(pejorative) bum, lowlife', 'Rational': '(pejorative) bum, lowlife', 'Monstrous': '(pejorative) bum, lowlife', 'Irrational': '(pejorative) bum, lowlife', 'Magical': 'a mundane potion, a potion with magical ingredients but no magical effects', 'Mundane': 'a dead end', 'Abstract': 'an end or goal that is not in sight; an unrealistic hope, goal, or expectation; a lost cause'}, ""),
"thulχā": new Noun("thulχā", 2, {'Magical': 'eastern wind', 'Mundane': 'eastern wind', 'Abstract': 'east'}, ""),
"thutrûllīqu": new Noun("thutrûllīqu", 1, {'Exalted': 'a creature which sustains itself via the consumption of blood', 'Rational': 'a creature which sustains itself via the consumption of blood', 'Monstrous': 'a creature which sustains itself via the consumption of blood; vampire (in bat form)', 'Irrational': 'a creature which sustains itself via the consumption of blood; vampire bat', 'Mundane': 'syringe', 'Abstract': 'vampirism; the practice of drinking blood'}, ""),
"thæf": new Noun("thæf", 1, {'Monstrous': 'shadow monster, shadowy creature', 'Irrational': 'shadow monster, shadowy creature', 'Magical': 'wing, especially of a dragon', 'Mundane': 'wing; limb', 'Abstract': 'side, flank; edge, ridge; extent, degree'}, ""),
"thō": new Noun("thō", 4, {'Exalted': 'guard, guardian', 'Rational': 'guard, guardian', 'Monstrous': 'guard, guardian', 'Irrational': 'guard, guardian', 'Magical': 'obstacle, impediment, blockage', 'Mundane': 'obstacle, impediment, blockage', 'Abstract': 'issue, problem, obstacle; security'}, ""),
"thō'": {2: new Noun("thō'", 2, {'Exalted': 'a tank, one who can withstand much attack and damage;', 'Rational': 'a tank, one who can withstand much attack and damage;', 'Monstrous': 'a tank, one who can withstand much attack and damage;', 'Irrational': 'a tank, one who can withstand much attack and damage;', 'Magical': 'runestone', 'Mundane': 'boulder; a tough or rigid thing', 'Abstract': 'stone as a material; toughness, rigidity'}, " sometimes used as an informal form of address for friends among dragons"),4: new Noun("thō'", 4, {}, " can ocassionally be used as an insult when used in other animate genders")},
"thōχō": new Noun("thōχō", 3, {'Monstrous': 'giant worm'}, ""),
"thū'xæ": new Noun("thū'xæ", 2, {'Magical': 'storm, tempest, violent weather; rage, fury', 'Mundane': 'sky; thick and elevated clouds', 'Abstract': '(figurative) atmosphere, the mood of an enviroment; medium, material of surrounding environment'}, " sense 'rage, fury' usually indicates an uncharacteristically reckless/irrational tantrum in the heat of the moment"),
"thūltrû": new Noun("thūltrû", 4, {'Exalted': 'a member of kin by blood; a trustworthy individual;', 'Rational': 'a member of kin by blood; a trustworthy individual;', 'Monstrous': 'a member of kin by blood; a trustworthy individual;', 'Irrational': 'a member of kin by blood; a trustworthy individual;', 'Magical': 'blood believed to have magical properties', 'Mundane': 'blood; sap of a plant; any liquid vital to life', 'Abstract': 'familial relationship by birth; trust; livelihood'}, " common term of address for family and close friends among dragons"),
"tirx": new Noun("tirx", 2, {'Magical': 'maze, labyrinth', 'Mundane': 'maze, labyrinth', 'Abstract': 'complexity, difficulty'}, ""),
"torxo": new Noun("torxo", 3, {'Magical': 'spirit of a people or nation', 'Mundane': 'group, community; alliance; server', 'Abstract': 'community; allegiance'}, ""),
"toχ'ekx": new Noun("toχ'ekx", 3, {'Mundane': 'road, street; canal, channel', 'Abstract': 'meeting; trek, journey; chance encounter; happenstance, circumstance, serendipity'}, ""),
"traχon": new Noun("traχon", 3, {'Exalted': 'alternate form of træχon', 'Rational': 'alternate form of træχon', 'Abstract': 'alternate form of træχon'}, ""),
"traχunlli": new Noun("traχunlli", 1, {'Rational': 'dragonborn; draconic humanoid'}, ""),
"traχē": new Noun("traχē", 1, {'Rational': 'whelp, young dragon', 'Abstract': 'youth; naivete'}, ""),
"trellelleŋ": new Noun("trellelleŋ", 3, {'Magical': 'wealth, valuables; treasure', 'Mundane': 'wealth, valuables; treasure', 'Abstract': 'value, worth'}, ""),
"trexēk": new Noun("trexēk", 1, {'Abstract': 'consumption, voracity, greed; gluttony'}, ""),
"trexēxō": new Noun("trexēxō", 1, {'Exalted': 'a Draconic name; biological consumer', 'Rational': 'a Draconic name; biological consumer', 'Monstrous': 'biological consumer', 'Irrational': 'biological consumer'}, ""),
"treχō": new Noun("treχō", 3, {'Exalted': 'user; individual', 'Rational': 'user; individual', 'Monstrous': 'user; individual', 'Irrational': 'user; individual', 'Magical': 'tool', 'Mundane': 'tool', 'Abstract': 'use, utilization'}, ""),
"trill": new Noun("trill", 2, {'Magical': 'pain, suffering; agony', 'Mundane': 'pain, suffering; agony', 'Abstract': 'pain, suffering; agony'}, ""),
"trith": new Noun("trith", 3, {'Magical': '(fabric of) spacetime', 'Mundane': 'fabric, cloth', 'Abstract': 'material'}, ""),
"triχōχu": new Noun("triχōχu", 1, {'Exalted': 'thief, robber', 'Rational': 'thief, robber', 'Monstrous': 'thief, robber', 'Irrational': 'thief, robber', 'Magical': 'thievery magic', 'Mundane': 'glove', 'Abstract': 'theft, theivery'}, ""),
"trolq": new Noun("trolq", 1, {'Magical': 'inner fire; dragon soul', 'Mundane': 'need, basic resource required for living', 'Abstract': 'requirement, necessity'}, ""),
"trotry": new Noun("trotry", 1, {'Irrational': 'shark', 'Abstract': 'smile, expression of happiness; giggle, giggling'}, ""),
"tryχaχu": new Noun("tryχaχu", 1, {'Exalted': 'escapee', 'Rational': 'escapee', 'Monstrous': 'escapee', 'Irrational': 'escapee', 'Magical': 'fumes, exhaust', 'Mundane': 'fumes, exhaust', 'Abstract': 'escape; escapism'}, ""),
"trærān": new Noun("trærān", 4, {'Exalted': 'aunt; common and polite term of address to a female Dragon', 'Rational': 'aunt; common and polite term of address to a female Dragon', 'Monstrous': 'aunt; common and polite term of address to a female Dragon', 'Irrational': 'aunt; common and polite term of address to a female Dragon'}, ""),
"trærōn": new Noun("trærōn", 4, {'Exalted': 'nonbinary equivalent of uncle/aunt; common and polite genderneutral term of address to a Dragon', 'Rational': 'nonbinary equivalent of uncle/aunt; common and polite genderneutral term of address to a Dragon', 'Monstrous': 'nonbinary equivalent of uncle/aunt; common and polite genderneutral term of address to a Dragon', 'Irrational': 'nonbinary equivalent of uncle/aunt; common and polite genderneutral term of address to a Dragon'}, ""),
"trærū": new Noun("trærū", 2, {'Exalted': 'father', 'Rational': 'father', 'Monstrous': 'father', 'Irrational': 'father'}, ""),
"trærūn": new Noun("trærūn", 4, {'Exalted': 'uncle; common and polite term of address to a male Dragon', 'Rational': 'uncle; common and polite term of address to a male Dragon', 'Monstrous': 'uncle; common and polite term of address to a male Dragon', 'Irrational': 'uncle; common and polite term of address to a male Dragon'}, ""),
"træχon": new Noun("træχon", 3, {'Exalted': 'dragon', 'Rational': 'lesser dragon; hatchling, baby dragon', 'Abstract': 'dragonkind, dragons as a group'}, ""),
"trē": new Noun("trē", 1, {'Magical': 'magic word that is needed to cast a spell', 'Mundane': 'urge', 'Abstract': 'cause, instigating effect'}, ""),
"trēre": new Noun("trēre", 1, {'Exalted': 'people, populus, beings consisting of a common group, especially tied to a particular nation, ethnicity, class, or species', 'Rational': 'people, populus, beings consisting of a common group, especially tied to a particular nation, ethnicity, class, or species', 'Monstrous': 'people, populus, beings consisting of a common group, especially tied to a particular nation, ethnicity, class, or species', 'Irrational': 'people, populus, beings consisting of a common group, especially tied to a particular nation, ethnicity, class, or species', 'Abstract': 'origin, where one is from'}, " sense 'homeland' in the Magical indicates a strong and fond personal connection with the speaker"),
"trīmath": new Noun("trīmath", 3, {'Monstrous': 'invisible stalker; by extension, any invisible spirit', 'Irrational': 'chameleon; by extension, any color changing creature', 'Magical': 'magical cloak; stealth magic', 'Mundane': 'cloak, robe, outer layer of clothing; costume, covering; envelope', 'Abstract': 'concealment, stealth, camouflage'}, ""),
"trīru'": new Noun("trīru'", 2, {'Magical': 'reaction', 'Mundane': 'reaction', 'Abstract': 'reaction'}, ""),
"trō": new Noun("trō", 1, {}, ""),
"tur": new Noun("tur", 1, {'Exalted': 'brother', 'Rational': 'brother', 'Monstrous': 'brother', 'Irrational': 'brother'}, ""),
"tur'a": new Noun("tur'a", 2, {'Exalted': 'wanderer; carefree individual', 'Rational': 'wanderer; carefree individual', 'Monstrous': 'wanderer; carefree individual', 'Irrational': 'wanderer; carefree individual', 'Magical': 'potion created haphazardly or with random ingrediants', 'Mundane': 'a trail or path, not necessarily to anywhere in particular', 'Abstract': 'wander, stroll; a leisurely walk or flight; a way, a route'}, ""),
"tutuŋ": new Noun("tutuŋ", 3, {'Exalted': 'burrower, a creature which burrows through earth', 'Rational': 'burrower, a creature which burrows through earth', 'Monstrous': 'burrower, a creature which burrows through earth', 'Irrational': 'burrower, a creature which burrows through earth', 'Magical': 'earthen magic; (definite singular) the elemental plane of earth', 'Mundane': 'earth, ground; bedrock; anchor', 'Abstract': 'solid; axiom; theoretical foundation'}, ""),
"tuŋ": new Noun("tuŋ", 3, {'Exalted': 'landdweller, one who resides on land', 'Rational': 'landdweller, one who resides on land', 'Monstrous': 'landdweller, one who resides on land', 'Irrational': 'landdweller, one who resides on land', 'Magical': 'magic stone; any small stone with magical properties', 'Mundane': 'stone, rock, pebble; dirt', 'Abstract': 'ground; (definite) the Material Plane'}, " sense 'landdweller' frequently used by dragons as a pejorative for humanoids"),
"tuŋex": new Noun("tuŋex", 2, {'Exalted': 'Harbinger of Doom; any exalted being threatening apocalypse', 'Magical': 'meteor, asteroid, meteorite, meteoroid; comet, shooting star; (plural) meteor shower', 'Mundane': 'cannonball; rocket, missile; any hefty projectile', 'Abstract': 'doom; (definite plural) apocalypse, armageddon'}, ""),
"tuŋllīlâ": new Noun("tuŋllīlâ", 1, {'Exalted': 'pantheon; collection of gods', 'Magical': 'city, especially if particularly populous and bustling; citystate', 'Mundane': 'city, especially if particularly populous and bustling; citystate', 'Abstract': 'kabal, syndicate, faction; organization, collective, union; society'}, ""),
"tuŋllīlħá": new Noun("tuŋllīlħá", 1, {'Exalted': 'governor, adminstrator; governmental representative, especially if elected', 'Rational': 'governor, adminstrator; governmental representative, especially if elected', 'Monstrous': 'governor, adminstrator; governmental representative, especially if elected', 'Irrational': 'governor, adminstrator; governmental representative, especially if elected', 'Magical': 'city; municipality, adminstrative region', 'Mundane': 'city; municipality, adminstrative region', 'Abstract': 'government, governmental organization; bureaucracy'}, ""),
"tōllq": new Noun("tōllq", 3, {'Abstract': 'truth, honesty'}, ""),
"tōrūl": new Noun("tōrūl", 3, {'Magical': 'tongue', 'Mundane': 'tongue', 'Abstract': 'language'}, ""),
"u'": new Noun("u'", 2, {'Mundane': 'burp, belch', 'Abstract': 'accident; anything unintentional'}, ""),
"uk": new Noun("uk", 3, {'Magical': 'null point, space of no magic', 'Mundane': 'lowest point', 'Abstract': 'minimum; nadir'}, ""),
"ural": new Noun("ural", 1, {}, ""),
"xaχō": new Noun("xaχō", 1, {'Exalted': 'fiersome dragon', 'Monstrous': 'a horror; a monstrosity', 'Magical': 'uncontrollable fear', 'Abstract': 'horror, terror'}, " sense 'fiersome dragon' is seldom used by dragons, but common among Draconicspeaking humanoids"),
"xæn": new Noun("xæn", 3, {'Magical': 'snout; nose', 'Mundane': 'snout; nose', 'Abstract': 'deference, respect'}, ""),
"xærâħ": new Noun("xærâħ", 4, {'Exalted': 'a World Tree, a powerful sentient tree which anchors and guards over vast expanses of nature', 'Rational': 'ent', 'Irrational': 'tree', 'Mundane': 'wood'}, ""),
"xærī": new Noun("xærī", 2, {'Rational': 'forest spirit; pixie', 'Monstrous': 'forest spirit; pixie', 'Irrational': 'shrub, fern, bush', 'Magical': 'wand', 'Mundane': 'branch; stick, twig'}, ""),
"xā": new Noun("xā", 2, {'Exalted': 'Sun God', 'Magical': 'sun; sunlight', 'Mundane': 'sunny weather'}, ""),
"yqu": new Noun("yqu", 3, {'Monstrous': 'a hostile ethereal creature, especially of the ethereal plane', 'Magical': 'ether, omnipresent magical energy; (definite) the ethereal plane', 'Abstract': 'magic'}, ""),
"yqā": new Noun("yqā", 2, {'Magical': '(definite) The Twilight Forest', 'Mundane': 'sunset', 'Abstract': 'twilight, eventide'}, ""),
"yxa": new Noun("yxa", 1, {'Exalted': 'a creature afflicted by magical sickness', 'Rational': 'a creature afflicted by magical sickness', 'Monstrous': 'a creature afflicted by magical sickness', 'Irrational': 'a creature afflicted by magical sickness', 'Magical': 'a case of magical sickness; a maladie or other affliction caused by magic', 'Abstract': 'magical sickness in general'}, ""),
"æklū": new Noun("æklū", 1, {'Mundane': 'salt', 'Abstract': 'saltiness, salinity'}, ""),
"āfu": new Noun("āfu", 2, {'Magical': 'dew', 'Mundane': 'spit, saliva', 'Abstract': 'salivation; hunger'}, ""),
"āklū": new Noun("āklū", 1, {'Mundane': 'spice, seasoning', 'Abstract': 'taste, flavor'}, " sense 'spice, seasoning' usually in the plural"),
"ārχ": new Noun("ārχ", 1, {'Irrational': 'flower', 'Abstract': 'satisfaction; pleasure'}, ""),
"āxa": new Noun("āxa", 2, {'Monstrous': 'beholder', 'Irrational': 'arcane eye', 'Magical': 'anything which bestows truesight', 'Abstract': 'truesight, trueseeing'}, ""),
"āxaχ": new Noun("āxaχ", 1, {'Exalted': 'actor; doer, agent; player', 'Rational': 'actor; doer, agent; player', 'Monstrous': 'actor; doer, agent; player', 'Irrational': 'actor; doer, agent; player', 'Magical': 'sport, recreation; activity', 'Mundane': 'sport, recreation; activity', 'Abstract': 'agency; activity'}, ""),
"āxk": new Noun("āxk", 3, {'Magical': 'spell', 'Mundane': 'machine, device', 'Abstract': 'action; verb'}, ""),
"āχo": new Noun("āχo", 1, {'Magical': 'spine, vertebra', 'Mundane': 'back, rear, hind; hunch', 'Abstract': 'backside'}, ""),
"ē'": new Noun("ē'", 2, {'Exalted': 'voter; decisionmaker; dowser', 'Rational': 'voter; decisionmaker; dowser', 'Monstrous': 'voter; decisionmaker; dowser', 'Irrational': 'voter; decisionmaker; dowser', 'Magical': 'dowsing rod', 'Mundane': 'voting machine', 'Abstract': 'vote; decision; dowsing'}, ""),
"ē'ēkfūh": new Noun("ē'ēkfūh", 3, {'Magical': 'weapon of mass destruction; apocalypse, armageddon; mass destruction', 'Mundane': 'apocalypse, armageddon; mass destruction', 'Abstract': 'apocalypse, armageddon; mass destruction'}, ""),
"ē'ū": new Noun("ē'ū", 2, {'Abstract': 'sound; audio; phone (linguistics)'}, ""),
"ēfū": new Noun("ēfū", 1, {'Exalted': 'shooter, that which shoots', 'Rational': 'shooter, that which shoots', 'Monstrous': 'shooter, that which shoots', 'Irrational': 'shooter, that which shoots', 'Magical': 'projectile based weapon', 'Mundane': 'projectile based weapon', 'Abstract': 'firing, shooting; (in the plural) fire, barrage, volley'}, ""),
"ēglōχ": new Noun("ēglōχ", 1, {'Exalted': 'archer', 'Rational': 'archer', 'Monstrous': 'archer', 'Irrational': 'archer', 'Magical': 'turret', 'Mundane': 'turret', 'Abstract': 'archery'}, ""),
"ēglū": new Noun("ēglū", 1, {'Exalted': 'extraplanar exaltant; celestial', 'Magical': 'rainbow; bow; ranged handheld weapon that fires projectiles', 'Mundane': 'bow; ranged handheld weapon that fires projectiles', 'Abstract': 'arc, arch'}, ""),
"ēhā": new Noun("ēhā", 2, {'Exalted': 'regent, king or queen', 'Rational': 'regent, king or queen', 'Monstrous': 'regent, king or queen', 'Irrational': 'regent, king or queen', 'Magical': 'controller, device which controls something; speaker (device), especially if particularly loud', 'Mundane': 'controller, device which controls something; speaker (device), especially if particularly loud', 'Abstract': 'dominance, control'}, ""),
"ēhō": new Noun("ēhō", 2, {'Monstrous': 'banshee', 'Magical': 'voicebox', 'Mundane': 'voice', 'Abstract': 'noise, clamor, ruckus; shriek; volume, sonority'}, ""),
"ēkfūh": new Noun("ēkfūh", 3, {'Magical': 'wasteland', 'Mundane': 'wasteland', 'Abstract': 'loss, tragedy, despair'}, ""),
"ēlcel": new Noun("ēlcel", 3, {'Exalted': 'crowd, swarm', 'Rational': 'crowd, swarm', 'Monstrous': 'crowd, swarm', 'Irrational': 'crowd, swarm', 'Magical': 'spellpower', 'Mundane': 'archive; library', 'Abstract': 'number, quantity, amount; plurality'}, ""),
"ēħô": new Noun("ēħô", 4, {'Exalted': 'catchall term for any type of dragon', 'Rational': 'catchall term for any type of dragon', 'Monstrous': 'catchall term for any type of dragon', 'Irrational': 'catchall term for any type of dragon', 'Magical': 'flamebox', 'Mundane': 'fire breath', 'Abstract': 'ignition; burst of flame, especially from the throat; intensity of fire'}, ""),
"ēχ": new Noun("ēχ", 4, {'Exalted': 'couple, pair, duo; twin', 'Rational': 'couple, pair, duo; twin', 'Monstrous': 'couple, pair, duo; twin', 'Irrational': 'couple, pair, duo; twin', 'Magical': 'twinspell', 'Mundane': 'pair', 'Abstract': 'double, duality, dyad; dual'}, ""),
"ēχsen": new Noun("ēχsen", 3, {'Rational': 'lycanthrope', 'Monstrous': 'lycanthrope', 'Abstract': 'lycanthropy'}, ""),
"ħatrū": new Noun("ħatrū", 1, {'Magical': 'feather', 'Mundane': 'feather', 'Abstract': 'lightness, delicacy'}, ""),
"ħyh": new Noun("ħyh", 4, {'Abstract': 'a Draconic name; gold as a material; affluence, wealth', 'Magical': 'gold', 'Mundane': 'gold'}, ""),
"ħárχħôrχ": new Noun("ħárχħôrχ", 4, {'Exalted': 'winner', 'Rational': 'winner', 'Monstrous': 'winner; vampire (in human form)', 'Irrational': 'winner; griffin', 'Magical': 'acid rain', 'Mundane': 'prize; medal, trophy; rain', 'Abstract': 'success, accomplishment; arrival, landing'}, ""),
"ħâ": new Noun("ħâ", 2, {'Magical': 'flame; fire breath', 'Mundane': 'flame; fire breath'}, ""),
"ħâ'": new Noun("ħâ'", 3, {'Rational': 'prey', 'Monstrous': 'prey', 'Irrational': 'prey; animal', 'Magical': 'fuel', 'Mundane': 'fuel', 'Abstract': 'vulnerability'}, ""),
"ħâno": new Noun("ħâno", 4, {'Exalted': 'cannibal', 'Rational': 'cannibal', 'Monstrous': 'cannibal; ghoul; any flesheating monster', 'Irrational': 'cannibal; personification of blight, decay', 'Mundane': 'flesh, especially rotten', 'Abstract': 'cannibalism; blight, decay'}, " often abscribed as an insult"),
"ħâq̇": new Noun("ħâq̇", 1, {'Abstract': 'esteem, exaltation, admiration'}, ""),
"ħóz": new Noun("ħóz", 3, {'Monstrous': 'snow elemental', 'Irrational': 'snow elemental', 'Magical': 'snowstorm', 'Mundane': 'snow, frost; snowflake', 'Abstract': 'cold'}, ""),
"ħô": new Noun("ħô", 1, {'Monstrous': 'ice elemental', 'Irrational': 'ice elemental', 'Magical': 'hail; sleet', 'Mundane': 'ice, ice crystal', 'Abstract': 'iciness, slipperiness'}, ""),
"ħôħ": new Noun("ħôħ", 4, {'Exalted': 'ice dragon', 'Rational': 'ice giant', 'Monstrous': 'ice giant', 'Irrational': 'any creature native to snowy environments', 'Magical': 'blizzard; avalanche', 'Mundane': 'tundra, snowy expanse', 'Abstract': 'bitter and unbearable cold'}, ""),
"ħôŋ": new Noun("ħôŋ", 3, {'Rational': 'humanoid, any humanlike creature', 'Irrational': 'golem, especially of stone', 'Mundane': 'statue'}, ""),
"ħúħû": new Noun("ħúħû", 1, {'Exalted': 'one who is abnormally large', 'Rational': 'one who is abnormally large; giant', 'Monstrous': 'one who is abnormally large', 'Irrational': 'one who is abnormally large', 'Abstract': 'giantkind, giants as a group'}, ""),
"ħûl": new Noun("ħûl", 3, {'Mundane': 'corner, nook, cranny', 'Abstract': 'angle'}, ""),
"ħāxaχ": new Noun("ħāxaχ", 1, {'Exalted': 'a Draconic name; predator, especially a vicious one', 'Rational': 'a Draconic name; predator, especially a vicious one', 'Monstrous': 'predator, especially a vicious one', 'Irrational': 'predator, especially a vicious one'}, ""),
"īk": new Noun("īk", 3, {'Magical': 'magical resource', 'Mundane': 'natural resource', 'Abstract': 'resource'}, ""),
"ōciqāχu": new Noun("ōciqāχu", 1, {'Exalted': 'genius', 'Magical': 'brain', 'Mundane': 'brain', 'Abstract': 'intelligence, knowledge'}, ""),
"ōh'ēkx": new Noun("ōh'ēkx", 3, {'Exalted': 'investigator, inspector', 'Rational': 'investigator, inspector', 'Monstrous': 'investigator, inspector', 'Irrational': 'investigator, inspector', 'Magical': 'divination magic', 'Mundane': 'microscope', 'Abstract': 'investigation'}, ""),
"ōhaq": new Noun("ōhaq", 3, {'Exalted': 'nurse; responder', 'Rational': 'nurse; responder', 'Monstrous': 'nurse; responder', 'Irrational': 'nurse; responder', 'Magical': 'resuscitation magic', 'Abstract': 'nursing; resuscitation'}, ""),
"ōhq̇aχu": new Noun("ōhq̇aχu", 1, {'Exalted': 'a Draconic name', 'Rational': 'a Draconic name', 'Magical': 'resurrection', 'Abstract': 'resurrection'}, ""),
"ōq": new Noun("ōq", 3, {'Abstract': 'true flight; wellbeing'}, ""),
"ōqħáŋ": new Noun("ōqħáŋ", 3, {'Abstract': 'expulsion'}, ""),
"ōraħ": new Noun("ōraħ", 4, {'Abstract': 'possession'}, ""),
"ōrn": new Noun("ōrn", 1, {'Magical': 'crate, trunk, box; chest, especially with treasure', 'Mundane': 'crate, trunk, box; chest, especially with treasure', 'Abstract': 'containment'}, ""),
"ōrnyll": new Noun("ōrnyll", 1, {'Magical': 'a small extradimensional rift', 'Mundane': 'pocket; purse, small bag'}, ""),
"ōx": new Noun("ōx", 3, {'Magical': 'any sharp, magical object', 'Mundane': 'sharp tooth, cuspid; rake, broom, (by extension) any tool that sweeps or rakes', 'Abstract': 'chore'}, ""),
"ōχ": new Noun("ōχ", 3, {'Magical': '(definite) afterlife', 'Mundane': 'clock, sundial, timekeeping device', 'Abstract': 'time; era, eon'}, ""),
"ōχfāled": new Noun("ōχfāled", 3, {'Exalted': 'prisoner', 'Rational': 'prisoner', 'Monstrous': 'prisoner', 'Irrational': 'prisoner', 'Magical': 'force cage; cage; prison', 'Mundane': 'cage; prison', 'Abstract': 'imprisonment'}, ""),
"ōχħó": new Noun("ōχħó", 4, {'Irrational': 'porcupine; cactus', 'Magical': 'thagomizer', 'Mundane': 'spike, prong', 'Abstract': 'lash, tailstrike'}, ""),
"ōχōraħ": new Noun("ōχōraħ", 4, {'Exalted': 'crowd, group', 'Rational': 'crowd, group', 'Monstrous': 'crowd, group', 'Irrational': 'crowd, group', 'Magical': 'collection', 'Mundane': 'collection', 'Abstract': 'collecting, collection'}, ""),
"ūk": new Noun("ūk", 3, {'Magical': 'wreck, shipwreck', 'Mundane': 'wreck, shipwreck', 'Abstract': 'fall, sinking, descent; latency, delay, regression; Recessive'}, ""),
"ūl": new Noun("ūl", 3, {'Exalted': 'body', 'Rational': 'body', 'Monstrous': 'body', 'Irrational': 'body', 'Magical': 'a manifestation of magic', 'Mundane': 'shape, form', 'Abstract': 'theoretical form'}, ""),
"ūri": new Noun("ūri", 1, {'Monstrous': 'kraken; any giant sea monster, typically tentacled', 'Irrational': 'giant squid or octopus; any large tentacled creature', 'Mundane': 'calamari, or other related foods'}, ""),
"ūrk": new Noun("ūrk", 3, {'Abstract': 'unit of measure equivalent to approximately 400 meters'}, ""),
"χa": new Noun("χa", 2, {'Exalted': 'common Draconic name', 'Rational': 'common Draconic name', 'Magical': 'claw, talon', 'Mundane': 'claw, talon', 'Abstract': 'trace, impact'}, ""),
"χalk": new Noun("χalk", 1, {'Abstract': 'unit of measure equivalent to approximately 8 centimeters'}, ""),
"χall": new Noun("χall", 3, {'Abstract': 'bite; biting; gnashing'}, ""),
"χaχæ": new Noun("χaχæ", 1, {'Rational': 'lizardfolk; any reptilian humanoid', 'Monstrous': 'reptilian monster', 'Irrational': 'a reptile, especially alligators and crocodiles', 'Mundane': 'cuspid, especially of a reptile', 'Abstract': 'reptilia or lizardkind, lizardfolk as a group'}, ""),
"χu'lu": new Noun("χu'lu", 1, {'Magical': 'magical comfort', 'Mundane': 'luxury, comfort', 'Abstract': 'aid, assistance, help, care; luxury, comfort (conceptual)'}, ""),
"χu'luχi": new Noun("χu'luχi", 3, {'Irrational': 'ant', 'Mundane': 'spoke, rung', 'Abstract': 'support, assistance'}, ""),
"χu'luχu": new Noun("χu'luχu", 1, {'Exalted': 'cleric; religious leader, epseically one capable of divine magic', 'Rational': 'cleric; religious leader, epseically one capable of divine magic', 'Monstrous': 'cleric; religious leader, epseically one capable of divine magic', 'Irrational': 'cleric; religious leader, epseically one capable of divine magic', 'Magical': 'any divinely blessed item; clerical magic', 'Mundane': 'a divine symbol', 'Abstract': 'divine blessing'}, ""),
"χullīrχ": new Noun("χullīrχ", 3, {'Magical': 'magical weakness', 'Mundane': 'miniature', 'Abstract': 'weakness, fragility'}, ""),
"χuχūq": new Noun("χuχūq", 4, {'Abstract': 'power, force, strength, vigor; insistence, determination'}, ""),
"χâtroχ": new Noun("χâtroχ", 1, {'Exalted': 'author; scribe', 'Rational': 'author; scribe', 'Monstrous': 'author; scribe', 'Irrational': 'author; scribe', 'Magical': 'magical writing instrument', 'Mundane': 'pen, writing instrument', 'Abstract': 'spelling; handwriting'}, ""),
"χâtrū": new Noun("χâtrū", 1, {'Magical': 'tome; spellbook', 'Mundane': 'scroll; book, novel', 'Abstract': 'literature'}, ""),
"χāloq": new Noun("χāloq", 3, {'Magical': 'casting time', 'Mundane': 'season', 'Abstract': 'age, seniority; (of a dragon) inherent strength, power'}, ""),
"χārmex": new Noun("χārmex", 2, {'Irrational': 'biolumescent creature', 'Magical': 'magical light', 'Mundane': 'light, light source', 'Abstract': 'brightness'}, ""),
"χārq": new Noun("χārq", 3, {'Abstract': 'year'}, ""),
"χāráħ": new Noun("χāráħ", 4, {'Exalted': '(definite) Yggdrasil', 'Rational': 'sentient tree; (plural) sentient plant life; (definite) nature, as it is personified and acts', 'Monstrous': '(definite) nature, as it is personified and acts', 'Irrational': '(definite) nature, as it is personified and acts', 'Magical': 'nature magic', 'Abstract': 'nature, in the abstract'}, ""),
"χārô": new Noun("χārô", 4, {'Monstrous': 'genie', 'Irrational': 'genie', 'Magical': 'magic wish', 'Mundane': 'treasure', 'Abstract': 'wish, hope'}, ""),
"χārŋ": new Noun("χārŋ", 3, {'Exalted': 'prisoner of war; loser', 'Rational': 'prisoner of war; loser', 'Monstrous': 'prisoner of war; loser', 'Irrational': 'prisoner of war; loser', 'Mundane': 'treaty', 'Abstract': 'capitulation, surrender; confession'}, ""),
"χātrilq": new Noun("χātrilq", 3, {'Exalted': 'teacher, tutor', 'Rational': 'teacher, tutor', 'Monstrous': 'teacher, tutor', 'Irrational': 'teacher, tutor', 'Magical': 'magical education', 'Mundane': 'lesson, curriculum, syllabus', 'Abstract': 'lesson topic; education'}, ""),
"χāŋō": new Noun("χāŋō", 1, {'Monstrous': 'zombie; mindless undead', 'Irrational': 'zombie; mindless undead', 'Mundane': 'corpse', 'Abstract': 'zombies, mindless undead as a goup'}, ""),
"χēgēk": new Noun("χēgēk", 3, {'Abstract': 'childhood, adolescence'}, ""),
"χēni": new Noun("χēni", 1, {'Monstrous': 'specter, phantom', 'Irrational': 'camel', 'Magical': 'magic bubble, usually containing some liquid or gas', 'Mundane': 'barrel, keg; bucket, pail', 'Abstract': 'duration; endurance'}, ""),
"χēnorn": new Noun("χēnorn", 1, {'Magical': 'telekinetic magic', 'Abstract': 'telekenesis'}, ""),
"χħa'th0": new Noun("χħa'th0", 2, {'Exalted': 'aderent of esoteric religious beliefs; pagan', 'Rational': 'aderent of esoteric religious beliefs; pagan', 'Monstrous': 'aderent of esoteric religious beliefs; pagan', 'Irrational': 'aderent of esoteric religious beliefs; pagan', 'Magical': 'magical obelisk; mage tower', 'Mundane': 'obelisk; tower; spire', 'Abstract': 'esoteric religious beliefs; paganism'}, ""),
"χħátrū": new Noun("χħátrū", 1, {'Magical': 'glyph; ritualistic carving', 'Mundane': 'text, excerpt; written sample', 'Abstract': 'writing'}, ""),
"χħâllu": new Noun("χħâllu", 3, {'Magical': 'a magic word; a power word', 'Abstract': 'word, term; utterance'}, ""),
"χħâlqo": new Noun("χħâlqo", 3, {'Magical': '(definite) an extraplanar region beyond the stars home to gods, celestials, and souls of the righteous; heaven; (indefinite) any goodaligned alternate plane or dimension', 'Mundane': 'zone, area, physical domain; territory', 'Abstract': 'extent; theoretical or categorical domain; reach, sway, influence'}, ""),
"χħâħ": new Noun("χħâħ", 4, {'Monstrous': 'sentient, hostile tree', 'Irrational': 'mangled or gnarled tree'}, ""),
"χħóf": new Noun("χħóf", 3, {'Monstrous': 'bog monster; (plural) creeping vines', 'Irrational': '(plural) wildlife', 'Mundane': 'swamp, marsh, bog'}, ""),
"χħóq̇ħó": new Noun("χħóq̇ħó", 1, {'Exalted': 'a brute; one who is brutal', 'Rational': 'a brute; one who is brutal', 'Monstrous': 'a brute; one who is brutal', 'Irrational': 'a brute; one who is brutal', 'Magical': 'a magical attack which physically strikes', 'Mundane': 'whip', 'Abstract': 'whipping; brutality'}, ""),
"χħôl": new Noun("χħôl", 3, {'Magical': 'incantation', 'Abstract': 'speech, speaking'}, ""),
"χħû'lu": new Noun("χħû'lu", 1, {'Exalted': 'healer', 'Rational': 'healer', 'Monstrous': 'healer', 'Irrational': 'healer', 'Magical': 'cure; magical healing', 'Mundane': 'pill, medicine', 'Abstract': 'healing, medicine; health'}, ""),
"χħēhā": new Noun("χħēhā", 2, {'Magical': 'pyramid', 'Mundane': 'pyramid', 'Abstract': 'hierarchy, ranking; class, gender (grammatical)'}, ""),
"χōfāled": new Noun("χōfāled", 1, {'Irrational': 'carnivorous plant; tangle of vines or other such plants', 'Magical': 'magical trap, snare; magically activated trigger', 'Mundane': 'mechanical trap, snare', 'Abstract': 'trap, a deceitful arrangement; entrapment'}, " sense 'carnivorous plant' typically refers to small, flytraplike plants"),
"χōka": new Noun("χōka", 2, {'Rational': 'crystalline creature', 'Monstrous': 'crystalline creature', 'Irrational': 'crystalline creature', 'Magical': 'mirror; reflective surface', 'Mundane': 'mirror; reflective surface', 'Abstract': 'reflection, reflectivity'}, ""),
"χōlleql": new Noun("χōlleql", 3, {'Exalted': 'jester; clown; comedian', 'Rational': 'jester; clown; comedian', 'Abstract': 'comedy'}, ""),
"χōlliχħo": new Noun("χōlliχħo", 4, {'Abstract': 'announcement; information'}, ""),
"χōlyra": new Noun("χōlyra", 4, {'Abstract': 'spirit, vigor, vibrance; memory'}, ""),
"χōrthq̇": new Noun("χōrthq̇", 4, {'Exalted': 'hypnotist', 'Rational': 'hypnotist', 'Monstrous': 'hypnotist', 'Irrational': 'hypnotist', 'Magical': 'hypnosis, hypnotic magic', 'Mundane': 'fanfare; ceremony, celebration', 'Abstract': 'hypnosis, as a field or discipline'}, ""),
"χōtrūrχu": new Noun("χōtrūrχu", 1, {'Exalted': 'lieutenant; leader (of a small group or team)', 'Rational': 'lieutenant; leader (of a small group or team)', 'Monstrous': 'lieutenant; leader (of a small group or team)', 'Irrational': 'lieutenant; leader (of a small group or team)', 'Magical': 'magic that compels one do to something against their own will', 'Mundane': 'commandment (as written or decreed)', 'Abstract': 'employment, hiring of an employee; command, order; imperative, commandment (as given)'}, "")
}

VERBS.MAP = {
"æf": new Verb("æf", "to denounce, to insult; to spit, to spit upon", "æfad, āf, āfad", ""),
"æfux": new Verb("æfux", "to drool, to salivate; to hunger, to hunger for", "æfād, āfux, āfād", " sense 'to hunger for' takes preposition ō"),
"ærχ": new Verb("ærχ", "to like, to enjoy; (reflexive) to be pleased, satisfied", "ærd, N/A, N/A", ""),
"ah'ax": new Verb("ah'ax", "to avoid; to refrain from; (reflexive) to fast", "ah'axed, āh'ax, āh'axed", ""),
"aħáŋ": new Verb("aħáŋ", "to return; to try (something) again", "aħáŋad, a'aħáŋ, a'aħáŋad", ""),
"āk": new Verb("āk", "to reach, to reach for; to stretch", "āxad, āhak, āhaxad", ""),
"axk": new Verb("axk", "to perform, to act; to cast (a spell)", "axced, āxk, āxced", ""),
"āχ": new Verb("āχ", "to reverse, to turn around", "āχod, a'āχ, a'āχod", ""),
"cellelq": new Verb("cellelq", "to be jolly, silly; to be humorous, to make others laugh", "celleqlēd, cēllelq, cēlleqlēd", ""),
"celq": new Verb("celq", "to laugh", "ceqlēd, cēlq, cēqlēd", ""),
"ceq": new Verb("ceq", "to have, to possess; to be with", "ceχad, q̇ħúthq, q̇ħúχthod", " episodic usually used for alienable possesion, and gnomic for inalienable possession"),
"cerq": new Verb("cerq", "to hold, to grasp, to contain", "cerχad, N/A, N/A", ""),
"coktiz": new Verb("coktiz", "to fly, to soar", "coktizad, cōktiz, cōktizad", " can mean 'to disregard ___' with prepostion kxā"),
"ef": new Verb("ef", "to shoot, to fire (a weapon)", "efud, ēf, ēfud", ""),
"ekfūh": new Verb("ekfūh", "to regret, to be regretful; to apologize, to give condolences", "ekfād, ēkfūh, ēkfād", ""),
"ekx": new Verb("ekx", "to see", "ekxad, N/A, N/A", ""),
"ezā": new Verb("ezā", "to gaze, to stare", "ezād, ēzā, ēzād", " takes preposition thū"),
"eχ": new Verb("eχ", "to multiply, to increase", "eχad, ēχ, ēχad", ""),
"fāl": new Verb("fāl", "to tie, to bind", "fāled, fæfāl, fæfāled", ""),
"falēl": new Verb("falēl", "to knot; to tangle", "falēled, fālēl, fālēled", ""),
"fēl": new Verb("fēl", "to suck, to suck dry; to drain, to empty", "fēltud, fefēl, fefēltud", " sense 'drain, empty' takes preposition ho"),
"foth": new Verb("foth", "to hate", "fothād, fofoth, fofothād", ""),
"foxeχ": new Verb("foxeχ", "to cook, to prepare food; to singe, sear, char; to accomplish", "foxeχad, fōxeχ, fōxeχad", ""),
"fuh": new Verb("fuh", "to die, to be dead", "fad, fūh, fād", ""),
"ha'kx": new Verb("ha'kx", "to ponder, think, consider", "ha'qχud, haha'kx, haha'qχud", ""),
"ħak": new Verb("ħak", "to extinguish; to put an end to, to finish off; (euphemistic) to kill", "ħaxad, ħāk, ħāxad", ""),
"ħáŋ": new Verb("ħáŋ", "to come, to arrive", "ħáŋad, ħâŋ, ħâŋad", ""),
"hāreχ": new Verb("hāreχ", "to warm, to heat up; to treat gently, to care for", "hāreχad, harāreχ, harāreχad", ""),
"ħax": new Verb("ħax", "to defeat, to outperform; to win, succeed, prosper", "ħad, ħāx, ħād", ""),
"ħeħe": new Verb("ħeħe", "to chatter", "ħeħēd, ħēħe, ħēħēd", ""),
"hihin": new Verb("hihin", "to blow, to exhale forcefully; to regurgitate, to vomit", "hihinad, hīhin, hīhinad", ""),
"hisi": new Verb("hisi", "to whisper", "hisīd, hīsi, hīsīd", ""),
"ħuqsix": new Verb("ħuqsix", "to scare, frighten; to terrorize", "ħuqsad, ħūqsix, ħūqsad", ""),
"kālēl": new Verb("kālēl", "to refuse; to protest, object; to be indigt; to counterspell", "kālēled, kaχālēl, kaχālēled", " sense 'counterspell' takes preposition sæχ"),
"kāχūls": new Verb("kāχūls", "to bleed", "kāχūlzad, kakāχūls, kakāχūlzad", " can mean 'to sacrifice much for ___' with preposition qē"),
"kē": new Verb("kē", "to eat", "kēd, kæxe, kæxēd", ""),
"kē": new Verb("kē", "to prepare, to ready; to bolster", "kērd, kē', kē'erd", ""),
"kē'e": new Verb("kē'e", "to prepare oneself, to get ready; to steel onself", "kē'erd, kē'ē, kē'ērd", ""),
"kēhantok": new Verb("kēhantok", "to be called, named; to be select, chosen; to be considered (copulative)", "kēhantōd, kyxēhantok, kyxēhantōd", ""),
"kehōk": new Verb("kehōk", "(intransitive) to change, alter, differ; to be different, unique", "kehōkad, kēhōk, kēhōkad", ""),
"kēlliqχo": new Verb("kēlliqχo", "to understand, to comprehend", "kēlliqχād, kēllīqχo, kēllīqχād", ""),
"kēqχ": new Verb("kēqχ", "to spin, twirl", "kēqχed, kēqχeqχ, kēqχēd", ""),
"kētru": new Verb("kētru", "to hesitate; to show restraint", "kētrurd, kētrū, kētrūrd", ""),
"keχħô": new Verb("keχħô", "to be humble; to be selfless, generous", "keχħóqħád, kēχħô, kēχħóqħád", ""),
"koko": new Verb("koko", "to mime, mimick; to imitate", "kokōd, kaχo, kaχōd", " takes preposition sī"),
"kotuŋ": new Verb("kotuŋ", "to build, to construct", "kotuŋad, kokotuŋ, kokotuŋad", ""),
"kura": new Verb("kura", "to contact, to press against; to kiss", "kurād, kukura, kukurād", ""),
"kxorχ": new Verb("kxorχ", "to collapse; to crash; to crunch", "kxorχad, kxokxorχ, kxokxorχad", ""),
"lathq̇": new Verb("lathq̇", "to sing; to charm (someone)", "laq̇thod, lārthq̇, lārq̇thod", " sense 'to charm (someone)' takes preposition æze"),
"lele": new Verb("lele", "to dance playfully; to goof off, to mess around", "lelēd, lēle, lēlēd", ""),
"llæfēl": new Verb("llæfēl", "to connect; to introduce something or someone", "llæfēlhed, llæfāl, llæfālhed", " sense 'to introduce' optionally takes preposition thū to state recepient of introduction"),
"llaħ": new Verb("llaħ", "to begin, to start; to take on", "llád, llēħ, llâd", ""),
"llâŋ": new Verb("llâŋ", "to agree; to consent", "llâŋad, lláħâŋ, lláħâŋad", " 'to agree to' can be formed with preposition lleŋ 'to agree with' can be formed with preposition qa"),
"lle'as": new Verb("lle'as", "to compare; to equate", "lle'ard, llā'as, llā'ard", " optionally takes preposition thū to state second object of comparison"),
"llēl": new Verb("llēl", "to love romantically and passionately ", "llēlid, llēli, llēlīd", ""),
"ller'": new Verb("ller'", "to cohabitate with", "llerēd, llēre', llērēd", " takes preposition qa"),
"llērkx": new Verb("llērkx", "to be on good terms with; to enjoy the company of", "llērkxad, llērārkx, llērārkxad", ""),
"llēroχ": new Verb("llēroχ", "(reflexive) to cooperate, to work together", "llērōd, llērūroχ, llērūrōd", " always plural"),
"lletroħáq̇ħ": new Verb("lletroħáq̇ħ", "to converse, to discuss; to chat, to chatter", "lletróq̇ħád, llētroħáq̇ħ, llētróq̇ħád", ""),
"llexe": new Verb("llexe", "to share", "llexērd, N/A, N/A", ""),
"llēχ": new Verb("llēχ", "to dine; to eat with others", "llēχed, llēleχ, llēleχed", ""),
"lleχħô": new Verb("lleχħô", "to forge", "lleχħóqħád, llôχħô, llôχħóqħád", ""),
"llifūh": new Verb("llifūh", "to trust, to put faith in", "llifād, llīfūh, llīfād", " takes preposition qχok"),
"llīlq": new Verb("llīlq", "to drink", "llīlqud, llīlīlq, llīlīlqud", ""),
"llilχħá": new Verb("llilχħá", "to have fun, especially with others", "llilχħád, llīlχħá, llīlχħád", ""),
"llina": new Verb("llina", "to be or become tired, exhausted; to exhaust oneself; to toil; to overexert oneself", "llinād, llinīna, llinīnād", " optionally reflexive"),
"llir'": new Verb("llir'", "to detach (from), separate (from); to disagree; to divorce", "llir'ad, llīr', llīr'ad", " sense 'detach from, separate from' takes prepostion ho 'to disagree to' can be formed with preposition lleŋ 'to disagree with; to divorce ___' can be formed with preposition qa'"),
"lliχu": new Verb("lliχu", "to love platonically or familially", "lliχūd, llīχu, llīχūd", ""),
"lloħáŋ": new Verb("lloħáŋ", "to combine, merge, intertwine", "lloħáŋad, lloħâŋ, lloħâŋad", ""),
"lloqsix": new Verb("lloqsix", "to fight together", "lloqsad, llōqsix, llōqsad", " optionally reflexive"),
"llylurħ": new Verb("llylurħ", "to plot, scheme, plan", "llylurħád, llilurħ, llilurħád", ""),
"llyq": new Verb("llyq", "to flock; to be together", "llyχad, lloq, lloχad", ""),
"lulħá": new Verb("lulħá", "to excavate, to exhume", "lurħád, lūlħá, lūrħád", ""),
"lur": new Verb("lur", "to be (copula)", "rōd, lūryχ, lyrōd(highly irregular)", " the past gnomic form (lūrōd) usually carries a counterfactual connotation  in casual speech, the forms are typically realized as lyr, rod, lurχ, and lyrod does not take prefix suffixes; see sheet named 'To Be'"),
"lurox": new Verb("lurox", "to keep, retain; to maintain; to hoard", "luroxed, lūrox, lūroxed", ""),
"lurx": new Verb("lurx", "to use; to handle, to operate", "lurxed, lulurx, lulurxed", ""),
"lyħá": new Verb("lyħá", "to search, to look for; to parse, to examine; to probe", "lyħád, luħá, luħád", " sense 'to probe' takes preposition qχok"),
"næn": new Verb("næn", "to breathe in and out, to respirate", "nænad, nān, nānad", ""),
"ōcelq": new Verb("ōcelq", "to disregard, to ignore", "ōceqlēd, ōcellelq, ōcelleqlēd", ""),
"ōh'ekx": new Verb("ōh'ekx", "to investigate, to inspect", "ōh'ekxad, N/A, N/A", ""),
"ōħá": new Verb("ōħá", "to sleep, to be sleepy", "ōħád, ō'ōħá, ō'ōħád", ""),
"ōhaq": new Verb("ōhaq", "to reply, respond", "ōhked, ōhāq, ōhkēd", ""),
"ōhq̇": new Verb("ōhq̇", "to overpower", "ōhq̇ad, ōhq̇a', ōhq̇a'ad", ""),
"ōkx": new Verb("ōkx", "to convince; to connive", "ōkxed, ōkxekx, ōkxekxed", " sense 'to connive' takes preposition q̇u"),
"oltaħ": new Verb("oltaħ", "to take, to snatch", "oltaħád, o'ōltaħ, o'ōltaħád", ""),
"oq": new Verb("oq", "to fly true; to function, to be functional, to work", "ogyd, ōq, ōgyd", " colloquially used to mean 'to do well, to be alright'"),
"ōqħáŋ": new Verb("ōqħáŋ", "to send, to send off; to expel; (reflexive) to emigrate", "ōqħáŋad, ōqħâŋ, ōqħâŋad", ""),
"ōraħ": new Verb("ōraħ", "to possess, to own", "ōraħád, N/A, N/A", ""),
"ōraħ": new Verb("ōraħ", "to collect, to gather; to claim as one's own", "ōraħád, ōχōraħ, ōχōraħád", ""),
"ōtroqħá": new Verb("ōtroqħá", "to yell, shout; to suppress", "ōtroqħád, ōtrōqħá, ōtrōqħád", " sense 'to suppress' takes preposition sil"),
"ox": new Verb("ox", "to chew, to chew on, to gnaw; to scrape, rake, drag", "oxad, ōx, ōxad", ""),
"ōχ'oq": new Verb("ōχ'oq", "to fly over, to overpass", "ōχ'oqad, ōχ'ōq, ōχ'ōqad", ""),
"ōχfālel": new Verb("ōχfālel", "to imprison", "ōχfālēd, ō'ōχfālel, ō'ōχfālēd", ""),
"óχħô": new Verb("óχħô", "to fight, to battle; to physically struggle with", "óχħâd, χħóq­ħô, χħóqħâd", ""),
"ōχħó": new Verb("ōχħó", "to lash; to strike with the tail", "ōχħóqħád, ōχħô, ōχħôqħád", ""),
"ōχu'": new Verb("ōχu'", "to be overwhelmed, to take on too much", "ōχu'led, ōχū', ōχū'led", ""),
"qā'eth": new Verb("qā'eth", "to flee; to retreat; to recoil with cowardice", "qā'erd, kaχā'eth, kaχā'erd", ""),
"qāgēk": new Verb("qāgēk", "to run out, to run dry; to be or become depleted", "qāgēd, kaχāgēk, kaχāgēd", ""),
"qāloq": new Verb("qāloq", "to brag, boast; to feign strength", "qālqād, kaχāloq, kaχālqād", " all senses take preposition qē"),
"qarqar": new Verb("qarqar", "to pulse, to thrum; to beat rhythmically", "qarqarad, qārqar, qārqarad", ""),
"q̇em": new Verb("q̇em", "to not be (negative copula)", "lyged, q̇ōm, lūrxed", " the past gnomic form (lūrōd) usually carries a counterfactual connotation: that the described statement is no longer true.  in casual speech, the forms are typically realized as q̇ym, xed, q̇om, and lūrxyd"),
"qēr": new Verb("qēr", "to precede, to come before", "qērad, qēra', qēra'ad", ""),
"qērkx": new Verb("qērkx", "to predict, foretell; to prophesize", "qērkxed, qēqērkx, qēqērkxed", ""),
"qērliqχ": new Verb("qērliqχ", "to know of, to be familiar with; to know (individuals)", "qērliqχād, qērlīqχ, qērlīqχād", ""),
"qēru": new Verb("qēru", "to jump, hop; to fidget, twitch", "qēruhad, qērā, qērāhad", ""),
"qērxe": new Verb("qērxe", "to buy, purchase; to inherit", "qērxērd, qēqērxe, qēqērxērd", ""),
"qħáme": new Verb("qħáme", "to hear; to listen (to)", "qħámād, N/A, N/A", " sense 'to listen to' marked with preposition ō"),
"q̇ħónllirk": new Verb("q̇ħónllirk", "to count, enumerate; to count up, tabulate", "q̇ħónllirkad, q̇ħônllirk, q̇ħônllirkad", " sense 'count up, tabulate' takes preposition ō"),
"qħû": new Verb("qħû", "to wield or use a blade; to brandish", "qħúħád, quχħû, quχħúħád", ""),
"qōħáŋ": new Verb("qōħáŋ", "to take off, to launch", "qōħáŋad, qōħâŋ, qōħâŋad", " sense 'to take off' is optionally reflexive"),
"qōltaħ": new Verb("qōltaħ", "to take back, to reclaim; (reflexive) to recuperate, recover", "qōltaħád, qōqōltaħ, qōqōltaħád", ""),
"qū": new Verb("qū", "to grow; to age; to become strong", "qād, quχu, quχād", ""),
"q̇u'u": new Verb("q̇u'u", "to cry, to weep", "q̇u'ūlad, q̇ū'u, q̇ū'ūlad", ""),
"q̇uhīn": new Verb("q̇uhīn", "to reframe, reintepret, reassess; to have another look", "q̇uhīnad, q̇ūhīn, q̇ūhīnad", ""),
"q̇ulq̇": new Verb("q̇ulq̇", "to respect, be respectful, show deference (to)", "q̇ulq̇ad, q̇ūlq̇, q̇ūlq̇ad", " sense 'to show deference to' takes preposition qē"),
"qūls": new Verb("qūls", "to cut, to slice", "qūlsad, quχūls, quχūlsad", ""),
"q̇uq̇": new Verb("q̇uq̇", "to digest; to dissolve", "q̇u'ad, q̇ūq̇, q̇ū'ad", ""),
"qūr": new Verb("qūr", "to cease, to end, to stop (transitive)", "qūrod, qūru, qūrōd", ""),
"quru'": new Verb("quru'", "to wait, await; to hesitate; to stop (intransitive)", "quru'ad, qūru', qūru'ad", ""),
"qyk": new Verb("qyk", "to dive, to plunge", "qyxad, kaxk, kaχad", ""),
"qyzelleŋ": new Verb("qyzelleŋ", "to reciprocate; to show kindness in return", "qyzelleŋad, qezelleŋ, qezelleŋad", ""),
"qχô": new Verb("qχô", "to strike; to beat; to whip", "qχâd, qχóqχô, qχóqχâd", ""),
"qχyħâħ": new Verb("qχyħâħ", "to translate; to decipher, decode; to interpret", "qχyħâd, qχeχħâħ, qχeχħâd", ""),
"sæntox": new Verb("sæntox", "to actualize, bring about, realize; to nominalize; to personify; to bring to life, to animate", "sæntōd, sāntox, sāntōd", " takes preposition qa"),
"sáħû": new Verb("sáħû", "to swim", "sáħúd, særáħû, særáħúd", ""),
"sal": new Verb("sal", "to request, to ask politely for; to want", "salod, N/A, N/A", ""),
"seŋ": new Verb("seŋ", "to desire, yearn for; to be attracted to, inclined to", "seŋad, selleŋ, selleŋad", ""),
"seχħû": new Verb("seχħû", "to try, to attempt", "seχħûd, sēχħû, sēχħûd", ""),
"soq": new Verb("soq", "to describe, to define; to mean; to color", "sōd, sosoq, sosōd", ""),
"sun": new Verb("sun", "to glide, to coast; to float (in water); to chill, take it easy", "sunad, sūn, sūnad", ""),
"sy'antox": new Verb("sy'antox", "to verify, confirm; to sign, to mark", "sy'antōd, se'antox, se'antōd", " takes preposition qa"),
"sy'elce": new Verb("sy'elce", "to estimate, to theorize, to guess", "sy'elcēd, se'elce, se'elcēd", " takes preposition qa"),
"sy'en": new Verb("sy'en", "to revere, admire, exalt", "sy'enad, syq̇ħen, syq̇ħenad", " takes preposition qa"),
"sy'yr": new Verb("sy'yr", "to doubt; to be doubtful, uncertain", "sy'yrad, sy'er, sy'erad", " object of sense 'to doubt' takes preposition qa"),
"syn": new Verb("syn", "to nap, to doze off, to rest; to hibernate", "synyd, sulyn, sulynyd", ""),
"syq̇": new Verb("syq̇", "to give", "sy'ad, seq̇, se'ad", " recipient of giving can be marked with preposition qa"),
"syq̇ħâ": new Verb("syq̇ħâ", "to greet, to bid hello", "syq̇ħâd, seq̇ħâ, seq̇ħâd", " takes preposition qa"),
"syq̇llak": new Verb("syq̇llak", "to wonder, to wonder about", "syq̇llakad, seq̇llak, seq̇llakad", " object of sense 'to wonder about' takes preposition qa"),
"syq̇nyl": new Verb("syq̇nyl", "to recognize, to realize; to notice", "syq̇nylad, seq̇nyl, seq̇nylad", " takes preposition qa"),
"syq̇rā": new Verb("syq̇rā", "to be shocked, surprised, taken aback", "syq̇rād, seq̇rā, seq̇rād", " can mean 'to be surprised by ___' with preposition qa"),
"tera": new Verb("tera", "to flutter; to hover", "terād, tēra, tērād", ""),
"thā'": new Verb("thā'", "to interrogate; to pry, to probe", "thā'od, thathā', thathā'od", ""),
"thal": new Verb("thal", "to ask, inquire, question; to pray", "thalod, thāl, thālod", " sense 'to pray' can be reflexive when the prayer has no specific target"),
"thox": new Verb("thox", "to rest, relax", "thoxad, thōx, thōxad", ""),
"thūlħá": new Verb("thūlħá", "to burrow, to tunnel, to bore; to get somewhere directly", "thūlħád, thulūrħá, thulūrħád", " sense 'get somewhere directly' often used metaphorically, e.g. 'get stright to the point'"),
"thuq̇": new Verb("thuq̇", "to travel, to voyage", "thu'ud, thūq̇, thū'ud", ""),
"thūx": new Verb("thūx", "to extend; to surround, to encompass; to be vast", "thūxad, thudūx, thudūxad", ""),
"toχekx": new Verb("toχekx", "to find, to encounter, to meet, to come across", "toχekxæd, toχēkx, toχēkxæd", ""),
"tráqħ": new Verb("tráqħ", "to speak, to say", "tráqħád, trôqħ, trôqħád", ""),
"trēk": new Verb("trēk", "to source; to consume", "trēxad, trexēk, trexēxad", ""),
"trelleŋ": new Verb("trelleŋ", "to treasure, to consider valuable; (reflexive) to be vain, selfish, egotistical", "trelleŋad, trellēŋ, trellēŋad", ""),
"trerq̇ħ": new Verb("trerq̇ħ", "to articulate; to be precise", "trerq̇ħád, treterq̇ħ, treterq̇ħád", ""),
"treχe'": new Verb("treχe'", "to utilize, to exploit; to capitalize on", "treχōd, treχeχe', treχeχōd", " all senses take preposition lleŋ"),
"trilliqo": new Verb("trilliqo", "to know well, to be an expert in", "trilliqād, trillīqo, trillīqād", ""),
"trilqo": new Verb("trilqo", "to know (facts)", "trilqād, trīlqo, trīlqād", ""),
"trīm": new Verb("trīm", "to fold; to draw oneself around something, to envelop", "trīmad, tritrīm, tritrīmad", ""),
"trir'": new Verb("trir'", "to react, to react to", "trir'ad, trīru', trīru'ad", " sense 'to react to' takes preposition sī"),
"triχu": new Verb("triχu", "to burst, to pop", "triχūd, tritriχu, tritriχūd", ""),
"triχu'": new Verb("triχu'", "to steal, to rob", "triχu'led, tritriχu', tritriχu'led", ""),
"triχuls": new Verb("triχuls", "to dispose, dispose of, to throw away; to remove, disrobe, take off; (reflexive) to leave or exit, especially on bad terms", "triχulsad, tritriχuls, tritriχulsad", ""),
"troqloth": new Verb("troqloth", "to need, to require", "troqlyd, trōqloth, trōqlyd", ""),
"trū": new Verb("trū", "to scratch or carve, especially with claws or talons", "trūrd, trutru, trūrd", ""),
"trykx": new Verb("trykx", "to be from, to originate in", "N/A, treke, trekēd", " this verb is only used in the gnomic; the simple form is used only with auxiliaries"),
"tryq": new Verb("tryq", "to escape; to fly away", "tyrχad, trytryq, trytryχad", ""),
"tryχħôħ": new Verb("tryχħôħ", "to leave, to go away", "tryχħôd, treχħôħ, treχħôd", ""),
"tryχħôrχ": new Verb("tryχħôrχ", "to land; to arrive, to reach a destination; to accomplish, to succeed", "tryχħôrχad, treχħôrχ, treχħôrχad", ""),
"tu": new Verb("tu", "to be or become lost", "tōd, tur, tōrd", ""),
"tur'": new Verb("tur'", "to wander, to stroll; to take a leisurely walk or flight; to go along, to be on one's way", "tur'ad, tūru', tūru'ad", ""),
"tylurħ": new Verb("tylurħ", "to borrow", "tylurħád, tilurħ, tilurħád", ""),
"tytru": new Verb("tytru", "to pierce, especially with claws or talons; to shred, to tear into; to sunder", "tytrūd, tortru, tortrūd", ""),
"u'": new Verb("u'", "to burp, belch", "u'ad, ū', ū'ad", ""),
"ūk": new Verb("ūk", "to sink; to fall a great distance", "ūxad, ū'yk, ū'yxad", ""),
"xarŋ": new Verb("xarŋ", "to crouch, to duck; to flinch, to recoil", "xarŋad, xārŋ, xārŋad", ""),
"xāth": new Verb("xāth", "to follow, to pursue", "xārd, xoxāth, xoxārd", ""),
"xolek": new Verb("xolek", "to gallop; to run on four legs", "xolekad, xōlek, xōlekad", ""),
"yk": new Verb("yk", "to lower, to set; to fall", "yxad, uk, uxad", " intransitive"),
"χāg": new Verb("χāg", "to open wide; to tear down the middle, to split in two; (reflexive) to yawn", "χāgad, χaχāg, χaχāgad", ""),
"χall": new Verb("χall", "to bite; to gnash", "χad, χaχall, χaχad", ""),
"χaloq": new Verb("χaloq", "to be old, ancient; to be strong, powerful", "χalqād, χāloq, χālqād", ""),
"χārm": new Verb("χārm", "to shine, to be bright", "χārmad, χeχārm, χeχārmad", ""),
"χarŋ": new Verb("χarŋ", "to back down, to surrender, to capitulate, to give up; to admit, to confess", "χarŋad, χārŋ, χārŋad", ""),
"χarû": new Verb("χarû", "to aim for, to work towards", "χaród, χārû, χāród", " takes preposition qēru"),
"χārūħ": new Verb("χārūħ", "to wish, to wish for, to hope, to hope for; to be hopeful, excited", "χālód, χaχārūħ, χaχālód", ""),
"χārχ": new Verb("χārχ", "to please, to pleasure, to delight", "χārd, χōrχ, χōrd", ""),
"χāth": new Verb("χāth", "to hunt down; to stalk", "χāthad, χaχāth, χaχāthad", ""),
"χatrilq": new Verb("χatrilq", "to teach, to educate; to clarify; (reflexive) to study", "χatrilqad, χātrilq, χātrilqad", ""),
"χátru": new Verb("χátru", "to write, to inscribe", "χátrurd, χâtru, χâtrurd", ""),
"χehantox": new Verb("χehantox", "to appoint, to nominate; to select, to choose", "χehantōd, χēhantox, χēhantōd", ""),
"χehēnâ": new Verb("χehēnâ", "to devastate, to ravage; to paralyze; to severely disorient", "χehēnâd, χēhēnâ, χēhēnâd", ""),
"χehiná": new Verb("χehiná", "to haunt, to possess; to linger", "χehinâd, χēhiná, χēhinâd", " sense 'to linger' takes preposition sī"),
"χēn'": new Verb("χēn'", "to carry; to pick up", "χēn'ad, χeχēn', χeχēn'ad", ""),
"χēnīn": new Verb("χēnīn", "to compel into hard labor; to compel into servitude, to enslave", "χēnīnad, χeχīnīn, χeχīnīnad", ""),
"χeχe": new Verb("χeχe", "to make, to create", "χōd, χēχe, χēχōd", ""),
"χħákx": new Verb("χħákx", "to influence; to enforce; to cause, to make someone do something", "χħáxced, χħâkx, χħâxced", " implies causative of following subordinate clause"),
"χħáq̇ok": new Verb("χħáq̇ok", "to constrict, constrain; to encumber; to choke, strangle", "χħáq̇okad, χħâq̇ok, χħâq̇okad", ""),
"χħáxul": new Verb("χħáxul", "to transform, to make into", "χħáxūd, χħâxul, χħâxūd", " result of transformation marked with preposition thū can also suffix onto nouns to verbalize them, like '___ify,' but this is seen as a bit clunky outside of loanwords"),
"χħáχæmō": new Verb("χħáχæmō", "to categorize, to organize; to distinguish", "χħáχæmōd, χħâχæmō, χħâχæmōd", ""),
"χħôħá": new Verb("χħôħá", "to dominate, oppress, suppress; to smother; to terrorize", "χħôħád, χyχħôħá, χyχħôħád", ""),
"χħôħáŋ": new Verb("χħôħáŋ", "to drag, to pull", "χħôħáŋad, χyχħôħáŋ, χyχħôħáŋad", ""),
"χħú'lu": new Verb("χħú'lu", "to heal; to cure", "χħú'lūd, χħû'lu, χħû'lūd", ""),
"χō'ekxa": new Verb("χō'ekxa", "to show, to display; to present someone or something with humility", "χō'ekxud, χeχēkxa, χeχēkxud", ""),
"χō'ok": new Verb("χō'ok", "(transitive) to change, alter, adjust", "χō'okad, χeχō'ok, χeχō'okad", ""),
"χōfāl": new Verb("χōfāl", "to trap, to ensnare; to tie up, to entangle", "χōfāled, χeχōfāl, χeχōfāled", ""),
"χogāth": new Verb("χogāth", "to hunt; to chase after", "χogārd, χōgāth, χōgārd", ""),
"χōgēk": new Verb("χōgēk", "to raise young, to bring up children; to treat well", "χōgēxad, χēgēk, χēgēxad", " almost always used in gnomic"),
"χōgu'": new Verb("χōgu'", "to grant, to bestow; to adorn, to decorate", "χōgu'led, χeχōgu', χeχōgu'led", ""),
"χōhakx": new Verb("χōhakx", "to debate, dispute, discuss", "χōhaqχud, χeχōhakx, χeχōhaqχud", ""),
"χoħáth": new Verb("χoħáth", "to invite, to accept someone, especially into one's home; (reflexive) to immigrate", "χoħâd, χōħáth, χōħâd", ""),
"χōhy": new Verb("χōhy", "to reflect, to bounce back, to mirror", "χōhed, χōhaky, χōhaked", ""),
"χokōru": new Verb("χokōru", "to fuse, to alloy; to amalgamate", "χokōrud, χōkōru, χōkōrud", ""),
"χōlliχħo": new Verb("χōlliχħo", "to inform; to announce; to publicize, to make publicly known", "χōlliχħād, χeχōlliχħo, χeχōlliχħād", ""),
"χolyra": new Verb("χolyra", "to remember, to recall, to reminisce", "χolyrād, χōlyra, χōlyrād", ""),
"χōna": new Verb("χōna", "to birth, to bear young; to progenate", "χōnād, χeχōna, χeχōnād", " can be used of any biological parent"),
"χōq": new Verb("χōq", "to throw, to launch ", "χōqad, χeχōq, χeχōqad", ""),
"χōqathyt": new Verb("χōqathyt", "to dunk, to immerse in water; to drown", "χōqathud, χeχōqathyt, χeχōqathud", ""),
"χōrn": new Verb("χōrn", "to hide, conceal; to obscure", "χōrnad, χoχōrn, χoχōrnad", ""),
"χōrthq̇": new Verb("χōrthq̇", "to entrance, to dazzle; to hypnotize; to mesmerize", "χōrq̇thod, χeχōrthq̇, χeχōrq̇thod", ""),
"χōrxyll": new Verb("χōrxyll", "to thicken; to make sturdy, to reinforce", "χōrxylled, χeχōrxyll, χeχōrxylled", ""),
"χotrill": new Verb("χotrill", "to cause pain against, to cause suffering; to harm, injure; (reflexive) to agonize; to mourn, grieve", "χotrillad, χōtrill, χōtrillad", ""),
"χōtru": new Verb("χōtru", "to enlist, to recruit; to task", "χōtrūd, χeχōtru, χeχōtrūd", ""),
"χōzi": new Verb("χōzi", "to shrink; to talk bad about", "χōzīd, χeχōzi, χeχōzīd", ""),
"χū'": new Verb("χū'", "to transport, to deliver", "χū'led, χuχū', χuχū'led", ""),
"χu'lu": new Verb("χu'lu", "to help, aid, assist; to administer care/aid; to comfort", "χu'lūd, χū'lu, χū'lūd", ""),
"χuh'": new Verb("χuh'", "to grasp, to clutch, especially with the claws or hands", "χuh'led, χuχuh', χuχuh'led", ""),
"χyx": new Verb("χyx", "to split, to divide", "χyxad, χexy, χexad", ""),
"kur": new Verb("kur", "to fly", "krad, kūr, kurād", ""),
"qórxe": new Verb("qórxe", "to sell; to pass down", "qórxerd, qôrxe, qôrxerd", ""),
"χôk": new Verb("χôk", "to contrast, to differ from, to juxtapose", "χôkad, χeχôk, χeχôkad", ""),
"cú": new Verb("cú", "to go, to move", "côd, cusú, cusôd", ""),
"χithor": new Verb("χithor", "to fix, to repair; to solve, to figure out", "χithorad, χīthor, χīthorad", ""),
"xāltaħ": new Verb("xāltaħ", "to sunbathe, to suntan; to bask, to lounge", "xāltâd, xahāltaħ, xahāltâd", ""),
"ruχħy": new Verb("ruχħy", "to get, to obtain, to acquire", "ruχħád, lurχħy, lurχħád", ""),
"axseq": new Verb("axseq", "to lack, to not have", "axseχad, aχħúthq, aχħúχthod", ""),
"treh": new Verb("treh", "to fail, to be a failure", "trād, trereh, trerād", ""),
"q̇ekur": new Verb("q̇ekur", "to stumble, falter; to fly poorly; to fall out of the sky", "q̇ekrad, q̇ēkur, q̇ēkrad", ""),
"trath": new Verb("trath", "to disappoint, to let down", "tradad, trāth, trādad", " takes preposition ho")
}

ADJECTIVES.MAP = {
"anq̇ulq̇": new Adjective("anq̇ulq̇", 2, "respectful; humble", "anq̇ūlq̇", ""),
"anqχēl": new Adjective("anqχēl", 1, "resilient, tough, resistant", "ānqχēl (1)", ""),
"axk": new Adjective("axk", 3, "mechanical; functional, operable", "āxk", ""),
"ciχħō": new Adjective("ciχħō", 1, "wise, knowledgeable; clever, crafty", "cīχħō", " rarely used with Monstrous or Irrational nouns"),
"ehnâ": new Adjective("ehnâ", 1, "rotated, turned around; confused, disoriented", "ēhnâ", ""),
"enlu'": new Adjective("enlu'", 2, "cyan, teal, lime, sky blue, light green; clear, transparent", "ēnlu'", ""),
"fel'arq": new Adjective("fel'arq", 3, "physical, material, structured; nonmagical, mundane; Mundane", "fēl'arq", ""),
"feltū": new Adjective("feltū", 1, "cheery; lucky, fortunate; domesticated; fecund, lascivious", "fēltū", " this word is often avoided in the modern day because of the many seemingly unrealted definitions, however older speakers still use the term, predomitly in senses 'cheery' and 'lucky'"),
"feŋ": new Adjective("feŋ", 3, "childish, infantile", "fēŋ", ""),
"feŋqχi": new Adjective("feŋqχi", 2, "insignificant, unimportant, inconsequential, unremarkable; unintended, unforeseen, narrowsighted", "feŋqχī", ""),
"folm": new Adjective("folm", 3, "smooth, slick, slippery; clean; orderly, regular", "fōlm", ""),
"fuχħār": new Adjective("fuχħār", 3, "wide; fat", "fūχħār", ""),
"fēl": new Adjective("fēl", 3, "empty, hollow; vapid", "fefēl", ""),
"fū": new Adjective("fū", 1, "small, tiny", "fūfū", ""),
"fūħ": new Adjective("fūħ", 3, "straight; direct, linear; directive", "fufūħ", ""),
"harārō": new Adjective("harārō", 2, "demonic; abyssal", "hārārō", ""),
"hax": new Adjective("hax", 2, "long; extended", "hāx", ""),
"hok": new Adjective("hok", 2, "open, expansive; available, unencumbered", "hōk", ""),
"hoka": new Adjective("hoka", 2, "similar, alike, same, synonymous; (elative) identical", "hōka", ""),
"hátrur": new Adjective("hátrur", 3, "written, inscribed; permanent, fixed", "hâtrur", ""),
"hārō": new Adjective("hārō", 2, "hot; effective", "hāhārō", ""),
"i'ū": new Adjective("i'ū", 2, "auditory; audible, heard", "ī'ū", ""),
"ifalēlâ": new Adjective("ifalēlâ", 1, "knotted, twisted; mangled, deformed", "īfalēlâ", ""),
"ifere": new Adjective("ifere", 1, "drowsy, sleepy; sedative, sleepinducing; anesthetic", "īfere", ""),
"ifeŋqχī": new Adjective("ifeŋqχī", 2, "dusty; abandoned, untouched", "īfeŋqχī", ""),
"iglū": new Adjective("iglū", 1, "glittering, glowing, dazzling; multicolored; celestial", "ēglū", ""),
"ihakxu": new Adjective("ihakxu", 1, "driven, passionate; intentional, deliberate", "īhakxu", ""),
"iharī": new Adjective("iharī", 2, "flammable, inflammable; dainty, airy, wispy", "īharī", ""),
"ihō": new Adjective("ihō", 2, "noisy, loud, sonorous; shrieking, screaming", "īhō", ""),
"ikfâħ": new Adjective("ikfâħ", 1, "apocalyptic; nuclear, massively destructive", "īkfâħ", ""),
"ikēlħá": new Adjective("ikēlħá", 1, "magically electric; lightninglike; highly energetic", "īkēlħa", ""),
"illīlâ": new Adjective("illīlâ", 1, "municipal, civil, urban; cosmopolitan; societal", "īllīlâ", ""),
"ilâle": new Adjective("ilâle", 4, "iimate", "īlâle", ""),
"ilērħá": new Adjective("ilērħá", 1, "formless, shapeless; easily shaped or molded; easily influenced", "ilēlērħá", ""),
"ināne": new Adjective("ināne", 3, "animate", "īnāne", ""),
"ipán": new Adjective("ipán", 3, "joyous, joyful; just, fair, reasonable", "īpán", ""),
"iqerxeħ": new Adjective("iqerxeħ", 2, "expensive; valuable", "īqerxeħ", ""),
"iqχúħá": new Adjective("iqχúħá", 1, "thunderous; incredibly loud, earsplitting", "īqχúħá ", ""),
"irŋllīlâ": new Adjective("irŋllīlâ", 1, "governmental, adminstrative, bureaucratic; (elative) kafkaesque", "īrŋllīlâ", ""),
"irχekx": new Adjective("irχekx", 3, "serendipitous, circumstantial; unplanned, unforeseen", "īrχekx", ""),
"ithoh": new Adjective("ithoh", 1, "troublesome, tricky, problematic; secure, guarded; blocked, inaccesible", "īthoh", ""),
"ithor": new Adjective("ithor", 1, "good, great; righteous, upstanding", "īthor", ""),
"ithūxe": new Adjective("ithūxe", 1, "blue, navy, aquamarine; stormy, rough, turbulent; agitated, anxious", "īthūxe", ""),
"itræχnâħ": new Adjective("itræχnâħ", 1, "Draconic, of or pertaining to dragons", "ītræχnâħ", ""),
"itrōllq": new Adjective("itrōllq", 3, "honest, truthful", "ītrōllq", ""),
"ixīthá": new Adjective("ixīthá", 1, "electric, electrical", "īxīthá", ""),
"iħónlli": new Adjective("iħónlli", 1, "numerical, digital; discrete", "īħónlli ", ""),
"iŋχōħá": new Adjective("iŋχōħá", 1, "sentient; intelligent, rational, thinking; Rational", "īŋχōħá", ""),
"iχallħá": new Adjective("iχallħá", 1, "sharp, pointy; steep; abrupt; ultimate, maximal", "īχallħá", ""),
"iχūrallaħ": new Adjective("iχūrallaħ", 1, "focused, converged; congregated, gathered; tightly bound", "īχūrallaħ", ""),
"kxá": new Adjective("kxá", 4, "red, orange; burnt, charred, ashen", "kxâ", ""),
"kægaχ": new Adjective("kægaχ", 2, "fiery, blazing, burning, inflamed; empowered", "kāgaχ", ""),
"kæmōl": new Adjective("kæmōl", 3, "categorized, divided, distinct; distinguished; noble", "kāmōl", ""),
"lirχħá": new Adjective("lirχħá", 4, "lighthearted, fun, casual; whimsical, silly", "līrχħá", ""),
"llaz": new Adjective("llaz", 1, "dry; arid", "llāz", ""),
"lleli": new Adjective("lleli", 1, "romantic, especially with much passion", "llēlī", ""),
"llery'": new Adjective("llery'", 2, "personal; intimate", "llēr'", ""),
"lli'": new Adjective("lli'", 3, "conceptual, immaterial, theoretical, abstract; Abstract", "llī'", ""),
"llilâ": new Adjective("llilâ", 1, "interior, inside, indoor", "llīlâ", ""),
"lliqa": new Adjective("lliqa", 3, "flying, able to fly", "llīqa", ""),
"lliru": new Adjective("lliru", 2, "unrelated, separate; divorced; untrustworthy", "llīru", ""),
"lloq̇næχō": new Adjective("lloq̇næχō", 3, "bestial, animalistic; Irrational", "llōq̇næχō", ""),
"lorxtūh": new Adjective("lorxtūh", 2, "bountiful, plentiful; abundant", "lōrxtūh", ""),
"lur": new Adjective("lur", 3, "continuous, ongoing; flowing", "lūrχ", ""),
"lutræ": new Adjective("lutræ", 2, "chilly, cold", "lūtræ", ""),
"lyho": new Adjective("lyho", 1, "near, close, nearby", "lylyho", " elative form is rare"),
"lypán": new Adjective("lypán", 3, "despotic, unjust, villainous, tyrannical; miserable; poisonous, toxic, deadly", "ilpán", ""),
"lyrkith": new Adjective("lyrkith", 3, "excited; ecstatic, overjoyed", "lurqith", ""),
"lyrâ": new Adjective("lyrâ", 4, "unintelligent; clumsy; foolish", "lylyrâ", " considered offensive when ascribed to a dragon"),
"lyrā": new Adjective("lyrā", 4, "spirited, enivigorated, lively, vibrant; memorable", "lurχā", ""),
"lyrāf": new Adjective("lyrāf", 1, "winged; stable, steady, steadfast", "lurχāf", ""),
"lyrō": new Adjective("lyrō", 1, "spoiled, pampered; superfluous, unnecessary", "lurχō", ""),
"lythor": new Adjective("lythor", 1, "bad, poor; evil, wicked", "ilthor", ""),
"lâ": new Adjective("lâ", 4, "still, unmoving; dead, nonliving", "lārâ", ""),
"lætrāχ": new Adjective("lætrāχ", 2, "black, brown, dull yellow; murky, brackish; acidic; gross, disgusting, putrid", "lartrāχ", ""),
"mū": new Adjective("mū", 1, "wet, moist; humid", "mūmū", ""),
"næn": new Adjective("næn", 3, "living; breathing", "nān", ""),
"otrúħ": new Adjective("otrúħ", 1, "light, delicate; careless ", "ōtrúħ", ""),
"ox": new Adjective("ox", 3, "menial, boring; grating, frustrating, bothersome", "ōx", ""),
"qathū": new Adjective("qathū", 1, "deep; native to the depths of the ocean", "qaχathū", ""),
"qellīqχ": new Adjective("qellīqχ", 3, "familiar; amicable, sociable; fun", "qēllīqχ", ""),
"qoth": new Adjective("qoth", 3, "purple, pink", "qōth", ""),
"qyrān": new Adjective("qyrān", 4, "female, feminine; yang", "qirān", ""),
"qyrōn": new Adjective("qyrōn", 4, "nonbinary; neutral", "qirōn", ""),
"qyrūn": new Adjective("qyrūn", 4, "male, masculine; yin", "qirūn", ""),
"qyzelleŋ": new Adjective("qyzelleŋ", 3, "reciprocal; equal", "qēlleŋ", ""),
"qæx": new Adjective("qæx", 2, "relative, depending, variable", "qāx", ""),
"q̇etil": new Adjective("q̇etil", 1, "easy, simple, trivial", "q̇etirl", ""),
"q̇ok": new Adjective("q̇ok", 3, "closed, tight, constrained, constricted; unavailble, encumbered", "q̇ōk", ""),
"q̇oka": new Adjective("q̇oka", 2, "dissimilar, unalike, different; (elative) opposite", "q̇ōka", ""),
"q̇yhax": new Adjective("q̇yhax", 2, "short, stocky; partial", "q̇ehax", ""),
"qχegēl": new Adjective("qχegēl", 1, "scaly; rough, jagged; irregular but orderly", "qχēgēl", ""),
"rarthq̇": new Adjective("rarthq̇", 4, "charming, charismatic; popular; entrancing, captivating", "rārthq̇", ""),
"rāreχ": new Adjective("rāreχ", 2, "warm; gentle, tender", "hārāreχ", ""),
"selleŋah": new Adjective("selleŋah", 1, "additional, extra; various, miscellaneous", "sēlleŋah", ""),
"seq̇": new Adjective("seq̇", 4, "generous, giving, charitable; colorful, vibrant", "sēq̇", ""),
"sin'æ": new Adjective("sin'æ", 2, "flimsy, structurally weak; timid", "sīn'æ", ""),
"siru": new Adjective("siru", 3, "white, bright yellow; glowing, alight, illuminated", "sēru", ""),
"siŋy": new Adjective("siŋy", 2, "broken, malfunctional; lame; defective", "sīŋy", ""),
"soχ": new Adjective("soχ", 3, "defined, meaningful, important, significant", "(a.)", ""),
"sylcēl": new Adjective("sylcēl", 3, "numerous, copious; plural; quantitative; powerful (of a spell)", "selcēl", ""),
"syrad": new Adjective("syrad", 1, "doubtful, unsure, uncertain; nervous, anxious, concerned", "serad", ""),
"texyll": new Adjective("texyll", 1, "thick; sturdy", "terxyll", " the 'y' is often skipped over in casual speech"),
"thox": new Adjective("thox", 1, "fragile, delicate; frail; sickly, ill", "thorx", ""),
"thulhexto": new Adjective("thulhexto", 1, "northern", "thūlhexto", ""),
"thulqā": new Adjective("thulqā", 2, "western; murky, gloomy", "thūlqā", ""),
"thulq̇erō": new Adjective("thulq̇erō", 1, "southern", "thūlq̇erō", ""),
"thultur'a": new Adjective("thultur'a", 2, "pointless, worthless; lowly, uncouth; derilect", "thūltur'a", ""),
"thulχā": new Adjective("thulχā", 2, "eastern; early", "thūlχā", ""),
"thū'xæ": new Adjective("thū'xæ", 2, "uncharacteristically angry or upset; overwhelmed; turbulent, tempestuous; tumultuous", "thūthū'xæ", ""),
"til": new Adjective("til", 1, "hard, difficult, complicated", "tirl", ""),
"tolyr": new Adjective("tolyr", 3, "able, capable; possible, plausible", "torlyr", ""),
"tolūr": new Adjective("tolūr", 3, "unable, incapable; impossible", "torlūr", ""),
"toq̇y": new Adjective("toq̇y", 1, "singular, sole; alone, lonely", "tōq̇y", ""),
"trexēk": new Adjective("trexēk", 1, "voracious, greedy", "tretrexēk", " elative form often implies 'gluttonous'"),
"træħú": new Adjective("træħú", 1, "strong, powerful; revered, lauded, admired", "trāħú", ""),
"trē": new Adjective("trē", 1, "instigating; original", "trētrē", ""),
"trūrχu": new Adjective("trūrχu", 1, "vicious, savage, violent; talented in combat", "trutrurχu", ""),
"tur'a": new Adjective("tur'a", 2, "wandering, meandering; carefree; haphazard, careless", "tūr'a", ""),
"tuŋe": new Adjective("tuŋe", 1, "apocalyptic, disastrous, catastrophic; doomed, hopeless", "turŋe", ""),
"tyth": new Adjective("tyth", 3, "lax, loose, limp; stringy, frayed, bristled", "tyrth", ""),
"u'χħá": new Adjective("u'χħá", 4, "extensive; allencompassing; omnipresent; ", "ū'χħá", ""),
"uk": new Adjective("uk", 3, "minimal, lowest", "ūk", ""),
"xaχ": new Adjective("xaχ", 1, "horrific, terrifying; dangerous", "xæxaχ", ""),
"yfâħá": new Adjective("yfâħá", 1, "misty, foggy; hazy, unclear, confusing; translucent", "īfâħá", ""),
"ylâħá": new Adjective("ylâħá", 1, "monstrous; Monstrous", "alâħá", ""),
"yq̇ħá": new Adjective("yq̇ħá", 4, "magical, arcane, ethereal; Magical", "yq̇ħâ", ""),
"yxad": new Adjective("yxad", 3, "fallen, grounded; latent, dormant; regressive; recessive", "uxad", ""),
"yχħof": new Adjective("yχħof", 3, "green, verdant, lush; marshy, swampy", "iχħof", ""),
"æklôħ": new Adjective("æklôħ", 1, "salted, salty; wellseasoned", "āklôħ", ""),
"ôħá": new Adjective("ôħá", 1, "round; circular, spherical", "ó'ôħá", ""),
"āfux": new Adjective("āfux", 2, "hungry; salivating", "ā'āfux", ""),
"ħyħâ": new Adjective("ħyħâ", 2, "esteemed, exalted, admired; Exalted", "ħáħâ", ""),
"ħóz": new Adjective("ħóz", 3, "very cold", "ħôħóz", ""),
"ħô": new Adjective("ħô", 1, "icy, slippery, frozen", "ħôħó", ""),
"ħû": new Adjective("ħû", 1, "large, huge; (of a dragon) old, powerful", "ħúħû", ""),
"īhnâ": new Adjective("īhnâ", 1, "disorienting (often magically); devastating", "ī'īhnâ", ""),
"īrq̇": new Adjective("īrq̇", 3, "sweet, sugary; tempting", "ilīrq̇", ""),
"ōciqāχu": new Adjective("ōciqāχu", 1, "genius, remarkably intelligent", "ō'ōciqāχu", ""),
"ōrnyllad": new Adjective("ōrnyllad", 1, "hidden, concealed; unforeseen", "o'ōrnyllad", ""),
"χalqad": new Adjective("χalqad", 1, "old, ancient", "χālqad", ""),
"χarχ": new Adjective("χarχ", 1, "pleasant, delightful, enjoyable", "χārχ", ""),
"χaχāg": new Adjective("χaχāg", 3, "yawning, wide open; split/torn in two", "χāχāg", ""),
"χentōd": new Adjective("χentōd", 3, "special, select, chosen", "χēntōd", ""),
"χu'luχu": new Adjective("χu'luχu", 1, "blessed, holy; clerical", "χū'luχu", ""),
"χulle": new Adjective("χulle", 1, "small, little; (of a dragon) young, weak", "χūlle", ""),
"χullīs": new Adjective("χullīs", 1, "tiny, minuscule, puny; terribly weak; fragile", "χūllīs", " rarely used to describe dragons"),
"χyllilâ": new Adjective("χyllilâ", 1, "exterior, outside, outdoor", "χyllīlâ", ""),
"χyxad": new Adjective("χyxad", 1, "split, divided, forked", "χexad", ""),
"χārmex": new Adjective("χārmex", 2, "bright, shining; apparent", "χeχārmex (2)", ""),
"χħóq̇âd": new Adjective("χħóq̇âd", 3, "manufactured, forged; artificial", "χħôq̇âd", ""),
"χōrthq̇": new Adjective("χōrthq̇", 4, "hypnotic, hypnotizing; mesmerizing, bewildering", "χeχōrthq̇", ""),
"χōtrill": new Adjective("χōtrill", 2, "painful, agonizing, excruciating", "χyχōtrill", ""),
"χūq": new Adjective("χūq", 4, "forceful, vigorous, powerful; insistent", "χuχūq", "")
}

ADVERBS.MAP = {
"ax": new Adverb("ax", "not; negates verbs and regular auxiliaries", "nan", " Is not used with lur 'to be,' as both a verb and an auxiliary. Negative copula q̇em is used instead "),
"fulthor": new Adverb("fulthor", "poorly; evilly, wickedly", "fūlthor", ""),
"futhor": new Adverb("futhor", "well; righteously, upstandingly", "fūthor", ""),
"hærŋ": new Adverb("hærŋ", "admittedly; reluctantly, begrudgingly", "hārŋ", ""),
"ħáre": new Adverb("ħáre", "there", "nan", ""),
"ħârq̇e": new Adverb("ħârq̇e", "yonder; far away", "nan", ""),
"ħáth": new Adverb("ħáth", "here", "nan", ""),
"hokel": new Adverb("hokel", "similarly, likewise; (elative) identically, verbatim", "hōke", ""),
"kxæm": new Adverb("kxæm", "overhead", "nan", ""),
"llilâ": new Adverb("llilâ", "inside, indoors", "llīlâ", ""),
"ôru": new Adverb("ôru", "then; afterwards", "nan", ""),
"qæx": new Adverb("qæx", "partially, somewhat, to some extent", "qāx", ""),
"q̇eqūru": new Adverb("q̇eqūru", "immediately; right now", "nan", ""),
"qēr'an": new Adverb("qēr'an", "happily, with pleasure; politely", "nan", ""),
"qērun": new Adverb("qērun", "finally, in conclusion; reasonably, understandably", "nan", ""),
"q̇okel": new Adverb("q̇okel", "dissimilarly, differently; (elative) contrarily, oppositely", "q̇ōke", ""),
"qūron": new Adverb("qūron", "eventually, at some point", "quχūron", ""),
"qylur": new Adverb("qylur", "continuously; relentlessly, without interruption", "qylūrχ", ""),
"qyχēru": new Adverb("qyχēru", "early, earlier", "qeχēru", ""),
"rī": new Adverb("rī", "maybe, perhaps", "nan", ""),
"riga": new Adverb("riga", "probably; possbily, plausible", "rīga", ""),
"silli": new Adverb("silli", "later, later", "sīlli", ""),
"thaz": new Adverb("thaz", "intentionally, deliberately; selflessly, for someone or something else", "thāz", ""),
"tideŋqχi": new Adverb("tideŋqχi", "narrowsightedly, without foresight; regrettably", "nan", ""),
"tōq̇il": new Adverb("tōq̇il", "only, just; solely, slone", "nan", ""),
"trōlq": new Adverb("trōlq", "verily, truthfully, honestly, indeed", "torōlq", ""),
"tudeŋqχo": new Adverb("tudeŋqχo", "ineffectively, impotently; hardly, barely, faintly", "tudeŋqχō", ""),
"χenyl": new Adverb("χenyl", "firstly, initially, primarily", "nan", ""),
"χyllilâ": new Adverb("χyllilâ", "outside, outdoors", "χyllīlâ", ""),
"llez": new Adverb("llez", "more; (elative) most", "llēlz", ""),
"llem": new Adverb("llem", "less, fewer; (elative) least, fewest", "llēlm", ""),
"lliqi": new Adverb("lliqi", "again", "nan", ""),
"silru": new Adverb("silru", "ahead; onwards", "nan", ""),
"qyru": new Adverb("qyru", "behind; backwards", "nan", "")
}

AUXILIARIES.MAP = {
"āhk": new Auxiliary("āhk", "do not! (prohibitive)", "defective", " always in the second person"),
"ciχād": new Auxiliary("ciχād", "to have been able to, could (past abilitative)", "defective", " often implies a counterfactual"),
"ciχo": new Auxiliary("ciχo", "to be able to, can (abilitative)", "defective", " implies present tense"),
"linæ": new Auxiliary("linæ", "to apprehensively, to timidly, to fear to (timitive mood)", "linād, luzinæ, luzinād", ""),
"llēħ": new Auxiliary("llēħ", "to begin to, to start (inchoative aspect)", "llad, N/A, N/A", " past form often implies a counterfactual"),
"llo": new Auxiliary("llo", "to be going to, will (future tense)", "defective", ""),
"llōd": new Auxiliary("llōd", "to have been going to, would (future in the past)", "defective", " often implies a counterfactual"),
"lūryχ": new Auxiliary("lūryχ", "to be in the middle of doing something (continuous aspect)", "lyrōd, N/A, N/A", " in casual speech, the forms are typically realized as lurχ and lyrod does not take prefix suffixes; see sheet named 'To Be'"),
"mō": new Auxiliary("mō", "to have done (perfect aspect); to finish doing (terminative aspect)", "mōrd, mōmo, mōmord", " only the terminative aspect can be used in the gnomic"),
"o": new Auxiliary("o", "to intentionally, to purposefully (intentional aspect)", "od, ō, ōd", ""),
"oryħ": new Auxiliary("oryħ", "(passive voice)", "oryħád, ōryħ, ōryħád", " agent of the passive is marked with hu 'from'"),
"q̇ōm": new Auxiliary("q̇ōm", "to not be the middle of doing something (negative of continuous aspect)", "lūrxed, N/A, N/A", " in casual speech, the forms are typically realized as q̇om and lūrxyd"),
"rak": new Auxiliary("rak", "do! (imperative)", "defective", " always in the second person"),
"tæ'hú": new Auxiliary("tæ'hú", "to have to, must (obligative modality)", "tæ'ûd, tærhú, tær'ûd", " past forms can sometimes imply a counterfactual (i.e. to be supposed to, but...)"),
"thox": new Auxiliary("thox", "to still be (continuative aspect)", "thoxad, thōx, thōxad", ""),
"tolūr": new Auxiliary("tolūr", "to be unable to (inabilitative aspect)", "defective", ""),
"tolyr": new Auxiliary("tolyr", "to almost, to nearly (defective aspect)", "defective", ""),
"u": new Auxiliary("u", "to accidentally, to mistakenly (accidental aspect)", "ad, ū, ād", ""),
"χar": new Auxiliary("χar", "to hopefully, to wish to, to desire to (desiderative mood)", "χalód, χār, χalód", "")
}

PREPOSITIONS.MAP = {
"æze": new Preposition("æze", "through", ""),
"aze": new Preposition("aze", "alternative form of æze", ""),
"fenlly": new Preposition("fenlly", "made of, conisting of", ""),
"ħá": new Preposition("ħá", "of (possession)", ""),
"ħáŋ": new Preposition("ħáŋ", "within, inside of", ""),
"ho": new Preposition("ho", "from, away from", ""),
"hu": new Preposition("hu", "originating from, coming from; due to", ""),
"huz": new Preposition("huz", "for, for the purpose of", ""),
"kxā": new Preposition("kxā", "over (implies movement)", ""),
"kxæ": new Preposition("kxæ", "during, while", ""),
"lleŋ": new Preposition("lleŋ", "with (instrumental)", ""),
"lloq̇": new Preposition("lloq̇", "without", " sometimes realized as lloq̇y, especially if the word begins with an obstruent"),
"ly": new Preposition("ly", "at, near, by", ""),
"ō": new Preposition("ō", "above, atop", ""),
"qa": new Preposition("qa", "with (comitative), alongside", ""),
"qē": new Preposition("qē", "before (in space), in front of", ""),
"qēru": new Preposition("qēru", "before (in time)", ""),
"q̇ū": new Preposition("q̇ū", "beneath, under", ""),
"qχok": new Preposition("qχok", "in, among", " sometimes realized as qχoky, especially if the word begins with an obstruent"),
"sæχ": new Preposition("sæχ", "against, versus; opposed to; opposite", ""),
"saχ": new Preposition("saχ", "alternative form of sæχ", ""),
"sī": new Preposition("sī", "after (in time)", ""),
"sil": new Preposition("sil", "after (in space), past", ""),
"thū": new Preposition("thū", "to, towards", ""),
"tre": new Preposition("tre", "because of, due to", ""),
"ū": new Preposition("ū", "about, regarding, of", "")
}

PARTICLES.MAP = {
"ān": new Particle("ān", "optional noun suffix on animate roots to specify feminine", " rare"),
"elce": new Particle("elce", "particle following a plain interrogative to mean 'how much' or 'how many'", " following word must be a noun prefixed with ħá sense 'how much' takes singular, and sense 'how many' takes plural"),
"ħâ": new Particle("ħâ", "behold!;  ô!", " not used in sentences; interjected to call attention to something or someone considered somewhat archaic, but still used in formal settings"),
"hyn": new Particle("hyn", "sir/ma'am; particle of deference shown to dragons ", " the default particle for polite speech; used direcly before reference to a Dragon by name can also be used as a greeting when followed by the adressed Dragon's name"),
"i": new Particle("i", "prefix to turn nouns into adjectives", " somewhat productive, but can sound rather clunky, especially if another adjective exists that could work just as well"),
"llak": new Particle("llak", "particle following a plain interrogative to mean 'why' or 'what for'", " always takes oblique interrogative"),
"nyl": new Particle("nyl", "particle following a plain interrogative to mean 'how,' 'in what way,' or 'by what means'", " always takes oblique interrogative"),
"nyl": new Particle("nyl", "suffix on adjective roots to turn them into adverbs", " somewhat productive, but can sound rather clunky, especially if another adjective exists that could work just as well elative can be formed by suffixing the elative form of the adjective, though this is rarely used"),
"óħá": new Particle("óħá", "hello (informal)", ""),
"ōn": new Particle("ōn", "optional noun suffix on animate roots to specify nonbinary/gender neutral", ""),
"qēr'an": new Particle("qēr'an", "hello (formal)", ""),
"qerun": new Particle("qerun", "goodbye (formal)", ""),
"q̇ħó": new Particle("q̇ħó", "exclamation of surprise; oh!", ""),
"q̇yth": new Particle("q̇yth", "no", " somewhat rare; it is more common to simply repeat back the verb in the negative, e.g. Q: Do you eat meat? A: I do not eat"),
"syr": new Particle("syr", "(indicates a yes or no question)", ""),
"thā": new Particle("thā", "goodbye (informal)", ""),
"trā": new Particle("trā", "Wow! Nice! Cool!", ""),
"trōlq": new Particle("trōlq", "yes, indeed", " rare; it is much more common to simply repeat back the verb in the affirmative, e.g. Q: Do you eat meat? A: I eat"),
"ûl (3)": new Particle("ûl (3)", "gon, suffix on numbers to form polygons of that many sides", ""),
"ūn": new Particle("ūn", "optional noun suffix on animate roots to specify masculine", " rare"),
"χħôħá": new Particle("χħôħá", "the great, the honorable; particle used to present or introduce dragons of nobility, especially to a crowd", "")
}

DETERMINERS.MAP = {
"llillīxy": new Determiner("llillīxy", "too much, too many", " always takes plural"),
"llīxem": new Determiner("llīxem", "all; every", " when the noun it describes is in the singular, it means 'every' when the noun it describes is in the plural, it means 'all'"),
"loxta": new Determiner("loxta", "most, the majority of", " always takes plural"),
"q̇e": new Determiner("q̇e", "none, no", " the only determiner that does not inflect"),
"terq̇y": new Determiner("terq̇y", "a few, a little; not many, not much", " takes singular for mass nouns, plural for count nouns"),
"toq̇y": new Determiner("toq̇y", "just one, just a single", " only takes singular"),
"trâfo": new Determiner("trâfo", "some, some of", " takes singular for mass nouns, plural for count nouns")
}

CONJUNCTIONS.MAP = {
"fáχ": new Conjunction("fáχ", "neither, nor", ""),
"hærŋ": new Conjunction("hærŋ", "although, though; albeit", ""),
"ho": new Conjunction("ho", "despite the fact that", ""),
"huz": new Conjunction("huz", "in order to, so that", ""),
"kæ": new Conjunction("kæ", "or; either, or", " often reduced to 'ky' in casual speech"),
"li": new Conjunction("li", "near to when, in the same time as", ""),
"lil": new Conjunction("lil", "near to where, in the same place as", ""),
"lloq": new Conjunction("lloq", "although", ""),
"qa": new Conjunction("qa", "while", ""),
"qēr": new Conjunction("qēr", "before (in time); until", ""),
"q̇ert": new Conjunction("q̇ert", "unless", ""),
"saχ": new Conjunction("saχ", "but", ""),
"si": new Conjunction("si", "and", " often reduced to 'sy'  in casual speech"),
"sīl": new Conjunction("sīl", "after (in time); since", ""),
"tā": new Conjunction("tā", "thus", ""),
"teru": new Conjunction("teru", "if and only if; once, only when", ""),
"ti": new Conjunction("ti", "if", ""),
"tre": new Conjunction("tre", "because", ""),
"tuz": new Conjunction("tuz", "as, in the same way, to the same extent", ""),
"xy": new Conjunction("xy", "so", ""),
"thæ": new Conjunction("thæ", "then, and then, hence, and so", " often used between sentences, where English might use a full stop")
}

// ^^==== CACHE =====^^

ALL_WORDS.MAP = Object.fromEntries(
    Object.entries({
        ...NOUNS.MAP,
        ...VERBS.MAP,
        ...ADJECTIVES.MAP,
        ...ADVERBS.MAP,
        ...AUXILIARIES.MAP,
        ...PREPOSITIONS.MAP,
        ...PARTICLES.MAP,
        ...DETERMINERS.MAP,
        ...CONJUNCTIONS.MAP,
    })
    .sort(([aKey], [bKey]) => aKey.localeCompare(bKey))
    .map(([key, value]) => {
        if (typeof value === 'object' && !Array.isArray(value) && Object.values(value)[0] instanceof Noun) {
            return [key, value];
        }
        return [key, value];
    })
);

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

function mergedSearchByDefinition(definition, wordmap) {
  return (Array.isArray(wordmap) ? wordmap : Object.values(wordmap))
    .filter(w => 
      (w.definition && JSON.stringify(w.definition).toLowerCase().includes(definition.toLowerCase())) ||
      (w.genders && JSON.stringify(w.genders).toLowerCase().includes(definition.toLowerCase()))
    );
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
ALL_WORDS.fetchByDefinition = function(def) {return mergedSearchByDefinition(def, ALL_WORDS.FLAT)}

WORD_UTILS.combineGenders = function(entry) {
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

    if (allCheck) result[GENDERS_ALL.NAME] = def
    else if (animCheck) result[GENDERS.ANIMATES.NAME] = def
    else if (inanimCheck) result[GENDERS.INANIMATES.NAME] = def
    else result[genders.join(", ")] = def
  }
  return result
}

modules.push("DictionaryData")

// oh my god
