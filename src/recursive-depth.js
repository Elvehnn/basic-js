const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let findNestedArray = arr.find(item => Array.isArray(item));
    if (!findNestedArray) {
      return depth;
    } else {
      let currentArray = arr.flat();
      return depth += this.calculateDepth(currentArray);
    }
  }
};