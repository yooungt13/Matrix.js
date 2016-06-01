'use strict';

let app = require('koa')();
let config = require('config');

// 注册路由
require('./enviroment/context/router')(app);

app.listen(3000);

// console.log(config.get('Customer.dbConfig'));

console.log('Werewolf\'s listening p ort 3000...');