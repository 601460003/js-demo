// let {foo,bar} = {foo:'JSPang',bar:'技术胖'};
// console.log(foo+bar); //控制台打印出了“JSPang技术胖”

// let foo;
// ({foo} ={foo:'JSPang'});
// console.log(foo);
/**
 * 扩展运算符  这是我们不想看到的，可以利用对象扩展运算符简单的解决这个问题，现在我们对代码进行改造。
 */
// function jspang(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
//
// }
// jspang(1,2,3,4);

// let arr1=['www','jspang','com'];
// let arr2=arr1;
// console.log(arr2);
// arr2.push('shengHongYu');
// console.log(arr1);
//
// let arr1=['www','jspang','com'];
// let arr2=[...arr1];
// console.log(arr2);
// arr2.push('shengHongYu');
// console.log(arr2);
// console.log(arr1);
/**
 * 字符串模版${}
 * es5 ===>'+jspang+'
 * es6===>${jspang}
 */
// let jspang='技术胖';
// let blog = `非常高兴你能看到这篇文章，我是你的老朋友${jspang}。这节课我们学习字符串模版。`;
// document.write(blog);
/**
 * 字符串查找:includes 如果存在直接返回true，否则false
 * indexOf：方法则返回索引
 */
// let jspang='技术胖';
// let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
// document.write(blog.indexOf(jspang));
//
// let jspang='技术胖';
// let blog = '技术胖非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
// document.write(blog.startsWith(jspang));//在头部找
// blog.endsWith(jspang);判断尾部
/**
 * document.write('jspang|'.repeat(3));
 * ** 复制字符串**
 */
// document.write('jspang|'.repeat(3));

/**
 * ** 数字验证Number.isFinite( xx )**
 */
// let a= 11/4;
// console.log(Number.isFinite(a));//true
// console.log(Number.isFinite('jspang'));//false
// console.log(Number.isFinite(NaN));//false
// console.log(Number.isFinite(undefined));//false
// console.log(Number.isNaN(a));

/**
 * JSON代码转换成数组
 */
// let  json = {
//     '0': 'jspang',
//     '1': '技术胖',
//     '2': '大胖逼逼叨',
//     length:3
// }
// let arr=Array.from(json);
// console.log(json)
// console.log(arr)
/**
 * Array.of()方法：它负责把一堆文本或者变量转换成数组
 */
// let arr =Array.of('ni','wo',5,6);
// console.log(arr);
// let arr =Array.of('技术胖','jspang','大胖逼逼叨');
// console.log(arr);

/**
 * fill( )实例方法：第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。
 */
// let arr=[0,1,2,3,4,5,6,7,8,9];
// arr.fill('jspang',2,5);
// console.log(arr);

/**
 * for…of循环：
 */
// let arr=['jspang','技术胖','大胖逼逼叨']
//
// for (let item of arr){
//     console.log(item);
// }

// let arr=['jspang','技术胖','大胖逼逼叨']
// for (let index of arr.keys()){
//     console.log(index);
// }
// let arr=['jspang','技术胖','大胖逼逼叨']
// for (let [index,val] of arr.entries()){
//     console.log(index+':'+val);
// }
// let arr = ['1','2']
// for(let index of arr.keys()){
//  console.log(index)
// }

/**
 * 数组判断 in：可用于判断数据的长度
 * 但是数组中其实全是空值，这就是一个坑啊。

 */
// let obj={
//     a:'jspang',
//     b:'技术胖'
// }
// console.log('a'in obj);  //true
// let arr=[,,,,,];
// console.log(0 in arr); //false
//
// let arr1=['jspang','技术胖'];
// console.log(0 in arr1);  // true 0表示数组下标是否为空

/**
 * 数组的遍历方法.forEach filter  some
 */
// let arr=['jspang','技术胖','前端教程',''];
//
// arr.forEach((val,index)=>console.log(index,val));
// let arr=['jspang','技术胖','前端教程'];
//
// arr.filter(x=>console.log(x));

// let arr=['jspang','技术胖','前端教程'];
//
// arr.some(x=>console.log(x));
// let arr=['jspang','技术胖','前端教程'];
//
// console.log(arr.join('|'));
// let arr=['jspang','技术胖','前端教程'];
//
// console.log(arr.toString());

/**
 * 第11节：ES6中对象
 * 那ES6为我们提供了is方法进行对比。
 * Object.assign( )合并对象  如何键名相同会覆盖掉
 * age=Symbol()进行循环保护。
 */
// var obj1 = {name:'jspang'};
// var obj2 = {age:'2'};
// // console.log(obj1.name === obj2.name);//true
// // console.log(Object.is(obj1.name,obj2.name))//true
// let d =Object.assign(obj1,obj2)
// console.log(d)
// var g = Symbol('jspang');
// console.log(g);
// console.log(g.toString());
// let obj={name:'jspang',skill:'web'};
// let age=Symbol();
// obj[age]=18;
// for (let item in obj){
//     console.log(obj[item]);
// }
// console.log(obj);

/**
 * set声明实例的方法
 * Set不允许内部有重复的值  去重
 * 用has进行值的查找，返回的是true或者false。
 */
// let setArr = new Set(['jspang','技术胖','web','jspang']);
// console.log(setArr);//Set {"jspang", "技术胖", "web"}
// setArr.add('前端职场');
// console.log(setArr);
// setArr.delete('前端职场');
// console.log(setArr); //Set {"jspang", "技术胖", "web"}
// let setArr = new Set(['jspang','技术胖','web','jspang']);
// for (let item of setArr){
//     console.log(item);
// }
let setArr = new Set(['jspang','技术胖','web','jspang']);
setArr.forEach((value)=>console.log(value));