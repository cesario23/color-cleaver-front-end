const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!

const color1 = getInput (1);
const color2 = getInput (2);

if (!isValidPrimary (color1) && !isValidSecondary (color2)){
    console.log ("we need at least one color")
}
if (isValidPrimary(color1) || isValidSecondary (color2)){
    return colorDeconstructor;
    console.log ("your colors are" + colorDeconstructor)
}
if (isValidPrimary (color1) && isValidSecondary (color2)){
    return colorCombinator;
    console.log ("your color is:" + colorCombinator)
}
