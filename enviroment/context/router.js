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
    });

    router.get("/", function*() {
        yield this.render('page/index', {
            title: 'Hello, Werewolf.',
            roles: ['Villager', 'Seer', 'Mason', 'Hunter', 'Troublemaker']
        })
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

            // 得到文件内容
            res.push({
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