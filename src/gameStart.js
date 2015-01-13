function gameStart(fighter1, fighter2, logger) {
    var content = '';
    while (fighter1.isAlive() && fighter2.isAlive()) {
        content += (fighter1.attack(fighter2) + "\n");
        if (fighter2.isAlive()) {
            content += (fighter2.attack(fighter1) + "\n");
        }
    }
    if (fighter1.isAlive()) {
        logger.log(content + fighter2.name + "被打败了");
    } else {
        logger.log(content + fighter1.name + "被打败了");
    }
}

module.exports = gameStart;