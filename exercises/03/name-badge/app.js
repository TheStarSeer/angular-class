var app = angular.module('MainApp', []);

app.controller('MainController', function($scope){
  $scope.firstNameTemp  = 'First Name';
  $scope.lastNameTemp = 'Last Name';
  $scope.emailTemp = 'Email';
  $scope.placeOfBirthTemp = 'Place of Birth';
  $scope.favoriteFoodTemp = 'Favorite Food';
  $scope.phoneTemp = 'Phone';
  $scope.aboutYourselfTemp = 'Tell us about yourself..';

  $scope.submitForm = function(){
    $scope.firstName = $scope.firstNameTemp;
    $scope.lastName = $scope.lastNameTemp;
    $scope.email = $scope.emailTemp;
    $scope.placeOfBirth = $scope.placeOfBirthTemp;
    $scope.favoriteFood = $scope.favoriteFoodTemp;
    $scope.phone = $scope.phoneTemp;
    $scope.aboutYourself = $scope.aboutYourselfTemp;
  }
})
