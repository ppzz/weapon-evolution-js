function NoBuff() {
    this.name = "";
}

NoBuff.prototype.getDeBuffMsg = function () {
    return "";
};

NoBuff.prototype.buffInjury = function (human) {
    return "";
};

NoBuff.prototype.correctAP = function (AP) {
    return AP;
};

module.exports = NoBuff;

