const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!arr) {
    throw new Error ("Error");
  } else if (arr === []) {
    return arr;
  };
  
  const cloneArr = arr.slice();
  const resArr = [];
  const controlLines = ['--discard-next','--discard-prev','--double-next','--double-prev'];
  const empty = 'empty';

  for (let i = 0; i <= arr.length - 1; i++) {
    let currItem = cloneArr[i];
    if (!(controlLines.includes(currItem) || controlLines.includes(empty))) {
      resArr.push(currItem);
      continue;
    } else {
        switch(currItem) {
          case '--discard-next':
            if (i < arr.length - 1) {
              cloneArr[i + 1] = empty;
              i++;
            }
            break;

          case '--discard-prev':
              if (!((i === 0) || cloneArr[i - 1] === empty)) {
                resArr.pop();
              }
              break;

          case '--double-next':
              if (i < arr.length - 1) {
                resArr.push(cloneArr[i + 1]);
              }
              break;    

          case '--double-prev':
              if (!(i === 0 || cloneArr[i - 1] === empty)) {
                resArr.push(cloneArr[i - 1]);
              }
              break; 

          case empty:
              continue;
      }
    }
  };
  return resArr;


};
