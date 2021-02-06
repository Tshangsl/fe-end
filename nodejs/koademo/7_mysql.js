const Koa = require('koa')
const Router = require('@koa/router');

//模板引擎
// ejs文件不会解析html注释
const views = require('koa-views')
const path = require('path')

const app = new Koa()
const router = new Router()

app.use(
    views(path.join(__dirname, './views'), {
        extension: 'ejs'
    }))

var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'blog'
// });
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog '
});


// function getUsers() {
//     return new Promise((resolve, reject) => {
//         // connection.connect();
//         connection.query('SELECT * FROM t_user', function (error, results) {
//             if (error) {
//                 reject(error)
//             }
//             else resolve(results);
//         });
//         // connection.end();
//     })
// }

function query(sql) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) throw err; // not connected!
            // Use the connection
            connection.query('SELECT something FROM sometable', function (error, results, fields) {
                // When done with the connection, release it.
                connection.release();
                // Handle error after the release.
                if (error) {
                    reject(error)
                }
                else resolve(results);
                // Don't use the connection here, it has been returned to the pool.
            });
        });
    })
}

router.get('/', async ctx => {
    // connection.connect();
    // // 异步操作 执行到await... 回调函数都没有执行
    // // 解决方法 封装成一个异步函数 返回一个Promise对象
    // connection.query('SELECT * FROM t_user', function (error, results) {
    //     if (error) throw error;
    //     console.log(results);
    // });
    // connection.end();
    // 模板引擎渲染数据 不适用ctx.body使用ctx.render

    // 调用异步方法需要await一下
    let results = await query('SELECT * FROM t_user');
    console.log(results);
    await ctx.render('users', {
        users: results
    })
})

// 只要执行异步的查询 都要return一个Promise对象
// function getUser(userId){
//     return new Promise((resolve,reject)=>{
//         // connection.connect();
//         connection.query("SELECT * FROM t_user where user_id ="+userId, function (error, results) {
//             if (error) {
//                 reject(error)
//             }
//             else resolve(results);
//         });
//         // connection.end();
//     })
// }

// 超链接 get
router.get('/userDetail', async ctx => {
    // get请求带的参数
    var param = ctx.query;
    console.log(param);
    let result = await query("SELECT * FROM t_user where user_id =" + param.userId);
    console.log(result);
    await ctx.render('user-detail', {
        user: result[0]
    })
})

//koa-router
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')