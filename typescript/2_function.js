"use strict";
// 函数声明 存在变量提升
// function test(){}
// 函数表达式
// let test = function(){}
// 1.可以给参数定义数据类型
function test(name, age) {
    console.log(name, age);
}
test('lisi', 23);
// 2.可选参数 加? 可以设置可选参数
function test1(name, age, gender) {
    console.log(name, age, gender);
}
test1('lisi', 23);
//3. 默认参数
function test2(name, age, gender = 'male') {
    console.log(name, age, gender);
}
test2('lisi', 23);
// 4.剩余参数
function test3(name, age, ...args) {
    var str = '';
    for (let i = 0; i < args.length; i++) {
        str += args[i] + ' ';
    }
    console.log(`${name},${age},${str}`);
}
test3('lisi', 23, '男', '1233', '1233');
// 5.返回值可以有类型
function test4(name, age) {
    return `my name is ${name},age is ${age}`;
}
let str = test4('lisi', 23);
console.log(str);
function sayHello(x, y) {
    if (typeof y === 'number') {
        return `my name is ${x},age is ${y}`;
    }
    else {
        return `my name is ${x},gender is ${y}`;
    }
}
let st = sayHello('lisi', 'male');
console.log(st);
