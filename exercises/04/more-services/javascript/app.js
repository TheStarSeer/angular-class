var app = angular.module('MainModule', []);

app.controller('MainController', ['$scope', 'Cartoon', function($scope, Cartoon) {
  $scope.arrCartoons = Cartoon.arrCartoons;
  $scope.addCartoon = function () {
    Cartoon.addCartoon($scope.imageUrl, $scope.title, $scope.description);
  }

}]);
