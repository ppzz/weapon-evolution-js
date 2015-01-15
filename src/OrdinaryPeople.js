var Attack = require("./Attack.js");
var InjuryMsg = require("./DeBuffInjuryMsg.js");
var Injury = require("./Injury.js");
var NoBuff = require("./NoBuff.js");

function OrdinaryPeople(name, blood, AP, deBuff) {
    this.name = name;
    this.blood = blood;
    this.AP = AP;
    this.buff = deBuff ? deBuff : new NoBuff();
}

OrdinaryPeople.prototype.getAnAttack = function () {
    var attack = new Attack(this.getAP());
    return attack;
};

OrdinaryPeople.prototype.beat = function (beBeatMan) {
    var deBuffInjuryMsg = this.buff.buffInjury(this);
    if (this.buff.times <= 0) {
        this.buff = undefined;
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

OrdinaryPeople.prototype.beBeat = function (attack) {
    var injury = new Injury(attack, this.getDP());
    this.takeInjury(injury);
    return new InjuryMsg(injury.bloodDrop, this.buff.getDeBuffMsg(this));
};

OrdinaryPeople.prototype.takeInjury = function (injury) {
    this.blood -= injury.bloodDrop;
    this.addDeBuff(injury.buff);
};

OrdinaryPeople.prototype.addDeBuff = function (deBuff) {
    this.buff = deBuff;
};

OrdinaryPeople.prototype.isAlive = function () {
    return this.blood > 0;
};

OrdinaryPeople.prototype.getAP = function () {
    return this.AP;
};

OrdinaryPeople.prototype.getDP=function(){
    return 0;
};

OrdinaryPeople.prototype.getRole = function () {
    return "普通人";
};

module.exports = OrdinaryPeople;
