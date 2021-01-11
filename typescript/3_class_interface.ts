class Person{
    //属性前面不加任何修饰符 默认是public
    // private不可以在外部访问 可以在class内部访问
    name:string;
    private age:number=10;
    static legs:number = 2;
    // readonly height = '178cm';
    private _gender:string = 'female';
    constructor(name:string){
        this.name = name;
    }
    sayHello(){
        console.log(`my name is ${this.name},my age is ${this.age}`)
    }
    // getter
    // getGender(){
    //     return this.gender;
    // }
    // setter
    // setGender(gender:string){
    //     if(gender=='male'||gender=='female'){
    //         this.gender = gender;
    //     }else{
    //         throw new Error('type error');
    //     }
    // }
    get gender(){
        return this._gender;
    }
    set gender(gender:string){
        this._gender=gender;
    }
}
let p1 = new Person('lisi');
console.log(p1.name);
p1.sayHello();
// p1.setGender('male');
// console.log(p1.getGender());
p1.gender = 'male';
console.log(p1.gender);
console.log(Person.legs);

abstract class Animal{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    abstract shout():string;
}
class Dog extends Animal{
    shout(){
        return '汪汪'
    }
}
class Cat extends Animal{
    shout(){
        return '喵喵'
    }
}
let dog = new Dog('旺财');
console.log(dog.shout())

// 接口
// 接口本身就是抽象的 接口内所有的方法也是抽象的
// 所有方法必须重写
interface IFly{
    fly():string;
}

class Monkey extends Animal{
    shout(){
        return'吱吱'
    }
}
class MonkeyKing extends Monkey implements IFly{
    fly(){
        return '俺老孙来也'
    }
}

class Ma extends Cat implements IFly{
    fly(){
        return '竹蜻蜓'
    }
}

let wukong = new MonkeyKing('悟空');
console.log(wukong.shout());
console.log(wukong.fly());


let Ameng = new Ma('哆啦A梦');
console.log(Ameng.shout());
console.log(Ameng.fly());
