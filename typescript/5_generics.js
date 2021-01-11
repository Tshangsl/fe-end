"use strict";
// 实现一个List列表 
// 包含add函数和length属性 可以向add函数添加字符串
class List {
    constructor() {
        this.elements = [];
    }
    // private length: number = this.elements.length;
    add(elem) {
        this.elements.push(elem);
        // this.length = this.elements.length;
    }
    // getter
    get length() {
        return this.elements.length;
    }
}
let list1 = new List();
list1.add('a');
list1.add('b');
console.log(list1.length);
