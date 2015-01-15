function Armor(name, DP) {
    this.name = name;
    this.DP = DP;
}

Armor.prototype.getDP=function(){
    return this.DP;
};


module.exports = Armor;