// Declares required global variables.
var readlineSync = require('readline-sync');
var blnShip = false;
var intHits = 0;
var intTotalShots = 10;
var intTotalShips = 0;
var re = /^[0-9]{1},[0-9]{1}/;
var myGrid = [];

var objLocation = function(ship, hit){
  this.hit = hit;
  this.ship = ship;
  this.firedUpon = false;
}

// Randamize function, takes a minimum and maximum an returns random number between
// those two parameters.
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Creates 10x10 grid with populated objects. This function could be abstracted
// better by taking number of rows and colums, and object as parameter.
function createGrid(){
  while (intTotalShips < 3) {
    var myGrid = [];
    intTotalShips = 0;
    for (var i = 0; i < 10; i++) {
      myGrid[i] = [];
      for (var j = 0; j < 10; j++) {
          if (getRandomIntInclusive(1,5) === 1) {
            blnShip = true;
            intTotalShips++;
          } else {
            blnShip = false;
          }
          myGrid[i][j] = new objLocation(blnShip, false);
      }
    }
  }
  return myGrid;
}

// Gets coordinates array from user, uses regex to validate input.
function getCoordinates() {
  var blnCorrectCoordinates = false;
  while (!blnCorrectCoordinates) {
    var strXYCoordinate = readlineSync.question('What are the coordinates you wish to fire upon (x,y from 0,0 to 9,9): ');
    if (strXYCoordinate.match(re)) {
      blnCorrectCoordinates = true;
    }
  }
  return strXYCoordinate.split(',');
}

// Takes user arrCoordinates, consoles result, increases intHits and decreases
// intTotalShots. This function could be abstracted better by taking and returning
// an array of intHits and intTotalShots.
function getFiredResult(arrCoordinates) {
  if (myGrid[parseInt(arrCoordinates[0])][parseInt(arrCoordinates[1])].firedUpon) {
    if (myGrid[parseInt(arrCoordinates[0])][parseInt(arrCoordinates[1])].hit === true) {
      console.log('This ship has already been hit.');
    } else {
      console.log('This space has already been fired upon.');
    }
  } else {
      if (myGrid[parseInt(arrCoordinates[0])][parseInt(arrCoordinates[1])].ship === true) {
        console.log('HIT!')
        myGrid[parseInt(arrCoordinates[0])][parseInt(arrCoordinates[1])].hit = true;
        myGrid[parseInt(arrCoordinates[0])][parseInt(arrCoordinates[1])].firedUpon = true;
        intHits++;
    } else {
      console.log('MISS.')
      myGrid[parseInt(arrCoordinates[0])][parseInt(arrCoordinates[1])].firedUpon = true;
    }
    intTotalShots--;
  }
}

// Displays the grid result.
function displayGrid(myGrid) {
  var strGridOutput = '';
  for (var i = 0; i < myGrid.length; i++) {
    for (var j = 0; j < myGrid[i].length; j++) {
      if (myGrid[i][j].firedUpon) {
        switch (myGrid[i][j].hit) {
          case true:
            strGridOutput += 'X';
            break;
          default:
            strGridOutput += 'M';
        }
      } else {
        strGridOutput += 'O';
      }

    }
      strGridOutput += '\n';
  }
  console.log('');
  console.log(strGridOutput);
}

// Triggers the game play.
function playGame() {
  myGrid = createGrid();

  while (intHits < 3 && intTotalShots > 0) {
    var arrCoordinates = getCoordinates();
    console.log('');
    getFiredResult(arrCoordinates);

    displayGrid(myGrid);

  }

  if (intHits === 3) {
    console.log('You win!');
  } else {
    console.log('The enemey fired and hit your ship. You lose!');
  }
}

playGame();
