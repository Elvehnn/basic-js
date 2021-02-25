const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray: [],
  
  getLength() {
    return this.chainArray.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chainArray.push('( )');
    } else {
      this.chainArray.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    let positionType = typeof position;
    if (positionType === 'number' && position > 0 && position < this.getLength()) {
      this.chainArray.splice(position - 1, 1);
      return this;
    } else {
      this.chainArray = [];
      throw new Error('Error!');
    }
  },
  reverseChain() {
    this.chainArray.reverse();
    return this;
  },
  finishChain() {
    const totalChain = this.chainArray.join('~~');
    this.chainArray = [];
    return totalChain;
  }
};

module.exports = chainMaker;
