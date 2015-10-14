var names = ['steve', 'suzy', 'karl', 'ralph', 'stacy', 'carlos',
            'lucy', 'tony', 'matt', 'stephanie'];

function dontCall(name){
    console.log('You did not call ' + name);
}

function  call(name){
  console.log('You did call ' + name);
}

function sendText(name) {
  console.log('You texted ' + name);
}

function attemptCall(name, dontCall, call, sendText){
  var nameLength = name.length;
  console.log('Calling ' + name);

  setTimeout(function(){
    if (name.indexOf('a') >= 0) {
      sendText(name);
    } else if (nameLength % 2 === 0){
      call(name);
    } else {
      dontCall(name);
    }
  }, 3000);
}

for (var i = 0; i < names.length; i++) {
  attemptCall(names[i], dontCall, call, sendText);
}
