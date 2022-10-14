const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    const strToArr = str.split('');
    const res = strToArr.reduce((a, i, k) => {
        if (k === 0 || a[a.length - 1][0] !== i) {
            a.push([i])
        } else {
            a[a.length - 1].push(i);
        }

        return a;
    }, []);

    return res.reduce((a, i) => `${a}${i.length === 1 ? '' : i.length}${i[0]}`, '');
}

module.exports = {
  encodeLine
};
