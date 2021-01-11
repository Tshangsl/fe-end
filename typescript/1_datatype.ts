/*
基本类型 
number string boolean array tuple enum any
void null/undefined never obj
类型推论：它是一种特性而非语法
联合类型
类型断言 编译期间
*/
// number数据类型
let a:number= 5;
// string数据类型
let b:string = 'abc';
// boolean数据类型
let c:boolean = true;
// array数据类型
// let arr = [123,'abc',true] 
// ts只是提供开发期间一个错误提示 运行仍按js语法运行
let arr1:number[]=[1,2,3,4];
let arr2:string[]=['a','b','c'];
console.log(arr1);
console.log(arr2);
// arr2.push(true);
// tuple元组
// 元组 元素数据类型固定 元素数量也固定的数组
let tuple1:[string,number,boolean]=['abc',123,true];
// tuple1[0]=true;
tuple1.push('def');
//可以通过push方法向元组中push新的元素怒 并且没有任何警告
console.log(tuple1);
// enum枚举 底层 0 1 
// enum Gender{
//     Male = 'male',
//     Female = 'female'
// }
// let gender = Gender.Female;
// console.log(gender);
// if(gender == Gender.Female){
//     console.log('female');
// }else{
//     console.log('male');
// }
//any任意类型
let x:any = 5;
x = 'abc';
//1.当用户的输入类型不确定的时候
// let input:any = prompt('请输入用户名');
// 2.需要使用一个有多种数据类型的数据
let arr:any = [1,'s'];
// void 主要用在函数中
function test():void{   
}
//null/undefined
let n:null = null;
let u:undefined = undefined;
//never 永不存在值的类型
// 函数出错 永远不会有返回值 返回值是never
function test1(){
    // 1.throw new Error('error...');
    // 2. while(true){
        // }
}
// test1()
// obj没有特殊语法

//类型推论
let x1 = 5;//类型推论为number
// ts中的一种特殊数据类型 联合类型
let x4 = [1,'2',true];
// 再push会报错

class Animal{}
class Dog extends Animal{}
class Cat extends Animal{}
class Fish extends Animal{}
let ar:Animal[] =[new Dog(),new Cat()];
// push并不会报错
ar.push(new Fish());
console.log(ar);

// 上下文类型
window.onmousedown = function(e:MouseEvent){
    console.log(e)
}
window.onkeydown = function(e:KeyboardEvent){
    console.log(e)
}
// 类型断言
let str:any='abc';
// let str1 = <string>str.length;
let length = (str as string);
console.log(length);

export{};