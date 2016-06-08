const path = require('path');

module.exports = {
    // application name
    name: 'Werewolf',
    // server starup file
    launcher: __dirname + '/../environment/launcher',

    host: {
        document: 'localhost:3000'
    },
    path: {
        base: __dirname + '/../',

        // model config
        datasource: __dirname + '/../model/datasource',
        mock: __dirname + '/../model/mock',
        // view config
        view: __dirname + '/../view',
        // controller config
        controller: __dirname + '/../controller',

        // env related
        recipe: __dirname + '/../environment/recipe',
        context: __dirname + '/../environment/context',
        middleware: __dirname + '/../environment/middleware',
        extension: __dirname + '/../environment/extension',

        public: __dirname + '/../public',
        favicon: __dirname + '/../favicon.ico',
        hash: __dirname + '/../public/hash.json'
    },
    port: 3000,
    isDebug: false,
    isOnline: false,
    maxCachePoolSize: 8000, // max cache pool size
    maxListener: 100,
    disableTemplateCaching: false
}