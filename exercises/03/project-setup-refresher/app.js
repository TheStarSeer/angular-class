var app = angular.module('mainApp', []);

app.controller('AdditionController', function($scope){
  $scope.firstSumNumber = 0;
  $scope.secondSumNumber = 0;
  $scope.sum = 0;
  $scope.sumFunction = function (firstNumber, secondNumber) {
    $scope.sum = parseInt(firstNumber) + parseInt(secondNumber);
  }
})

app.controller('MultiplyController', function($scope){
  $scope.firstProductNumber = 0;
  $scope.secondProductNumber = 0;
  $scope.product = 0;
  $scope.multiplyFunction = function () {
    $scope.product = parseInt($scope.firstProductNumber) * parseInt($scope.secondProductNumber);
  }
})
