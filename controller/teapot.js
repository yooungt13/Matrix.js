'use strict';

module.exports = {
    method: ['GET'],
    middleware: function*() {
        this.body = 'It\'s a teapot';
    }
}
