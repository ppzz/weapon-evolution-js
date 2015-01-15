var NoBuff = require("./NoBuff.js");

function Attack(AP, debuff) {
    this.AP = AP;
    this.deBuff = debuff || new NoBuff();
}

module.exports = Attack;