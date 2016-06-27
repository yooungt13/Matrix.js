'use strict';

module.exports = {
    middleware: function*() {
        // 默认读取this.request.url相同路径下的数据文件
        // 若config { mock: true }, 则读取mock路径下数据，否则读取datasource下数据
        // let data = yield this.datasource({id:1});
        let data = yield this.datasource();

        this.body = data;
    }
};
