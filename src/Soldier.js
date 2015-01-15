var Human = require("./OrdinaryPeople.js");
var NoArmor = require("./NoArmor.js");
var NoWeapon = require("./NoWeapon.js");
var Injury = require("./Injury.js");
var Attack = require("./Attack.js");

function Fighter(name, blood, beat, weapon, defense) {
    Human.call(this, name, blood, beat);
    this.weapon = weapon || new NoWeapon();
    this.armor = defense || new NoArmor();
}

Fighter.prototype = Object.create(Human.prototype);
Fighter.prototype.constructor = Fighter;

Fighter.prototype.getRole = function () {
    return "战士";
};

Fighter.prototype.getAttackStr = function () {
    return this.weapon.getWeaponStr() + "攻击了";
};

Fighter.prototype.getAP = function () {
    return this.AP + this.weapon.AP;
};

Fighter.prototype.beAttack = function (attack) {
    var hurt = attack.AP - this.armor.DP;
    if (hurt < 0) {
        hurt = 0;
    }
    this.blood -= hurt;
    return new Injury(hurt, '');
};

Fighter.prototype.getAttack = function () {
    return attack = new Attack(this.getAP(), this.weapon.feature);
};

module.exports = Fighter;
