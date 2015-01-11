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

Fighter.prototype.beats=function(fighter){
    var hurt=this.beat;
    if(this.weapon){
        hurt+=this.weapon.AP;
    }
    if(fighter.defense){
        hurt-=fighter.defense.DP;
    }
    if(hurt<0){
        hurt=0;
    }
    fighter.blood-=hurt;
    var weaponText="";
    if(this.weapon){
        weaponText+="用"+this.weapon.name;
    }
    return this.getRole()+this.name +weaponText+"攻击了"+fighter.getRole()+fighter.name+","+
        fighter.name+"受到了"+hurt+"点伤害,"+fighter.name+"剩余生命："+fighter.blood;
};

module.exports = Fighter;