function searchXiaoJieJie2(age, stature) {
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy + '的小姐姐';
}
var result = searchXiaoJieJie2(22, '大长腿');
console.log(result);
/**
 *
 searchXiaoJieJie1
 */
function searchXiaoJieJie1(age, stature) {
    if (age === void 0) { age = 18; }
    if (stature === void 0) { stature = '大胸'; }
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy + '的小姐姐';
}
var result1 = searchXiaoJieJie1();
console.log(result1);
/**
 * 有剩余参数的函数
 */
function searchXiaoJieJie3() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = '找到了';
    for (var i = 0; i < xuqiu.length; i++) {
        yy = yy + xuqiu[i];
        if (i < xuqiu.length) {
            yy = yy + '、';
        }
    }
    yy = yy + '的小姐姐';
    return yy;
}
var result = searchXiaoJieJie3('22岁', '大长腿', '瓜子脸', '水蛇腰');
console.log(result);
function zhengXing() {
    var yangzia = '刘德华';
    {
        var yangzib = '小沈阳';
        console.log('技术胖整形成了' + yangzib + '的样子');
    }
    console.log('技术胖整形成了' + yangzia + '的样子');
}
zhengXing();
var something = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。";
var xiaoJieJie = "小姐姐";
console.log(something.indexOf(xiaoJieJie)); //19
