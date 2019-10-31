const express = require('express');

const Router = express.Router();
const {
    mongo
} = require('../db');
const {
    formatData,
    token
} = require('../utils');


// 注册
// /user/reg
Router.post('/reg', async (req, res) => {
    let {
        username,
        password
    } = req.body;

    let result = await mongo.create('user', [{
        username,
        password,
        regtime: Date.now()
    }]);

    res.send(result);
})

Router.get('/check', async (req, res) => {
    let {
        username
    } = req.query;
    
    let result = await mongo.find('user', {
        username
    });
    if (result.length) {
        res.send(formatData({
            code: 0
        }));
    } else {
        res.send(formatData());
    }
})
//登录
Router.get('/login', async (req, res) => {
    let {
        username,
        password,
    } = req.query;

    let result = await mongo.find('user', {
        username,
        password
    });

    if (result.length) {
        let Authorization;
        //如果用户需要免登录操作，则生成一个token并返回给前端
        // if (mdl) {
        //     Authorization  = token.create(username);
        // }
        res.send(formatData({data:Authorization}));
    } else {
        res.send(formatData({code: 0}));
    }
})

// Router.post('/', async (req, res) => {
//     let result = await mongo.create('user', [{
//         username: "pengyh",
//         age: 18,
//         password: "123456789"
//     }]);
//     res.send(result);
// });
Router.get('/', async (req, res) => {
    let result = await mongo.find('user', {});
    res.send(result);

});
// Router.delete('/', async (req, res) => {
//     let result = await mongo.remove('goods', {
//         username: "pengyh"
//     });
//     res.send(result);

// });
// Router.patch('/', async (req, res) => {
//     let result = await mongo.update('goods', {
//         username: "peng"
//     }, {
//         $set: {
//             password: "peng1998",
//             age: "10"
//         }
//     });
//     res.send(result);

// });


module.exports = Router;