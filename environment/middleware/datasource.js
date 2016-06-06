/**
 * @author youngtian13
 * @date 2016-06-06
 */

'use strict';

const fs = require('fs');
const config = require('config');

module.exports = function*(next) {

    const useMock = config.mock;
    const pathname = this.request.url;

    const DATA_PATH = (!!useMock ? config.path.mock : config.path.datasource) + pathname;

    // 数据格式接受json|js
    if (fs.existsSync(DATA_PATH + '.json') || fs.existsSync(DATA_PATH + '.js')) {
        let datasource = require(DATA_PATH);

        // datasource返回接受generator|function|object
        if(isGenerator(datasource)) {
            this.datasource = yield datasource;
        } else if(isFunction(datasource)) {
            this.datasource = datasource.call(this);
        } else {
            this.datasource = datasource;
        }
    }

    yield next;
}

function isGenerator(fn) {
    return 'function' === typeof fn && fn.constructor.name === 'GeneratorFunction';
}

function isFunction(fn) {
    return 'function' === typeof fn;
}