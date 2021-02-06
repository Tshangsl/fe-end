创建两个项目
myblog-pc 前端
vue create myblog-pc
npm run serve
npmjs.com中搜索vue-axios 显示相关操作
npm i --save vue-axios axios 

myblog-rd 后端 数据服务 不需要界面展示

npmjs.com中搜索koa-generator 显示相关操作
npm install -g koa-generator
koa2 /tmp/foo 
cd /tmp/foo
npm install
npm start

npmjs.com中搜索koa-cors 显示相关操作
cors解决跨域问题
npm install koa-cors


使用token需要下载下列中间件
npmjs.com中搜索jsonwebtoken中间件 显示相关操作
验证token
npm install jsonwebtoken

JWT -- JSON WEB TOKEN
json:javascript的对象表示法


// err ctx.status即是response.status
        // ctx被翻译成上下文context 
        // 只是koa这个框架用到的一个名词 同时封装了request和response中这些属性
        // express框架中没有ctx这个概念
        // web开发中主要两个名词 request response
        // request 客户端浏览器向服务器端发送的请求 Request Headers
        // 隐式 显式(传送的数据) 可以通过request.xxx 获得请求数据
        // 做了一个简化
        // Response Body
        // 隐式 显式 数据


// jwttoken是无状态的 不在服务器端做任何存储
// jwt 适合做多端登录 session 可以做单点登录
// 解决鉴权问题时 jwttoken只是解决方案中的一个 而不是唯一一个
// 传统方式 session+cookie 服务器端会生成session的一个id 存储在cookie中
// cookie是最早出现的 服务器端可以在客户端存信息的一个文件
// windows系统中 cookie文件被存储在c盘用户名下appdata下一个隐藏文件夹
// cookie文件夹 txt文本文件
// cookie存储信息空间有限制
// session启动时会生成一个id 每一个用户都会有一个session
// 服务器端 保存用户的状态
// 两者差别 jwt 分散在客户端 无状态 