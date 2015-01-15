var OrdinaryPeople = require("./OrdinaryPeople.js");
var NoArmor = require("./NoArmor.js");
var NoWeapon = require("./NoWeapon.js");
var DeBuffInjuryMsg = require("./DeBuffInjuryMsg.js");
var Attack = require("./Attack.js");

function Soldier(name, blood, beat, weapon, defense) {
    OrdinaryPeople.call(this, name, blood, beat);
    this.weapon = weapon || new NoWeapon();
    this.armor = defense || new NoArmor();
}

Soldier.prototype = Object.create(OrdinaryPeople.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.beBeat = function (attack) {
    var hurt = attack.AP - this.armor.DP;
    if (hurt < 0) {
        hurt = 0;
    }
    this.blood -= hurt;
    return new DeBuffInjuryMsg(hurt, '');
};

Soldier.prototype.getAnAttack = function () {
    return attack = new Attack(this.getAP(), this.weapon.deBuff);
};

Soldier.prototype.getRole = function () {
    return "战士";
};

Soldier.prototype.getAP = function () {
    return this.AP + this.weapon.AP;
};
return this.weapon.getWeaponUseStr();


Soldier.prototype.getWeaponStr = function () {
};

module.exports = Soldier;
