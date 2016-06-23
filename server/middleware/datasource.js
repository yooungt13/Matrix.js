/**
 * @author youngtian13
 * @date 2016-06-06
 */

'use strict';

const fs = require('fs');
const config = require('config');

module.exports = function*(next) {
    let useMock = config.mock;
    let pathname = this.request.url;
    let filename = this.routerMap[pathname];

    const DATA_PATH = (useMock ? config.path.mock : config.path.datasource) + filename;

    // 数据格式接受json|js
    if (fs.existsSync(DATA_PATH + '.json') || fs.existsSync(DATA_PATH + '.js')) {
        let data = require(DATA_PATH);

        this.datasource = function*(params) {
            // datasource返回接受generator|function|object
            if (isGenerator(data)) {
                return yield data(params);
            } else if (isFunction(data)) {
                return data.call(this);
            } else {
                return data;
            }
        };
    }

    yield next;
};

function isGenerator(fn) {
    return typeof fn === 'function' && fn.constructor.name === 'GeneratorFunction';
}

function isFunction(fn) {
    return typeof fn === 'function';
}
