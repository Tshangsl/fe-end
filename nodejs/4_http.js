var http = require('http');
var querystring = require('querystring');
http
    .createServer((req,res)=>{
        //1.http://localhost:3000/显示用户注册的表单
        //2.http://localhost:3000//regist注册成功的回显页面
        // console.log(req.url);
        res.writeHead(200,{'content-Type':'text/html;charset=utf-8'});
        if(req.url == '/'){
            res.write('<h1>用户注册</h1>');
            res.write('<form action="regist" method="post">');
            res.write('<p>用户名:<input type="text" name="username" </p>');
            res.write('<p>密码:<input type="password" name="password" </p>');
            res.write('<p>电话:<input type="text" name="tel" </p>');
            res.write('<p><button type="submit">注册</button> </p>');
            res.write('</form>');
            res.end('');
        }else if(req.url == '/regist'){
            var postData = '';
            req.on('data',data=>{
                postData += data;
            });
            req.on('end',()=>{
                // console.log(postData);
                var userInfo = querystring.parse(postData);
                // console.log(userInfo);
                console.log('用户名：',userInfo.username);
                console.log('密码：',userInfo.password);
                console.log('电话：',userInfo.tel);
            })
            res.end('');
        }
        res.end('');
    })
    .listen(3000);
console.log('HTTP Server is listening at port 3000')