var OrdinaryPeople = require("./OrdinaryPeople.js");
var NoArmor = require("./NoArmor.js");
var NoWeapon = require("./NoWeapon.js");
var Attack = require("./Attack.js");


function Soldier(name, blood, beat, weapon, armor) {
    OrdinaryPeople.call(this, name, blood, beat);
    this.weapon = weapon || new NoWeapon();
    this.armor = armor || new NoArmor();
}

Soldier.prototype = Object.create(OrdinaryPeople.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.makeAnAttack = function () {
    var AP = this.getAP(),
        buff = this.weapon.getBuff();
    attackMsg = buff.getAttackMsg(this.name);
    return attack = new Attack(AP, buff, attackMsg);
};

Soldier.prototype.getWeaponUseMsg = function () {
    return this.weapon.beUseMsg();
};

Soldier.prototype.getAP = function () {
    return this.AP + this.weapon.AP;
};

Soldier.prototype.getDP = function () {
    return this.armor.getDP();
};

Soldier.prototype.getRole = function () {
    return "战士";
};

module.exports = Soldier;
