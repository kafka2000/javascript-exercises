"use strict";

const removeFromArray = function(...args) {
  let arrayToTrim = args[0];
  let itemsToRemove = args.slice(1);
  for (let item of itemsToRemove){
    let removeIndex = arrayToTrim.findIndex(e => e===item);
    if (removeIndex >= 0) {
      arrayToTrim.splice(removeIndex, 1);
    }
  }
  return arrayToTrim;
};

// Do not edit below this line
module.exports = removeFromArray;
