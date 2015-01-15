var Attack = require("./Attack.js");
var DeBuffInjuryMsg = require("./DeBuffInjuryMsg.js");
var Injury = require("./Injury.js");
var NoBuff = require("./NoBuff.js");

function OrdinaryPeople(name, blood, AP, deBuff) {
    this.name = name;
    this.blood = blood;
    this.AP = AP;
    this.deBuff = deBuff ? deBuff : new NoBuff();
}

OrdinaryPeople.prototype.getRole = function () {
    return "普通人";
};

OrdinaryPeople.prototype.getAnAttack = function () {
    var attack = new Attack(this.getAP());
    return attack;
};

OrdinaryPeople.prototype.beat = function (beBeatMan) {
    var deBuffInjuryMsg = this.deBuff.buffInjury(this);
    if (this.deBuff.times <= 0) {
        this.deBuff = undefined;
    }
    if (this.blood <= 0) {
        return deBuffInjuryMsg;
    }
    if (deBuffInjuryMsg) {
        deBuffInjuryMsg += "\n";
    }
    var injury = beBeatMan.beBeat(this.getAnAttack());
    return deBuffInjuryMsg + this.getBeatMsg(beBeatMan, injury);
};

OrdinaryPeople.prototype.getAP = function () {
    return this.AP;
};

OrdinaryPeople.prototype.getWeaponStr = function () {
    return "";
};

OrdinaryPeople.prototype.getBeatMsg = function (beBeatMan, injury) {
    return this.getRole() +
        this.name +
        this.getWeaponStr() + "攻击了" +
        beBeatMan.getRole() +
        beBeatMan.name + "," +
        beBeatMan.name + "受到了" +
        injury.hurt + "点伤害," +
        injury.buffStr +
        beBeatMan.name + "剩余生命：" +
        beBeatMan.blood;
};

OrdinaryPeople.prototype.takeInjury = function (injury) {

};

OrdinaryPeople.prototype.beBeat = function (attack) {
    var injury = new Injury(attack, 0);
    this.takeInjury(injury);
    return new DeBuffInjuryMsg(attack.AP, this.deBuff.getDeBuffMsg(this));
};

OrdinaryPeople.prototype.takeInjury = function (injury) {
    this.blood -= injury.bloodDrop;
    this.addDeBuff(injury.deBuff);
};

OrdinaryPeople.prototype.addDeBuff = function (deBuff) {
    this.deBuff = deBuff;
};

OrdinaryPeople.prototype.isAlive = function () {
    return this.blood > 0;
};

module.exports = OrdinaryPeople;