/**
 * @author youngtian13
 * @date 2016-06-01
 */

'use strict';

// 默认为开发环境
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

const config = require('config');
const app = require(config.app);

// 启动server
app.listen(config.port || 3000);
