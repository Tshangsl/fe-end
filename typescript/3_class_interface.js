"use strict";
class Person {
    constructor(name) {
        this.age = 10;
        // readonly height = '178cm';
        this._gender = 'female';
        this.name = name;
    }
    sayHello() {
        console.log(`my name is ${this.name},my age is ${this.age}`);
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
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
}
Person.legs = 2;
let p1 = new Person('lisi');
console.log(p1.name);
p1.sayHello();
// p1.setGender('male');
// console.log(p1.getGender());
p1.gender = 'male';
console.log(p1.gender);
console.log(Person.legs);
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    shout() {
        return '汪汪';
    }
}
class Cat extends Animal {
    shout() {
        return '喵喵';
    }
}
let dog = new Dog('旺财');
console.log(dog.shout());
class Monkey extends Animal {
    shout() {
        return '吱吱';
    }
}
class MonkeyKing extends Monkey {
    fly() {
        return '俺老孙来也';
    }
}
class Ma extends Cat {
    fly() {
        return '竹蜻蜓';
    }
}
let wukong = new MonkeyKing('悟空');
console.log(wukong.shout());
console.log(wukong.fly());
let Ameng = new Ma('哆啦A梦');
console.log(Ameng.shout());
console.log(Ameng.fly());
