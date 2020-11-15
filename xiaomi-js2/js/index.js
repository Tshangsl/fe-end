(function(){
    //把myModal1设置为全局变量 使btn1的onclick中能访问到
    var myModal1;

    var oBtnLogin = document.getElementById('btn-login');
    oBtnLogin.onclick = function(){
            myModal1 = new Modal({
            el:'myModal1',
            width: 300,
            height:200,
            tl:'modal-title',
            content:'登录',
            // bl1:'confirm1',
            // bl2:'cancel1',
            //此处的登录认证 暂时只设置了登录界面的
            onConfirm:function(){
                var username = document.getElementById('username');
                var password = document.getElementById('password');
                console.log(username.value,password.value);
                console.log('congratulations successful landing');
            }
        });
        return false;
        //阻止浏览器的默认行为
    }
    var oBtnRegist = document.getElementById('btn-regist');
    oBtnRegist.onclick = function(){
        new Modal({
            el:'myModal2',
            width:300,
            height:300,
            tl:'modal-title',
            content:'注册',
            // bl1:'confirm2',
            // bl2:'cancel2'
        });
        return false;
    }
    //语义化 思维上 符合人类思维化操作 尽量忽略底层的dom操作
    //面向对象的理解
    //屏蔽了底层的操作
    var btn1 = document.getElementById('btn1');
    btn1.onclick = function(){
        myModal1.close();
    }
})();