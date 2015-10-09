function createEvenArray(highestNum) {
  var arrEvenNumbers = [];
  for (var i = 1; i <= highestNum; i++) {
    if (i % 2 == 0) {
      arrEvenNumbers.push(i);
    }
  }
  return arrEvenNumbers;
}

function addOdds(evensOnlyArray) {
var theCount = evensOnlyArray.length;
  for (var i = 0; i < theCount; i++) {
    evensOnlyArray.push(evensOnlyArray[i]++);
  }
  return evensOnlyArray;
}

function sortNums(numberArray) {
    return numberArray.sort(function(a, b){return a-b});
}

console.log(sortNums(addOdds(createEvenArray(10))));
