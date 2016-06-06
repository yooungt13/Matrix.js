/**
 * @author youngtian13
 * @date 2016-06-06
 */

'use strict';

const config = require('config');

module.exports = function*(next) {
    console.log(this.request.url);

    const useMock = config.mock;
    const pathname = this.request.url;

    if (!!useMock) {
        const MOCK_PATH = config.path.mock;
        this.datasource = require(MOCK_PATH + pathname);
    } else {
        const DATA_PATH = config.path.datasource;
        this.datasource = yield require(DATA_PATH + pathname);
    }

    yield next;
}