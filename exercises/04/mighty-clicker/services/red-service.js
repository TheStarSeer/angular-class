var app = angular.module('MainModule');

app.service('RedService', function(){
  this.redCount = 100;
  this.getCount = function() {
    return this.redCount;
  }

  this.addClick = function() {
    this.redCount++;
  }

  this.removeClick = function() {
    this.redCount--;
    this.reset();
  }

  this.reset = function() {
    if (this.redCount <= 0) {
      this.redCount = 100;
    }
  }
});
