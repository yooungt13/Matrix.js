/**
 * @author youngtian13
 * @date 2016-06-03
 */

'use strict';

const Koa = require('koa');
const config = require('config');
const debug = require('debug')(config.name);

// 扩展koa，绑定config与debug
class Application extends Koa {
    constructor() {
        super();
        this.config = config;
        this.debug = debug;

        // 注入recipes
        this.injectRecipes();
    }

    injectRecipes() {
        const RECIPE_PATH = this.config.path.recipe;
        const DEBUG = this.debug;

        // 按顺序加载recipe
        [
            'resource', // 静态资源文件
            'template', // 模板引擎
            'extension', // 系统扩展
            'middleware', // 中间件
            'router' // 路由
        ].forEach((file) => {
            require(RECIPE_PATH + '/' + file)(this);
        });

        DEBUG('RECIPE inject completely.');
    }
}

module.exports = new Application();
