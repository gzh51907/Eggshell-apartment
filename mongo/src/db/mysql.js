const mysql = require('mysql');

var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'yaofangwang',
    multipleStatements:true //是否允许同时使用多个对象
});

function query(sql){
    return new Promise((resolve,reject)=>{
        pool.query(sql,function(error,results,fields){
            if(error) {
                reject(error);
            }
            resolve(results);
        });
    })
    
}

module.exports = query;