// 通过 require 引入依赖
// var $ = require('../lib/zepto');

function init() {
    console.log('here\'s browserify.');
}

// 或者通过 module.exports 提供整个接口
module.exports = {
    init: init
};
