const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix ) {
    const mL = matrix.length - 1;

    return matrix.map((q, w) => {
        const qL = w.length - 1;
        return q.map((i, k) => {
            let res = 0;

            if (k > 0 ? !!q[k - 1] : false) {
                res += 1;
            }

            if (k !== qL ? !!q[k + 1] : false) {
                res += 1;
            }

            if (w > 0 ? !!matrix[w - 1][k] : false) {
                res += 1;
            }

            if (w !== mL ? !!matrix[w + 1][k] : false) {
                res += 1;
            }

            if (k > 0 && w > 0 ? !!matrix[w - 1][k - 1] : false) {
                res += 1;
            }

            if (k !== qL && w !== mL ? !!matrix[w + 1][k + 1] : false) {
                res += 1;
            }

            if (w > 0 && k !== qL ? !!matrix[w - 1][k + 1] : false) {
                res += 1;
            }

            if (w !== mL && k > 0 ? !!matrix[w + 1][k - 1] : false) {
                res += 1;
            }

            return res;
        });
    })
}

module.exports = {
  minesweeper
};
