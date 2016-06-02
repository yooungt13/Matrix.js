/**
 * @author youngtian13
 * @date 2016-06-02
 */

'use strict';

const ROOT_PATH = process.cwd() + '/view';

// 配置template engine
module.exports = require('koa-views')(ROOT_PATH, {
    map: {
        html: 'swig'
    }
});