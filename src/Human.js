function Human(name, blood, AP){
    this.name = name;
    this.blood = blood;
    this.AP = AP;
}

Human.prototype.getRole=function(){
    return "普通人";
};

Human.prototype.attack=function(beAttackedMan){
    var hurt = beAttackedMan.beAttack(this.getAP());
    return this.getBeatText(beAttackedMan, hurt);
};

Human.prototype.getAP=function(){
    return this.AP;
};

Human.prototype.getAttackStr=function(){
    return "攻击了";
};

Human.prototype.getBeatText=function(fighter,hurt){
    return this.getRole()+this.name +this.getAttackStr()+fighter.getRole()+fighter.name+","+
        fighter.name+"受到了"+hurt+"点伤害,"+fighter.name+"剩余生命："+fighter.blood;
};

Human.prototype.beAttack=function(AP){
    this.blood -= AP;
    return AP;
};

Human.prototype.isAlive=function(){
    return this.blood>0;
};

module.exports = Human;