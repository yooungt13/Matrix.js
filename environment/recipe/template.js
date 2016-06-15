/**
 * @author youngtian13
 * @date 2016-06-02
 */

'use strict';

const render = require('koa-swig');
const filters = require('../helper/filter');

module.exports = (app) => {

    const VIEW_PATH = app.config.path.view;
    const DEBUG = app.debug;

    // 全局参数，每次调用this.render都会返回
    const GLOBAL = {
        ENV: process.env.NODE_ENV || 'dev',
        STATIC_HOST: app.config.host.static
    }

    // 配置template engine
    app.context.render = render({
        root: VIEW_PATH,
        filters: filters,   // 扩展filter
        cache: false,       // 禁止模板缓存
        locals: {
            GLOBAL: GLOBAL
        }
    });

    DEBUG('TEMPLATE is set.');
};