// let jwt = require('jsonwebtoken');
// let secretKey = "my_secret_key"


// // session有状态 存储在服务器端 
// module.exports = {
//     // 如果此处加了async 则是异步的 返回的是promise对象
//     // 我们需要的是token字符串
//     createToken: payload=>{
//         return jwt.sign(payload, secretKey,{expiresIn:'1h'});
//     },
//     // 对接收到的token进行解码（token验证而非对比）
//     // 解码成功 说明该码是我生成
//     verifyToken: async (ctx, next) => {
//         if (ctx.header.authorization) {
//             let parts = ctx.header.authorization.split(' ');
//             let bearer = parts[0];
//             let token = parts[1];
//             if(/^Bearer$/.test(bearer)){
//                 try {
//                     jwt.verify(token, secretKey);
//                     console.log('lalal');
//                     await next();
//                 } catch (err) {
//                     ctx.status = 401;
//                     ctx.body = {
//                         state: 'auth-fail',
//                     }
//                 }
//             }
//         }
//     }
// }
let jwt = require("jsonwebtoken");

let secretKey = "**my_secret_key$$";

module.exports = {
  createToken: (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: "1h" });
  },
  verifyToken: async (ctx, next) => {
    if (ctx.header.authorization) {
      let parts = ctx.header.authorization.split(" ");
      let bearer = parts[0];
      let token = parts[1];
      console.log('www');
      if (/^Bearer$/.test(bearer)) {
        try {
          // 验证token
          jwt.verify(token, secretKey);
          await next();
        } catch (err) {
          // err
          ctx.status = 401;
          ctx.body = {
            state: "auth-fail",
          };
        }
      }
    }
  },
};
