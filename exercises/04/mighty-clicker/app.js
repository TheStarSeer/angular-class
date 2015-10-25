var app = angular.module('MainModule', []);

app.controller('MainController', ['$scope', 'RedService', 'BlueService', function($scope, RedService, BlueService) {
  $scope.redCount = RedService.getCount();
  $scope.blueCount = BlueService.getCount();

  $scope.clickBlue = function(){
    RedService.removeClick();
    BlueService.addClick();
    $scope.redCount = RedService.getCount();
    $scope.blueCount = BlueService.getCount();
  }

  $scope.clickRed = function(){
    RedService.addClick();
    BlueService.removeClick();
    $scope.redCount = RedService.getCount();
    $scope.blueCount = BlueService.getCount();
  }
}]);
