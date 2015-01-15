var NoFeature = require("./NoBuff.js");

function Attack(AP, feature) {
    this.AP = AP;
    this.deBuff = feature || new NoFeature();
}

module.exports = Attack;