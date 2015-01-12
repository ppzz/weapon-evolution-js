/**
 * Created by zp on 15-1-12.
 */
function NullWeapon(){
    this.AP = 0;
}

NullWeapon.prototype.getWeaponStr = function(){
    return "";
};

module.exports = NullWeapon;
