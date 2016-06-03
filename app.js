'use strict';

const config = require('config');
const startup = require(__dirname + '/environment/launcher');

// 启动server
startup().listen(config.port);

