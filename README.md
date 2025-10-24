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
- _eXeCutie - ideas for this project

#### Made for:
- SuPDuZz' Github Pages & Draconic Alphabet iframe
- _eXeCutie's Dictionary tools' Github Pages
- LiroxDeYamon's Draconic Games hosted on SuPDuZz' Github Pages
- Everyone who want to use it!

# Importing order
```html
<script src="https://cdn.jsdelivr.net/gh/liroxdeyamon/DraconicAPIs/MainMap.js"></script>
<script src="https://cdn.jsdelivr.net/gh/liroxdeyamon/DraconicAPIs/CharacterMap.js"></script>
<script src="https://cdn.jsdelivr.net/gh/liroxdeyamon/DraconicAPIs/AffixesMap.js"></script>
<script src="https://cdn.jsdelivr.net/gh/liroxdeyamon/DraconicAPIs/DictionaryData.js"></script>
<script src="YourScript.js"></script>
```

Recommended to import all scripts at the bottom of the html file (Ensuring the DOM is created)

If you don't want dictionary data to be loaded, you can remove it, this will probably boost the load time.

# MainMap.js


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


# DictionaryData.js

