var NoFeature = require("./NoBuff.js");

function Weapon(name, AP, feature) {
    this.name = name;
    this.AP = AP;
    this.deBuff = feature || new NoFeature();
}

Weapon.prototype.getWeaponStr = function () {
    return "用" + this.name;
};

Weapon.prototype.getFeature = function () {
    return this.deBuff.name;
};

module.exports = Weapon;