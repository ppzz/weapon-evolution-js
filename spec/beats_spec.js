var m = require('jsmockito').JsMockito;
var Weapon = require("../src/Weapon.js");
var Human = require("../src/Human.js");
var Fighter = require("../src/Fighter.js");
var gameStart = require("../src/gameStart.js");


xdescribe("player Human VS Human", function(){
    it("game spec", function(){
        //given
        var li=new Human('普通人','李四',20,9);
        var zhang=new Human('普通人','张三',10,8);

        //when
        var s=zhang.beats(li);

        //then
        var exp="张三攻击了李四,李四受到了8点伤害,李四剩余生命：12";
        expect(s).toBe(exp);
    });

    it("game spec V2",function(){
        var li=new Human('普通人','李四',20,9);
        var zhang=new Human('普通人','张三',10,8);
        var logger= m.spy(console);

        gameStart(zhang,li,logger);

        var exp="张三攻击了李四,李四受到了8点伤害,李四剩余生命：12\n" +
            "李四攻击了张三,张三受到了9点伤害,张三剩余生命：1\n" +
            "张三攻击了李四,李四受到了8点伤害,李四剩余生命：4\n" +
            "李四攻击了张三,张三受到了9点伤害,张三剩余生命：-8\n" +
            "张三被打败了";
        m.verify(logger).log(exp);
    });
});

describe("player Fighter VS Human", function(){
    it("game spec - fighter beats human ", function(){
        //given
        var woodBar = new Weapon("优质木棒",2);
        var li = new Human('普通人','李四',20,9);
        var zhang = new Fighter('战士','张三',10,6,woodBar);

        //when
        var s=zhang.beats(li);

        //then
        var exp="战士张三用优质木棒攻击了普通人李四,李四受到了8点伤害,李四剩余生命：12";
        expect(s).toBe(exp);
    });



    xit("game spec - a fight",function(){
        //given
        var woodBar = new Weapon("优质木棒",2);
        var li = new Human('普通人','李四',20,9);
        var zhang = new Fighter('战士','张三',10,6,woodBar);
        var logger=m.spy(console);

        gameStart(zhang, li, logger);

        var exp="战士张三用优质木棒攻击了普通人李四,李四受到了8点伤害,李四剩余生命：12\n" +
            "普通人李四攻击了战士张三,张三受到了9点伤害,张三剩余生命：1\n" +
            "普通人张三攻击了普通人李四,李四受到了8点伤害,李四剩余生命：4\n" +
            "普通人李四攻击了战士张三,张三受到了9点伤害,张三剩余生命：-8\n" +
            "张三被打败了";
        m.verify(logger).log(exp);
    });

});




// ！ 编写实现代码之前应该先保证测试是正确的：（测试不通过的原因是符合预期的！）
//   mock技法