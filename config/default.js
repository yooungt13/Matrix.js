const path = require('path');

module.exports = {
    // application name
    name: 'Werewolf',
    // application server starup file
    app: __dirname + '/../server/app',

    host: {
        document: 'localhost:3000'
    },
    path: {
        base: __dirname + '/../',

        // view config
        view: __dirname + '/../client/view',
        resource: __dirname + '/../client/resource',
        favicon: __dirname + '/../client/resource/favicon.ico',

        // server files
        recipe: __dirname + '/../server/recipe',
        context: __dirname + '/../server/context',
        middleware: __dirname + '/../server/middleware',
        controller: __dirname + '/../server/controller',
        datasource: __dirname + '/../server/model/datasource',
        mock: __dirname + '/../server/model/mock',
        extension: __dirname + '/../server/extension'
    },
    port: 3000,
    isDebug: false,
    isOnline: false,
    maxCachePoolSize: 8000, // max cache pool size
    maxListener: 100,
    disableTemplateCaching: false
}