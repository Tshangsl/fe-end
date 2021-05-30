// React脚手架会找到这个文件 将其加到webpack中 CommonJS
// React脚手架初始化时 会自动引入该中间件
const proxy = require('http-proxy-middleware')

module.exports=function(app){
    app.use(
        proxy('/api1',{//遇见/api1前缀的请求 就会触发该代理配置
            // 请求转发给谁 
            target:'http://localhost:5000',
            // 控制服务器收到的请求头中Host字段的值
            // Host标志本次请求从哪里发出
            changeOrigin:true,
            pathRewrite:{'^/api1':''}
        })
    )
}