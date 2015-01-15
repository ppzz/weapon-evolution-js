function DeBuffInjuryMsg(AP, buffStr) {
    this.hurt = AP;
    this.buffStr = buffStr || "";
}

module.exports = DeBuffInjuryMsg;