let mysql = require('mysql');
let {HOST,USER,PASSWORD,DATABASE} = require('../config/db.config')

let pool = mysql.createdPool({
    connectionLimit:10,
    host:HOST,
    user:User,
    password:PASSWORD,
    database:DATABASE,
})

module.exports = {
    query:function (sql,values){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err){
                    reject(err);
                }else{
                    connection.query(sql,values,(error,results)=>{
                        connection.release();//釋放連接 放回pool中
                        if(error){
                            reject(err);
                        }else{
                            resolve(results);
                        }
                    })
                }
            })
        })
    }
}