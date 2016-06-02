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

        yield this.render('page/index', {
            title: 'Hello, Werewolf.',
            roles: ['Villager', 'Seer', 'Mason', 'Hunter', 'Troublemaker']
        })
    }
}