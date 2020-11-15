// es5之前 js没有类的概念
var Modal = (function(){
    //定义一个弹层组件类（构造函数）
    //new 直接调用
    function Modal(options){
        var myModal = document.getElementById(options.el);
        myModal.style.display = 'block';
        //dom的查找方式设置css样式 动态宽高
        // var modalDialog = myModal.getElementsByClassName('modal-dialog')[0];
        // modalDialog.style.width = width+'px';
        // modalDialog.style.height = height+'px';

        //dom的遍历方式设置css样式 动态宽高
        var modalDialog = util.first(myModal);
        modalDialog.style.width = (options.width?options.width:600) + 'px';
        modalDialog.style.height = (options.height?options.height:400) + 'px';
    }
    //一定要暴露出一个全局变量 class装进函数立即调用
    //用意:只暴露了一个Modal  
    return Modal;
})();