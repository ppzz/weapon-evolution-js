var Attack = require("./Attack.js");
var Injury = require("./Injury.js");
var NoFeature = require("./NoFeature.js");

function OrdinaryPeople(name, blood, AP, feature) {
    this.name = name;
    this.blood = blood;
    this.AP = AP;
    this.feature = feature ? feature : new NoFeature();
}

OrdinaryPeople.prototype.getRole = function () {
    return "普通人";
};

OrdinaryPeople.prototype.getAttack = function () {
    var attack = new Attack(this.getAP());
    return attack;
};

OrdinaryPeople.prototype.attack = function (beAttackedMan) {
    var s = this.feature.featureInjury(this);
    if(this.feature.times <= 0){
        this.feature = undefined;
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
    var featureStr = attack.feature.getFeatureStr(this);
    this.feature = attack.feature;
    return new Injury(attack.AP, featureStr);
};

OrdinaryPeople.prototype.isAlive = function () {
    return this.blood > 0;
};

module.exports = OrdinaryPeople;