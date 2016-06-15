'use strict';

module.exports = {
    method: ['POST'],
    middleware: function*() {
        // 默认读取this.request.url相同路径下的数据文件
        // 若config { mock: true }, 则读取mock路径下数据，否则读取datasource下数据
        let data = this.datasource;
        this.body = data;
    }
}