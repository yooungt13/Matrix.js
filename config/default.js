const path = require('path');

module.exports = {
    host: {
        document: ''
    },
    path: {
        base: __dirname + '/../',
        // model config
        datasource: __dirname + "/../model/datasource",
        mock: "./model/mock",
        // view config
        page: __dirname + "/../view/page",
        component: __dirname + "/../view/component",
        layout: __dirname + "/../view/layout",
        // env related
        middleware: __dirname + "/../environment/middleware",
        extension: __dirname + "/../environment/extension",
        context: __dirname + "/../environment/context",
        recipe: __dirname + "/../environment/recipes",

        statics: __dirname + "/../static",
        favicon: __dirname + "/../favicon.ico",
        hash: __dirname + "/../public/hash.json"
    },
    port: 8080,
    isDebug: false,
    isOnline: false,
    maxCachePoolSize: 8000, // max cache pool size
    maxListener: 100,
    disableTemplateCaching: false
}