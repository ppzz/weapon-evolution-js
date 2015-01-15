var OrdinaryPeople = require("./OrdinaryPeople.js");
var NoArmor = require("./NoArmor.js");
var NoWeapon = require("./NoWeapon.js");
var InjuryMsg = require("./DeBuffInjuryMsg.js");
var Attack = require("./Attack.js");
var Injury = require("./Injury.js");


function Soldier(name, blood, beat, weapon, defense) {
    OrdinaryPeople.call(this, name, blood, beat);
    this.weapon = weapon || new NoWeapon();
    this.armor = defense || new NoArmor();
}

Soldier.prototype = Object.create(OrdinaryPeople.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.getAnAttack = function () {
    return attack = new Attack(this.getAP(), this.weapon.deBuff);
};

Soldier.prototype.getRole = function () {
    return "战士";
};

Soldier.prototype.getAP = function () {
    return this.AP + this.weapon.AP;
};

Soldier.prototype.getDP=function(){
    return this.armor.getDP();
};

Soldier.prototype.getWeaponStr = function () {
    return this.weapon.getWeaponUseStr();
};

module.exports = Soldier;
