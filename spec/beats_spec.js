var m = require('jsmockito').JsMockito;
var Fighter = require("../src/Fighter.js");
var beats = require("../src/beats.js");

//var Player = require('../src/player.js');about jsmockito : https://github.com/cleishm/jsmockito

describe("player", function(){
    it("game spec", function(){
        var li=new Fighter('李四',100,20);
        var zhang=new Fighter('张三',100,20);
        var mocked=m.spy(console);

        beats(zhang,li,mocked);
        m.verify(mocked).log("李四被打败了");

    });
});
