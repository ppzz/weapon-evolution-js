var m = require('jsmockito').JsMockito;
var Weapon = require("../src/Weapon.js");
var Buff = require("../src/Buff.js");
var Armor = require("../src/Armor.js");
var OrdinaryPeople = require("../src/OrdinaryPeople.js");
var Soldier = require("../src/Soldier.js");
var gameStart = require("../src/gameStart.js");
var Crit = require("../src/Crit.js");

xdescribe("player OrdinaryPeople VS OrdinaryPeople --", function () {
    it("game spec", function () {
        //given
        var li = new OrdinaryPeople('李四', 20, 9);
        var zhang = new OrdinaryPeople('张三', 10, 8);

        //when
        var s = zhang.beat(li);

        //then
        var exp = "张三攻击了李四,李四受到了8点伤害,李四剩余生命：12";
        expect(s).toBe(exp);
    });

    it("game spec V2", function () {
        var li = new OrdinaryPeople('李四', 20, 9);
        var zhang = new OrdinaryPeople('张三', 10, 8);
        var logger = m.spy(console);

        console.log("player OrdinaryPeople VS OrdinaryPeople --game spec V2:");
        gameStart(zhang, li, logger);
        console.log("");

        var exp = "张三攻击了李四,李四受到了8点伤害,李四剩余生命：12\n" +
            "李四攻击了张三,张三受到了9点伤害,张三剩余生命：1\n" +
            "张三攻击了李四,李四受到了8点伤害,李四剩余生命：4\n" +
            "李四攻击了张三,张三受到了9点伤害,张三剩余生命：-8\n" +
            "张三被打败了";
        m.verify(logger).log(exp);
    });
});

describe("weapon evolution :Question 3 --", function () {


    it("game spec - fighter(with weapon) beat human", function () {
        //given
        var li = new OrdinaryPeople('李四', 20, 9);
        var woodBar = new Weapon("优质木棒", 2);
        var zhang = new Soldier('张三', 10, 6, woodBar);

        //when
        var s = zhang.beat(li);

        //then
        var exp = "战士张三用优质木棒攻击了普通人李四,李四受到了8点伤害,李四剩余生命：12";
        expect(s).toBe(exp);
    });

    it("game spec - fighter(without weapon) beat human", function () {
        var li = new OrdinaryPeople('李四', 20, 9);
        var zhang = new Soldier("张三", 10, 6);

        var s = zhang.beat(li);

        var exp = '战士张三攻击了普通人李四,李四受到了6点伤害,李四剩余生命：14';
        expect(s).toBe(exp);
    });

    it("game spec - human beat fighter(with denfense) ", function () {
        var woodBar = new Weapon("优质木棒", 2),
            helmet = new Armor("头盔", 3),
            zhang = new Soldier("张三", 10, 6, woodBar, helmet);
        var li = new OrdinaryPeople("李四", 20, 12);

        var s = li.beat(zhang);

        var exp = "普通人李四攻击了战士张三,张三受到了9点伤害,张三剩余生命：1";
        expect(s).toBe(exp);
    });

    it("game spec - human beat fighter(without armor)", function () {
        var zhang = new Soldier("张三", 10, 6);
        var li = new OrdinaryPeople("李四", 20, 12);

        var s = li.beat(zhang);

        var exp = "普通人李四攻击了战士张三,张三受到了12点伤害,张三剩余生命：-2";
        expect(s).toBe(exp);
    });

    // 战士打战士;4种：
    it("game spec - fighter(with weapon) beat fighter(with armor)", function () {
        var woodBar = new Weapon("优质木棒", 3),
            zhang = new Soldier("张三", 20, 6, woodBar),
            helmet = new Armor("头盔", 2),
            li = new Soldier("李四", 15, 7, woodBar, helmet);

        var s = zhang.beat(li);

        var exp = "战士张三用优质木棒攻击了战士李四,李四受到了7点伤害,李四剩余生命：8";
        expect(s).toBe(exp);
    });

    it("geme spec - fighter(with weapon) beat fighter(without armor)", function () {
        var woodBar = new Weapon("优质木棒", 3),
            zhang = new Soldier("张三", 20, 6, woodBar),
            helmet = new Armor("头盔", 2),
            li = new Soldier("李四", 15, 7, woodBar, helmet);

        var s = li.beat(zhang);

        var exp = "战士李四用优质木棒攻击了战士张三,张三受到了10点伤害,张三剩余生命：10";
        expect(s).toBe(exp);
    });

    it("game spec - fighter(without weapon) beat fighter(with armor)", function () {
        var woodBar = new Weapon("优质木棒", 3),
            zhang = new Soldier("张三", 20, 6),
            helmet = new Armor("头盔", 2),
            li = new Soldier("李四", 15, 7, woodBar, helmet);

        var s = zhang.beat(li);

        var exp = "战士张三攻击了战士李四,李四受到了4点伤害,李四剩余生命：11";
        expect(s).toBe(exp);
    });
    it("game spec - fighter(without weapon) beat fighter(without armor)", function () {
        var zhang = new Soldier("张三", 20, 6),
            li = new Soldier("李四", 15, 7);

        var s = zhang.beat(li);

        var exp = "战士张三攻击了战士李四,李四受到了6点伤害,李四剩余生命：9";
        expect(s).toBe(exp);
    });
    it("game spec - a fight", function () {
        var woodBar = new Weapon("优质木棒", 2);
        var li = new OrdinaryPeople('李四', 20, 9);
        var zhang = new Soldier('张三', 10, 6, woodBar);
        var logger = m.spy(console);

        console.log("weapon evolution :Question 3 --game spec - a fight:");
        gameStart(zhang, li, logger);
        console.log("");

        var exp = "战士张三用优质木棒攻击了普通人李四,李四受到了8点伤害,李四剩余生命：12\n" +
            "普通人李四攻击了战士张三,张三受到了9点伤害,张三剩余生命：1\n" +
            "战士张三用优质木棒攻击了普通人李四,李四受到了8点伤害,李四剩余生命：4\n" +
            "普通人李四攻击了战士张三,张三受到了9点伤害,张三剩余生命：-8\n" +
            "张三被打败了";
        m.verify(logger).log(exp);
    });
});

