function InjuryMsg(AP, buffStr) {
    this.hurt = AP;
    this.buffStr = buffStr || "";
}

module.exports = InjuryMsg;