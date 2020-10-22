const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || members.length === 0) {
    return false;
  };

  let arrNew = [];
  let str;
  for (let i = 0; i < members.length; i++) {
   if (typeof members[i] === "string") {
    str = members[i].trim();
    arrNew.push((str[0]).toUpperCase()); 
    };
  }; 
   
  return arrNew.sort().join('');
};
