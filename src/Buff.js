function Buff(name, typeOfInjury, hurt, times) {
    this.name = name;
    this.typeOfInjury = typeOfInjury;
    this.hurt = hurt;
    this.times = times;
}

Buff.prototype.getDeBuffMsg = function (human) {
    return human.name + this.name + "了,";
};

Buff.prototype.buffInjury = function (deBuffMan) {
    if (this.times > 0) {
    }

    deBuffMan.blood -= this.hurt;
    this.times--;
    return deBuffMan.name + "受到" +
        this.hurt + "点" +
        this.typeOfInjury + "伤害," +
        deBuffMan.name + "剩余生命：" +
        deBuffMan.blood;
};

Buff.prototype.correctAP = function (AP) {
    return AP;
};

Buff.prototype.getAttackMsg = function (name) {
    return "";
};

module.exports = Buff;