/**
 * Created by zp on 15-1-12.
 */
function NoWeapon() {
    this.AP = 0;
}

NoWeapon.prototype.getWeaponUseStr = function () {
    return "";
};

NoWeapon.prototype.getBuff=function(){
    return this.buff;
};

NoWeapon.prototype.setBuff=function(buff){
    return this.buff = buff;
};

module.exports = NoWeapon;
