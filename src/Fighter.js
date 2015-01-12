/**
 * Created by zp on 15-1-11.
 */
var Human=require("./Human.js");
var NullDefense = require("./NullDefense.js");
var NullWeapon = require("./NullWeapon.js");
function Fighter(name,blood,beat,weapon,defense){
    Human.call(this,name,blood,beat);
    this.weapon = weapon||new NullWeapon();
    this.defense = defense||new NullDefense();
}

Fighter.prototype=Object.create(Human.prototype);
Fighter.prototype.constructor=Fighter;

Fighter.prototype.getRole=function(){
    return "战士";
};

Fighter.prototype.getWeaponStr=function(){
    var weaponStr="";
    weaponStr += this.weapon.getWeaponStr();
    return weaponStr + "攻击了";
};

Fighter.prototype.getHurt=function(){
    var hurt=this.beat;
    hurt+=this.weapon.AP;
    return hurt;
};

Fighter.prototype.damage=function(ap){
    var hurt=ap;
    hurt-=this.defense.DP;
    if(hurt<0){
        hurt=0;
    }
    this.blood-=hurt;
    return hurt;
};

module.exports = Fighter;