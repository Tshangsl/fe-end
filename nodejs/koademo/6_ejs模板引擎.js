const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const static = require('koa-static');
const Router = require('@koa/router');

const app = new Koa()
const router = new Router()

// 加载模板引擎
// 寻找view.ejs所在路径
// koa-views
app.use(
  views(path.join(__dirname, './view'), {
    extension: 'ejs'
}))

// koa-static
// 加载静态资源文件
app.use(static(path.join(__dirname,'./public')))

//koa-router
app.use(router.routes()).use(router.allowedMethods());


router.get('/',async ctx=>{
  let title = 'hello koa2';
  let message = 'hello world';
  await ctx.render('index',{
    title,
    message
  })
})



app.listen(3000)