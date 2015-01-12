function Human(name, blood, AP) {
    this.name = name;
    this.blood = blood;
    this.AP = AP;
}

Human.prototype.getRole = function () {
    return "普通人";
};

Human.prototype.attack = function (beAttackedMan) {
    var hurt = beAttackedMan.beAttack(this.getAP());
    return this.getAttackText(beAttackedMan, hurt);
};

Human.prototype.getAP = function () {
    return this.AP;
};

Human.prototype.getAttackStr = function () {
    return "攻击了";
};

Human.prototype.getAttackText = function (beAttackedMan, hurt) {
    return this.getRole() + this.name + this.getAttackStr() + beAttackedMan.getRole() + beAttackedMan.name + "," +
        beAttackedMan.name + "受到了" + hurt + "点伤害," + beAttackedMan.name + "剩余生命：" + beAttackedMan.blood;
};

Human.prototype.beAttack = function (AP) {
    this.blood -= AP;
    return AP;
};

Human.prototype.isAlive = function () {
    return this.blood > 0;
};

module.exports = Human;