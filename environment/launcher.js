/**
 * @author youngtian13
 * @date 2016-06-03
 */

'use strict';

const Koa = require('koa');
const config = require('config');
const debug = require('debug')(config.name);

module.exports = () => {

    const app = new Application();

    // application init
    injectRecipes(app);
    // next step

    return app;
};

// 扩展koa，绑定config与debug
class Application extends Koa {
    constructor() {
        super();
        this.config = config;
        this.debug = debug;
    }
}

function injectRecipes(app) {
    const RECIPE_PATH = app.config.path.recipe;
    const DEBUG = app.debug;

    // 按顺序加载recipe
    ['template', 'middleware', 'router'].forEach((file) => {
        require(RECIPE_PATH + '/' + file).call(this, app);
    });

    DEBUG('RECIPE inject completely.');
}