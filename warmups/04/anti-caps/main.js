function antiCaps(word) {
  var finalWord = '';
  for (var i = 0; i < word.length; i++) {
    if (isCaps(word[i])) {
      finalWord += word[i].toLowerCase();
    } else {
      finalWord += word[i].toUpperCase();
    }
  }
  return finalWord;
}

function isCaps(letter) {
  return letter === letter.toUpperCase();
}

console.log(antiCaps('WoRd'));
