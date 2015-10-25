var omega = '\u03A9';
var alpha = '\u03B1';
var arrFinal = [];
var strFinal = '';
for (var i = 0; i < 10; i++) {
  arrFinal[i] = [];
  for (var j = 0; j < 10; j++) {
    if (j % 2 === 0) {
      arrFinal[i][j] = alpha;
    } else {
      arrFinal[i][j] = omega ;
    }
  }
}

for (var i = 0; i < arrFinal.length; i++) {
  for (var j = 0; j < arrFinal[i].length; j++) {
    strFinal += arrFinal[i][j];
    strFinal += ' ';
  }
  strFinal += '\n';
}
console.log(strFinal);
