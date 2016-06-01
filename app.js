'use strict';

const app = require('koa')();
const views = require('koa-views');
const config = require('config');

// 注册模板
app.use(views(__dirname + '/view', {
    map: {
        html: 'swig'
    }
}));

// 注册路由
require('./enviroment/context/router')(app);

app.listen(3000);

// console.log(config.get('Customer.dbConfig'));

console.log('Werewolf\'s listening p ort 3000...');