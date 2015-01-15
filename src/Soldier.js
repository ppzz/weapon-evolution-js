var OrdinaryPeople = require("./OrdinaryPeople.js");
var NoArmor = require("./NoArmor.js");
var NoWeapon = require("./NoWeapon.js");
var Injury = require("./Injury.js");
var Attack = require("./Attack.js");

function Soldier(name, blood, beat, weapon, defense) {
    OrdinaryPeople.call(this, name, blood, beat);
    this.weapon = weapon || new NoWeapon();
    this.armor = defense || new NoArmor();
}

Soldier.prototype = Object.create(OrdinaryPeople.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.getRole = function () {
    return "战士";
};

Soldier.prototype.getAttackStr = function () {
    return this.weapon.getWeaponStr() + "攻击了";
};

Soldier.prototype.getAP = function () {
    return this.AP + this.weapon.AP;
};

Soldier.prototype.beAttack = function (attack) {
    var hurt = attack.AP - this.armor.DP;
    if (hurt < 0) {
        hurt = 0;
    }
    this.blood -= hurt;
    return new Injury(hurt, '');
};

Soldier.prototype.getAttack = function () {
    return attack = new Attack(this.getAP(), this.weapon.feature);
};

module.exports = Soldier;
