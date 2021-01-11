// 实现一个List列表 
// 包含add函数和length属性 可以向add函数添加字符串

// interface Ilist{
//     length:number;
//     add(elem:string):void;
// }
// class List implements Ilist{
//     elements:string[] = [];
//     // private length: number = this.elements.length;
//     add(elem: string): void {
//         this.elements.push(elem);
//         // this.length = this.elements.length;
//     }
//     // getter
//     get length(){
//         return this.elements.length;
//     }
// }
// let list1 = new List();
// list1.add('a');
// list1.add('b');
// console.log(list1.length);

// 泛型
interface Ilist<T>{
    length:number;
    add(elem:T):void;
}
class List<T> implements Ilist<T>{
    elements:T[] = [];
    // private length: number = this.elements.length;
    add(elem: T): void {
        this.elements.push(elem);
        // this.length = this.elements.length;
    }
    // getter
    get length(){
        return this.elements.length;
        }
}
let list1 = new List<string>();
list1.add('a');
list1.add('b');
console.log(list1.length);