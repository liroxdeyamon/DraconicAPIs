// WIP
console.warn("This module is WIP and not recommended to use, its unstable and may have incorrect information!");

if (!window.modules.includes("MainMap")) {
    throw new Error("AffixesMap requires MainMap to be loaded first.")
}

if (!window.modules.includes("CharacterMap")) {
    throw new Error("AffixesMap requires CharacterMap to be loaded first.")
}

const DIGITS = ["q̇em","χu","eχ","fo","se","aq","qah","hog","xēχ","χyz","ez","fyz","selz","agz","qaz","hyz"]; // 0-15
const DIGITS_SUFFIXES = ["","u","eχ","o","ys","aq","ga","yg"];
const DIGITS_MULTIPLES = {16:"sē",24:"fōrz",32:"sēlz",40:"qāz",48:"qōz",56:"hōz",64:"lān"};
const DIGITS_POWERS = {512: "lāran", 4_096: "xeglārn", 32_768: "táħû", 262_144: "torħû"
    , 2097152: "lāróz", 16777216: "līróz" // me suggested! :D hope not get rejected :q
}; // TODO: move in NUMBERS

NUMBERS.numberToText = function(n) {
    if (n === 0) return DIGITS[0];
    
    let parts = [];
    let remaining = n;
    
    const powers = [16777216, 2097152, 262_144, 32_768, 4_096, 512];
    for (let power of powers) {
        if (remaining >= power) {
            let count = Math.floor(remaining / power);
            remaining = remaining % power;
            
            if (count === 1) {
                parts.push(DIGITS_POWERS[power]);
            } else {
                let countStr = NUMBERS.numberToText(count);
                parts.push(countStr + " " + DIGITS_POWERS[power]);
            }
        }
    }
    
    const multiples = [64, 56, 48, 40, 32, 24, 16];
    
    for (let mult of multiples) {
        if (remaining >= mult) {
            let count = Math.floor(remaining / mult);
            remaining = remaining % mult;
            
            if (count === 1) {
                parts.push(DIGITS_MULTIPLES[mult]);
            } else {
                let countStr = NUMBERS.numberToText(count);
                parts.push(countStr + " " + DIGITS_MULTIPLES[mult]);
            }
        }
    }
    
    if (remaining > 0 && remaining <= 15) {
        if (parts.length > 0 && remaining <= 7) {
            parts[parts.length - 1] += DIGITS_SUFFIXES[remaining];
        } else {
            parts.push(DIGITS[remaining]);
        }
    }
    
    return parts.join(" si ");
}

NUMBERS.textToNumber = function(word) {
    return "NOOO DONT MAKE ME DO THIS";
}


window.modules.push("NumbersMap")