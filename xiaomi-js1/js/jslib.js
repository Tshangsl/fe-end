//自己封装的函数库
//jquery很有名的函数库

//js中常用的包裹是对象函数

//如此不暴露变量和方法 只暴露了o
var util = (function () {
    //下面要用到的全局的部分的变量
    return {
        getByClass: function () {

        },
        next: function (elem) {
            do {
                elem = elem.nextSibling;
            } while (elem && elem.nodeType != 1);
            return elem;
        },
        first: function (elem) {
            elem = elem.firstChild;
            return elem && elem.nodeType != 1 ? this.next(elem) : elem;
        }
    }
})();