describe("weapon evolution :Question 4 --", function () {
    console.log("||||---weapon evolution :Question 4 ---||||");

    it("zhang(with sword & poison) beats li.", function () {
        //李四受到2点毒性伤害, 李四剩余生命：10
        var poison = new Buff("中毒", "毒性", 2, 3);
        var poisonedSword = new Weapon("优质毒剑", 3, poison);
        var zhang = new Soldier("张三", 10, 5, poisonedSword);
        var li = new OrdinaryPeople("李四", 20, 13);
        var logger = m.spy(console);

        var s = zhang.beat(li);

        var exp = "战士张三用优质毒剑攻击了普通人李四,李四受到了8点伤害,李四中毒了,李四剩余生命：12";
        expect(s).toBe(exp);
    });

    it("zhang (with sword & poison) beats li, li poisoned.", function () {
        var poison = new Buff("中毒", "毒性", 2, 3);
        var poisonedSword = new Weapon("优质毒剑", 3, poison);
        var zhang = new Soldier("张三", 10, 5, poisonedSword);
        var li = new OrdinaryPeople("李四", 20, 13);
        var logger = m.spy(console);

        var s = zhang.beat(li) + "\n";
        s += li.beat(zhang);

        var exp = "战士张三用优质毒剑攻击了普通人李四,李四受到了8点伤害,李四中毒了,李四剩余生命：12\n李四受到2点毒性伤害,李四剩余生命：10\n普通人李四攻击了战士张三,张三受到了13点伤害,张三剩余生命：-3";
        expect(s).toBe(exp);
    });

    it("zhang (with sword & poison) beats li, li poisoned.", function () {
        var fire = new Buff("着火", "火焰", 2, 3);
        var fireSword = new Weapon("火焰剑", 3, fire);
        var zhang = new Soldier("张三", 10, 5, fireSword);
        var li = new OrdinaryPeople("李四", 20, 13);

        var s = zhang.beat(li) + "\n";
        s += li.beat(zhang);

        var exp = "战士张三用火焰剑攻击了普通人李四,李四受到了8点伤害,李四着火了,李四剩余生命：12\n李四受到2点火焰伤害,李四剩余生命：10\n普通人李四攻击了战士张三,张三受到了13点伤害,张三剩余生命：-3";
        expect(s).toBe(exp);
    });

    it("test while() of zhang VS li ", function () {
        var poison = new Buff("中毒", "毒性", 2, 3);
        var poisonedSword = new Weapon("优质毒剑", 3, poison);
        var zhang = new Soldier("张三", 10, 5, poisonedSword);
        var li = new OrdinaryPeople("李四", 20, 7);
        var logger = m.spy(console);

        var zhangIsAlive=3;
        zhang.isAlive=function(){
            return zhangIsAlive;
        };
        var liIsAlive=3;
        li.isAlive=function(){
            return liIsAlive;
        };
        zhang.beat=function(){
            liIsAlive--;
            return "张三攻击";
        };
        li.beat=function(){
            zhangIsAlive--;
            return "李四攻击";
        };

        console.log("weapon evolution :Question 4 --test while() of zhang VS li:");
        gameStart(zhang, li, logger);
        console.log("");

        var exp = "张三攻击\n李四攻击\n张三攻击\n李四攻击\n张三攻击\n李四被打败了";
        m.verify(logger).log(exp);
    });

    it("test result of zhang VS li ", function () {
        var poison = new Buff("中毒", "毒性", 2, 3);
        var poisonedSword = new Weapon("优质毒剑", 3, poison);
        var zhang = new Soldier("张三", 10, 5, poisonedSword);
        var li = new OrdinaryPeople("李四", 20, 7);
        var logger = m.spy(console);

        console.log("weapon evolution :Question 4 --test result of zhang VS li:");
        gameStart(zhang, li, logger);
        console.log("");

        var exp = "战士张三用优质毒剑攻击了普通人李四,李四受到了8点伤害,李四中毒了,李四剩余生命：12\n"+
            "李四受到2点毒性伤害,李四剩余生命：10\n"+
            "普通人李四攻击了战士张三,张三受到了7点伤害,张三剩余生命：3\n"+
            "战士张三用优质毒剑攻击了普通人李四,李四受到了8点伤害,李四中毒了,李四剩余生命：2\n"+
            "李四受到2点毒性伤害,李四剩余生命：0\n"+
            "李四被打败了";
        m.verify(logger).log(exp);
    });

    it("test zhang beat li (致命一击)",function(){
        var crit = new Crit("全力一击","3","1"),
            sword = new Weapon("利剑", 2, crit),
            zhang=new Soldier("张三",20,6, sword),
            li = new OrdinaryPeople('李四',20,12);

        var s = zhang.beat(li);

        var exp = "战士张三用利剑攻击了普通人李四,张三发动了全力一击,李四受到了24点伤害,李四剩余生命：-4";
        expect(s).toEqual(exp);
    });


});


// ！ 编写实现代码之前应该先保证测试是正确的：（测试不通过的原因是符合预期的！）
//   mock技法