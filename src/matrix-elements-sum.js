const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    const fn = (index) => {
        let wasZero = false;
        return matrix.reduce((a, i) => {
            if (i[index] === 0 || wasZero) {
                wasZero = true;
                return a;
            }
            return a + i[index];
        }, 0);
    }

    return matrix[0].reduce((a, i, k) => a + fn(k), 0);
}

module.exports = {
  getMatrixElementsSum
};
