// Locales + identifiers idk
modules = modules || []

const GENDERS = {
    E: { NAME: "Exhalted", SHORT: "e", INCLUDED: ["animates", "all"] },
    R: { NAME: "Rational", SHORT: "r", INCLUDED: ["animates", "all"] },
    MON: { NAME: "Monstrous", SHORT: "mon", INCLUDED: ["animates", "all"] },
    I: { NAME: "Irrational", SHORT: "i", INCLUDED: ["animates", "all"] },
    MAG: { NAME: "Magical", SHORT: "mag", INCLUDED: ["inanimates", "all"] },
    MUN: { NAME: "Mundane", SHORT: "mun", INCLUDED: ["inanimates", "all"] },
    A: { NAME: "Abstract", SHORT: "a", INCLUDED: ["inanimates", "all"] }// /\(/o.o\)/\ - Spooky the spider
}

const NUMBERS = {
    S: "Singular",
    D: "Dual",
    P: "Plural"
}

const MOODS = {
    D: "Directive",
    R: "Recessive",
}

const TARGETS = {
    S: "Subject",
    O: "Object",
}


modules.push("MainMap")