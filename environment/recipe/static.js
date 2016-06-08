/**
 * @author youngtian13
 * @date 2016-06-08
 */

'use strict';

const serve = require('koa-static-server');

module.exports = (app) => {

    const STATIC_PATH = app.config.path.public;
    const DEBUG = app.debug;

    // 设置静态文件路径
    app.use(serve({
        rootDir: STATIC_PATH,
        rootPath: '/public'
    }));

    DEBUG('STATIC_RESOURCE is set.');
};