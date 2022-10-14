const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(num) {

    if (typeof num !== 'string' || !+num || +num < 0) {
        return false
    }

    const year = Math.ceil(HALF_LIFE_PERIOD * Math.log2(MODERN_ACTIVITY / +num));
    return year < 0 ? false : year;
}

module.exports = {
  dateSample
};
