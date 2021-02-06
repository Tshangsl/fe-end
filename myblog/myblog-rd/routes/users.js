const router = require('koa-router')()
const user = require('../controllers/user')
// 路由前缀
router.prefix('/user')

// login中是生成token而不是验证token
router.post('/login', user.login)
module.exports = router

// function (ctx, next) {
//   // 使用ctx.request.body必须使用bodyparser中间件 
//   // 该中间件在app.js中引用

// }