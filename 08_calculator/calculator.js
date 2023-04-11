const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let total = array.reduce(function(a, b) {
    return a + b;
  }, 0);
  return total;
};

const multiply = function(array) {
  let total = array.reduce(function(a, b) {
    return a * b;
  })
  return total;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
  let total = 1;
  if (num == 0 || num == 1) {
    return total;
  } else if (num > 1) {
    for (let i = num; i > 1; i--) {
      total = total * i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
