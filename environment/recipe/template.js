/**
 * @author youngtian13
 * @date 2016-06-02
 */

'use strict';

const render = require('koa-swig');

module.exports = (app) => {

    const VIEW_PATH = app.config.path.view;
    const DEBUG = app.debug;

    // 配置template engine
    app.context.render = render({
        root: VIEW_PATH,
        locals: {
            env: process.env.NODE_ENV || 'dev'
        }
    });

    DEBUG('TEMPLATE is set.');
};