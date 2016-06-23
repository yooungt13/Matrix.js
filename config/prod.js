const path = require('path');

module.exports = {
    host: {
        document: 'http://hello13.net',
        static: 'http://static.hello13.net/public'
    },
    path: {
        base: path.join(__dirname, '/../')
    }
};