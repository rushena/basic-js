const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

    if (!(arr instanceof  Array)) {
        throw new Error('\'arr\' parameter must be an instance of the Array!');
    }

    const keys = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

    return arr.reduce((acc, i, k) => {
        if (keys.includes(i)) {
            return acc;
        }

        if (arr[k - 1] !== undefined && arr[k - 1] === '--discard-next') {
            return acc;
        }

        if (arr[k + 1] !== undefined && arr[k + 1] === '--double-prev') {
            acc.push(i)
        }

        if (arr[k - 1] !== undefined && arr[k - 1] === '--double-next') {
            acc.push(i)
        }

        if (arr[k + 1] !== undefined && arr[k + 1] === '--discard-prev') {
            return acc;
        }

        acc.push(i);
        return acc;
    }, []);
}

module.exports = {
  transform
};
