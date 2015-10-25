var people = ["Jon", "Jacob", "Jingle", "Heimer", "Smith"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var arrFinal = [];
for (var i = 0; i < people.length; i++) {
  arrFinal.push(people[i] + ':');
  for (var j = 0; j < alphabet.length; j++) {
    arrFinal.push(alphabet[j].toUpperCase());
  }
}

console.log(arrFinal);
