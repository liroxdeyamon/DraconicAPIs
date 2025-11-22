# DraconicAPIs
A collection of JavaScript modules designed for smooth and easy usage of human1011’s conlang -- The Draconic Language.

## License
© 2025 LiroxDeYamon  
Licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

This project includes usage of *The Draconic Language*, which is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).  
All rights to *The Draconic Language* belong to [**human1011**](https://www.youtube.com/channel/UCNtThoaq14pIorP2OmArt5w).

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
<script src="https://draconicconlang.github.io/APIs/dialects/DialectLoader.js"></script>
<script src="YourScript.js"></script>
```

Recommended importing all scripts at the bottom of the HTML file (Ensuring the DOM is created)

Then you can load the dialect of your choice (replace "dr_dr") inside your JS file:

```js
DIALECTS.load("dr_dr").then(DR => {
  Object.assign(globalThis, DR);
});
```

If you don't want dictionary data to be loaded, you can remove it like:

```js
DIALECTS.load("dr_dr", false).then(DR => {
  Object.assign(globalThis, DR);
});
```

This will probably boost the load time.

# Font
To use the font you need to import it in css:
```css
@font-face {
  font-family: "SegoeUIDrac";
  src: url("https://draconicconlang.github.io/APIs/dialects/dr_dr/assets/font/font.ttf") format("truetype");
}
```

And afterwards use it on any needed tag:
```css
tag {
  font-family: "Draconic", sans-serif;
}
```

The font was provided by _eXeCutie: https://github.com/eXeCutieTTV/Draconic/tree/main/fontdownload
