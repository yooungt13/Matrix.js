/**
 * @author youngtian13
 * @date 2016-06-15
 */

'use strict';

const fs = require('fs');
const co = require('co');
const path = require('path');

const assert = require('chai').assert;

const DATASOURCE_PATH = path.join(__dirname, '/server/model/datasource');
const MOCK_PATH = path.join(__dirname, '/server/model/mock');
// const CONTROLLER_PATH = __dirname + '/server/controller';

describe('Model', () => {
    describe('#datesource', () => {
        it('should return json', () => {
            // 遍历文件，得到所有datasource 文件
            // TODO: 接口返回超过200ms 被视为超时
            // util.wakler(DATASOURCE_PATH, (path) => {
            //     let ds = require(path);
            //     if (util.isGenerator(ds)) {
            //         co(ds.bind(this)).then((data) => {
            //             // 检查返回data
            //             if (typeof data === 'object') {
            //                 done();
            //             }
            //         });
            //     }
            // });
        });
    });

    describe('#mock', () => {
        it('should return json', () => {
            // 遍历文件，得到所有mock文件
            util.wakler(MOCK_PATH, (path) => {
                assert.equal('object', typeof require(path));
            });
        });
    });
});

describe('Controller', () => {
    describe('#router', () => {
        it('should return statusCode = 200', () => {
            // TODO
            // assert.equal('200', router.statusCode);
        });
    });
});

let util = {
    wakler: (root, cb) => {
        let files = fs.readdirSync(root);

        files.forEach((file) => {
            let path = root + '/' + file;
            let stat = fs.lstatSync(path);

            // 过滤系统文件
            if (/^\..*/.test(file)) {
                return;
            }

            if (!stat.isDirectory()) {
                cb && cb(path);
            } else {
                util.wakler(path, cb);
            }
        });
    },
    isGenerator: (fn) => {
        return typeof fn === 'function' && fn.constructor.name === 'GeneratorFunction';
    }
};
