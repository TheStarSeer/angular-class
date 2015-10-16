function stringSplosion(word) {
  var finalWord = '';
  for (var i = 0; i <= word.length; i++) {
    finalWord += word.slice(0, i);
  }
  console.log(finalWord);
}

stringSplosion('Pete');
