var readlineSync = require('readline-sync');

var firstNum = parseInt(readlineSync.question('What is your first number: '));
var secondNum = parseInt(readlineSync.question('What is your second number: '));
var operator = readlineSync.question('What do you want to do (sum, multiply, subtract, divide)? ');

if (operator == 'sum') {
  console.log(firstNum + secondNum);
} else if (operator == 'subtract') {
  console.log(firstNum - secondNum);
} else if(operator == 'multiply') {
  console.log(firstNum * secondNum);
} else if(operator == 'divide') {
  console.log(firstNum / secondNum);
} else {
  console.log("Invalid Choice!");
}
