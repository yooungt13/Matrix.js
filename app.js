'use strict';

const app = require('koa')();
const views = require('koa-views');
const config = require('config');

const router = require('./enviroment/context/router');

// 注册模板
app.use(views(__dirname + '/view', {
    map: {
        html: 'swig'
    }
}));

// app.use(generator());

// 注册路由
app.use(router(app));

app.listen(3000);

// 打印config信息
// console.log(config.get('Customer.dbConfig'));

function generator() {
    let isReady = false;

    return function*(next) {
        if(isReady) {
            console.log('Generator is ready.');
            return yield next;
        }

        isReady = true;
        console.log('Generator init.');
        yield next;
    }
}
