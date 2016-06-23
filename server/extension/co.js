/**
 * @author youngtian13
 * @date 2016-06-21
 */

'use strict';

module.exports = (gen) => {
    return new Promise((resolve, reject) => {
        let iter = gen();

        function onResolve(data) {
            try {
                let it = iter.next(data);
                step(it);
            } catch (e) {
                reject(e);
            }
        }

        function onReject(err) {
            try {
                let it = iter.throw(err);
                step(it);
            } catch (e) {
                reject(e);
            }
        }

        function step(it) {
            // 迭代完成
            if (it.done) {
                resolve(it.value);
                return;
            }

            let value = it.value;
            // 判断value是Promise还是返回值
            if (typeof value.then === 'function') {
                value.then(onResolve, onReject);
            } else {
                onResolve(value);
            }
        }

        // 开始迭代
        onResolve();
    });
};
