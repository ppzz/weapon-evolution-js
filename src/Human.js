function Human(name, blood, beat){
    this.name = name;
    this.blood = blood;
    this.beat = beat;
}

Human.prototype.getRole=function(){
    return "普通人";
};

Human.prototype.beats=function(fighter){
    var hurt=this.getHurt();
    hurt = fighter.damage(hurt);
    if (hurt < 0) {
        hurt = 0;
    }
    return this.getBeatText(fighter, hurt);
};

Human.prototype.getHurt=function(){
    return this.beat;
};

Human.prototype.getWeaponStr=function(){
    return "攻击了";
};

Human.prototype.getBeatText=function(fighter,hurt){
    return this.getRole()+this.name +this.getWeaponStr()+fighter.getRole()+fighter.name+","+
        fighter.name+"受到了"+hurt+"点伤害,"+fighter.name+"剩余生命："+fighter.blood;
};

Human.prototype.damage=function(hurt){
    var hurt=hurt;
    if(this.defense){
        hurt-=this.defense.DP;
    }
    if(hurt>0){
        this.blood-=hurt;
    }
    return hurt;
};

Human.prototype.isAlive=function(){
    return this.blood>0;
};

module.exports = Human;