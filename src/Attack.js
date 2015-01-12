var NoFeature = require("./NoFeature.js");

function Attack(AP, feature) {
    this.AP = AP;
    this.feature = feature || new NoFeature();
}

module.exports = Attack;