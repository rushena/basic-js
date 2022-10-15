const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    const obj = {};

    return names.map(i => {
        if (obj.hasOwnProperty(i)) {
            obj[i] += 1;
            const res = `${i}(${obj[i]})`;
            obj[res] = 0;
            return res;
        } else {
            obj[i] = 0;
            return i;
        }
    })
}

module.exports = {
  renameFiles
};
