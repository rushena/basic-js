const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const nToStr = `${n}`;
    const nToArr = nToStr.split('');
    const arr = nToArr.reduce((a, i, k) => {
        let res = `${nToStr.slice(0, k )}${nToStr.slice(k + 1)}`;
        a.push(+res);
        return a;
    }, []);

    return Math.max(...arr);

}

module.exports = {
  deleteDigit
};
