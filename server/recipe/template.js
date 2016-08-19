/**
 * @author youngtian13
 * @date 2016-06-02
 */

'use strict';

const render = require('koa-swig');

module.exports = (app) => {
    const VIEW_PATH = app.config.path.view;
    const DEBUG = app.debug;
    const ENV = process.env.NODE_ENV || 'dev';

    const filters = require(app.config.path.extension + '/filter');
    const isProd = !!(ENV === 'prod');

    // 全局参数，每次调用this.render都会返回
    const GLOBAL = {
        ENV: ENV,
        STATIC_HOST: app.config.host.static
    };

    // 配置template engine
    app.context.render = render({
        root: VIEW_PATH,
        filters: filters, // 扩展filter
        cache: isProd, // 禁止模板缓存
        locals: {
            GLOBAL: GLOBAL
        }
    });

    DEBUG('TEMPLATE is set.');
};
