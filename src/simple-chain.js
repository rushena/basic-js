const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    arr: [],
    getLength() {
        return this.arr.length;
    },
    addLink(value) {
        this.arr.push(!arguments.length ? null : value);
        return this;
    },
    removeLink(position) {
        console.log( position, this.arr.length);
        if (typeof position != 'number' || position < 1 || position > this.arr.length) {
            this.arr = [];
            throw new Error('You can\'t remove incorrect link!');
        }
        this.arr = this.arr.filter((i, k) => position !== k + 1);
        return this;
    },
    reverseChain() {
        this.arr = this.arr.reverse();
        return this;
    },
    finishChain() {
        const res = this.arr.map(i => `( ${i} )`).join('~~');
        this.arr = [];
        return res;
    }
};

module.exports = {
  chainMaker
};
