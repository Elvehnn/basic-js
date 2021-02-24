const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(d) {
  if (!d) {
    return ('Unable to determine the time of year!');
  } else if (Object.prototype.toString.call(d) !== "[object Date]") {
    console.log(Object.prototype.toString.call(d));
    throw new Error ("Error");
  } else {
    let month = d.getMonth();
    if (month === 0 || month === 1 || month === 11) {
        return 'winter';
    } else if (month === 2 || month === 3 || month === 4) {
        return 'spring';
    } else if (month === 5 || month === 6 || month === 7) {
        return 'summer';
    } else {
        return 'autumn';
    };
  };
};
