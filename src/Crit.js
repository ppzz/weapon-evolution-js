function Crit(name,critRate,times){
    this.name = name;
    this.critRate = critRate;
    this.times = times;
}

Crit.prototype.getDeBuffMsg = function (deBuffMan) {
    return deBuffMan.name + "发动了" + this.name + ",";
};


module.exports = Crit;