const express = require('express');
var ObjectId = require('mongodb').ObjectId;
const Router = express.Router();
const { formatData, token } = require('../utils')

const { mongo } = require('../db');

//创建连接对象连接数据库
// var connection = mongo.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'yaofangwang'
// });

// 升序排序
Router.get('/asc', async (req, res) => {

    let data = await mongo.sort("goods", {}, { prite: 1 });
    res.send(formatData({ data }));
})

// 降序排序
Router.get('/desc', async (req, res) => {
    let data = await mongo.sort("goods", {}, { prite: -1 });
    res.send(formatData({ data }));
})

// 价格之间
Router.get('/pat', async (req, res) => {
    let { in1, in2 } = req.query
    let data = await mongo.find("goods", { prite: { $lte: in2 * 1, $gte: in1 * 1 } })
    res.send(formatData({ data }));

})

Router.route('/')
    .post((req, res) => {

    })
    .get(async (req, res) => {
        // let sql = 'select * from goods';
        // db.query(sql).then((results)=>{
        //     res.send(results)
        // });


        let result = await mongo.find("goods");
        res.send(result);
    })
Router.route('/:id')
    .get(async (req, res) => {

        let { id } = req.params;
        let mongoid = ObjectId(id);

        let result = await mongo.find('goods', { '_id': mongoid });
        res.send(result);
        console.log(result);
    })
    .patch(async (req, res) => {
        let { id } = req.params;

        let { money } = req.body;
        let sql = `updata list set `
        for (key in req.body) {
            sql += key + '=' + req.body[key] + ','
        }
        sql = sql.slice(0, -1);
        sql += `where gid=${id}`
        console.log(sql);

        let result = await query(sql);
        res.send(result);
    })
    .delete(async (req, res) => {
        let { id } = req.params;
        let result = await mongo(`delete from list where gid=${id}`);
        res.send(result);
    })


module.exports = Router;