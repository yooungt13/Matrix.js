/**
 * @author youngtian13
 * @date 2016-06-15
 */

'use strict';

const fs = require('fs');
const co = require('co');

const assert = require('chai').assert;
const expect = require('chai').expect;

const DATASOURCE_PATH = __dirname + '/model/datasource';
const MOCK_PATH = __dirname + '/model/mock';
const CONTROLLER_PATH = __dirname + '/controller';

describe('Model', () => {
    describe('#datesource', () => {
        it('should return json', (done) => {
            // 遍历文件，得到所有datasource 文件
            util.wakler(DATASOURCE_PATH, (path) => {
                let ds = require(path);
                if (util.isGenerator(ds)) {
                    co(ds.bind(this)).then((data) => {
                        // 检查返回data
                        if (typeof data === 'object') {
                            done();
                        }
                    });
                }
            });
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
            let path = root + '/' + file,
                stat = fs.lstatSync(path);

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
        return 'function' === typeof fn && fn.constructor.name === 'GeneratorFunction';
    }
}