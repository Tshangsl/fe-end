var Modal = (function(){
     //功能:合并两个对象 使以后传参不必再配置三元表达式进行判断用户是否传参 简化程序
     function extend(target,obj){
        for(var p in obj){
            //typeof方法不够健壮 区分不开数组和对象
            //使用constructor属性判断是对象还是数组
            if(typeof obj[p] =='object'){
                target[p] = extend(obj[p].constructor == Array?[]:{},obj[p]);
            }else{
                target[p] = obj[p];
            }
        }
        return target;
    }
    //将setting对象和options对象合并 
    //把options合并到setting（相同属性覆盖 不同属性添加）
    //弹层组件的默认设置
    var settings = {
        width:600,
        height:400,
        content:'header'
    };
    //函数传 个数多 不确定是否有 顺序不定 对象传参
    function Modal(options){
        //用一个变量缓存this
        var that = this;
        //将options合并到settings中
        settings = extend(settings,options);

        //dom类的操作 一般都不会直接写在构造函数中 而是封装到其他函数中
        //避免在构造函数中写过多的代码

        //使绑定事件被触发时 display:block;
        //此处把myModal节点作为了Modal构造函数的一个属性 而非变量
        this.myModal = document.getElementById(settings.el);
        this.myModal.style.display = 'block';

        //实现功能 点击遮罩部分关闭整个弹层组件 点击认证部分不会
        this.myModal.onclick = function(){
            this.close();
        };

        //设置宽高
        //使用了jslib.js中封装的util对象下的first方法
        //为兼容性考虑

        //使用的dom的遍历找到的modalDialog
        var modalDialog = util.first(this.myModal);
        modalDialog.onclick = function(e){
            e.stopPropagation();
        }
        modalDialog.style.width = settings.width+'px';
        modalDialog.style.height = settings.height+'px';

        //设置标题内容
        //用this.myModal缩小查找范围
        var modalTitle = this.myModal.getElementsByClassName(settings.tl)[0];
        modalTitle.innerHTML = settings.content;

        //通过下面封装的close函数实现对弹层组件的多种关闭方式
        //为什么此处没有使用对象传参的方式进行dom查找 而是直接使用类名?
        //优化或者是没有来得及做?

        //实现功能:点击右上角[X]实现弹层组件关闭
        var btnColse = this.myModal.getElementsByClassName('close')[0];
        btnColse.onclick = function(){
            //that为上面保存的指向Modal的指针 通过that调用Modal的close()函数
            that.close();
        };

        //实现功能:点击下面取消按钮 实现弹层关闭
        var btnCancel = this.myModal.getElementsByClassName('cancel')[0];
        btnCancel.onclick = function(){
            that.close();
        };

        //疑惑？为什么老师的注册点击事件中new出来的Modal没有onConfirm函数 
        //却依然可以实现一定效果
        var btnConfirm = this.myModal.getElementsByClassName('confirm')[0];
        btnConfirm.onclick = function(){
            settings.onConfirm();
        };
        //设置点击确定按钮时会发生的事情
        //属于很底层的dom操作
        // var modalConfirm = document.getElementById(options.bl1);
        // modalConfirm.onclick = function(){
        //     alert('what the hell are you doing');
        // }
        // var modalCancel = document.getElementById(options.bl2);
        // modalCancel.onclick = function(){
        //     alert('nothing');
        // }

        //使点击遮罩层时 display:none;
        //并且使点击对话框时 阻止父元素的事件冒泡 不display:none
        

        // myModal.onclick = function(){
        //     this.myModal.style.display = 'none';
        // }
        // modalDialog.onclick = function(e){
        //     e = e || window.event;
        //     e.stopPropagation();
        // }


        // myModal.querySelector('.close');
        //?

        //点击关闭按钮 可以display:none;
        // var btnClose = this.myModal.getElementsByClassName('close')[0];
        // btnClose.onclick = function(){
        //     this.myModal.style.display = 'none';
        // }

        // var modalCls = document.getElementById(options.bl0);
        // modalCls.onclick = function(){
        //     myModal.style.display = 'none';
        // }
    }
    //把myModal添加到属性里 就不再是局部变量 可以在函数外部访问
    Modal.prototype.close = function(){
        this.myModal.style.display = 'none';       
    }
    return Modal;
})();