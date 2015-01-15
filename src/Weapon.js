var NoBuff = require("./NoBuff.js");

function Weapon(name, AP, feature) {
    this.name = name;
    this.AP = AP;
    this.deBuff = feature || new NoBuff();
}

Weapon.prototype.getWeaponUseStr = function () {
    return "用" + this.name;
};

module.exports = Weapon;