// There be experimental features
console.warn("This module is Experimental and not recommended to use, its unstable and may have incorrect information!");

class FetchResult {
    constructor(word, prefix, suffix, perfect_match) {
        this.word = word
        this.prefix = prefix
        this.suffix = suffix
        this.perfect_match = perfect_match
    }
}

function perfectMatch(word) {
    const match = DICTIONARY.ALL_WORDS.MAP[word];
    if (!match) return null;
    return new FetchResult(DICTIONARY.ALL_WORDS.MAP[word], null, null, true);
}


function fetchOrigin(word) {
    let result = [];

    let match = perfectMatch(word);
    if (match) return match


    const preposition = AFFIXES.PREFIXES.match(word, DICTIONARY.PREPOSITIONS.MAP);
    if (preposition) {
        word = word.slice(preposition.length);
        result.push(new FetchResult(PREPOSITIONS.MAP[preposition]));
    }

    match = perfectMatch(word);
    if (match) return [...result, match]

    const noun_suffix = AFFIXES.SUFFIXES.match(word, DICTIONARY.NOUNS.SUFFIXES.FLAT_MATCHES);
    if (noun_suffix) {
        const fetched_noun = DICTIONARY.ALL_WORDS.fetch(word.slice(0, -noun_suffix.length))
        if (fetched_noun) return [...result, new FetchResult(fetched_noun[0], noun_suffix, null, false)]
    }

    return null
}

function fetchOrigins(text) {

}

function testFetchOrigin() {

}