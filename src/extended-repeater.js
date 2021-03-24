const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
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
};
  