const userModel = require('../models/userModel')
const {createToken} = require('../auth')

module.exports = {
    login: async function (ctx, next) {
        // 1.接数据 固定语法
        // post方式传送数据 ctx.request.body
        // get方式传送数据 ctx.query(?方式传参) |ctx.params(另一种传参方式)
        let { username, password } = ctx.request.body;
        // 2.验证 后端一定要验证 否则不安全
        // 用户名是否填写。。。

        // 3.连数据库
        let results = await userModel.getByNameAndPwd(username, password);
        console.log(results);
        // 4.根据数据库操作的结果，返回相应的信息
        if (results.length > 0) {
            // 登陆成功 生成token
            // 使用jsonwebtoken 
            // 每一个人登陆后都有一个自己的token 不重复 
            // sign一个加密算法 参数不一样 生成的码不一样
            let payload = {
                // payload中可以放很多参数 只要保证不出现重复
                // 保证唯一
                userId: Math.random(),
                username,
            }
            var token = createToken(payload);
            //login时打印的token是此处的token
            console.log(token);
            ctx.body = {
                state: 'success',
                token,
                // 把results中唯一一个对象返回
                user:results[0]
            }
        } else {
            ctx.body = {
                state:'fail'
            }
        }
    }
}