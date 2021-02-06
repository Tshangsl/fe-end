const Koa = require('koa');
const Router = require('@koa/router');
var bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router.get('/',ctx=>{
    ctx.body = '首页'
})

router.get('/index',ctx=>{
    let html = `
        <h1>koa2 request post demo</h1>
        <form method="POST" action="/regist">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
        </form>
    `
    ctx.body = html;
})

router.post('/regist',ctx=>{
  let data = ctx.request.body;
  console.log(data);  
  ctx.body = data.userName + ', ' + data.nickName + ', ' + data.email;
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(80);
console.log('[demo] start-quick is starting at port 80')