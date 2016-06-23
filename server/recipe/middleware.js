/**
 * @author youngtian13
 * @date 2016-06-02
 */

'use strict';

const fs = require('fs');

module.exports = (app) => {
    const MID_PATH = app.config.path.middleware;
    const DEBUG = app.debug;

    const FILES = fs.readdirSync(MID_PATH);

    FILES.forEach((file) => {
        // 过滤隐藏文件
        if (!/^\..*/.test(file)) {
            // 若为generator, 则app.use
            let mid = require(MID_PATH + '/' + file);
            isGen(mid) && app.use(mid);

            DEBUG('MIDDLEWARE: ' + file + ' is used.');
        }
    });
};

function isGen(fn) {
    return typeof fn === 'function' && fn.constructor.name === 'GeneratorFunction';
}
