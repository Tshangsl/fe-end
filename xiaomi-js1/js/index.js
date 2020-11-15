//页面级的js文件

// 函数立即调用 只有一次被调用机会 语法规定
//需求 1.函数不需要调用第二次2.安全3.避免了对全局对象的污染
//4.可以把其当成一个模块/功能
//script中定义的变量函数都是全局的 
//全局的变量都存在window里 window是全局的 global
//window作为整个浏览器最顶层的对象 里面的东西很复杂
//尽量避免对全局变量的污染
//大型复杂的项目中 函数立即调用是一种很普遍的现象 
//避免代码干扰 避免污染全局变量

//类 具有相同的属性和方法的对象的集合
//js中把其定义成一个类 实现多个弹层
// export暴露
(function(){
    var oBtnLogin = document.getElementById('btn-login');
    oBtnLogin.onclick = function(){
        // alert('1');
        new Modal({
            el: 'myModal1',
            width: 700,
            height:300
        });
        //创建一个新的弹层组件
        //阻止浏览器的默认行为
        //链接的默认行为跳转 阻止该默认行为
        return false;
    }
    var oBtnRegist = document.getElementById('btn-regist');
    oBtnRegist.onclick = function(){
        new Modal({
            el: 'myModal2',
            width: 400,
            height:300
        });
        return false;
    }
})();   