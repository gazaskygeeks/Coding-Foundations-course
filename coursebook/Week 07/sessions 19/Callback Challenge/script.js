// DON'T CHANGE ANYTHING BETWEEN HERE ---
var time = 1000;

var red = blinkLight(get('light-top'), 'red');
var yellow = blinkLight(get('light-middle'), 'yellow');
var green = blinkLight(get('light-bottom'), 'green');

var red2 = blinkLight(get('light-top2'), 'red');
var yellow2 = blinkLight(get('light-middle2'), 'yellow');
var green2 = blinkLight(get('light-bottom2'), 'green');

// blinkLight returns a function that switches a light on then waits a second
// before switching it off again and calling its first argument as a 'callback'.
// If no arguments are supplied the light just goes off.
function blinkLight(element, colour) {
  var blink = function(callback) {
    element.classList.add(colour);
    setTimeout(function() {
      element.classList.remove(colour);
      if (callback) {
        callback();
      }
    }, time);
  };

  return blink;
}

function get(id) {
  return document.getElementById(id);
}

// --- AND HERE.
// Replace the example code below with your own solution:

function light() {
  // HINT: when red() finishes it calls the first argument as a function.
  // So in this example the flow is red() -> wait a second -> green()
  red(green);
}
light();

function light2() {
  // Same as above except the flow is green2() -> wait a second -> red2()
  green2(red2);
}
light2();
