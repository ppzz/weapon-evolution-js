function Human(info,name, blood, beat){
    this.info = info;
    this.name = name;
    this.blood = blood;
    this.beat = beat;
}

Human.prototype.beats=function(fighter){
    //fighter.blood-=  this.beat;
    ////张三攻击了李四,李四受到了8点伤害,李四剩余生命：12
    //return (this.info+this.name+"攻击了"+fighter.info+fighter.name+","+fighter.name+"受到了"+this.beat+"点伤害,"+fighter.name+"剩余生命："+fighter.blood);
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
    return this.info+this.name +"用"+this.weapon.name+"攻击了"+fighter.info+fighter.name+","+
        fighter.name+"受到了"+hurt+"点伤害,"+fighter.name+"剩余生命："+fighter.blood;
};

Human.prototype.isAlive=function(){
    return this.blood>0;
};

module.exports = Human;