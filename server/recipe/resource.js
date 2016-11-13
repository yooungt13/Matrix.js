/**
 * @author youngtian13
 * @date 2016-06-08
 */

'use strict';

const serve = require('koa-static-server');

module.exports = (app) => {
    const DIST_PATH = app.config.path.dist;
    const DEBUG = app.debug;

    // 设置静态文件路径
    app.use(serve({
        rootDir: DIST_PATH,
        rootPath: '/public'
    }));

    DEBUG('STATIC_RESOURCE is set.');
};
