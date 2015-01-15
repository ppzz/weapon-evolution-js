function Injury(attack, DP) {
    var bloodDrop = attack.AP - DP,
        bloodDrop = attack.buff.correctAP(bloodDrop);
    this.bloodDrop = bloodDrop < 0 ? 0 : bloodDrop;
    this.buff = attack.buff;
}

module.exports = Injury;