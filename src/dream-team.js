const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!(members instanceof Array)) return false;
    return members.filter(i => typeof i == 'string').map(i => i.trim()[0].toUpperCase()).sort().join('');
};
