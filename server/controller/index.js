/**
 * @author youngtian13
 * @date 2016-06-01
 */

'use strict';

module.exports = {
    // RESTFUL 路由
    // path: '/:id',
    path: '/',
    method: ['GET'],
    middleware: function*() {
        // RESTFUL 接口取参
        // console.log(this.params);
        // URL参数取参
        // console.log(this.request.query);

        /**
         * 获取接口数据
         * 若NODE_ENV: dev下, 取mock数据
         * 若NODE_ENV: st/prod, 取datasource api接口数据
         * let result = yield this.datasource(params));
         * yield this.render('page/index', result);
         */

        // console.log(this.ua);
        // console.log(this.device);

        yield this.render('page/index', {
            title: 'Hello, Matrix.',
            css: ['page.css'],
            states: ['Optimus Prime', 'Megatron', 'Starscream', 'Devastator', 'Bumblebee'],

            // 日期：中国时区误差8小时
            now: new Date()
        });
    }
};
