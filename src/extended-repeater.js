const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' }) {
  str = String(str);
  separator = String(separator);
  addition = String(addition);
  additionSeparator = String(additionSeparator);

  let newStr = '';
  let strAdd = '';
  
  if (addition) {
    for (let i = 1; i <= additionRepeatTimes; i++) {
      strAdd += `${addition}${additionSeparator}`;
      // console.log(strAdd);
    };
    
    strAdd = strAdd.slice(0,-additionSeparator.length);

    for (let j = 1; j <= repeatTimes; j++){
      newStr += `${str}${strAdd}${separator}`;
    };
    // console.log(newStr);
  
  } else {
    for (let j = 1; j <= repeatTimes; j++){
      newStr += `${str}${separator}`;
    }
    // console.log(newStr);
  }
  
  newStr = newStr.slice(0,-separator.length);
  // console.log(newStr);
  return (newStr);
  
};
  