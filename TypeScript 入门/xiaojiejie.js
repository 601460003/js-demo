// class XiaoJieJie{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.name = name
//         this.age = age
//     }
//     say(){
//         console.log('小哥哥好')
//     }
// }
// let jiejie:XiaoJieJie = new XiaoJieJie('范冰冰',18)
var XiaoJieJie2 = /** @class */ (function () {
    function XiaoJieJie2(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    XiaoJieJie2.prototype.sayHello = function () {
        console.log('小哥哥好');
    };
    XiaoJieJie2.prototype.sayLove = function () {
        console.log('我爱你');
    };
    return XiaoJieJie2;
}());
var jiejie2 = new XiaoJieJie2('女', '热巴', 22);
console.log(jiejie2.sex);
// console.log(jiejie2.name)   //报错
// console.log(jiejie2.age)    //报错
jiejie2.sayHello();
// jiejie2.sayLove()    //报错
// public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
// protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
// private : 私有修饰符，只可以在类内使用private修饰的属性和行为。
