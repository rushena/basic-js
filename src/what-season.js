const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!arguments.length) return 'Unable to determine the time of year!';

    if (!(date instanceof Date)) {
        throw new Error()
    }

    try {
        isNaN(date)
    } catch (e) {
        throw new Error()
    }
    const month = date.getMonth();
    if (month === 11 || month < 2) return 'winter';
    if (month > 1 && month < 5) return 'spring';
    if (month > 4 && month < 8) return 'summer';
    if (month > 7 && month < 11) return 'autumn';
};
