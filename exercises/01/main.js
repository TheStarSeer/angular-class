var firstNumber = parseInt(prompt("What is the first number?"));
var secondNumber = parseInt(prompt("What is the second number?"));
var operator = prompt("What operation do you want to perform? (add, subtract, divide, multiply)");

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
    console.warning("That is not a valid operator!");
}

function add(firstNumber, secondNumber) {
  if (isNaN(firstNumber || isNaN(secondNumber))) {
    return "Must enter numbers!";
  } else {
    return firstNumber + secondNumber;
  }
}

function subtract(firstNumber, secondNumber) {
  if (isNaN(firstNumber || isNaN(secondNumber))) {
    return "Must enter numbers!";
  } else {
    return firstNumber - secondNumber;
  }
}

function divide(firstNumber, secondNumber) {
  if (secondNumber != 0) {
    if (isNaN(firstNumber || isNaN(secondNumber))) {
      return "Must enter numbers!";
    } else {
      return firstNumber / secondNumber;
    }
  } else {
    return "The second number can't be a zero when dividing numbers.";
  }
}

function multiply(firstNumber, secondNumber) {
  if (isNaN(firstNumber || isNaN(secondNumber))) {
    return "Must enter numbers!";
  } else {
    return firstNumber * secondNumber;
  }
}
