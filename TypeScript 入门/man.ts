function searchXiaoJieJie2(age:number,stature?:string):string{

    let yy:string = ''
    yy = '找到了'+age+'岁'
    if(stature !=undefined){
        yy = yy + stature
    }
    return yy+'的小姐姐'

}

var result:string  =  searchXiaoJieJie2(22,'大长腿')
console.log(result)

/**
 *
 searchXiaoJieJie1
 */
function searchXiaoJieJie1(age:number=18,stature:string='大胸'):string{

    let yy:string = ''
    yy = '找到了'+age+'岁'
    if(stature !=undefined){
        yy = yy + stature
    }
    return yy+'的小姐姐'

}

var result1:string  =  searchXiaoJieJie1()
console.log(result1)
/**
 * 有剩余参数的函数
 */
function searchXiaoJieJie3(...xuqiu:string[]):string{

    let  yy:string = '找到了'
    for (let i =0;i<xuqiu.length;i++){
        yy = yy + xuqiu[i]
        if(i<xuqiu.length){
            yy=yy+'、'
        }
    }
    yy=yy+'的小姐姐'
    return yy

}

var result:string  =  searchXiaoJieJie3('22岁','大长腿','瓜子脸','水蛇腰')
console.log(result)

function zhengXing():void{
    var yangzia:string = '刘德华'
    {
        let  yangzib:string = '小沈阳'
        console.log('技术胖整形成了'+yangzib+'的样子')
    }

    console.log('技术胖整形成了'+yangzia+'的样子')
}
zhengXing()

let something:string = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。"
let xiaoJieJie:string = "小姐姐"
console.log(something.indexOf(xiaoJieJie))   //19