function Fighter(name, blood, beat){
    this.name = name;
    this.blood = blood;
    this.beat = beat;
}

Fighter.prototype.beats=function(fighter){
    fighter.blood-=  this.beat;
};

Fighter.prototype.isAlive=function(){
    return this.blood>0;
};

module.exports = Fighter;