function Injury(attack, DP) {
    var bloodDrop = attack.AP - DP;
    this.bloodDrop = bloodDrop < 0 ? 0 : bloodDrop;
    this.buff = attack.buff;
}

module.exports = Injury;