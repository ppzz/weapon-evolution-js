var NoFeature = require("./NoFeature.js");

function Weapon(name, AP, feature) {
    this.name = name;
    this.AP = AP;
    this.feature = feature || new NoFeature();
}

Weapon.prototype.getWeaponStr = function () {
    return "用" + this.name;
};

Weapon.prototype.getFeature = function () {
    return this.feature.name;
};

module.exports = Weapon;