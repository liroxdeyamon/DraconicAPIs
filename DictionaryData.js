
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
"æklū1": new Noun("æklū", 1, {'Mundane': 'salt', 'Abstract': 'saltiness, salinity'}),
"āfu2": new Noun("āfu", 2, {'Magical': 'dew', 'Mundane': 'spit, saliva', 'Abstract': 'salivation; hunger'}),
"afuχ3": new Noun("afuχ", 3, {'Magical': 'life cycle, circle of life', 'Mundane': 'wheel', 'Abstract': 'cycle, circle'}),
"āklū1": new Noun("āklū", 1, {'Mundane': 'spice, seasoning', 'Abstract': 'taste, flavor'}),
"ārχ1": new Noun("ārχ", 1, {'Irrational': 'flower', 'Abstract': 'satisfaction; pleasure'}),
"axa1": new Noun("axa", 1, {'Abstract': 'negativity; negation'}),
"axa2": new Noun("axa", 2, {'Monstrous': 'eyebat; cyclops', 'Abstract': 'sight, vision'}),
"āxa2": new Noun("āxa", 2, {'Monstrous': 'beholder', 'Irrational': 'arcane eye', 'Magical': 'anything which bestows truesight', 'Abstract': 'truesight, trueseeing'}),
"āxaχ1": new Noun("āxaχ", 1, {'Exalted': 'actor; doer, agent; player', 'Rational': 'actor; doer, agent; player', 'Monstrous': 'actor; doer, agent; player', 'Irrational': 'actor; doer, agent; player', 'Abstract': 'agency; activity'}),
"āxk3": new Noun("āxk", 3, {'Magical': 'spell', 'Mundane': 'machine, device', 'Abstract': 'action; verb'}),
"āχo1": new Noun("āχo", 1, {'Magical': 'spine, vertebra', 'Mundane': 'back, rear, hind; hunch', 'Abstract': 'backside'}),
"câllaq3": new Noun("câllaq", 3, {'Irrational': 'fire elemental', 'Magical': 'wildfire', 'Mundane': 'ash, soot', 'Abstract': 'conflagration, burning'}),
"cellâlq3": new Noun("cellâlq", 3, {'Monstrous': 'giant fire elemental, especially if violent', 'Irrational': 'flame as personified', 'Magical': 'firestorm, inferno; (definite) Hell', 'Mundane': 'cinder, ember', 'Abstract': 'uncontained or unchecked power; plague'}),
"cēlq3": new Noun("cēlq", 3, {'Magical': 'uncontrollable laughter', 'Abstract': 'humor; laughter'}),
"cerχalli1": new Noun("cerχalli", 1, {'Magical': 'potion vial; any container for magical substance', 'Mundane': 'vial, flask, cup, any small container for liquid'}),
"cī3": new Noun("cī", 3, {'Irrational': 'herb, especially for culinary use'}),
"cillu1": new Noun("cillu", 1, {'Mundane': 'ceiling, roof; overhang', 'Abstract': 'top, highest part'}),
"ciχħō1": new Noun("ciχħō", 1, {'Exalted': 'expert; one who is wise and/or knowledgeable', 'Rational': 'expert; one who is wise and/or knowledgeable'}),
"cyfox2": new Noun("cyfox", 2, {'Magical': 'nutrient', 'Abstract': 'sustenance, nutrition; potency; essence, quality'}),
"ē'2": new Noun("ē'", 2, {'Exalted': 'voter; decision-maker; dowser', 'Rational': 'voter; decision-maker; dowser', 'Monstrous': 'voter; decision-maker; dowser', 'Irrational': 'voter; decision-maker; dowser', 'Magical': 'dowsing rod', 'Mundane': 'voting machine', 'Abstract': 'vote; decision; dowsing'}),
"ē'ēkfūh3": new Noun("ē'ēkfūh", 3, {'Magical': 'apocalypse, armageddon; mass destruction', 'Mundane': 'apocalypse, armageddon; mass destruction', 'Abstract': 'apocalypse, armageddon; mass destruction'}),
"ē'ū2": new Noun("ē'ū", 2, {'Abstract': 'sound; audio; phone (linguistics)'}),
"ēfū1": new Noun("ēfū", 1, {'Exalted': 'shooter, that which shoots', 'Rational': 'shooter, that which shoots', 'Monstrous': 'shooter, that which shoots', 'Irrational': 'shooter, that which shoots', 'Abstract': 'firing, shooting; (in the plural) fire, barrage, volley'}),
"ēglōχ1": new Noun("ēglōχ", 1, {'Exalted': 'archer', 'Rational': 'archer', 'Monstrous': 'archer', 'Irrational': 'archer', 'Abstract': 'archery'}),
"ēglū1": new Noun("ēglū", 1, {'Exalted': 'extraplanar exaltant; celestial', 'Magical': 'rainbow', 'Abstract': 'arc, arch'}),
"ēhā2": new Noun("ēhā", 2, {'Exalted': 'regent, king or queen', 'Rational': 'regent, king or queen', 'Monstrous': 'regent, king or queen', 'Irrational': 'regent, king or queen', 'Abstract': 'dominance, control'}),
"ēhō2": new Noun("ēhō", 2, {'Monstrous': 'banshee', 'Magical': 'voicebox', 'Mundane': 'voice', 'Abstract': 'noise, clamor, ruckus; shriek; volume, sonority'}),
"ēħô4": new Noun("ēħô", 4, {'Exalted': 'catchall term for any type of dragon', 'Rational': 'catchall term for any type of dragon', 'Monstrous': 'catchall term for any type of dragon', 'Irrational': 'catchall term for any type of dragon', 'Magical': 'flamebox', 'Mundane': 'fire breath', 'Abstract': 'ignition; burst of flame, especially from the throat; intensity of fire'}),
"ehsen3": new Noun("ehsen", 3, {}),
"ēkfūh3": new Noun("ēkfūh", 3, {'Abstract': 'loss, tragedy, despair'}),
"ēlcel3": new Noun("ēlcel", 3, {'Exalted': 'crowd, swarm', 'Rational': 'crowd, swarm', 'Monstrous': 'crowd, swarm', 'Irrational': 'crowd, swarm', 'Magical': 'spellpower', 'Mundane': 'archive; library', 'Abstract': 'number, quantity, amount; plurality'}),
"erχ2": new Noun("erχ", 2, {'Abstract': 'surroundings'}),
"ēχ4": new Noun("ēχ", 4, {'Magical': 'twinspell', 'Mundane': 'pair', 'Abstract': 'double, duality, dyad; dual'}),
"ēχsen3": new Noun("ēχsen", 3, {'Abstract': 'lycanthropy'}),
"fæfē1": new Noun("fæfē", 1, {'Monstrous': 'fog monster', 'Magical': 'stormclouds', 'Mundane': 'thick fog', 'Abstract': 'bewilderment, incredulity'}),
"fē1": new Noun("fē", 1, {'Irrational': 'small air elemental; air sprite', 'Magical': 'ethereal mist; ethereal fog', 'Mundane': 'mist; light fog', 'Abstract': 'haze, daze; translucence'}),
"fēl3": new Noun("fēl", 3, {'Magical': 'siphon of energy', 'Mundane': 'drain, siphon', 'Abstract': 'drainage'}),
"fēl1": new Noun("fēl", 1, {'Magical': 'silk', 'Mundane': 'cream; yogurt'}),
"fēltū1": new Noun("fēltū", 1, {'Irrational': 'farm animal', 'Magical': 'uncontrollable laughter', 'Mundane': 'cheese', 'Abstract': 'cheeriness, gaiety; luck, good fortune'}),
"feŋkxō1": new Noun("feŋkxō", 1, {'Abstract': 'infancy (non-dragon)'}),
"feŋqχī2": new Noun("feŋqχī", 2, {'Irrational': '(plural) offspring, progeny, young (of non-exalted beings)', 'Magical': 'elementrary particle; (biology) cell', 'Mundane': 'particulate, particle of matter; (plural) dust; cog, gear', 'Abstract': 'part, especially of a much larger whole; minutia'}),
"feŋqχō2": new Noun("feŋqχō", 2, {'Magical': 'lost soul; magical byproduct', 'Mundane': 'byproduct', 'Abstract': 'unimportance, insignificance; inconsequential side-effect'}),
"feru3": new Noun("feru", 3, {'Magical': 'sedative; anesthesia', 'Mundane': 'milk; nectar', 'Abstract': 'drowsiness, sleepiness; sedation'}),
"finluh2": new Noun("finluh", 2, {'Exalted': 'fey creature', 'Rational': 'fey creature', 'Monstrous': 'fey creature', 'Irrational': 'fey creature', 'Magical': 'fey magic, fey energy; (definite) The Fey Realm', 'Mundane': 'fey item or object', 'Abstract': 'fey'}),
"fōlnty3": new Noun("fōlnty", 3, {'Abstract': 'regularity, order; sequence; cleanliness'}),
"fōxeh3": new Noun("fōxeh", 3, {'Magical': 'sacrificial item, offering', 'Abstract': 'embarassment; failure, rejection'}),
"fōxeχaχ1": new Noun("fōxeχaχ", 1, {'Exalted': 'cook, chef', 'Rational': 'cook, chef', 'Monstrous': 'cook, chef', 'Irrational': 'cook, chef', 'Magical': 'fire (as used in preparation of food)', 'Mundane': 'kitchen; kitchen appliance', 'Abstract': 'cuisine; culinary arts'}),
"fu'so2": new Noun("fu'so", 2, {}),
"fū'su2": new Noun("fū'su", 2, {'Magical': 'alchemical equipment', 'Mundane': 'enzyme; dissolver', 'Abstract': 'distillation; dissolution, especially for alchemy'}),
"fūrχ2": new Noun("fūrχ", 2, {'Abstract': 'direction; linearity; Directive'}),
"fuχħālt2": new Noun("fuχħālt", 2, {'Abstract': 'width'}),
"fūχħālt2": new Noun("fūχħālt", 2, {'Exalted': 'a creature that is particularly wide', 'Rational': 'a creature that is particularly wide', 'Monstrous': 'a creature that is particularly wide', 'Irrational': 'a creature that is particularly wide'}),
"hā1": new Noun("hā", 1, {'Abstract': 'quintessence'}),
"ħâ2": new Noun("ħâ", 2, {'Magical': 'flame; fire breath', 'Mundane': 'flame; fire breath'}),
"ħâ'3": new Noun("ħâ'", 3, {'Irrational': 'animal', 'Abstract': 'vulnerability'}),
"ha'qu1": new Noun("ha'qu", 1, {'Exalted': 'philosopher', 'Rational': 'philosopher', 'Monstrous': 'philosopher', 'Irrational': 'philosopher', 'Magical': 'Magic, as personified', 'Abstract': 'philosophy'}),
"hakxu1": new Noun("hakxu", 1, {'Magical': 'drive, purpose, passion', 'Mundane': 'target, mark, bullseye; reticle', 'Abstract': 'reason, purpose, rationale; goal, target'}),
"hanah3": new Noun("hanah", 3, {'Magical': '(definite) the ether field, the field of omnipresent ethereal energy', 'Mundane': 'field, pasture', 'Abstract': 'area, region; district, administrative division'}),
"ħâno4": new Noun("ħâno", 4, {'Exalted': 'cannibal', 'Rational': 'cannibal', 'Monstrous': 'ghoul; any flesh-eating monster', 'Irrational': 'personification of blight, decay', 'Mundane': 'flesh, especially rotten', 'Abstract': 'cannibalism; blight, decay'}),
"hanto3": new Noun("hanto", 3, {'Exalted': 'individual', 'Rational': 'individual', 'Monstrous': 'individual', 'Irrational': 'individual', 'Abstract': 'name; personality'}),
"hantox3": new Noun("hantox", 3, {'Magical': 'true name', 'Mundane': 'signature; inscription', 'Abstract': 'nickname; noun'}),
"ħâq̇1": new Noun("ħâq̇", 1, {'Abstract': 'esteem, exaltation, admiration'}),
"harāreχ2": new Noun("harāreχ", 2, {'Magical': 'heat wave', 'Mundane': 'heat source; controlled fire', 'Abstract': 'heat; efficacy'}),
"harārō2": new Noun("harārō", 2, {'Magical': '(definite) The Abyss', 'Abstract': 'Abyssal (language)'}),
"hāreχ2": new Noun("hāreχ", 2, {'Abstract': 'heating; temperature'}),
"harī2": new Noun("harī", 2, {'Magical': 'alcohol', 'Mundane': '(usually plural) tinder, dry leaves', 'Abstract': 'flammability'}),
"hārm3": new Noun("hārm", 3, {'Magical': 'magical daylight', 'Mundane': 'daylight', 'Abstract': 'day, daytime'}),
"ħárχħôrχ4": new Noun("ħárχħôrχ", 4, {'Exalted': 'winner', 'Rational': 'winner', 'Monstrous': 'vampire (in human form)', 'Irrational': 'griffin', 'Magical': 'acid rain', 'Mundane': 'prize; medal, trophy; rain', 'Abstract': 'success, accomplishment; arrival, landing'}),
"ħatrū1": new Noun("ħatrū", 1, {'Abstract': 'lightness, delicacy'}),
"haxær2": new Noun("haxær", 2, {'Abstract': 'length; extension'}),
"hāxær2": new Noun("hāxær", 2, {'Exalted': 'any long, typically serpentine creature\n(i.) snake, serpent\n(mag., mun.) any long, typically thin and cylindrical object', 'Rational': 'any long, typically serpentine creature\n(i.) snake, serpent\n(mag., mun.) any long, typically thin and cylindrical object', 'Monstrous': 'any long, typically serpentine creature\n(i.) snake, serpent\n(mag., mun.) any long, typically thin and cylindrical object', 'Irrational': 'any long, typically serpentine creature\n(i.) snake, serpent\n(mag., mun.) any long, typically thin and cylindrical object'}),
"ħāxaχ1": new Noun("ħāxaχ", 1, {'Exalted': 'predator, especially a vicious one', 'Rational': 'predator, especially a vicious one', 'Monstrous': 'predator, especially a vicious one', 'Irrational': 'predator, especially a vicious one'}),
"hē1": new Noun("hē", 1, {'Exalted': 'astrologer; magic user guided by the stars', 'Rational': 'astrologer; magic user guided by the stars', 'Monstrous': 'astrologer; magic user guided by the stars', 'Irrational': 'astrologer; magic user guided by the stars', 'Magical': 'constellation; star based magic', 'Abstract': 'astrology; magic guided by the stars'}),
"hēn3": new Noun("hēn", 3, {'Irrational': 'wind or air as personified', 'Magical': 'hurricane; extremely powerful winds', 'Mundane': 'whirlwind', 'Abstract': 'disorientation, confusion; rotation'}),
"hexto1": new Noun("hexto", 1, {'Abstract': 'north'}),
"hin3": new Noun("hin", 3, {'Monstrous': 'ghost', 'Irrational': '(plural only) spirits generally', 'Magical': 'wind', 'Mundane': 'breeze, gust', 'Abstract': 'weather; haunting'}),
"hō1": new Noun("hō", 1, {'Magical': 'star', 'Abstract': '(definite, plural only) the stars, as personified or referenced abstractly; the night sky'}),
"ħô1": new Noun("ħô", 1, {'Magical': 'hail; sleet', 'Mundane': 'ice, ice crystal', 'Abstract': 'iciness, slipperiness'}),
"ħôħ4": new Noun("ħôħ", 4, {'Exalted': 'ice dragon', 'Irrational': 'any creature native to snowy environments', 'Magical': 'blizzard; avalanche', 'Mundane': 'tundra, snowy expanse', 'Abstract': 'bitter and unbearable cold'}),
"hōk2": new Noun("hōk", 2, {'Exalted': 'titan', 'Magical': 'plane, dimension', 'Mundane': 'expanse, open area', 'Abstract': 'place, location, space'}),
"honæh4": new Noun("honæh", 4, {'Irrational': 'grass, fern, moss', 'Magical': 'magical vegetaion', 'Mundane': 'lawn, prairie, pasture', 'Abstract': '(figurative) anchor, tether, reality'}),
"honax3": new Noun("honax", 3, {'Exalted': 'herbivore, vegetarian', 'Rational': 'herbivore, vegetarian', 'Monstrous': 'herbivore, vegetarian', 'Irrational': 'herbivore, vegetarian'}),
"honi1": new Noun("honi", 1, {'Mundane': 'fruit or vegetable as food', 'Abstract': 'vegetarianism, herbivorism'}),
"ħôŋ3": new Noun("ħôŋ", 3, {'Rational': 'humanoid, any human-like creature', 'Irrational': 'golem, especially of stone', 'Mundane': 'statue'}),
"ħóz3": new Noun("ħóz", 3, {'Magical': 'snowstorm', 'Mundane': 'snow, frost; snowflake', 'Abstract': 'cold'}),
"ħúħû1": new Noun("ħúħû", 1, {'Exalted': 'one who is abnormally large', 'Rational': 'giant', 'Monstrous': 'one who is abnormally large', 'Irrational': 'one who is abnormally large', 'Abstract': 'giantkind, giants as a group'}),
"ħûl3": new Noun("ħûl", 3, {'Mundane': 'corner, nook, cranny', 'Abstract': 'angle'}),
"ħyh4": new Noun("ħyh", 4, {'Abstract': 'gold as a material; affluence, wealth'}),
"ifū1": new Noun("ifū", 1, {'Exalted': 'spitter, that which spits', 'Rational': 'spitter, that which spits', 'Monstrous': 'spitter, that which spits', 'Irrational': 'llama', 'Abstract': 'spitting'}),
"ik3": new Noun("ik", 3, {'Magical': "mana; one's personal store of magical energy", 'Mundane': 'source, especially of power', 'Abstract': 'willpower, resolve; focus'}),
"īk3": new Noun("īk", 3, {'Magical': 'magical resource', 'Mundane': 'natural resource', 'Abstract': 'resource'}),
"ikfūh3": new Noun("ikfūh", 3, {'Exalted': 'widow, widower', 'Rational': 'widow, widower', 'Monstrous': 'widow, widower', 'Irrational': 'widow, widower', 'Abstract': 'regret, remorse; apology; condolences'}),
"itræχnâħ1": new Noun("itræχnâħ", 1, {'Magical': 'draconic magic', 'Abstract': 'Draconic (language)'}),
"iχallħá1": new Noun("iχallħá", 1, {'Irrational': 'canopy of a forest', 'Mundane': 'peak, summit', 'Abstract': 'maximum'}),
"kæmō3": new Noun("kæmō", 3, {'Exalted': 'noble', 'Rational': 'noble', 'Monstrous': 'noble', 'Irrational': 'noble', 'Magical': 'bag of holding; magical storage', 'Mundane': 'physical storage', 'Abstract': 'genre, category, kind, class; storage'}),
"kālôŋ3": new Noun("kālôŋ", 3, {'Rational': 'human, person', 'Irrational': 'human child', 'Abstract': 'humanity, humans as a group'}),
"kāmō3": new Noun("kāmō", 3, {'Magical': 'magical impermeable membrane', 'Mundane': 'fence, wall', 'Abstract': 'division, segregation; role; border'}),
"kax2": new Noun("kax", 2, {'Abstract': 'char, burning'}),
"kaχālel3": new Noun("kaχālel", 3, {'Magical': 'counterspell', 'Abstract': 'refusal, objection; indignation'}),
"kēx1": new Noun("kēx", 1, {'Exalted': 'phoenix', 'Rational': 'any winged humanoid', 'Monstrous': 'harpy', 'Irrational': 'any winged animal other than a bird', 'Abstract': 'winged flight'}),
"keχōχ4": new Noun("keχōχ", 4, {'Abstract': 'change, variation; variable'}),
"kith3": new Noun("kith", 3, {'Irrational': 'wisp', 'Magical': 'burst of electric energy', 'Mundane': 'spark; crackle of electricity', 'Abstract': 'static electricity; an idea that comes to one suddenly, a eureka moment'}),
"kixith3": new Noun("kixith", 3, {'Mundane': 'electricity, as physically manifested', 'Abstract': 'electricity'}),
"kōrū1": new Noun("kōrū", 1, {'Monstrous': 'amalgam, amalgamation', 'Irrational': 'robot; golem, especially of metal', 'Abstract': 'fusion, blending; the creation of alloys; the process of amalgamation'}),
"kōru2": new Noun("kōru", 2, {'Abstract': 'metal as a material'}),
"kōthuŋ3": new Noun("kōthuŋ", 3, {'Exalted': 'builder, constructor; worker', 'Rational': 'builder, constructor; worker', 'Monstrous': 'builder, constructor; worker', 'Irrational': 'builder, constructor; worker', 'Abstract': 'building, construction (process); theoretical structure'}),
"kura1": new Noun("kura", 1, {'Magical': 'a jolt, an electric shock; (definite) true love’s kiss', 'Mundane': 'lip; rim, brim', 'Abstract': 'a kiss; contact; kissing'}),
"kuχū1": new Noun("kuχū", 1, {'Monstrous': '(definite) personification of the night and the monsters therein, especially in a dark forest', 'Magical': 'magical darkness', 'Abstract': 'night, nighttime'}),
"kxælli3": new Noun("kxælli", 3, {'Rational': 'any canine humanoid', 'Monstrous': 'any monstrous dog-like creature', 'Irrational': 'dog; wolf', 'Abstract': 'dogkind or wolfkind, dogs or wolves as a group'}),
"kxēlkxēl3": new Noun("kxēlkxēl", 3, {'Exalted': 'lightning dragon, storm dragon', 'Magical': 'lightning'}),
"læll3": new Noun("læll", 3, {'Exalted': 'opponent, opposition', 'Rational': 'opponent, opposition', 'Monstrous': 'opponent, opposition', 'Irrational': 'opponent, opposition', 'Magical': 'nullification; magical or elemental opposite', 'Mundane': 'counterweight, counterbalance', 'Abstract': 'opposite, opposition, reverse'}),
"lâl4": new Noun("lâl", 4, {'Abstract': 'inanimacy'}),
"laq̇th1": new Noun("laq̇th", 1, {'Magical': 'song', 'Mundane': 'song', 'Abstract': 'song'}),
"lartrāχ2": new Noun("lartrāχ", 2, {'Magical': 'potent acid, especially as produced biologically; bile', 'Mundane': 'acid', 'Abstract': 'acidity'}),
"lepán3": new Noun("lepán", 3, {'Magical': 'poison, venom, toxin', 'Abstract': 'misery; injustice, oppresion; villainy, tyranny'}),
"lirq̇3": new Noun("lirq̇", 3, {'Irrational': 'fruit as part of a plant, especially if sweet', 'Magical': 'magical fruit', 'Mundane': 'sweet, dessert; fruit as food; sugar', 'Abstract': 'sweetness; temptation'}),
"llā2": new Noun("llā", 2, {'Exalted': 'mother', 'Rational': 'mother', 'Monstrous': 'mother', 'Irrational': 'mother'}),
"llæfāre3": new Noun("llæfāre", 3, {'Magical': 'connection, bond', 'Mundane': 'connection, bond', 'Abstract': 'idea; theory'}),
"llān4": new Noun("llān", 4, {'Exalted': 'aunt; common and polite term of addres to a female Dragon', 'Rational': 'aunt; common and polite term of addres to a female Dragon', 'Monstrous': 'aunt; common and polite term of addres to a female Dragon', 'Irrational': 'aunt; common and polite term of addres to a female Dragon'}),
"llâŋ3": new Noun("llâŋ", 3, {'Abstract': 'agreement; consent'}),
"llefāχ1": new Noun("llefāχ", 1, {'Mundane': 'support structure', 'Abstract': 'religious faith'}),
"llēħ4": new Noun("llēħ", 4, {'Abstract': 'transportation'}),
"llēlāχ1": new Noun("llēlāχ", 1, {'Exalted': 'spouse, romantic partner for life', 'Rational': 'spouse, romantic partner for life', 'Monstrous': 'spouse, romantic partner for life', 'Irrational': 'spouse, romantic partner for life', 'Magical': 'love magic', 'Mundane': 'wedding, marriage ceremony', 'Abstract': 'marriage'}),
"llēlēr1": new Noun("llēlēr", 1, {'Monstrous': 'giant water elemental, especially if violent', 'Magical': '(literal) flood, torrent, inundation', 'Abstract': '(figurative) flood, torrent, inundation'}),
"llēlern3": new Noun("llēlern", 3, {'Magical': '(definite) the elemental plane of water', 'Mundane': 'ocean', 'Abstract': 'an expanse; a vast region'}),
"llēlī1": new Noun("llēlī", 1, {'Abstract': 'romance, espeically passionate romance', 'Magical': 'romantic, passionate love; uncontrollable love'}),
"llēr1": new Noun("llēr", 1, {'Magical': 'elixir; any magical liquid', 'Mundane': 'water; body of water'}),
"llērārk3": new Noun("llērārk", 3, {'Mundane': 'presence, accompaniment; good company', 'Abstract': 'presence, accompaniment; good company'}),
"llerēχ1": new Noun("llerēχ", 1, {'Exalted': 'roommate, flatemate, housemate', 'Rational': 'roommate, flatemate, housemate', 'Monstrous': 'roommate, flatemate, housemate', 'Irrational': 'roommate, flatemate, housemate', 'Abstract': 'cohabitation'}),
"llern3": new Noun("llern", 3, {'Monstrous': 'sea monster', 'Irrational': 'sea creature; (in the plural) marine life', 'Mundane': 'sea, ocean; large body of liquid', 'Abstract': '(definite, singular only) the sea, as personified or referenced abstractly'}),
"llērūroχ3": new Noun("llērūroχ", 3, {'Abstract': 'cooperation, collaboration'}),
"llery'2": new Noun("llery'", 2, {'Abstract': 'intimacy'}),
"llētroħáqħ4": new Noun("llētroħáqħ", 4, {'Abstract': 'conversation, discussion'}),
"lletroħôqħ1": new Noun("lletroħôqħ", 1, {'Exalted': 'chatterbox, a talkative individual', 'Rational': 'chatterbox, a talkative individual', 'Monstrous': 'chatterbox, a talkative individual', 'Irrational': 'chatterbox, a talkative individual', 'Magical': 'sprite', 'Mundane': 'noisemaker', 'Abstract': 'chatter, especially when excessive'}),
"llēχ3": new Noun("llēχ", 3, {'Mundane': 'dinner; meal', 'Abstract': 'dinner; meal'}),
"lleχa2": new Noun("lleχa", 2, {'Mundane': 'mesa; plateau', 'Abstract': 'flatness'}),
"lleχħôχ3": new Noun("lleχħôχ", 3, {'Exalted': 'smith, forger; metallurgist', 'Rational': 'smith, forger; metallurgist', 'Monstrous': 'smith, forger; metallurgist', 'Irrational': 'smith, forger; metallurgist', 'Magical': 'smithing magic', 'Mundane': 'hammer; smithing tool', 'Abstract': 'the act of smithing or metallurgy'}),
"lli1": new Noun("lli", 1, {'Exalted': 'sister', 'Rational': 'sister', 'Monstrous': 'sister', 'Irrational': 'sister'}),
"llifāχ1": new Noun("llifāχ", 1, {'Magical': 'invocation or ritual for a deity', 'Abstract': 'blind faith'}),
"llifuχō1": new Noun("llifuχō", 1, {'Abstract': 'faith, trust'}),
"llihqō3": new Noun("llihqō", 3, {'Monstrous': 'bear', 'Irrational': 'bear'}),
"llīlq3": new Noun("llīlq", 3, {'Mundane': 'drink, beverage', 'Abstract': 'drinking, consumption of liquid'}),
"llīlχħá4": new Noun("llīlχħá", 4, {'Magical': 'fey sprite or wisp', 'Mundane': 'trick', 'Abstract': 'whimsy; fey energy'}),
"llinīna2": new Noun("llinīna", 2, {'Exalted': 'any slow and hard-working creature, especially if unintelligent', 'Rational': 'any slow and hard-working creature, especially if unintelligent', 'Monstrous': 'any slow and hard-working creature, especially if unintelligent', 'Irrational': 'any slow and hard-working creature, especially if unintelligent', 'Magical': 'a spent magical source; a non-magical item that was once magical', 'Abstract': 'exhaustion; exertion, overexertion; hard labor, especially for little gain'}),
"lliqa3": new Noun("lliqa", 3, {'Exalted': 'flyer, that which flies', 'Rational': 'flyer, that which flies', 'Monstrous': 'flyer, that which flies', 'Irrational': 'bird', 'Abstract': 'flight, the ability to fly'}),
"llīru2": new Noun("llīru", 2, {'Abstract': 'detachment, separation; disagreement; broken promise; contractual violation; divorce'}),
"llīχu1": new Noun("llīχu", 1, {'Magical': 'platonic or familial love; love in general', 'Abstract': 'platonic or familial love; love in general'}),
"llôχħô1": new Noun("llôχħô", 1, {'Mundane': 'forge', 'Abstract': 'smithing; metallurgy'}),
"llyħáχħy1": new Noun("llyħáχħy", 1, {'Exalted': 'a true friend, companion', 'Rational': 'a true friend, companion', 'Monstrous': 'a true friend, companion', 'Irrational': 'a true friend, companion', 'Magical': 'health potion', 'Mundane': 'tap, faucet', 'Abstract': 'friendship, companionship'}),
"llylurħ4": new Noun("llylurħ", 4, {'Magical': 'plot, scheme, heist', 'Mundane': 'plot, scheme, heist', 'Abstract': 'plot, scheme, heist'}),
"llyχaχ1": new Noun("llyχaχ", 1, {'Exalted': 'friend, comrade', 'Rational': 'friend, comrade', 'Monstrous': 'friend, comrade', 'Irrational': 'friend, comrade', 'Magical': 'magnet', 'Mundane': 'flock', 'Abstract': 'cluster, congregation; magnetism'}),
"lōx2": new Noun("lōx", 2, {'Irrational': 'unicorn', 'Abstract': 'siren, alarm call'}),
"lūryχ3": new Noun("lūryχ", 3, {'Abstract': 'continuity'}),
"luthor3": new Noun("luthor", 3, {'Exalted': 'evil individual', 'Rational': 'evil individual', 'Monstrous': 'evil individual', 'Irrational': 'evil individual', 'Magical': 'evil magic', 'Mundane': 'evil group/organization', 'Abstract': 'evil, wickedness'}),
"mâ4": new Noun("mâ", 4, {'Exalted': 'divine being; divine-touched', 'Rational': 'divine being; divine-touched', 'Monstrous': 'divine being; divine-touched', 'Irrational': 'divine being; divine-touched', 'Magical': 'divine magic, especially as wielded by gods', 'Abstract': 'divinity; (definite, plural) The Pantheon; the gods as a whole'}),
"mæzyn1": new Noun("mæzyn", 1, {'Mundane': 'town, village, hamlet, settlement, colony', 'Abstract': 'immigration, settlment; colonization'}),
"māho1": new Noun("māho", 1, {'Rational': 'any feline humanoid', 'Monstrous': 'any monstrous cat-like creature', 'Irrational': 'cat', 'Abstract': 'felinekind, cats as a group'}),
"mân4": new Noun("mân", 4, {'Exalted': 'a common Draconic name', 'Rational': 'a common Draconic name'}),
"meχ3": new Noun("meχ", 3, {'Mundane': 'coin', 'Abstract': 'tin as a material; coinage'}),
"næn3": new Noun("næn", 3, {'Abstract': 'respiration'}),
"naltæ2": new Noun("naltæ", 2, {'Abstract': 'way, method, means; strategy; instruction'}),
"nān3": new Noun("nān", 3, {'Exalted': 'an animate', 'Rational': 'an animate', 'Monstrous': 'an animate', 'Irrational': 'an animate', 'Abstract': 'animacy'}),
"ōciqāχu1": new Noun("ōciqāχu", 1, {'Exalted': 'genius', 'Abstract': 'intelligence, knowledge'}),
"ōh'ēkx3": new Noun("ōh'ēkx", 3, {'Exalted': 'investigator, inspector', 'Rational': 'investigator, inspector', 'Monstrous': 'investigator, inspector', 'Irrational': 'investigator, inspector', 'Magical': 'divination magic', 'Mundane': 'microscope', 'Abstract': 'investigation'}),
"ōhaq3": new Noun("ōhaq", 3, {'Exalted': 'nurse; responder', 'Rational': 'nurse; responder', 'Monstrous': 'nurse; responder', 'Irrational': 'nurse; responder', 'Magical': 'resuscitation magic', 'Abstract': 'nursing; resuscitation'}),
"ōhq̇aχu1": new Noun("ōhq̇aχu", 1, {}),
"ōq3": new Noun("ōq", 3, {'Abstract': 'true flight; well-being'}),
"ōqħáŋ3": new Noun("ōqħáŋ", 3, {'Abstract': 'expulsion'}),
"ōraħ4": new Noun("ōraħ", 4, {'Abstract': 'possession'}),
"ōrn1": new Noun("ōrn", 1, {'Abstract': 'containment'}),
"ōrnyll1": new Noun("ōrnyll", 1, {'Magical': 'a small extradimensional rift', 'Mundane': 'pocket; purse, small bag'}),
"ōx3": new Noun("ōx", 3, {'Magical': 'any sharp, magical object', 'Mundane': 'sharp tooth, cuspid; rake, broom, (by extension) any tool that sweeps or rakes', 'Abstract': 'chore'}),
"ōχ3": new Noun("ōχ", 3, {'Magical': '(definite) afterlife', 'Mundane': 'clock, sundial, timekeeping device', 'Abstract': 'time; era, eon'}),
"ōχfāled3": new Noun("ōχfāled", 3, {'Exalted': 'prisoner', 'Rational': 'prisoner', 'Monstrous': 'prisoner', 'Irrational': 'prisoner', 'Magical': 'force cage', 'Abstract': 'imprisonment'}),
"oχħó4": new Noun("oχħó", 4, {'Exalted': 'fighter, soldier', 'Rational': 'fighter, soldier', 'Monstrous': 'fighter, soldier', 'Irrational': 'fighter, soldier', 'Magical': 'playfighting, especially among dragons', 'Mundane': 'bruise', 'Abstract': 'battle, physical struggle; physical violence'}),
"ōχħó4": new Noun("ōχħó", 4, {'Irrational': 'porcupine; cactus', 'Magical': 'thagomizer', 'Mundane': 'spike, prong', 'Abstract': 'lash, tailstrike'}),
"ōχōraħ4": new Noun("ōχōraħ", 4, {'Exalted': 'crowd, group', 'Rational': 'crowd, group', 'Monstrous': 'crowd, group', 'Irrational': 'crowd, group', 'Abstract': 'collecting, collection'}),
"pán3": new Noun("pán", 3, {'Exalted': 'ruler; judge', 'Rational': 'ruler; judge', 'Monstrous': 'ruler; judge', 'Irrational': 'ruler; judge', 'Magical': 'karma', 'Mundane': 'court', 'Abstract': 'joy; justice'}),
"qâ4": new Noun("qâ", 4, {'Exalted': 'male dragon', 'Rational': 'male dragon'}),
"qar1": new Noun("qar", 1, {'Abstract': '(figurative) heart; core, center'}),
"qathur2": new Noun("qathur", 2, {}),
"qāx2": new Noun("qāx", 2, {'Exalted': 'relative', 'Rational': 'relative', 'Monstrous': 'relative', 'Irrational': 'relative', 'Magical': 'magical tether', 'Mundane': 'tether, cord, tie', 'Abstract': 'family; correlative'}),
"qaχ2": new Noun("qaχ", 2, {'Magical': 'fire, blaze', 'Mundane': 'spark; small fire; candle, torch', 'Abstract': 'life'}),
"qēdzeg3": new Noun("qēdzeg", 3, {'Abstract': 'paradox, contradiction'}),
"q̇ehā2": new Noun("q̇ehā", 2, {'Mundane': 'chunk, piece', 'Abstract': 'clause, phrase; section, portion'}),
"q̇ehax2": new Noun("q̇ehax", 2, {'Rational': 'dwarf', 'Abstract': 'dwarvenkind'}),
"qēr'a2": new Noun("qēr'a", 2, {'Magical': 'portal (to foreign plane)', 'Mundane': 'entrance', 'Abstract': 'beginning; preface, introduction; greeting'}),
"q̇erō1": new Noun("q̇erō", 1, {'Abstract': 'south'}),
"qērur2": new Noun("qērur", 2, {'Magical': 'portal (to home plane)', 'Mundane': 'exit', 'Abstract': 'end, ending, terminal, finish; farewell; epilogue'}),
"qērx2": new Noun("qērx", 2, {'Exalted': 'merchant, shopkeep', 'Rational': 'merchant, shopkeep', 'Monstrous': 'merchant, shopkeep', 'Irrational': 'merchant, shopkeep', 'Abstract': 'trade; economy'}),
"qērx3": new Noun("qērx", 3, {'Magical': 'prophesization magic', 'Abstract': 'prediction'}),
"qērxaχ1": new Noun("qērxaχ", 1, {'Exalted': 'prophet; oracle', 'Rational': 'prophet; oracle', 'Monstrous': 'prophet; oracle', 'Irrational': 'prophet; oracle', 'Abstract': 'prophesy'}),
"qerxex2": new Noun("qerxex", 2, {'Exalted': 'owner; lord or lady', 'Rational': 'owner; lord or lady', 'Monstrous': 'owner; lord or lady', 'Irrational': 'owner; lord or lady', 'Magical': 'material component for spells', 'Mundane': 'money, currency', 'Abstract': 'purchase'}),
"q̇etirx2": new Noun("q̇etirx", 2, {'Exalted': 'novice, amateur', 'Rational': 'novice, amateur', 'Monstrous': 'novice, amateur', 'Irrational': 'novice, amateur', 'Abstract': 'easiness, simplicity, triviality'}),
"q̇ħôlli1": new Noun("q̇ħôlli", 1, {'Mundane': 'pond, lake'}),
"qħón3": new Noun("qħón", 3, {'Magical': 'tail', 'Mundane': 'tail'}),
"qħôn3": new Noun("qħôn", 3, {'Mundane': 'tentacle; appendage'}),
"q̇ħónlli1": new Noun("q̇ħónlli", 1, {'Mundane': 'finger, digit, claw', 'Abstract': 'number, numeral; count'}),
"q̇o3": new Noun("q̇o", 3, {}),
"q̇o'ōk3": new Noun("q̇o'ōk", 3, {'Magical': 'magical exhaustion', 'Mundane': 'load, mass, ton', 'Abstract': 'encumbrance; weight, mass'}),
"qôk3": new Noun("qôk", 3, {'Magical': 'magical stun', 'Mundane': 'cave, tunnel', 'Abstract': 'constriction, binding, bondage; tightness'}),
"q̇ū1": new Noun("q̇ū", 1, {'Magical': 'pocket dimension; small extradimensional space', 'Mundane': 'lair; residence, place of lodging; habitat', 'Abstract': 'residency, habitation'}),
"qû4": new Noun("qû", 4, {'Abstract': 'swordsmanship'}),
"q̇u'o4": new Noun("q̇u'o", 4, {'Abstract': 'digestion; pondering, deep thought'}),
"qūħ3": new Noun("qūħ", 3, {'Monstrous': 'mutant rat', 'Irrational': 'mouse, rat', 'Magical': 'any negative or unintended byproduct from magical effects, especially when man-made', 'Mundane': 'waste, trash, garbage; excrement', 'Abstract': 'pollution'}),
"q̇ūhīn1": new Noun("q̇ūhīn", 1, {'Abstract': 'reframing, reinterpretation, reassessment; allergy'}),
"qūllēl3": new Noun("qūllēl", 3, {'Exalted': 'captain, head navigator', 'Rational': 'captain, head navigator', 'Monstrous': 'captain, head navigator', 'Irrational': 'captain, head navigator', 'Magical': 'compass', 'Mundane': 'star chart for navigational purposes', 'Abstract': 'navigation'}),
"qūralli3": new Noun("qūralli", 3, {'Magical': 'concentration of energy; magical nexus', 'Mundane': 'hill, mound', 'Abstract': 'convergence, concentration; nexus'}),
"qūrax1": new Noun("qūrax", 1, {'Irrational': 'a gigantic plant which stretches into the sky farther than can be seen', 'Magical': 'volcano', 'Mundane': 'mountain', 'Abstract': 'altitude; elevation'}),
"qūχ1": new Noun("qūχ", 1, {'Exalted': 'sibling', 'Rational': 'hatchling, baby dragon'}),
"quχūχ1": new Noun("quχūχ", 1, {'Exalted': 'a dragon who is exceptionally powerful, intelligent, or talented for their age; a gifted child; a savant'}),
"qyzelleŋ3": new Noun("qyzelleŋ", 3, {'Exalted': 'medic', 'Rational': 'medic', 'Monstrous': 'medic', 'Irrational': 'plant with healing properties', 'Magical': 'natural healing magic', 'Mundane': 'medicinal equipment', 'Abstract': 'equality, equal rights; reciprocation'}),
"qχeħâħ4": new Noun("qχeħâħ", 4, {'Mundane': 'dictionary', 'Abstract': 'translation; deciphering, decryption; interpretation'}),
"qχēl1": new Noun("qχēl", 1, {'Magical': 'dragon scale', 'Abstract': 'resilience; toughness, resistance, material strength'}),
"qχúqχú1": new Noun("qχúqχú", 1, {'Magical': 'magical thunder', 'Mundane': 'thunder', 'Abstract': 'acoustic volume, loudness'}),
"raq3": new Noun("raq", 3, {'Magical': 'magical object or trinket', 'Mundane': 'object, thing; trinket', 'Abstract': 'thing, matter, concern'}),
"rāreχ2": new Noun("rāreχ", 2, {'Magical': 'body heat', 'Abstract': 'warmth; gentleness, finesse'}),
"rārthq̇4": new Noun("rārthq̇", 4, {'Exalted': 'a charmer; a charismatic individual', 'Rational': 'a charmer; a charismatic individual', 'Monstrous': 'a charmer; a charismatic individual', 'Irrational': 'a charmer; a charismatic individual', 'Magical': 'entrancement magic, charming magic', 'Mundane': 'a status symbol', 'Abstract': 'trance'}),
"rutrill2": new Noun("rutrill", 2, {'Magical': 'disease, malady, affliction', 'Mundane': 'disease, malady, affliction', 'Abstract': 'disease, malady, affliction'}),
"sæntox3": new Noun("sæntox", 3, {'Exalted': 'creator, especially of life', 'Rational': 'creator, especially of life', 'Monstrous': 'creator, especially of life', 'Irrational': 'creator, especially of life', 'Magical': 'life-giving magic, animative magic', 'Abstract': 'actualization, realization; nominalization; personification; animation'}),
"særâ1": new Noun("særâ", 1, {'Exalted': 'aquatic dragon', 'Rational': 'merfolk', 'Monstrous': 'sea monster, particularly that swims fast', 'Irrational': 'fish, particularly that swims fast', 'Mundane': 'rudder', 'Abstract': 'swimming, as a sport or activity'}),
"særxēl1": new Noun("særxēl", 1, {'Irrational': 'animated armor', 'Abstract': 'protection, defense, especially in combat'}),
"sæx2": new Noun("sæx", 2, {'Magical': 'egg', 'Mundane': 'eggshell'}),
"sæxēl1": new Noun("sæxēl", 1, {'Irrational': 'tree bark', 'Magical': 'magical shield; dragonscale', 'Mundane': 'shell (botanical); carapace; protective outer layer', 'Abstract': 'sphere, spheroid'}),
"sæxēlsi1": new Noun("sæxēlsi", 1, {'Irrational': 'germ, pathogen', 'Magical': 'fertilized egg', 'Mundane': 'seed; grain; small nut', 'Abstract': 'precursor, trigger'}),
"sáħ1": new Noun("sáħ", 1, {'Rational': 'swimmer; any aquatic lifeform', 'Exalted': 'swimmer; any aquatic lifeform', 'Monstrous': 'swimmer; any aquatic lifeform', 'Irrational': 'swimmer; any aquatic lifeform', 'Mundane': 'oar, paddle', 'Abstract': 'merfolkkind, merfolk as a group; a swim, swimming; the ability to swim'}),
"saqmeχ3": new Noun("saqmeχ", 3, {'Magical': 'bronze; brass', 'Mundane': 'bronze; brass', 'Abstract': 'bronze; brass'}),
"saχ3": new Noun("saχ", 3, {'Magical': 'copper', 'Mundane': 'copper', 'Abstract': 'copper'}),
"sē'ad4": new Noun("sē'ad", 4, {'Magical': 'color', 'Mundane': 'decoration', 'Abstract': 'description; detail, facet, aspect; adjective, adverb'}),
"seleŋ1": new Noun("seleŋ", 1, {'Mundane': 'decor; frill, ruffle, fringe', 'Abstract': 'fringe, margin'}),
"selleŋaχ1": new Noun("selleŋaχ", 1, {'Exalted': 'addict', 'Rational': 'addict', 'Monstrous': 'addict', 'Irrational': 'addict', 'Magical': 'infatuation, obsession, especially magical', 'Abstract': 'addiction'}),
"seŋ3": new Noun("seŋ", 3, {'Abstract': 'desire, yearning'}),
"seŋaχ1": new Noun("seŋaχ", 1, {'Exalted': 'romantic partner, boyfriend or girlfriend', 'Rational': 'romantic partner, boyfriend or girlfriend', 'Monstrous': 'romantic partner, boyfriend or girlfriend', 'Irrational': 'romantic partner, boyfriend or girlfriend', 'Abstract': 'relationship'}),
"seq̇4": new Noun("seq̇", 4, {'Exalted': 'term of endearment', 'Rational': 'term of endearment', 'Monstrous': 'term of endearment', 'Irrational': 'term of endearment', 'Abstract': 'giving, donation, charity'}),
"sēχħú4": new Noun("sēχħú", 4, {'Exalted': 'experimentalist; scientist', 'Rational': 'experimentalist; scientist', 'Monstrous': 'experimentalist; scientist', 'Irrational': 'experimentalist; scientist', 'Abstract': 'try, attempt; experiment; science'}),
"sīl3": new Noun("sīl", 3, {'Magical': '(definite) the Dragon Plane', 'Mundane': 'den, housing', 'Abstract': 'home'}),
"sin'ær2": new Noun("sin'ær", 2, {'Abstract': 'flimsiness, strucural weakness; timidity'}),
"siŋæ2": new Noun("siŋæ", 2, {'Abstract': 'auxiliary verb'}),
"sirtell1": new Noun("sirtell", 1, {'Monstrous': 'Cancer (mythology)', 'Irrational': 'crustacean; (by extension) snail, any shelled creature', 'Abstract': 'safety, security'}),
"soq3": new Noun("soq", 3, {'Abstract': 'definition, meaning, denotation'}),
"soqaχ4": new Noun("soqaχ", 4, {'Mundane': 'sketch; rough draft; prototype', 'Abstract': 'concept, plan; determiner'}),
"sōqaχ4": new Noun("sōqaχ", 4, {'Abstract': 'artistry, art'}),
"sulyn3": new Noun("sulyn", 3, {'Magical': 'paralytic', 'Abstract': 'nap, rest; hibernation; coma, comatose state; paralysis'}),
"sylχħâllu3": new Noun("sylχħâllu", 3, {'Mundane': 'line, queue', 'Abstract': 'sentence, lyric, verse'}),
"syχħû4": new Noun("syχħû", 4, {'Abstract': 'example; instance, incident'}),
"tellex2": new Noun("tellex", 2, {'Magical': 'magical writing', 'Mundane': 'letter, character, glyph, symbol; doodle, sketch', 'Abstract': 'alphabet, writing system, orthography; lexicon, vocabulary'}),
"texyller1": new Noun("texyller", 1, {'Abstract': 'thickness; sturdiness'}),
"thæf1": new Noun("thæf", 1, {'Magical': 'wing, especially of a dragon', 'Mundane': 'wing; limb', 'Abstract': 'side, flank; edge, ridge; extent, degree'}),
"tharχ1": new Noun("tharχ", 1, {'Magical': 'prayer', 'Mundane': 'prayerbook', 'Abstract': 'ask, inquiry, question; praying'}),
"thathā'2": new Noun("thathā'", 2, {'Exalted': 'interrogator; constable, sheriff', 'Rational': 'interrogator; constable, sheriff', 'Monstrous': 'interrogator; constable, sheriff', 'Irrational': 'interrogator; constable, sheriff', 'Magical': 'magic lie detection; zone of truth', 'Mundane': 'lie detector', 'Abstract': 'interrogation'}),
"thō4": new Noun("thō", 4, {'Exalted': 'guard, guardian', 'Rational': 'guard, guardian', 'Monstrous': 'guard, guardian', 'Irrational': 'guard, guardian', 'Abstract': 'issue, problem, obstacle; security'}),
"thō'2": new Noun("thō'", 2, {'Exalted': 'a tank, one who can withstand much attack and damage;', 'Rational': 'a tank, one who can withstand much attack and damage;', 'Monstrous': 'a tank, one who can withstand much attack and damage;', 'Irrational': 'a tank, one who can withstand much attack and damage;', 'Magical': 'runestone', 'Mundane': 'boulder; a tough or rigid thing', 'Abstract': 'stone as a material; toughness, rigidity'}),
"thō'4": new Noun("thō'", 4, {}),
"tholūr3": new Noun("tholūr", 3, {'Abstract': 'inability; impossibility'}),
"tholyr3": new Noun("tholyr", 3, {'Abstract': 'ability; possibility'}),
"thor3": new Noun("thor", 3, {'Exalted': 'good or righteous individual', 'Rational': 'good or righteous individual', 'Monstrous': 'good or righteous individual', 'Irrational': 'good or righteous individual', 'Magical': 'good or righteous magic', 'Mundane': 'good or righteous group/organization', 'Abstract': 'good, righteousness'}),
"thoχō3": new Noun("thoχō", 3, {'Monstrous': 'worm', 'Irrational': 'worm'}),
"thōχō3": new Noun("thōχō", 3, {'Monstrous': 'giant worm'}),
"thu'uχu1": new Noun("thu'uχu", 1, {'Exalted': 'traveler; traveling merchant', 'Rational': 'traveler; traveling merchant', 'Monstrous': 'traveler; traveling merchant', 'Irrational': 'traveler; traveling merchant', 'Magical': 'long range spell', 'Mundane': 'airborne particulates', 'Abstract': 'travel'}),
"thū'xæ2": new Noun("thū'xæ", 2, {'Magical': 'storm, tempest, violent weather; rage, fury', 'Mundane': 'sky; thick and elevated clouds', 'Abstract': '(figurative) atmosphere, the mood of an enviroment; medium, material of surrounding environment'}),
"thulqā2": new Noun("thulqā", 2, {'Abstract': 'west'}),
"thūltrû4": new Noun("thūltrû", 4, {'Exalted': 'a member of kin by blood; a trustworthy individual;', 'Rational': 'a member of kin by blood; a trustworthy individual;', 'Monstrous': 'a member of kin by blood; a trustworthy individual;', 'Irrational': 'a member of kin by blood; a trustworthy individual;', 'Magical': 'blood believed to have magical properties', 'Mundane': 'blood; sap of a plant; any liquid vital to life', 'Abstract': 'familial relationship by birth; trust; livelihood'}),
"thultur'a2": new Noun("thultur'a", 2, {'Exalted': '(pejorative) bum, lowlife', 'Rational': '(pejorative) bum, lowlife', 'Monstrous': '(pejorative) bum, lowlife', 'Irrational': '(pejorative) bum, lowlife', 'Magical': 'a mundane potion, a potion with magical ingredients but no magical effects', 'Mundane': 'a dead end', 'Abstract': 'an end or goal that is not in sight; an unrealistic hope, goal, or expectation; a lost cause'}),
"thulχā2": new Noun("thulχā", 2, {'Abstract': 'east'}),
"thutrûllīqu1": new Noun("thutrûllīqu", 1, {'Exalted': 'a creature which sustains itself via the consumption of blood', 'Rational': 'a creature which sustains itself via the consumption of blood', 'Monstrous': 'vampire (in bat form)', 'Irrational': 'vampire bat', 'Mundane': 'syringe', 'Abstract': 'vampirism; the practice of drinking blood'}),
"tirx2": new Noun("tirx", 2, {'Abstract': 'complexity, difficulty'}),
"tōllq3": new Noun("tōllq", 3, {'Abstract': 'truth, honesty'}),
"tōrūl3": new Noun("tōrūl", 3, {'Abstract': 'language'}),
"torxo3": new Noun("torxo", 3, {'Magical': 'spirit of a people or nation', 'Mundane': 'group, community; alliance; server', 'Abstract': 'community; allegiance'}),
"toχ'ekx3": new Noun("toχ'ekx", 3, {'Mundane': 'road, street; canal, channel', 'Abstract': 'meeting; trek, journey; chance encounter; happenstance, circumstance, serendipity'}),
"trærān4": new Noun("trærān", 4, {'Exalted': 'aunt; common and polite term of address to a female Dragon', 'Rational': 'aunt; common and polite term of address to a female Dragon', 'Monstrous': 'aunt; common and polite term of address to a female Dragon', 'Irrational': 'aunt; common and polite term of address to a female Dragon'}),
"trærōn4": new Noun("trærōn", 4, {'Exalted': 'non-binary equivalent of uncle/aunt; common and polite gender-neutral term of address to a Dragon', 'Rational': 'non-binary equivalent of uncle/aunt; common and polite gender-neutral term of address to a Dragon', 'Monstrous': 'non-binary equivalent of uncle/aunt; common and polite gender-neutral term of address to a Dragon', 'Irrational': 'non-binary equivalent of uncle/aunt; common and polite gender-neutral term of address to a Dragon'}),
"trærū2": new Noun("trærū", 2, {'Exalted': 'father', 'Rational': 'father', 'Monstrous': 'father', 'Irrational': 'father'}),
"trærūn4": new Noun("trærūn", 4, {'Exalted': 'uncle; common and polite term of address to a male Dragon', 'Rational': 'uncle; common and polite term of address to a male Dragon', 'Monstrous': 'uncle; common and polite term of address to a male Dragon', 'Irrational': 'uncle; common and polite term of address to a male Dragon'}),
"træχon3": new Noun("træχon", 3, {'Exalted': 'dragon', 'Rational': 'lesser dragon; hatchling, baby dragon', 'Abstract': 'dragonkind, dragons as a group'}),
"traχē1": new Noun("traχē", 1, {'Rational': 'whelp, young dragon', 'Abstract': 'youth; naivete'}),
"traχon3": new Noun("traχon", 3, {'Exalted': 'alternate form of træχon', 'Rational': 'alternate form of træχon', 'Abstract': 'alternate form of træχon'}),
"traχunlli1": new Noun("traχunlli", 1, {'Rational': 'dragonborn; draconic humanoid'}),
"trē1": new Noun("trē", 1, {'Magical': 'magic word that is needed to cast a spell', 'Mundane': 'urge', 'Abstract': 'cause, instigating effect'}),
"trellelleŋ3": new Noun("trellelleŋ", 3, {'Abstract': 'value, worth'}),
"trēre1": new Noun("trēre", 1, {'Exalted': 'people, populus, beings consisting of a common group, especially tied to a particular nation, ethnicity, class, or species', 'Rational': 'people, populus, beings consisting of a common group, especially tied to a particular nation, ethnicity, class, or species', 'Monstrous': 'people, populus, beings consisting of a common group, especially tied to a particular nation, ethnicity, class, or species', 'Irrational': 'people, populus, beings consisting of a common group, especially tied to a particular nation, ethnicity, class, or species', 'Abstract': 'origin, where one is from'}),
"trexēk1": new Noun("trexēk", 1, {'Abstract': 'consumption, voracity, greed; gluttony'}),
"trexēxō1": new Noun("trexēxō", 1, {'Exalted': 'biological consumer', 'Rational': 'biological consumer', 'Monstrous': 'biological consumer', 'Irrational': 'biological consumer'}),
"treχō3": new Noun("treχō", 3, {'Abstract': 'use, utilization'}),
"trill2": new Noun("trill", 2, {'Magical': 'pain, suffering; agony', 'Mundane': 'pain, suffering; agony', 'Abstract': 'pain, suffering; agony'}),
"trīmath3": new Noun("trīmath", 3, {'Monstrous': 'invisible stalker; by extension, any invisible spirit', 'Irrational': 'chameleon; by extension, any color changing creature', 'Magical': 'magical cloak; stealth magic', 'Mundane': 'cloak, robe, outer layer of clothing; costume, covering; envelope', 'Abstract': 'concealment, stealth, camouflage'}),
"trīru'2": new Noun("trīru'", 2, {'Magical': 'reaction', 'Mundane': 'reaction', 'Abstract': 'reaction'}),
"triχōχu1": new Noun("triχōχu", 1, {'Exalted': 'thief, robber', 'Rational': 'thief, robber', 'Monstrous': 'thief, robber', 'Irrational': 'thief, robber', 'Magical': 'thievery magic', 'Mundane': 'glove', 'Abstract': 'theft, theivery'}),
"trō1": new Noun("trō", 1, {}),
"trolq1": new Noun("trolq", 1, {'Magical': 'inner fire; dragon soul', 'Mundane': 'need, basic resource required for living', 'Abstract': 'requirement, necessity'}),
"trotry1": new Noun("trotry", 1, {'Irrational': 'shark', 'Abstract': 'smile, expression of happiness; giggle, giggling'}),
"tryχaχu1": new Noun("tryχaχu", 1, {'Exalted': 'escapee', 'Rational': 'escapee', 'Monstrous': 'escapee', 'Irrational': 'escapee', 'Abstract': 'escape; escapism'}),
"tuŋ3": new Noun("tuŋ", 3, {'Exalted': 'land-dweller, one who resides on land', 'Rational': 'land-dweller, one who resides on land', 'Monstrous': 'land-dweller, one who resides on land', 'Irrational': 'land-dweller, one who resides on land', 'Magical': 'magic stone; any small stone with magical properties', 'Mundane': 'stone, rock, pebble; dirt', 'Abstract': 'ground; (definite) the Material Plane'}),
"tuŋex2": new Noun("tuŋex", 2, {'Exalted': 'Harbinger of Doom; any exalted being threatening apocalypse', 'Magical': 'meteor, asteroid, meteorite, meteoroid; comet, shooting star; (plural) meteor shower', 'Mundane': 'cannonball; rocket, missile; any hefty projectile', 'Abstract': 'doom; (definite plural) apocalypse, armageddon'}),
"tuŋllīlâ1": new Noun("tuŋllīlâ", 1, {'Exalted': 'pantheon; collection of gods', 'Abstract': 'kabal, syndicate, faction; organization, collective, union; society'}),
"tuŋllīlħá1": new Noun("tuŋllīlħá", 1, {'Exalted': 'governor, adminstrator; governmental representative, especially if elected', 'Rational': 'governor, adminstrator; governmental representative, especially if elected', 'Monstrous': 'governor, adminstrator; governmental representative, especially if elected', 'Irrational': 'governor, adminstrator; governmental representative, especially if elected', 'Abstract': 'government, governmental organization; bureaucracy'}),
"tur1": new Noun("tur", 1, {'Exalted': 'brother', 'Rational': 'brother', 'Monstrous': 'brother', 'Irrational': 'brother'}),
"tur'a2": new Noun("tur'a", 2, {'Exalted': 'wanderer; care-free individual', 'Rational': 'wanderer; care-free individual', 'Monstrous': 'wanderer; care-free individual', 'Irrational': 'wanderer; care-free individual', 'Magical': 'potion created haphazardly or with random ingrediants', 'Mundane': 'a trail or path, not necessarily to anywhere in particular', 'Abstract': 'wander, stroll; a leisurely walk or flight; a way, a route'}),
"tutuŋ3": new Noun("tutuŋ", 3, {'Exalted': 'burrower, a creature which burrows through earth', 'Rational': 'burrower, a creature which burrows through earth', 'Monstrous': 'burrower, a creature which burrows through earth', 'Irrational': 'burrower, a creature which burrows through earth', 'Magical': 'earthen magic; (definite singular) the elemental plane of earth', 'Mundane': 'earth, ground; bedrock; anchor', 'Abstract': 'solid; axiom; theoretical foundation'}),
"u'2": new Noun("u'", 2, {'Mundane': 'burp, belch', 'Abstract': 'accident; anything unintentional'}),
"uk3": new Noun("uk", 3, {'Magical': 'null point, space of no magic', 'Mundane': 'lowest point', 'Abstract': 'minimum; nadir'}),
"ūk3": new Noun("ūk", 3, {'Abstract': 'fall, sinking, descent; latency, delay, regression; Recessive'}),
"ūl3": new Noun("ūl", 3, {'Exalted': 'body', 'Rational': 'body', 'Monstrous': 'body', 'Irrational': 'body', 'Magical': 'a manifestation of magic', 'Mundane': 'shape, form', 'Abstract': 'theoretical form'}),
"ural1": new Noun("ural", 1, {}),
"ūri1": new Noun("ūri", 1, {'Monstrous': 'kraken; any giant sea monster, typically tentacled', 'Irrational': 'giant squid or octopus; any large tentacled creature', 'Mundane': 'calamari, or other related foods'}),
"xā2": new Noun("xā", 2, {'Exalted': 'Sun God', 'Magical': 'sun; sunlight', 'Mundane': 'sunny weather'}),
"xæn3": new Noun("xæn", 3, {'Abstract': 'deference, respect'}),
"xærâħ4": new Noun("xærâħ", 4, {'Exalted': 'a World Tree, a powerful sentient tree which anchors and guards over vast expanses of nature', 'Rational': 'ent', 'Irrational': 'tree', 'Mundane': 'wood'}),
"xærī2": new Noun("xærī", 2, {'Irrational': 'shrub, fern, bush', 'Magical': 'wand', 'Mundane': 'branch; stick, twig'}),
"xaχō1": new Noun("xaχō", 1, {'Exalted': 'fiersome dragon', 'Monstrous': 'a horror; a monstrosity', 'Magical': 'uncontrollable fear', 'Abstract': 'horror, terror'}),
"yqā2": new Noun("yqā", 2, {'Magical': '(definite) The Twilight Forest', 'Mundane': 'sunset', 'Abstract': 'twilight, eventide'}),
"yqu3": new Noun("yqu", 3, {'Monstrous': 'a hostile ethereal creature, especially of the ethereal plane', 'Magical': 'ether, omnipresent magical energy; (definite) the ethereal plane', 'Abstract': 'magic'}),
"yxa1": new Noun("yxa", 1, {'Exalted': 'a creature afflicted by magical sickness', 'Rational': 'a creature afflicted by magical sickness', 'Monstrous': 'a creature afflicted by magical sickness', 'Irrational': 'a creature afflicted by magical sickness', 'Magical': 'a case of magical sickness; a maladie or other affliction caused by magic', 'Abstract': 'magical sickness in general'}),
"χa2": new Noun("χa", 2, {'Abstract': 'trace, impact'}),
"χall3": new Noun("χall", 3, {'Abstract': 'bite; biting; gnashing'}),
"χāloq3": new Noun("χāloq", 3, {'Magical': 'casting time', 'Mundane': 'season', 'Abstract': 'age, seniority; (of a dragon) inherent strength, power'}),
"χāŋō1": new Noun("χāŋō", 1, {'Mundane': 'corpse', 'Abstract': 'zombies, mindless undead as a goup'}),
"χāráħ4": new Noun("χāráħ", 4, {'Exalted': '(definite) Yggdrasil', 'Rational': 'sentient tree; (plural) sentient plant life', 'Magical': 'nature magic', 'Abstract': 'nature, in the abstract'}),
"χārmex2": new Noun("χārmex", 2, {'Irrational': 'biolumescent creature', 'Magical': 'magical light', 'Mundane': 'light, light source', 'Abstract': 'brightness'}),
"χārŋ3": new Noun("χārŋ", 3, {'Exalted': 'prisoner of war; loser', 'Rational': 'prisoner of war; loser', 'Monstrous': 'prisoner of war; loser', 'Irrational': 'prisoner of war; loser', 'Mundane': 'treaty', 'Abstract': 'capitulation, surrender; confession'}),
"χārô4": new Noun("χārô", 4, {'Magical': 'magic wish', 'Mundane': 'treasure', 'Abstract': 'wish, hope'}),
"χārq3": new Noun("χārq", 3, {'Abstract': 'year'}),
"χātrilq3": new Noun("χātrilq", 3, {'Exalted': 'teacher, tutor', 'Rational': 'teacher, tutor', 'Monstrous': 'teacher, tutor', 'Irrational': 'teacher, tutor', 'Magical': 'magical education', 'Mundane': 'lesson, curriculum, syllabus', 'Abstract': 'lesson topic; education'}),
"χâtroχ1": new Noun("χâtroχ", 1, {'Exalted': 'author; scribe', 'Rational': 'author; scribe', 'Monstrous': 'author; scribe', 'Irrational': 'author; scribe', 'Magical': 'magical writing instrument', 'Mundane': 'pen, writing instrument', 'Abstract': 'spelling; handwriting'}),
"χâtrū1": new Noun("χâtrū", 1, {'Magical': 'tome; spellbook', 'Mundane': 'scroll; book, novel', 'Abstract': 'literature'}),
"χaχæ1": new Noun("χaχæ", 1, {'Rational': 'lizardfolk; any reptilian humanoid', 'Monstrous': 'reptilian monster', 'Irrational': 'a reptile, especially alligators and crocodiles', 'Mundane': 'cuspid, especially of a reptile', 'Abstract': 'reptilia or lizardkind, lizardfolk as a group'}),
"χēgēk3": new Noun("χēgēk", 3, {'Abstract': 'childhood, adolescence'}),
"χēni1": new Noun("χēni", 1, {'Monstrous': 'specter, phantom', 'Irrational': 'camel', 'Magical': 'magic bubble, usually containing some liquid or gas', 'Mundane': 'barrel, keg; bucket, pail', 'Abstract': 'duration; endurance'}),
"χēnorn1": new Noun("χēnorn", 1, {'Magical': 'telekinetic magic', 'Abstract': 'telekenesis'}),
"χħa'th02": new Noun("χħa'th0", 2, {'Exalted': 'aderent of esoteric religious beliefs; pagan', 'Rational': 'aderent of esoteric religious beliefs; pagan', 'Monstrous': 'aderent of esoteric religious beliefs; pagan', 'Irrational': 'aderent of esoteric religious beliefs; pagan', 'Magical': 'magical obelisk; mage tower', 'Mundane': 'obelisk; tower; spire', 'Abstract': 'esoteric religious beliefs; paganism'}),
"χħâħ4": new Noun("χħâħ", 4, {'Monstrous': 'sentient, hostile tree', 'Irrational': 'mangled or gnarled tree'}),
"χħâllu3": new Noun("χħâllu", 3, {'Magical': 'a magic word; a power word', 'Abstract': 'word, term; utterance'}),
"χħâlqo3": new Noun("χħâlqo", 3, {'Magical': '(definite) an extraplanar region beyond the stars home to gods, celestials, and souls of the righteous; heaven; (indefinite) any good-aligned alternate plane or dimension', 'Mundane': 'zone, area, physical domain; territory', 'Abstract': 'extent; theoretical or categorical domain; reach, sway, influence'}),
"χħátrū1": new Noun("χħátrū", 1, {'Magical': 'glyph; ritualistic carving', 'Mundane': 'text, excerpt; written sample', 'Abstract': 'writing'}),
"χħēhā2": new Noun("χħēhā", 2, {'Abstract': 'hierarchy, ranking; class, gender (grammatical)'}),
"χħóf3": new Noun("χħóf", 3, {'Monstrous': 'bog monster; (plural) creeping vines', 'Irrational': '(plural) wildlife', 'Mundane': 'swamp, marsh, bog'}),
"χħôl3": new Noun("χħôl", 3, {'Magical': 'incantation', 'Abstract': 'speech, speaking'}),
"χħóq̇ħó1": new Noun("χħóq̇ħó", 1, {'Exalted': 'a brute; one who is brutal', 'Rational': 'a brute; one who is brutal', 'Monstrous': 'a brute; one who is brutal', 'Irrational': 'a brute; one who is brutal', 'Magical': 'a magical attack which physically strikes', 'Mundane': 'whip', 'Abstract': 'whipping; brutality'}),
"χħû'lu1": new Noun("χħû'lu", 1, {'Exalted': 'healer', 'Rational': 'healer', 'Monstrous': 'healer', 'Irrational': 'healer', 'Magical': 'cure; magical healing', 'Mundane': 'pill, medicine', 'Abstract': 'healing, medicine; health'}),
"χōfāled1": new Noun("χōfāled", 1, {'Irrational': 'carnivorous plant; tangle of vines or other such plants', 'Magical': 'magical trap, snare; magically activated trigger', 'Mundane': 'mechanical trap, snare', 'Abstract': 'trap, a deceitful arrangement; entrapment'}),
"χōka2": new Noun("χōka", 2, {'Abstract': 'reflection, reflectivity'}),
"χōlleql3": new Noun("χōlleql", 3, {'Abstract': 'comedy'}),
"χōlliχħo4": new Noun("χōlliχħo", 4, {'Abstract': 'announcement; information'}),
"χōlyra4": new Noun("χōlyra", 4, {'Abstract': 'spirit, vigor, vibrance; memory'}),
"χōrthq̇4": new Noun("χōrthq̇", 4, {'Exalted': 'hypnotist', 'Rational': 'hypnotist', 'Monstrous': 'hypnotist', 'Irrational': 'hypnotist', 'Magical': 'hypnosis, hypnotic magic', 'Mundane': 'fanfare; ceremony, celebration', 'Abstract': 'hypnosis, as a field or discipline'}),
"χōtrūrχu1": new Noun("χōtrūrχu", 1, {'Exalted': 'lieutenant; leader (of a small group or team)', 'Rational': 'lieutenant; leader (of a small group or team)', 'Monstrous': 'lieutenant; leader (of a small group or team)', 'Irrational': 'lieutenant; leader (of a small group or team)', 'Magical': 'magic that compels one do to something against their own will', 'Mundane': 'commandment (as written or decreed)', 'Abstract': 'employment, hiring of an employee; command, order; imperative, commandment (as given)'}),
"χu'lu1": new Noun("χu'lu", 1, {'Magical': 'magical comfort', 'Mundane': 'luxury, comfort', 'Abstract': 'aid, assistance, help, care; luxury, comfort (conceptual)'}),
"χu'luχi3": new Noun("χu'luχi", 3, {'Irrational': 'ant', 'Mundane': 'spoke, rung', 'Abstract': 'support, assistance'}),
"χu'luχu1": new Noun("χu'luχu", 1, {'Exalted': 'cleric; religious leader, epseically one capable of divine magic', 'Rational': 'cleric; religious leader, epseically one capable of divine magic', 'Monstrous': 'cleric; religious leader, epseically one capable of divine magic', 'Irrational': 'cleric; religious leader, epseically one capable of divine magic', 'Magical': 'any divinely blessed item; clerical magic', 'Mundane': 'a divine symbol', 'Abstract': 'divine blessing'}),
"χullīrχ3": new Noun("χullīrχ", 3, {'Magical': 'magical weakness', 'Mundane': 'miniature', 'Abstract': 'weakness, fragility'}),
"χuχūq4": new Noun("χuχūq", 4, {'Abstract': 'power, force, strength, vigor; insistence, determination'}),
"lōm3": new Noun("lōm", 3, {'Magical': 'pyre, beacon; lighthouse', 'Mundane': 'pyre, beacon; lighthouse'}),
"rom3": new Noun("rom", 3, {'Magical': 'moon, moonlight', 'Mundane': 'dim light', 'Abstract': 'goal, beacon, guiding principle'}),
"naz2": new Noun("naz", 2, {'Magical': 'river; vein, artery', 'Mundane': 'river; vein, artery'}),
"trith3": new Noun("trith", 3, {'Magical': '(fabric of) spacetime', 'Mundane': 'fabric, cloth', 'Abstract': 'material'}),
"thelk1": new Noun("thelk", 1, {'Abstract': 'unit of measure equivalent to approximately 6 meters'}),
"χalk1": new Noun("χalk", 1, {'Abstract': 'unit of measure equivalent to approximately 8 centimeters'}),
"ūrk3": new Noun("ūrk", 3, {'Abstract': 'unit of measure equivalent to approximately 400 meters'}),
"oqurk1": new Noun("oqurk", 1, {'Abstract': 'unit of measure equivalent to approximately 25 kilometers'})
}

// ^^==== CACHE =====^^



modules.push("DictionaryData")
