const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;
    let resultAddition = [];
    let result = [];

    repeatTimes = repeatTimes || 1;
    separator = separator || '+';
    addition = addition === undefined ? '' : addition;
    additionRepeatTimes = additionRepeatTimes || 1;
    additionSeparator = additionSeparator || '|';

    for (let i = 0; i < additionRepeatTimes; i++) {
        resultAddition.push('' + addition);
    }

    resultAddition = resultAddition.join(additionSeparator);

    for (let i = 0; i < repeatTimes; i++) {
        result.push('' + str + resultAddition);
    }

    return result.join(separator);
}

module.exports = {
  repeater
};
