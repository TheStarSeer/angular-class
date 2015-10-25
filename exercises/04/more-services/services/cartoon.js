var app = angular.module('MainModule');

app.service('Cartoon', function() {
  this.arrCartoons = [];
  this.addCartoon = function (strImage, strTitle, strDescription) {
    this.arrCartoons.push(
      {
        imageUrl: strImage,
        title: strTitle,
        description: strDescription
      }
    );
  }
});
