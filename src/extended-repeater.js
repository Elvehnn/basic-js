const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let newStr = [];
  newStr[0] = str;
  if (options.additionRepeatTimes) {
    let newAdd = new Array(additionRepeatTimes);
    newAdd.fill(options.addition,0,additionRepeatTimes - 1);
    for (let i = 1; i <= options.additionRepeatTimes; i++) {
      newAdd.push(options.Separator)
    }
  }
  
};
  