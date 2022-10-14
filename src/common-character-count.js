const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    const fn = s => {
        const sToArr = s.split('');

        return sToArr.reduce((a, i) => {
            if (a.has(i)) {
                a.set(i, a.get(i) + 1);
            } else {
                a.set(i, 1);
            }

            return a;
        }, new Map());
    }

    const mp1 = fn(s1);
    const mp2 = fn(s2);
    let res = 0;

    for(const [key, value] of mp1.entries()) {
        if (!mp2.has(key)) continue;
        const b = mp2.get(key);
        res += b > value ? value : b;
    }

    return res;
}

module.exports = {
  getCommonCharacterCount
};
