const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  if (array.length === 0) {
    return 0;
  }
  const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return sum;
};

const multiply = function (array) {
  return array.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  });
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  }
  let array = new Array();
  for (let i = 0; i < num; i++) {
    array.push(i + 1);
  }
  return array.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  });
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
