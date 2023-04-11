const convertToCelsius = function(temp) {
  let temperature = (temp - 32)/1.8;
  let rounded = Math.round(temperature * 10) / 10;

  return rounded;
};

const convertToFahrenheit = function(temp) {
  let temperature = (temp *(9/5)) + 32;
  let rounded = Math.round(temperature * 10) / 10;

  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
