var Attack = require("./Attack.js");
var Injury = require("./Injury.js");
var NoFeature = require("./NoFeature.js");

function Human(name, blood, AP, feature) {
    this.name = name;
    this.blood = blood;
    this.AP = AP;
    this.feature = feature ? feature : new NoFeature();
}

Human.prototype.getRole = function () {
    return "普通人";
};

Human.prototype.getAttack = function () {
    var attack = new Attack(this.getAP());
    return attack;
};

Human.prototype.attack = function (beAttackedMan) {
    var s = this.feature.featureInjury(this);
    if (this.blood <= 0) {
        return s;
    }
    s = s ? s +"\n":s;
    var injury = beAttackedMan.beAttack(this.getAttack());
    return s + this.getAttackText(beAttackedMan, injury);
};

Human.prototype.getAP = function () {
    return this.AP;
};

Human.prototype.getAttackStr = function () {
    return "攻击了";
};

Human.prototype.getAttackText = function (beAttackedMan, injury) {
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

Human.prototype.beAttack = function (attack) {
    this.blood -= attack.AP;
    var featureStr = attack.feature.getFeatureStr(this);
    this.feature = attack.feature;
    return new Injury(attack.AP, featureStr);
};

Human.prototype.isAlive = function () {
    return this.blood > 0;
};

module.exports = Human;