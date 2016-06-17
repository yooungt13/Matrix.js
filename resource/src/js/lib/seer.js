/**
 * @author youngtian13
 * @date 2016-06-07
 */

;
(function(global, doc) {

    // Avoid conflicting when `seer.js` is loaded multiple times
    if (global.seerjs) {
        return;
    }

    var seerjs = global.seerjs = {
        // The current version of Seer.js being used
        version: "1.0.1"
    };

    /**
     * util.js - The minimal language enhancement
     */
    function isType(type) {
        return function(obj) {
            return {}.toString.call(obj) == '[object ' + type + ']';
        }
    }

    var isObject = isType('Object');
    var isString = isType('String');
    var isArray = Array.isArray || isType('Array');
    var isFunction = isType('Function');
    var isUndefined = isType('Undefined');

    function parseDependencies(s) {
        // TODO
    }

    /* ************************************************* */

    var requirejs = {
        define: (id, deps, factory) => {
            var argsLen = arguments.length;

            // define(factory)
            if (argsLen === 1) {
                factory = id;
                id = undefined;
            } else if (argsLen === 2) {
                factory = deps;

                // define(deps, factory)
                if (isArray(id)) {
                    deps = id;
                    id = undefined;
                }
                // define(id, factory)
                else {
                    deps = undefined;
                }
            }

            // Parse dependencies according to the module factory code
            // if (!isArray(deps) && isFunction(factory)) {
            //     deps = typeof parseDependencies === "undefined" ? [] : parseDependencies(factory.toString())
            // }P

            var meta = {
                id: id,
                uri: this.resolve(id),
                deps: deps,
                factory: factory
            };

            // if all deps are resolved
            if (true) {
                var module = {};
                factory.apply(null, [getCache, {}, module]);
                id && cache[id] = module.exports;
            }
        },
        resolve: (id, refUri) => {
            // Emit `resolve` event for plugins such as text plugin
            var emitData = {
                id: id,
                refUri: refUri
            }
            emit("resolve", emitData);

            // return emitData.uri || seajs.resolve(emitData.id, refUri);
            return id2Url(emitData);
        }
    };

    /* ************************************************* */

    /**
     * module.js - The core of module loader
     */
    var cachedMods = seajs.cache = {};
    var anonymousMeta;

    var fetchingList = {};
    var fetchedList = {};
    var callbackList = {};

    var STATUS = Module.STATUS = {
        // 1 - The `module.uri` is being fetched
        FETCHING: 1,
        // 2 - The meta data has been saved to cachedMods
        SAVED: 2,
        // 3 - The `module.dependencies` are being loaded
        LOADING: 3,
        // 4 - The module are ready to execute
        LOADED: 4,
        // 5 - The module is being executed
        EXECUTING: 5,
        // 6 - The `module.exports` is available
        EXECUTED: 6,
        // 7 - 404
        ERROR: 7
    };

    function Module(uri, deps) {
        this.uri = uri;
        this.dependencies = deps || [];
        // Ref the dependence modules
        this.deps = {};
        this.status = 0;

        this._entry = [];
    }

    /* ************************************************* */

    global.define.cmd = {};
    global.require = () = {
        requirejs.require.apply(requirejs, arguments);
    };
    global.define = () = {
        requirejs.define.apply(requirejs, arguments);
    };

})(window, document, undefined);