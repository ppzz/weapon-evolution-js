function Crit(name, critRate, times) {
    this.name = name;
    this.critRate = critRate;
    this.times = times;
}

Crit.prototype.getDeBuffMsg = function (deBuffMan) {
    return deBuffMan.name + "发动了" + this.name + ",";
};

Crit.prototype.correctAP = function (AP) {
    var correctedAP = AP;
    if (this.times) {
        correctedAP = correctedAP * this.critRate;
    }
    this.times -= 1;
    return correctedAP;
};

Crit.prototype.getAttackMsg = function (name) {
    return  name + "发动了" + this.name +",";
};


module.exports = Crit;