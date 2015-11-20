var app = angular.module('PortfolioModule', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/home', {
      templateUrl: 'view/home.html',
      controller: 'HomeController'
    })
    .when('/about', {
      templateUrl: 'view/about.html',
      controller: 'AboutController'
    })
    .when('/projects', {
      templateUrl: 'view/projects.html',
      controller: 'ProjectController',
      resolve: {
        projectId : function () {
          return 1;
        }
      }
    })
    .when('/projects/:id', {
      templateUrl: 'view/projects.html',
      controller: 'ProjectController',
      resolve: {
        projectId: ['$route', function($route) {
          return (typeof $route.current.params.id != 'undefined') ? $route.current.params.id : 1;
        }]
      }
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);

app.controller('IndexController', ['$scope', '$location', function ($scope, $location) {

  $scope.$watch('$location.path()', function(){
    $scope.isCurrentRoute = function(route){
      if ($location.path().indexOf(route) === 0) {
        return 'default-button';
      } else {
        return '';
      }
    };
  });
}])
