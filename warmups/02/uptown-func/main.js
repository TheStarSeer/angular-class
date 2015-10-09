var lyrics = ["This","hit","that","ice","cold","Michelle","Pfeiffer","that","white","gold","This","one","for","them","hood","girls","Them","good","girls","straight","masterpieces","Stylin","whilen","livin","it","up","in","the","city","Got","Chucks","on","with","Saint","Laurent","Got","kiss","myself","Im","so","pretty"];
function joinArray(theArray) {
  console.log(theArray.join(' '));
}

function reverseJoinArray(theArray) {
  theArray.reverse();
  console.log(theArray.join(' '));
}

function everyOtherArray(theArray) {
  var newArray = [];
  for (var i = 0; i < theArray.length; i++) {
    if (i % 2 == 0) {
      newArray.push(theArray[i]);
    }
  }
  newArray.reverse();
  console.log('\n' + newArray.join(' '));
}

joinArray(lyrics);
reverseJoinArray(lyrics);
everyOtherArray(lyrics);
