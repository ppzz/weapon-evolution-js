/**
 * Created by zp on 15-1-11.
 */

function Weapon(name,AP){
    this.name = name;
    this.AP = AP;
}

Weapon.prototype.getWeaponStr = function(){
    return "用"+this.name;
};

module.exports = Weapon;