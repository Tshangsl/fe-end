node 一个平台 语言使用js 让js脱离浏览器 运行在服务器端
node 特点 单线程 异步式I/O 事件驱动
性能更好 基于chrom 的v8引擎
common.js是一套规范
node实现了common.js
node不用借助第三方的webserver 
下载webserver文件
java tomcat
php apache
node.js遵循common.js模块化思想

node模块化开发思想 面向对象思想

初始化一个包
npm init -y 

node框架 常见web框架 
1.express 第一个node.js的web框架 目前使用者最多 比较重量级 语法较老
2.koa 和express同一个团队开发 更轻量级 只提供最基本的web运行时框架内容 需要手动集成第三方包 语法较新
3.egg.js 阿里的框架
KOA框架 koajs.com
npm init -y 初始化包 -y是默认格式
npm i koa  install=i

request
1.get(主要从服务器端获取数据 但也可传参)
    1.1浏览器直接输入地址
    1.2点击超链接
2.post(主要客户端向服务端请求数据)
    form
路由 route SPA(Single Page Application)
实现div的显示隐藏 单页面应用 减少整体页面的刷新

模板引擎
npm install --save koa-views
npm install --save ejs
安装后会在package.json中依赖