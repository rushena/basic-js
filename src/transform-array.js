const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
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
