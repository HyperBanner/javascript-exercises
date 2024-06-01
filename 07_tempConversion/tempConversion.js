const convertToCelsius = function (n) {
  const converted = (n - 32) * (5 / 9);
  return Math.round(converted * 10) / 10;
};

const convertToFahrenheit = function (n) {
  const converted = n * (9 / 5) + 32;
  return Math.round(converted * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
