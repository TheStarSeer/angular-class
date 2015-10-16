var app = angular.module('MainModule', []);

app.controller('MainController', function($scope){
  $scope.list = [];
  $scope.item = '';

  $scope.addItem = function(){
    $scope.list.push($scope.item);
  }

  $scope.removeItem = function(wantedItem){
    var index = $scope.list.indexOf(wantedItem);
    $scope.list.splice(index, 1);
  }
});
