var party = function(number, name) {
  this.number = number;
  this.name = name;
};

var penguins = new party(1000000, 'penguins');
var communists = new party(1000000, 'communists');

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function onHit(party){
    var numberDead = getRandomIntInclusive(1,1000000);
    party.number -= numberDead;
    console.log(party.name + ' were nuked and lost ' + numberDead + ' souls. There population is now at ' + (party.number > 0 ? party.number : 0 ));
}

function onMiss(party){
  console.log(party.name + ' were nuked, but the attack was unsuccessful.');
}

function sendNuke(party, onHit, onMiss) {
  switch (getRandomIntInclusive(1,2)) {
    case 1:
        onMiss(party);
      break;
    case 2:
        onHit(party);
      break;
  }
}
var first = '';
var second = '';

function coinFlip(objOne, objTwo) {
  if(getRandomIntInclusive(1,2) === 1) {
    first = objOne;
    second = objTwo;
  } else {
    first = objTwo;
    second = objOne;
  }
}

coinFlip(penguins, communists);

var fight = true;
while (fight) {
  sendNuke(first, onHit, onMiss);
  if (first.number <= 0) {
    console.log('The ' + first.name + ' have been exterminated.');
    fight = false;
    break;
  } else if (second.number <= 0) {
    console.log('The ' + second.name + ' have been exterminated.');
    fight = false;
    break;
  }
  sendNuke(second, onHit, onMiss);
  if (first.number <= 0) {
    console.log('The ' + first.name + ' have been exterminated.');
    fight = false;
  } else if (second.number <= 0) {
    console.log('The ' + second.name + ' have been exterminated.');
    fight = false;
  }
}
