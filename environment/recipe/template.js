/**
 * @author youngtian13
 * @date 2016-06-02
 */

'use strict';

const views = require('koa-views');
const config = require('config');

module.exports = (app) => {

    const VIEW_PATH = app.config.path.view;
    const DEBUG = app.debug;

    // 配置template engine
    app.use(views(VIEW_PATH, {
        map: {
            html: 'swig'
        }
    }));

    DEBUG('TEMPLATE is set.');
};