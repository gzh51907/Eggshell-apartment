const express = require('express');
var ObjectId = require('mongodb').ObjectId;
const Router = express.Router();
const {
    mongo
} = require('../db');

Router.post('/add', async (req, res) => {
    let {
        id,
        name,
        qty,
        price,
        imgurl,
        selected
    } = req.body;
    console.log(req.body);

    let _id = ObjectId(id);
    let result = await mongo.create('order', [{
        _id,
        name,
        qty,
        price,
        imgurl,
        selected
    }]);
    res.send(result);
})

Router.get('/gain', async (req, res) => {

    let result = await mongo.find('order')
    res.send(result);

});
Router.delete('/remove', async (req, res) => {
    let {
        id
    } = req.query;

    let _id = ObjectId(id);
    let result = await mongo.remove('order', {
        _id
    });
    res.send(result);

});
Router.delete('/removeall', async (req, res) => {

    let result = await mongo.remove('order');
    res.send(result);

});
Router.patch('/alter', async (req, res) => {
    let {
        id, qty
    } = req.body;
    let _id = ObjectId(id);
    let result = await mongo.update('order', {
        _id
    }, {
        $set: {
            qty: qty
        }
    });
    res.send(result);

});

module.exports = Router;