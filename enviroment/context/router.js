/**
 * @author youngtian13
 * @date 2016-06-01
 */

'use strict';

let router = require("koa-router")();
let fs = require('fs');

const ROOT_PATH = process.cwd() + '/controller';

module.exports = (app) => {

    // 遍历文件，得到所有controller
    wakler(ROOT_PATH).forEach((route) => {
        // 将所有controller注册路由
        router.register(route.path, route.method, route.middleware);
    });

    app.use(router.routes())
        .use(router.allowedMethods());

    return function*(next) {

        // TODO:
        // if(debug) { }
        // 如果是debug model, 则每次request重置请求controller路由
        // 改动生效，刷新页面

        yield next;
    }
};

let wakler = (root) => {
    let res = [],
        files = fs.readdirSync(root);

    files.forEach((file) => {
        let path = root + '/' + file,
            stat = fs.lstatSync(path);

        if (!stat.isDirectory()) {
            let route = require(path);

            // 得到文件内容
            res.push({
                // 得到controller设置path或者路径
                path: route.path || path.replace(ROOT_PATH, '').split('.')[0],
                method: route.method || ['GET'],
                middleware: route.middleware || function*() {}
            });

        } else {
            res = res.concat(wakler(path));
        }
    });
    return res;
}