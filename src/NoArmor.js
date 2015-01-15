function NoArmor() {
    this.DP = 0;
}

NoArmor.prototype.getDP=function(){
    return this.DP;
};


module.exports = NoArmor;