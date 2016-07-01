/**
 * @author youngtian13
 * @date 2016-06-08
 */

'use strict';

const serve = require('koa-static-server');

module.exports = (app) => {
    const RESOURCE_PATH = app.config.path.resource + '/build';
    const DEBUG = app.debug;

    // 设置静态文件路径
    app.use(serve({
        rootDir: RESOURCE_PATH,
        rootPath: '/public'
    }));

    // 若prod则执行deps parse, 得到map
    // if(process.env === 'prod') {
        const parser = require(app.config.path.extension + '/deps');
        app.context.deps = parser();

        DEBUG('DEPS Parse completely.');
    // }

    DEBUG('STATIC_RESOURCE is set.');
};
