'use strict';

module.exports = {
    method: ['GET'],
    middleware: function*() {
        // this.body = 'It\'s a teapot';
        yield this.render('page/index', {
            title: 'Hello, Werewolf.',
            roles: ['Villager', 'Seer', 'Mason', 'Hunter', 'Troublemaker']
        })
    }
}