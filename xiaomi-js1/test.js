// var o = (function(){
//     var a = 5;
//     function add(b){
//         return a+b;
//     }
//     function minus(b){
//         return a-b;
//     }
// })();


// var o = {
//     a:5,
//     add:function(b){
//         return this.a+b;
//     },
//     minus:function(b){
//         return this.a-b;
//     }
// };

//实现对象属性私有化
//对外只暴露一个东西 避免污染全局变量 避免代码干扰 保证安全性

var o = (function(){
    var a = 5;
    return {
        add:function(b){
            return a+b;
        },
        minus:function(b){
            return a-b;
        }
    };
})();





