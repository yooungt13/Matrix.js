/**
 * @author youngtian13
 * @date 2016-06-06
 */

'use strict';

const request = require('koa-request');

module.exports = function*(next) {

    // TODO
    // fecth data
    var options = {
        url: 'https://api.github.com/repos/dionoid/koa-request',
        // method: 'post',
        headers: { 'User-Agent': 'request' }
    };

    var response = yield request(options);
    var data = JSON.parse(response.body);

    return data;
}