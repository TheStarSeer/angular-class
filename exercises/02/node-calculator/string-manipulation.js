var readlineSync = require('readline-sync');

var userName = readlineSync.question('What is your first name? ');
console.log('hello ' + userName.toUpperCase());
console.log('There are ' + userName.length + ' letters in your name.');

var lastName = readlineSync.question('What is your last name? ');
console.log('Welcome ' + userName + ' ' + lastName);

var longSentence = readlineSync.question('Tell me about your favorite animal? ');
console.log('This is half of your last response ' + '\"' + longSentence.substring(longSentence.length/2) + '\"');

var longSentenceStart = readlineSync.question('Where would you like me to start the previous message?');

console.log('Okay, here is your requested text ' + '\"' + longSentence.substring(longSentenceStart) + '\"');
