function NoBuff() {
    this.name = "";
}

NoBuff.prototype.getDeBuffMsg = function () {
    return "";
};

NoBuff.prototype.buffInjury = function (human) {
    return "";
};

module.exports = NoBuff;

