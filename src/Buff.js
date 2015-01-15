function Buff(name, typeOfInjury, hurt, times) {
    this.name = name;
    this.typeOfInjury = typeOfInjury;
    this.hurt = hurt;
    this.times = times;
}

Buff.prototype.getFeatureStr = function (human) {
    return human.name + this.name + "了,";
};

Buff.prototype.featureInjury = function (beInjuryedMan) {
    beInjuryedMan.blood -= this.hurt;
    this.times--;
    return beInjuryedMan.name + "受到" +
        this.hurt + "点" +
        this.typeOfInjury + "伤害," +
        beInjuryedMan.name + "剩余生命：" +
        beInjuryedMan.blood;
};

module.exports = Buff;