const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    const bb = members.filter(i => typeof i !== 'string').map(i => i[0].toUpperCase()).sort((a, b) => a > b).join('');
    console.log(bb);
    return bb;
};
