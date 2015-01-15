var NoBuff = require("./NoBuff.js");

function Weapon(name, AP, buff) {
    this.name = name;
    this.AP = AP;
    this.buff = buff || new NoBuff();
}

Weapon.prototype.getWeaponUseStr = function () {
    return "用" + this.name;
};

Weapon.prototype.getBuff=function(){
    return this.buff;
};

Weapon.prototype.setBuff=function(buff){
    return this.buff = buff;
};

module.exports = Weapon;