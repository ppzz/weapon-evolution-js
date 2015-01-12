var Attack = require("./Attack.js");
var Injury = require("./Injury.js");

function Human(name, blood, AP) {
    this.name = name;
    this.blood = blood;
    this.AP = AP;
};

Human.prototype.getRole = function () {
    return "普通人";
};

Human.prototype.attack = function (beAttackedMan) {
    var injury = beAttackedMan.beAttack(new Attack(this.getAP(),''));
    console.log(injury);
    return this.getAttackText(beAttackedMan, injury);
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
        injury.featureStr+
        beAttackedMan.name + "剩余生命：" +
        beAttackedMan.blood;
};

Human.prototype.beAttack = function (attack) {
    this.blood -= attack.AP;
    return new Injury(attack.AP,'');
};

Human.prototype.isAlive = function () {
    return this.blood > 0;
};

module.exports = Human;