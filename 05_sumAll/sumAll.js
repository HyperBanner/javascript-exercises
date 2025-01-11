const sumAll = function (num1, num2) {
  let sum = 0;

  switch (true) {
    case num1 < 0 || num2 < 0:
      return "ERROR";
    case num1 % 1 !== 0 || num2 % 1 !== 0:
      return "ERROR";
    case typeof num1 === "string" || typeof num2 === "string":
      return "ERROR";
    case Number.isNaN(num1) || Number.isNaN(num2):
      return "ERROR";
    default:
      if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
          sum += i;
        }
        return sum;
      } else if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
          sum += i;
        }
        return sum;
      }
  }
};

// Do not edit below this line
module.exports = sumAll;
