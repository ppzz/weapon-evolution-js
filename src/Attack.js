var NoBuff = require("./NoBuff.js");

function Attack(AP, debuff, attackMsg) {
    this.AP = AP;
    this.buff = debuff || new NoBuff();
    this.attackMsg = attackMsg || "";
}

module.exports = Attack;