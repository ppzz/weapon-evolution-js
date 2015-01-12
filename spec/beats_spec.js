var m = require('jsmockito').JsMockito;
var Weapon = require("../src/Weapon.js");
var Feature = require("../src/Feature.js");
var Armor = require("../src/Armor.js");
var Human = require("../src/Human.js");
var Fighter = require("../src/Fighter.js");
var gameStart = require("../src/gameStart.js");


xdescribe("player Human VS Human --", function(){
    it("game spec", function(){
        //given
        var li=new Human('李四',20,9);
        var zhang=new Human('张三',10,8);

        //when
        var s=zhang.attack(li);

        //then
        var exp="张三攻击了李四,李四受到了8点伤害,李四剩余生命：12";
        expect(s).toBe(exp);
    });

    it("game spec V2",function(){
        var li=new Human('李四',20,9);
        var zhang=new Human('张三',10,8);
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

describe("weapon evolution :Question 3 --", function(){
    it("game spec - fighter(with weapon) attack human", function(){
        //given
        var li = new Human('李四',20,9);
        var woodBar = new Weapon("优质木棒",2);
        var zhang = new Fighter('张三',10,6,woodBar);

        //when
        var s=zhang.attack(li);

        //then
        var exp="战士张三用优质木棒攻击了普通人李四,李四受到了8点伤害,李四剩余生命：12";
        expect(s).toBe(exp);
    });

    it("game spec - fighter(without weapon) attack human",function(){
        var li = new Human('李四',20,9);
        var zhang = new Fighter("张三",10,6);

        var s=zhang.attack(li);

        var exp='战士张三攻击了普通人李四,李四受到了6点伤害,李四剩余生命：14';
        expect(s).toBe(exp);
    });

    it("game spec - human attack fighter(with denfense) ",function(){
        var woodBar = new Weapon("优质木棒",2),
            helmet = new Armor("头盔",3),
            zhang = new Fighter("张三",10,6,woodBar,helmet);
        var li = new Human("李四",20,12);

        var s=li.attack(zhang);

        var exp="普通人李四攻击了战士张三,张三受到了9点伤害,张三剩余生命：1";
        expect(s).toBe(exp);
    });

    it("game spec - human attack fighter(without armor)",function(){
        var zhang = new Fighter("张三",10,6);
        var li = new Human("李四",20,12);

        var s=li.attack(zhang);

        var exp="普通人李四攻击了战士张三,张三受到了12点伤害,张三剩余生命：-2";
        expect(s).toBe(exp);
    });

    // 战士打战士;4种：
    it("game spec - fighter(with weapon) attack fighter(with armor)",function(){
        var woodBar = new Weapon("优质木棒",3),
            zhang = new Fighter("张三",20,6,woodBar),
            helmet = new Armor("头盔",2),
            li = new Fighter("李四",15,7,woodBar,helmet);

        var s = zhang.attack(li);

        var exp="战士张三用优质木棒攻击了战士李四,李四受到了7点伤害,李四剩余生命：8";
        expect(s).toBe(exp);
    });

    it("geme spec - fighter(with weapon) attack fighter(without armor)",function(){
        var woodBar = new Weapon("优质木棒",3),
            zhang = new Fighter("张三",20,6,woodBar),
            helmet = new Armor("头盔",2),
            li = new Fighter("李四",15,7,woodBar,helmet);

        var s=li.attack(zhang);

        var exp="战士李四用优质木棒攻击了战士张三,张三受到了10点伤害,张三剩余生命：10";
        expect(s).toBe(exp);
    });

    it("game spec - fighter(without weapon) attack fighter(with armor)",function(){
        var woodBar = new Weapon("优质木棒",3),
            zhang = new Fighter("张三",20,6),
            helmet = new Armor("头盔",2),
            li = new Fighter("李四",15,7,woodBar,helmet);

        var s=zhang.attack(li);

        var exp="战士张三攻击了战士李四,李四受到了4点伤害,李四剩余生命：11";
        expect(s).toBe(exp);
    });
    it("game spec - fighter(without weapon) attack fighter(without armor)",function(){
        var zhang = new Fighter("张三",20,6),
            li = new Fighter("李四",15,7);

        var s=zhang.attack(li);

        var exp="战士张三攻击了战士李四,李四受到了6点伤害,李四剩余生命：9";
        expect(s).toBe(exp);
    });
    xit("game spec - a fight",function(){
        var woodBar = new Weapon("优质木棒",2);
        var li = new Human('李四',20,9);
        var zhang = new Fighter('张三',10,6,woodBar);
        var logger=m.spy(console);

        gameStart(zhang, li, logger);

        var exp="战士张三用优质木棒攻击了普通人李四,李四受到了8点伤害,李四剩余生命：12\n" +
            "普通人李四攻击了战士张三,张三受到了9点伤害,张三剩余生命：1\n" +
            "战士张三用优质木棒攻击了普通人李四,李四受到了8点伤害,李四剩余生命：4\n" +
            "普通人李四攻击了战士张三,张三受到了9点伤害,张三剩余生命：-8\n" +
            "张三被打败了";
        m.verify(logger).log(exp);
    });
});

describe("weapon evolution :Question 4 --",function(){
    it("战士张三用优质毒剑攻击了普通人李四,李四受到了8点伤害,李四中毒了,李四剩余生命：12",function(){
        //李四受到2点毒性伤害, 李四剩余生命：10
        var poison = new Feature("中毒",2,3);
        var poisonedSword = new Weapon("优质毒剑",3,poison);
        var zhang = new Fighter("张三",10,5,poisonedSword);
        var li = new Human("李四",20,13);
        var logger =m.spy(console);

        var s=zhang.attack(li);

        var exp="战士张三用优质毒剑攻击了普通人李四,李四受到了8点伤害,李四中毒了,李四剩余生命：12";
        expect(s).toBe(exp);
    });

    it("战士张三用优质毒剑攻击了普通人李四,李四受到了8点伤害,李四中毒了,李四剩余生命：12.李四受到2点毒性伤害, 李四剩余生命：10", function () {
        var poison = new Feature("中毒",2,3);
        var poisonedSword = new Weapon("优质毒剑",3,poison);
        var zhang = new Fighter("张三",10,5,poisonedSword);
        var li = new Human("李四",20,13);
        var logger =m.spy(console);

        var s=zhang.attack(li)+".";
        s +=li.attack(zhang);

        var exp="战士张三用优质毒剑攻击了普通人李四,李四受到了8点伤害,李四中毒了,李四剩余生命：12.李四受到2点毒性伤害, 李四剩余生命：10";
        expect(s).toBe(exp);
    });
});



// ！ 编写实现代码之前应该先保证测试是正确的：（测试不通过的原因是符合预期的！）
//   mock技法