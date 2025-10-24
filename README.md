## License
© 2025 LiroxDeYamon  
Licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

This project includes usage of *The Draconic Language*, which is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).  
All rights to *The Draconic Language* belong to [**human1011**](https://www.youtube.com/channel/UCNtThoaq14pIorP2OmArt5w).

# DraconicAPIs
A collection of JavaScript modules designed for smooth and easy usage of human1011’s conlang -- The Draconic Language.

#### Made by:
- LiroxDeYamon
- SuPDuZz - CharacterMap.js data
- _eXeCutie - ideas & draconic font

#### Made for:
- SuPDuZz' Draconic Learning Site
- _eXeCutie's Dictionary tools' Github Pages
- LiroxDeYamon's Draconic Games hosted on SuPDuZz' Github Pages
- Everyone who want to use it!

#### Want to controbute?
You can ask to add new features, especially if you made one yourself!

# Websites using the APIs:
- https://SuPDuZz.github.io/Draconic/ - SuPDuZz' Draconic Learning Site & Draconic Alphabet iframe
- https://executiettv.github.io/Draconic/ - _eXeCutie's Dictionary tools
- https://supduzz.github.io/Draconic/lettrguessr.html - LiroxDeYamon's LettrGuessr

#### Want to include your website?
Open an issue/discussion!

# Importing order
```html
<script src="https://cdn.jsdelivr.net/gh/liroxdeyamon/DraconicAPIs/js/MainMap.js"></script>
<script src="https://cdn.jsdelivr.net/gh/liroxdeyamon/DraconicAPIs/js/CharacterMap.js"></script>
<script src="https://cdn.jsdelivr.net/gh/liroxdeyamon/DraconicAPIs/js/AffixesMap.js"></script>
<script src="https://cdn.jsdelivr.net/gh/liroxdeyamon/DraconicAPIs/js/DictionaryData.js"></script>
<script src="YourScript.js"></script>
```

Recommended to import all scripts at the bottom of the html file (Ensuring the DOM is created)

If you don't want dictionary data to be loaded, you can remove it, this will probably boost the load time.

# Font
To use the font you need to import it in css:
```css
@font-face {
  font-family: "SegoeUIDrac";
  src: url("https://cdn.jsdelivr.net/gh/liroxdeyamon/DraconicAPIs/font/SegoeUIDrac.ttf") format("truetype");
}
```

And afterwards use it on any needed tag:
```css
tag {
  font-family: "SegoeUIDrac", sans-serif;
}
```

The font was provided by _eXeCutie: https://github.com/eXeCutieTTV/Draconic/tree/main/fontdownload

# MainMap.js
```js
GENDERS = {
    E: { NAME: "Exalted", SHORT: "e" },
    R: { ... },
    MON: { ... },
    I: { ... },
    MAG: { ... },
    MUN: { ... },
    A: { ... } // /\(/o.o\)/\ - Spooky the spider
}
// Example usage:
// GENDERS.E.NAME

NUMBERS = {
    S: "Singular",
    D: "Dual",
    P: "Plural"
}
// Example usage:
// NUMBERS.S

MOODS = {
    D: "Directive",
    R: "Recessive",
}
// Example usage:
// MOODS.D

TARGETS = {
    S: "Subject",
    O: "Object",
}
// Example usage:
// TARGETS.S
```

# CharacterMap.js
CHARACTERS is a list consisting of Character class:
```js
new Character({
    name,
    name_ipa,
    letter,
    letter_rom,
    letter_ipa, // actual data is provided by SuPDuZz
    letter_glyph,
    letter_discord,
    text = mainText, // actual data is provided by SuPDuZz
    prop = [],
    table_prop = {}, // used by SuPDuZz' alphabet sheet
    allophones = {},
    sound = null // sounds are provided by SuPDuZz and are hosted on their github pages
})
```

Example:
```js
  new Character({ // 0
    name: "toru", name_ipa: "/t̪oru/",
    letter: "t", letter_rom: ["t"], letter_ipa: "/t̪/", letter_glyph: "\uE000", letter_discord: ":t_:",
    text: mainText,
    prop: [REG.CONSONANT],
    allophones: {
        "/t̪̚/": allophones["word-final"],
    },
    sound: soundPath+"0-0.mp3"
  }),
```

## Functions:
```yaml
get_random_entry(vowels = true, consonants = true, pyric_vowels = true, pyric_consonants = true)
    Inputs: vowels:Boolean, consonants:Boolean, pyric_vowels:Boolean, pyric_consonants:Boolean
    Returns: Random Character with filtering | null

entries_from_field(text, fieldNames, filter_brackets = false)
    Inputs: text:String, fieldNames:String[], filter_brackets:Boolean
    Returns: Character[] from text using fields specified in fieldNames, adds REG.OPTIONAL to parenthesized entries if filter_brackets == true

any_text_to_entries(text)
    Inputs: text:String
    Returns: entries_from_field(text, ["letter","letter_rom","letter_discord","letter_glyph"])

text_to_entries(text)
    Inputs: text:String
    Returns: entries_from_field(text, ["letter","letter_rom"])

discord_to_entries(text)
    Inputs: text:String
    Returns: entries_from_field(text, ["letter_discord"])

glyphs_to_entries(text)
    Inputs: text:String
    Returns: entries_from_field(text, ["letter_glyph"])

entries_to_glyphs(entries)
    Inputs: entries:Character[]
    Returns: String created by joining all entries' letter_glyph fields

entries_to_rom(entries)
    Inputs: entries:Character[]
    Returns: String created by joining all entries' letter_rom fields

entries_to_text(entries)
    Inputs: entries:Character[]
    Returns: String created by joining all entries' letter fields

entries_to_discord(entries)
    Inputs: entries:Character[]
    Returns: String created by joining all entries' letter_discord fields

get_entry_by_id(id)
    Inputs: id:Number
    Returns: Character | null from CHARACTERS by index

get_entry_by_field(text, field, arrayField = false)
    Inputs: text:String, field:String, arrayField:Boolean
    Returns: Character | null with field value that matches start of text; longest match wins

get_entry_by_letter(text)
    Inputs: text:String
    Returns: get_entry_by_field(text, "letter")

get_entry_by_rom(text)
    Inputs: text:String
    Returns: get_entry_by_field(text, "letter_rom", true)

get_entry_by_glyph(text)
    Inputs: text:String
    Returns: get_entry_by_field(text, "letter_glyph")

get_entry_by_discord(text)
    Inputs: text:String
    Returns: get_entry_by_field(text, "letter_discord")

get_pyric_equivalent(entry)
    Inputs: entry:Character
    Returns: Character | null vowel that is pyric equivalent
```

## REG
Just a registry:
- REG.VOWEL - is the letter a vowel
- REG.CONSONANT - is the letter a consonant
- REG.PYRIC - is the letter pyric
- REG.SHEET_IGNORE - used by SuPDuZz' alphabet sheet 
- REG.DIFFERENT - Unsure
- REG.OPTIONAL - used by AffixesMap


# AffixesMap.js
## SUFFIXES
Used by nouns

```js
SUFFIXES = {
  [MOODS.D]: {
    [GENDERS.E.NAME]: {
      [NUMBERS.S]: { 1: "", 2: "", 3: "", 4: "" },
      [NUMBERS.D]: { ... },
      [NUMBERS.P]: { ... }
    },
    [GENDERS.R.NAME]: { ... },
    [GENDERS.MON.NAME]: { ... },
    [GENDERS.I.NAME]: { ... },
    [GENDERS.MAG.NAME]: { ... },
    [GENDERS.MUN.NAME]: { ... },
    [GENDERS.A.NAME]: { ... }
  },
  [MOODS.R]: { ... }
}

// Example usage:
// SUFFIXES[MOODS.D][GENDERS.E.NAME][NUMBERS.S][1]
```

## VERB_SUBJECT_PREFIXES
Used by verbs

```js
VERB_SUBJECT_PREFIXES = {
    1: {
        [NUMBERS.S]: { [GENDERS.E.NAME]: "", [GENDERS.R.NAME]: "", [GENDERS.MON.NAME]: "", [GENDERS.I.NAME]: "", [GENDERS.MAG.NAME]: "", [GENDERS.MUN.NAME]: "", [GENDERS.A.NAME]: "" },
        [NUMBERS.D]: { ... },
        [NUMBERS.P]: { ... }
    },
    2: {
        ...
    },
    3: {
        ...
    }
}

// Example usage:
// VERB_SUBJECT_PREFIXES[1][NUMBERS.S][GENDERS.E.NAME]
```

## VERB_SUBJECT_PREFIXES
Used by verbs

```js
VERB_OBJECT_SUFFIXES = {
    1: {
        [NUMBERS.S]: { [GENDERS.E.NAME]: "", [GENDERS.R.NAME]: "", [GENDERS.MON.NAME]: "", [GENDERS.I.NAME]: "", [GENDERS.MAG.NAME]: "", [GENDERS.MUN.NAME]: "", [GENDERS.A.NAME]: "" },
        [NUMBERS.D]: { ... },
        [NUMBERS.P]: { ... }
    },
    2: {
        ...
    },
    3: {
        ...
    }
}

// Example usage:
// VERB_OBJECT_SUFFIXES[1][NUMBERS.S][GENDERS.E.NAME]
```

## PRONOUNS
in progress

## FUNCTIONS
```yaml
connect_split(prefix = "", text = "", suffix = "")
    Inputs: prefix:String, text:String, suffix:String
    Returns: [prefix_entries, text_entries, suffix_entries] with rules applied

connect(prefix = "", text = "", suffix = "")
    Inputs: prefix:String, text:String, suffix:String
    Returns: Combined Character[] from connect_split

connect_suffix(text, suffix)
    Inputs: text:String, suffix:String
    Returns: Character[] from connect("", text, suffix)

connect_prefix(text, prefix)
    Inputs: text:String, prefix:String
    Returns: Character[] from connect(prefix, text, "")

```

# DictionaryData.js
There are NOUNS, VERBS, ADJECTIVES, ADVERBS, AUXILIARIES, PREPOSITIONS, PARTICLES being a key-value pairs of:

```js
"noun+declesion": new Noun({
  word,
  declension,
  genders, // {"Gender": "meaning"}
  usage_notes
}) // "æklū1": new Noun("æklū", 1, {'Mundane': 'salt', 'Abstract': 'saltiness, salinity'}, ""),

"verb": new Verb({
  word,
  defenition,
  froms,
  usage_notes
}) // "æf": new Verb("æf", "to denounce, to insult; to spit, to spit upon", "æfad, āf, āfad", ""),

"adjective+declesion": new Adjective({
  word,
  declesion,
  defenition,
  froms,
  usage_notes
}) // "æklôħ1": new Adjective("æklôħ", 1, "salted, salty; well-seasoned", "āklôħ", ""),

"adverb": new Adverb({
  word,
  defenition,
  froms,
  usage_notes
}) // "ax": new Adverb("ax", "not; negates verbs and regular auxiliaries", "nan", "- Is not used with lur 'to be,' as both a verb and an auxiliary. Negative copula q̇em is used instead "),

"auxiliary": new Auxiliary({
  word,
  defenition,
  froms,
  usage_notes
}) // "āhk": new Auxiliary("āhk", "do not! (prohibitive)", "defective", "- always in the second person"),

"preposition": new Preposition({
  word,
  defenition,
  usage_notes
}) // "æze-": new Preposition("æze-", "through", ""),

"particle": new Particle({
  word,
  defenition,
  usage_notes
}) // "ān": new Particle("ān", "optional noun suffix on animate roots to specify feminine", "- rare"),
```