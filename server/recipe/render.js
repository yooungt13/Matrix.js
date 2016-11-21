/**
 * @author youngtian13
 * @date 2016-06-02
 */
'use strict';

const swig = require('koa-swig');

module.exports = (app) => {
    const CLIENT_PATH = app.config.path.client;
    const DEBUG = app.debug;
    const ENV = process.env.NODE_ENV || 'dev';

    const MANIFEST = require(`${app.config.path.dist}/manifest.json`);
    const filters = require(`${app.config.path.extension}/filter`);
    const STATIC_HOST = app.config.host.static;

    // 全局参数，每次调用this.render都会返回
    const GLOBAL = {
        ENV,
        STATIC_HOST: app.config.host.static
    };

    const render = swig({
        root: CLIENT_PATH,
        filters: filters, // 扩展filter
        cache: ENV === 'prod', // 禁止模板缓存
        locals: {
            GLOBAL: GLOBAL
        }
    });

    // 配置template engine
    app.context.render = function*(data) {
        data.css = `${STATIC_HOST}/${MANIFEST[data.entry + '.css']}`;
        data.js = `${STATIC_HOST}/${MANIFEST[data.entry + '.js']}`;
        yield render.call(this, 'index', data);
    };

    DEBUG('TEMPLATE is set.');
};
