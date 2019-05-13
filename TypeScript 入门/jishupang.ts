class Jspang {
    public name: string
    public age: number
    public skill: string

    constructor(name: string, age: number, skill: string) {
        this.name = name
        this.age = age
        this.skill = skill
    }

    public interest() {
        console.log('找小姐姐')
    }
}

let jspangObj: Jspang = new Jspang('技术胖', 18, 'web')
jspangObj.interest()


//儿子继承爸爸的优势
class JsShuai extends Jspang {
    public xingxiang: string = '帅气'

    public interest() {
        super.interest()
        console.log('建立电商平台')
    }

    public zhuangQian() {
        console.log('一天赚了一个亿')
    }
}

let shuai = new JsShuai("技术帅", 5, "we")
console.log(shuai.name)
shuai.interest()
shuai.zhuangQian()