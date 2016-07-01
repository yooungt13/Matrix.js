/**
 * @author youngtian13
 * @date 2016-06-27
 */

'use strict';

const fs = require('fs');
const path = require('path');
const config = require('config');

const PAGE_ENTRY_PATH = config.get('path.entry');

module.exports = () => {
    let deps = {};

    wakler(PAGE_ENTRY_PATH, (file) => {
        // 分析得到file的deps
        deps[file] = new Set(getDeps(file).reverse());
    });
    console.log(deps);

    return deps;
};

let getDeps = (file) => {
    let allDeps = [];
    let fileStr = fs.readFileSync(file, 'utf-8');
    let currDeps = parseDeps(fileStr);

    // currDeps.forEach((file) => {
    //     console.log(normalize(file));
    //     allDeps.concat(getDeps(normalize(file)));
    //     // console.log(getDeps(normalize(file)));
    // });

    allDeps = allDeps.concat(currDeps);
    // console.log(allDeps);

    return allDeps;
};

let parseDeps = (fileStr) => {
    let regExp = /require(\([^\(\)]*\))/g;
    return fileStr.match(regExp) || [];
}

let normalize = (filePath) => {
    return path.join(PAGE_ENTRY_PATH, filePath.substring(9, filePath.length - 2) + '.js');
}

let wakler = (root, cb) => {
    let files = fs.readdirSync(root);

    files.forEach((file) => {
        let path = root + '/' + file;
        let stat = fs.lstatSync(path);

        if (!stat.isDirectory()) {
            cb && cb(path);
        } else {
            wakler(path, cb);
        }
    });
};