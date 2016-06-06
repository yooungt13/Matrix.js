/**
 * @author youngtian13
 * @date 2016-06-01
 */

'use strict';

const config = require('config');
const startup = require(config.launcher);

// 启动server
startup().listen(config.port);

