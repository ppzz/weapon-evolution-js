function gameStart(manA, manB, logger) {
    var content = '';
    while (manA.isAlive() && manB.isAlive()) {
        content += (manA.beat(manB) + "\n");
        if (manB.isAlive()) {
            content += (manB.beat(manA) + "\n");
        }
    }
    if (manA.isAlive()) {
        logger.log(content + manB.name + "被打败了");
    } else {
        logger.log(content + manA.name + "被打败了");
    }
}

module.exports = gameStart;