/**
 * @author youngtian13
 * @date 2016-06-02
 */

'use strict';

module.exports = function*(next) {
    yield next;

    if ((404 <= this.status && 417 >= this.status) || 500 <= this.status) {
        yield this.render('page/error', {
            status: this.status,
            message: this.message
        });
    }
}
