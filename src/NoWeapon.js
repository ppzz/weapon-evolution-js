var NoBuff = require("./NoBuff.js");

function NoWeapon() {
    this.AP = 0;
}

NoWeapon.prototype.beUseMsg = function () {
    return "";
};

NoWeapon.prototype.getBuff=function(){
    return new NoBuff();
};

NoWeapon.prototype.setBuff=function(buff){
    return ;
};

module.exports = NoWeapon;
