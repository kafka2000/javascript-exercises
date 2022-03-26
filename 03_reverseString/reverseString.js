const reverseString = function(stringToReverse) {
  let reversedString = "";
  for (i = stringToReverse.length - 1; i >=0; i--) {
    reversedString += stringToReverse[i];
  }
  return reversedString;
};

// console.log(reverseString("sdffff"));

// Do not edit below this line
module.exports = reverseString;
