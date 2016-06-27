/**
 * @author youngtian13
 * @date 2016-06-02
 */

'use strict';

module.exports = function*(next) {
    yield next;

    // 所有路由不包括后缀
    // 若有后缀默认为资源文件，不进行error处理
    if (this.path.indexOf('.') === -1) {
        if ((this.status >= 400 && this.status <= 417) || this.status >= 500) {
            yield this.render('page/error', {
                status: this.status,
                message: this.message
            });
        }
    }
};
