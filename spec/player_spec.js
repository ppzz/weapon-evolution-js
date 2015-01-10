var m = require('jsmockito').JsMockito;
//var Player = require('../src/player.js');
// about jsmockito : https://github.com/cleishm/jsmockito

describe("player", function(){
    it("game spec", function(){

        //var mocked_console = m.spy(console);
        //
        //mocked_console.log("李四被打败了.");
        //
        //m.verify(mocked_console).log("李四被打败了.");

        var zhang=new fighter('张三',100,20);
        var li=new fighter('李四',100,20);
        var mocked=m.spy(console);
        beats(zhang,li,mocked);
        m.verify(mocked).log("李四被打败了");

    });
});


