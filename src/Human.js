function Human(name, blood, beat){
    this.name = name;
    this.blood = blood;
    this.beat = beat;
}

Human.prototype.getRole=function(){
    return "普通人";
};

Human.prototype.beats=function(fighter){
    var hurt=this.beat;
    if(fighter.defense){
        hurt-=fighter.defense.DP;
    }
    if(hurt<0){
        hurt=0;
    }
    fighter.blood-=hurt;
    return this.getRole()+this.name +"攻击了"+fighter.getRole()+fighter.name+","+
        fighter.name+"受到了"+hurt+"点伤害,"+fighter.name+"剩余生命："+fighter.blood;
};

Human.prototype.isAlive=function(){
    return this.blood>0;
};

module.exports = Human;