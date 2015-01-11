/**
 * Created by zp on 15-1-11.
 */
var Human=require("../src/Human.js");

function Fighter(info,name,blood,beat,weapon){
    Human.call(this,info,name,blood,beat);
    this.weapon = weapon;
}

Fighter.prototype=Object.create(Human.prototype);
Fighter.prototype.constructor=Fighter;

Fighter.prototype.beats=function(fighter){
    var hurt=this.beat+this.weapon.AP;
    fighter.blood-=hurt;
    return this.info+this.name +"用"+this.weapon.name+"攻击了"+fighter.info+fighter.name+","+
        fighter.name+"受到了"+hurt+"点伤害,"+fighter.name+"剩余生命："+fighter.blood;
};

module.exports = Fighter;