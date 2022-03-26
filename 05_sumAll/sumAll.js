const sumAll = function(int1, int2) {
  if (!(typeof int1 === "number") || !(typeof int2 === "number") || int1 < 0 || int2 < 0) {
    return "ERROR"
  }
  const intMin = (int1 > int2) ? int2 : int1;
  const intMax = (int1 > int2) ? int1 : int2;
  let totalSum = 0
  for (let i = intMin; i <= intMax; i++) {
    totalSum += i;
  }
  return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
