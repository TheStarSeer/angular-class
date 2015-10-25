var app = angular.module('MainModule');

app.service('BlueService', function(){
  this.blueCount = 100;
  this.getCount = function(){
    return this.blueCount;
  }
  this.addClick = function() {
    this.blueCount++;
  }

  this.removeClick = function() {
    this.blueCount--;
    this.reset();
  }

  this.reset = function() {
    if (this.blueCount <= 0) {
      this.blueCount = 100;
    }
  }
});
