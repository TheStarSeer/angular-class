var app = angular.module('DeckBuilderModule', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl : 'views/home.html',
      controller: 'DeckBuilderController'
    })
    .when('/detail-page/:cardId', {
      templateUrl : 'views/detail-page.html',
      controller : 'DetailPageController'
    })
    .otherwise({
      redirectTo : '/home'
    });
});

app.directive('detailCard', function(){
  return {
    restrict: 'E',
    templateUrl: 'templates/detail-card.html'
  }
});

app.service('StorageService', function(){
  this.getStorage = function(strItemName){
    return JSON.parse(sessionStorage.getItem(strItemName));
  };
  this.sendStorage = function(strItemName, objData) {
    sessionStorage.setItem(strItemName, JSON.stringify(objData));
  };
});

app.service('DeckBuilder', ['$http', function($http){

  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  this.returnDeck = function(desiredColor, desiredCost){
    var arrTempReturnedCards = [];
    var arrFinalReturnedCards = [];
    var intCostValue = 2;
    switch (desiredCost) {
      case 'Expensive':
        intCostValue = 6;
        break;
      case 'Standard':
        intCostValue = 4;
        break;
      case 'Cheap':
        intCostValue = 2;
        break;
    }
    return $http.get('https://api.deckbrew.com/mtg/cards?type=creature&color=' + desiredColor)
      .then(function(response){
        arrTempReturnedCards = [];
        for (card in response.data) {
          if (response.data[card].cmc <= intCostValue && response.data[card].cmc >= (intCostValue - 2) && response.data[card].editions[0].image_url != 'https://image.deckbrew.com/mtg/multiverseid/0.jpg') {
          arrTempReturnedCards.push(response.data[card]);
          }
        }
        for (var i = 0; i < 20; i++) {
          if (arrTempReturnedCards.length > 0) {
            arrFinalReturnedCards.push(arrTempReturnedCards[getRandomIntInclusive(0, arrTempReturnedCards.length - 1)]);
          }
        }
        return $http.get('https://api.deckbrew.com/mtg/cards?type=sorcery&color=' + desiredColor);
      })
      .then(function(response){
        arrTempReturnedCards = [];
        for (card in response.data) {
          if (response.data[card].cmc <= intCostValue && response.data[card].cmc >= (intCostValue - 2) && response.data[card].editions[0].image_url != 'https://image.deckbrew.com/mtg/multiverseid/0.jpg') {
          arrTempReturnedCards.push(response.data[card]);
          }
        }
        for (var i = 0; i < 10; i++) {
          if (arrTempReturnedCards.length > 0) {
            arrFinalReturnedCards.push(arrTempReturnedCards[getRandomIntInclusive(0, arrTempReturnedCards.length - 1)]);
          }
        }
        return $http.get('https://api.deckbrew.com/mtg/cards?type=artifact&color=' + desiredColor);
      })
      .then(function(response){
        arrTempReturnedCards = [];
        for (card in response.data) {
          if (response.data[card].cmc <= intCostValue && response.data[card].cmc >= (intCostValue - 2) && response.data[card].editions[0].image_url != 'https://image.deckbrew.com/mtg/multiverseid/0.jpg') {
          arrTempReturnedCards.push(response.data[card]);
          }
        }
        for (var i = 0; i < 5; i++) {
          if (arrTempReturnedCards.length > 0) {
            arrFinalReturnedCards.push(arrTempReturnedCards[getRandomIntInclusive(0, arrTempReturnedCards.length - 1)]);
          }
        }
        return $http.get('https://api.deckbrew.com/mtg/cards?type=planeswalker&color=' + desiredColor);
      })
      .then(function(response){
        arrTempReturnedCards = [];
        for (card in response.data) {
          if (response.data[card].editions[0].image_url != 'https://image.deckbrew.com/mtg/multiverseid/0.jpg') {
          arrTempReturnedCards.push(response.data[card]);
          }
        }
        for (var i = 0; i < 1; i++) {
          if (arrTempReturnedCards.length > 0) {
            arrFinalReturnedCards.push(arrTempReturnedCards[getRandomIntInclusive(0, arrTempReturnedCards.length - 1)]);
          }
        }
        return $http.get('https://api.deckbrew.com/mtg/cards?type=instant&color=' + desiredColor);
      })
      .then(function(response){
        arrTempReturnedCards = [];
        for (card in response.data) {
          if (response.data[card].cmc <= intCostValue && response.data[card].cmc >= (intCostValue - 2) && response.data[card].editions[0].image_url != 'https://image.deckbrew.com/mtg/multiverseid/0.jpg') {
          arrTempReturnedCards.push(response.data[card]);
          }
        }
        for (var i = 0; i < 4; i++) {
          if (arrTempReturnedCards.length > 0) {
            arrFinalReturnedCards.push(arrTempReturnedCards[getRandomIntInclusive(0, arrTempReturnedCards.length - 1)]);
          }
        }
        return arrFinalReturnedCards;
      });
    };

}]);
app.controller('DeckBuilderController', ['$scope', '$http', 'StorageService', 'DeckBuilder', function($scope, $http, StorageService, DeckBuilder) {
  var information = {};
  information = StorageService.getStorage('userInfo');
  if(information){
    try {
      $scope.returnedCards = information.cards;
      $scope.desiredCost = information.cost;
      $scope.desiredColor = information.color;
    } catch (e) {
      $scope.returnedCards = {};
      $scope.desiredColor = '';
      $scope.desiredCost = '';
    }
  }

  $scope.getDeck = function() {
    DeckBuilder.returnDeck($scope.desiredColor, $scope.desiredCost)
      .then(function(response){
        $scope.returnedCards = response;
        var information = {
          cards: $scope.returnedCards,
          cost: $scope.desiredCost,
          color: $scope.desiredColor
        }
        console.log(information);
        StorageService.sendStorage('userInfo', information);
      });
  }

}]);

app.controller('DetailPageController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $scope.returnedCard = '';
  $http.get('https://api.deckbrew.com/mtg/cards/' + $routeParams.cardId.trim())
    .then(function(response){
      $scope.returnedCard = response.data;
    });
}]);
