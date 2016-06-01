/**
 * @author youngtian13
 * @date 2016-06-01
 */

'use strict';

let router = require("koa-router")();
let fs = require('fs');

const ROOT_PATH = process.cwd() + '/controller';

module.exports = function(app) {
    wakler(ROOT_PATH).forEach((route) => {
        router.register(route.path, route.method, route.middleware);
        // logger.info(route.path)
    });

    router.get("/", function*() {
        this.body = 'Welcome to werewolf';
    });

    app.use(router.routes())
       .use(router.allowedMethods());
};

let wakler = (root) => {
    let res = [],
        files = fs.readdirSync(root);

    files.forEach((file) => {
        let path = root + '/' + file,
            stat = fs.lstatSync(path);

        if (!stat.isDirectory()) {
            let route = require(path);
            const BASE_PATH = path.replace(ROOT_PATH, '').split('.')[0];
            let paths = [];
            if (route.path && _.isString(route.path)) {
                paths.push(route.path);
            } else if (route.path && _.isArray(route.path)) {
                paths = route.path;
            } else {
                paths.push(path.replace(ROOT_PATH, '').split('.')[0]);
            }

            // 得到文件内容
            paths.forEach((path) => {
                res.push({
                    path: path,
                    method: route.method || ['GET'],
                    middleware: route.middleware || function*() {}
                });
            });

        } else {
            res = res.concat(wakler(path));
        }
    });
    return res;
}