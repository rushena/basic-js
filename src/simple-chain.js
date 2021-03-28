const CustomError = require("../extensions/custom-error");

const chainMaker = {
  res: [],
  getLength() {
    return this.res.length;
  },
  addLink(value) {
    if (value === null || typeof value === 'number') {
      this.res.push('' + value);
    } else {
      this.res.push(value.toString());
    }
    return this
  },
  removeLink(position) {
    if (position < 1) {
      this.res = [];
      return new Throw();
    }
    this.res = this.res.filter((i, k) => k + 1 !== position);
    return this
  },
  reverseChain() {
    this.res = this.res.reverse();
    return this;
  },
  finishChain() {
    const result =  this.res.map(i => `( ${i} )`).join('~~');
    this.res = [];

    return result;
  }
};

module.exports = chainMaker;
