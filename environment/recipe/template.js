/**
 * @author youngtian13
 * @date 2016-06-02
 */

'use strict';

const render = require('koa-swig');
const extension = require('../helper/render');

module.exports = (app) => {

    const VIEW_PATH = app.config.path.view;
    const DEBUG = app.debug;

    // 配置template engine
    app.context.render = render({
        root: VIEW_PATH,
        filters: extension,
        locals: {
            env: process.env.NODE_ENV || 'dev',
            STATIC_HOST: app.config.host.static
        }
    });

    DEBUG('TEMPLATE is set.');
};