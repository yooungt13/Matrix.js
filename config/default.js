const path = require('path');

module.exports = {
    name: 'Werewolf',
    host: {
        document: ''
    },
    path: {
        base: __dirname + '/../',

        // model config
        datasource: __dirname + '/../model/datasource',
        mock: '/..//model/mock',
        // view config
        view: __dirname + '/../view',
        // controller config
        controller: __dirname + '/../controller',

        // env related
        recipe: __dirname + '/../environment/recipe',
        context: __dirname + '/../environment/context',
        middleware: __dirname + '/../environment/middleware',
        extension: __dirname + '/../environment/extension',

        statics: __dirname + '/../static',
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