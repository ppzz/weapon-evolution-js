var NoBuff = require("./NoBuff.js");

function Attack(AP, debuff, attackerName) {
    this.AP = AP;
    this.buff = debuff || new NoBuff();
    this.attackerName = attackerName;
}

module.exports = Attack;