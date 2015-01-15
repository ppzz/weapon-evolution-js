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

OrdinaryPeople.prototype.beat = function (beBeatMan) {
    var selfDeBuffInjuryMsg = this.buff.buffInjury(this);
    if (this.buff.times <= 0) {
        this.buff = undefined;
    }
    if (!this.isAlive()) {
        return selfDeBuffInjuryMsg;
    }
    if (selfDeBuffInjuryMsg) {
        selfDeBuffInjuryMsg += "\n";
    }
    var injuryMsg = beBeatMan.beBeat(this.makeAnAttack());
    return selfDeBuffInjuryMsg + this.getBeatMsg(beBeatMan, injuryMsg);
};

OrdinaryPeople.prototype.getBeatMsg = function (beBeatMan, injuryMsg) {
    return this.getRole() +
        this.name +
        this.getWeaponUseMsg() + "攻击了" +
        beBeatMan.getRole() +
        beBeatMan.name + "," +
        beBeatMan.name + "受到了" +
        injuryMsg.hurt + "点伤害," +
        injuryMsg.buffStr +
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
    if (deBuff.times > 0) {
        this.buff = deBuff;
    }
};

OrdinaryPeople.prototype.isAlive = function () {
    return this.blood > 0;
};

//be rewrited by Soldier
OrdinaryPeople.prototype.makeAnAttack = function () {
    var attack = new Attack(this.getAP());
    return attack;
};

OrdinaryPeople.prototype.getWeaponUseMsg = function () {
    return "";
};

OrdinaryPeople.prototype.getAP = function () {
    return this.AP;
};

OrdinaryPeople.prototype.getDP = function () {
    return 0;
};

OrdinaryPeople.prototype.getRole = function () {
    return "普通人";
};

module.exports = OrdinaryPeople;
