var h1 = document.getElementById('time'),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 00, minutes = 00, hours = 00, milliseconds = 00,
    stopwatch;


function timer() {
    stopwatch = setInterval(add, 10);
}
function add(){
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
  } else {
    milliseconds++;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  h1.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
}


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(stopwatch);
}

/* Clear button */
clear.onclick = function() {
    h1.textContent = "0:0:0:0";
    milliseconds = 0; seconds = 0; minutes = 0; hours = 0;
}
