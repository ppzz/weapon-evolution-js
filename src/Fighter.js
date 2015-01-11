/**
 * Created by zp on 15-1-11.
 */
var Human=require("../src/Human.js");

function Fighter(name,blood,beat,weapon,defense){
    Human.call(this,name,blood,beat);
    this.weapon = weapon;
    this.defense = defense;
}

Fighter.prototype=Object.create(Human.prototype);
Fighter.prototype.constructor=Fighter;

Fighter.prototype.getRole=function(){
    return "战士";
};

Fighter.prototype.getWeaponStr=function(){
    var weaponStr="";
    if(this.weapon){
        weaponStr+="用"+this.weapon.name;
    }
    return weaponStr;
};

Fighter.prototype.beats=function(fighter){
    var hurt=this.beat;
    if(this.weapon){
        hurt+=this.weapon.AP;
    }
    hurt=fighter.damage(hurt);
    if(hurt<0){
        hurt=0;
    }
    return this.getBeatText(fighter,hurt,this.getWeaponStr());
};

module.exports = Fighter;