var app = angular.module('MainModule', []);

app.controller('MainController', function($scope) {
  $scope.player = {
  kills : [
      {
          handle:"jk400",
          rank: 14932,
          clan: ["hpburner200","sputnik","sololobo21"]
      },
      {
          handle:"jk500",
          rank: 14945,
          clan: ["hpburner200","sputnik","sololobo21"]
      },
      {
          handle:"jk600",
          rank: 14955,
          clan: ["hpburner200","sputnik","sololobo21"]
      }
  ]
};
});
