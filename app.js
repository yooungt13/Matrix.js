'use strict';

const app = require('koa')();
const config = require('config');

const MID_PATH = config.get('path.middleware');

const template = require(MID_PATH + '/template');
const error = require(MID_PATH + '/error');
const router = require(MID_PATH + '/router');

// 注册模板引擎
app.use(template);
// 处理异常
app.use(error);
// 配置路由
app.use(router(app));

// app.use(generator());

// 全部加载
// ['template', 'error', 'router'].forEach((file) => {
//     let mid = require(MID_PATH + '/' + file);
//     app.use(isGen(mid) ? mid : mid.call(this, app));
// });

app.listen(3000);

// function generator() {
//     let isReady = false;

//     return function*(next) {
//         if (isReady) {
//             console.log('Generator is ready.');
//             return yield next;
//         }

//         isReady = true;
//         console.log('Generator init.');
//         yield next;
//     }
// }

// function isGen(fn) {
//     return 'function' === typeof fn && fn.constructor.name === 'GeneratorFunction';
// }