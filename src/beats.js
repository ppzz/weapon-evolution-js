function beats(fighter1,fighter2,logger){
    while(fighter1.blood>0 && fighter2.blood>0){
        fighter1.beats(fighter2);
        if(fighter2.isAlive()){
            fighter2.beats(fighter1);
        }
    }
    if(fighter1.isAlive()){
        logger.log(fighter2.name+"被打败了");
    }else{
        logger.log(fighter1.name+"被打败了");
    }
}

module.exports = beats;