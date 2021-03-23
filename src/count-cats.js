const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  const flat = arr.reduce((acc, i) => [...acc, ...i], []);
  return flat.filter(i => i === '^^').length
};