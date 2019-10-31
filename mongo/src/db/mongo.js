// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
//解构写法
const {MongoClient} = require('mongodb');
const {PORT,DBurl,DBname} = require('../config.json');

//连接Mongodb err:错误信息  client:数据库客户端
async function connect(){
    // let client = await MongoClient.connect(DBurl);
    // //连接数据库
    // let db = client.db(DBname);
    // return {client,db}
    let result;
    try{
        let client = await MongoClient.connect(DBurl,{useNewUrlParser: true,useUnifiedTopology: true});
        let db = client.db(DBname);
        result = {client,db};
    }catch(err){
        result = err;
    }
    return result;
}
//查
async function find(colName,query={}){

    let {db,client} = await connect();
    //获取集合
    let col = db.collection(colName);
    //集合的CRUD
    let result = await col.find(query).toArray();
    //关闭数据库连接,释放资源
    client.close();
    return result;
}

//增
async function create(colName,data){

    let {db,client} = await connect();
    //获取集合
    let col = db.collection(colName);

    let result = await col.insertMany(data);
    //关闭数据库连接,释放资源
    client.close();
    return result;
}

//删
async function remove(colName,query){

    let {db,client} = await connect();
    //获取集合
    let col = db.collection(colName);

    let result = await col.deleteMany(query);
    //关闭数据库连接,释放资源
    client.close();
    return result;
}

//改
async function update(colName,query,data){

    let {db,client} = await connect();
    //获取集合
    let col = db.collection(colName);

    let result = await col.updateMany(query,data);
    //关闭数据库连接,释放资源
    client.close();
    return result;
}
// 排序
async function sort(colName, query = {}, order = {}) {
    let { db, client } = await connect();
    let col = db.collection(colName);


    // 查询数据库
    let result = await col.find(query).sort(order).toArray();
    // 关闭数据库连接
    client.close();
    //返回结果
    return result;
}

module.exports={
    find,
    create,
    remove,
    update,
    sort
}