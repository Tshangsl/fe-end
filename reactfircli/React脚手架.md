React脚手架
    1.xxx脚手架 用来帮助程序员快速创建一个基于xxx库的模板项目
        1.包含了所有需要的配置(语法检查 JSX编译 devServer)
        2.下载好了所有相关的依赖
        3.可以自己运行一个简单效果
    2.React提供了一个用于创建React项目的脚手架库 create-react-app
    3.项目整体技术架构为react+webpack+es6+eslint
    4.使用脚手架开发的项目特点 模块化 组件化 工程化
创建项目并启动
    1.全局安装 npm install -g create-react-app
    2.切换到想创建的的目录 使用命令 create-react-app hello-react
    3.进入项目文件夹 cd hello-react
    4.启动项目 npm start
react默认把Webpack所有相关文件都隐藏了 
使用yarn eject/npm eject 
会将所有webpack相关命令暴露出来
并且使用后不能再回去
VsCode ctrl+Esc 呼出终端
脚手架文件介绍

public 静态资源文件

favicon 网站页签图标
index.html主页图
logo192.png logo图
logo512.png logo图
manifest.json 应用加壳的配置文件
robots.txt 爬虫协议文件

src源码文件夹

App.css App组件的样式
App.js App组件
App.test.js 用于给App做测试
index.css 样式
index.js 入口文件
logo.svg logo图片
reportWebVitals.js
   页面性能分析文件(需要web-vitals库的支持)



1.todoList案例相关知识点
    1.拆分组件 实现静态组件 注意className style的写法
    2.动态初始化列表 如何确定将数据放在哪个数组的state中
        某个组件使用 放在自身的state中
        某些组件使用 放在它们共同的父组件state中(官方称此操作为状态提升)
    3.关于父子组件通信
        1.父组件给子组件传递数据 通过props传递
        2.子组件给父组件传递数据 通过props传递 要求父提前给子传递一个参数
    4.注意defaultChecked和checked的区别 类似的还有 defaultValue和value
    5.状态在哪里 操作状态的方法就在哪里













