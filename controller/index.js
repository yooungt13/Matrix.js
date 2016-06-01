/**
 * @author youngtian13
 * @date 2016-06-01
 */

'use strict';

module.exports = {
    path: '/',
    method: ['GET'],
    middleware: function*() {
        yield this.render('page/index', {
            title: 'Hello, Werewolf.',
            roles: ['Villager', 'Seer', 'Mason', 'Hunter', 'Troublemaker']
        })
    }
}