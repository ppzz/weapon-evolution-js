var Attack = require("./Attack.js");
var Harm = require("./Harm.js");
var NoFeature = require("./NoBuff.js");

function OrdinaryPeople(name, blood, AP, deBuff) {
    this.name = name;
    this.blood = blood;
    this.AP = AP;
    this.deBuff = deBuff ? deBuff : new NoFeature();
}

OrdinaryPeople.prototype.getRole = function () {
    return "普通人";
};

OrdinaryPeople.prototype.getAttack = function () {
    var attack = new Attack(this.getAP());
    return attack;
};

OrdinaryPeople.prototype.attack = function (beAttackedMan) {
    var s = this.deBuff.featureInjury(this);
    if(this.deBuff.times <= 0){
        this.deBuff = undefined;
    }
    if (this.blood <= 0) {
        return s;
    }
    if(s){
        s += "\n";
    }
    var injury = beAttackedMan.beAttack(this.getAttack());
    return s + this.getAttackText(beAttackedMan, injury);
};

OrdinaryPeople.prototype.getAP = function () {
    return this.AP;
};

OrdinaryPeople.prototype.getAttackStr = function () {
    return "攻击了";
};

OrdinaryPeople.prototype.getAttackText = function (beAttackedMan, injury) {
    return this.getRole() +
        this.name +
        this.getAttackStr() +
        beAttackedMan.getRole() +
        beAttackedMan.name + "," +
        beAttackedMan.name + "受到了" +
        injury.hurt + "点伤害," +
        injury.featureStr +
        beAttackedMan.name + "剩余生命：" +
        beAttackedMan.blood;
};

OrdinaryPeople.prototype.beAttack = function (attack) {
    this.blood -= attack.AP;
    var featureStr = attack.deBuff.getFeatureStr(this);
    this.deBuff = attack.deBuff;
    return new Harm(attack.AP, featureStr);
};

OrdinaryPeople.prototype.isAlive = function () {
    return this.blood > 0;
};

module.exports = OrdinaryPeople;