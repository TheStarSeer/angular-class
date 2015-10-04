// Get the first number from user.
var firstNumber = prompt("What is the first number?");

// Ensure it is an number, if not prompt user again.
while (isNaN(firstNumber)) {
  firstNumber = prompt("What is the first number?");
}

// Convert string to int.
firstNumber = parseInt(firstNumber);

// Get the second number from user.
var secondNumber = prompt("What is the second number?");

// Ensure it is an number, if not prompt user again.
while (isNaN(secondNumber)) {
  secondNumber = prompt("What is the second number?");
}

// Convert string to int.
secondNumber = parseInt(secondNumber);

// Get the operation from the user.
var operator = prompt("What operation do you want to perform? (add, subtract, divide, multiply)");

// Determine operator and call appropriate function and log result.
switch (operator) {
  case 'add':
    console.log(add(firstNumber, secondNumber));
    break;
  case 'subtract':
    console.log(subtract(firstNumber, secondNumber));
    break;
  case 'divide':
    console.log(divide(firstNumber, secondNumber));
    break;
  case 'multiply':
    console.log(multiply(firstNumber, secondNumber));
    break;

  default:
    console.warn("That is not a valid operator!");
}

// Adds numbers and returns result.
function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

// Subtract numbers and returns result.
function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

// Checks for secondNumber 0, if not zero divide an returns result.
function divide(firstNumber, secondNumber) {
  if (secondNumber != 0) {
    return firstNumber / secondNumber;
  } else {
    return "The second number can't be a zero when dividing numbers.";
  }
}

// Multiplies numbers and returns result.
function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}
