repeatString = function(stringToRepeat, numRepeat) {
  repeatedString = ""
  for (let i = 0; i < numRepeat; i++){
    repeatedString += stringToRepeat;
  }
  if (numRepeat < 0) {
    repeatedString = "ERROR";
  }
  return repeatedString;
}

// console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
