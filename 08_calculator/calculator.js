const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(num) {

  let result = 0;

	for (i=0; i < num.length; i++) {
    result += num[i];
  }

  return result;

};

const multiply = function(num) {
  let result = 1;

  for (i=0; i < num.length; i++) {
    result = result * num[i]
  }

  return result;

};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let result = num;

  if (num == 0) {
    return 1;
  }

  for (i=num-1; i > 0; i--) {
    result *= i
  }
return result;
};

factorial(5);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
