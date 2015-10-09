function totalNumberVowels(theString){
  var theVowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  for (var i = 0; i < theString.length; i++) {
    if (theVowels.indexOf(theString.charAt(i)) > 0){
      count++;
    }
  }
  return count;
}

function totalNumberConsonants(theString){
  var theVowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  for (var i = 0; i < theString.length; i++) {
    if (theVowels.indexOf(theString.charAt(i)) < 0){
      count++;
    }
  }
  return count;
}

console.log('The total number of vowels is: ' + totalNumberVowels('That is so super cool.'));
console.log('The total number of consonants is: ' + totalNumberConsonants('That is so super cool.'));
