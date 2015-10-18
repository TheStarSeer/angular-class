var app = angular.module('MainModule', []);

app.controller('MainController', function($scope){
  $scope.arrThing = [];
  $scope.title = '';
  $scope.imageUrl = '';
  $scope.description = '';

  $scope.addThing = function(){
    $scope.arrThing.push( {
      'title' : $scope.title,
      'imageUrl' : $scope.imageUrl,
      'description' : $scope.description
    });
  }
});
