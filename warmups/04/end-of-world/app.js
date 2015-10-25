var app = angular.module('MainModule', []);

app.controller('MainController', ['$scope', '$interval', function ($scope, $interval) {
  $scope.intHours = 00;
  $scope.intMinutes = 1;
  $scope.intSeconds = 20;
  $scope.strLabel = '';
  var promise = '';
  promise = $interval(function(){
    $scope.intSeconds--;
    if ($scope.intSeconds <= 0) {
      if ($scope.intMinutes > 0) {
        $scope.intMinutes--;
        $scope.intSeconds = 59;
      } else if ($scope.intHours > 0) {
        $scope.intHours--;
        $scope.intMinutes = 59;
      } else {
        $interval.cancel(promise);
        $scope.strLabel = "The end of the world has come!";
      }
    }
  }, 1000);
  $scope.padNumbers = function(n) {
    return (n < 10) ? ("0" + n) : n;
  }
}]);
