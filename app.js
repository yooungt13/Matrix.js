/**
 * @author youngtian13
 * @date 2016-06-01
 */

'use strict';

const config = require('config');
const app = require(config.application);

// 启动server
app.listen(config.port || 3000);