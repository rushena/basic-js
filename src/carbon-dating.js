const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(num) {
    if (typeof num !== 'string' || !+num || +num < 0) {
        return false
    }

    const year = Math.ceil(HALF_LIFE_PERIOD * Math.log2(MODERN_ACTIVITY / +num));
    return year < 0 ? false : year;
};
