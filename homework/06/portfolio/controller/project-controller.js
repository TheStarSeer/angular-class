var app = angular.module('PortfolioModule');

app.controller('ProjectController', ['$scope', 'projectId', function($scope, projectId){
  $scope.intContent = projectId;
}]);
