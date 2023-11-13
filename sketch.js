// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/bGz7mv2vD6g

var population;
// Each rocket is alive till 400 frames
var lifespan = 400;
// Made to display count on screen
var lifeP;
// Keeps track of frames
var count = 0;
// Where rockets are trying to go
var target;
// Max force applied to rocket
var maxforce = 0.2;

// Dimensions of barrier
var rx = 100;
var ry = 150;
var rw = 200;
var rh = 10;
var paused = false;
function setup() {
  createCanvas(400, 300);
  population = new Population();
  lifeP = createP();
  target = createVector(width / 2, 50);
}

function draw() {
  if (paused) {
    // Do paused stuff
    // Write Paused Message
    console.log('PAUSED');
    textSize(50);
    textAlign(CENTER, CENTER);

    const middleX = width / 2;
    const middleY = height / 2;
    text('PAUSED' , middleX, middleY -15);
  } else {  
    background(0);
    population.run();
    // Displays count to window
    lifeP.html(count);

    count++;
    if (count == lifespan) {
      population.evaluate();
      population.selection();
      // Population = new Population();
      count = 0;
    }
    // Renders barrier for rockets
    fill(255);
    rect(rx, ry, rw, rh);
    // Renders target
    ellipse(target.x, target.y, 16, 16);
  }
}


function keyPressed() {
  if (key === 'p') {
      paused = true;
   }
  }
function keypressed() {
  if (key === 'p') {
    paused = false;
  }
}
function appear()
{
document.getElementById("firstt").style.visibility="visible";
//here is where I want the pause to happen until the user presses "enter" key
//Below is what I want to happen after the "enter" key has been pressed.
document.getElementById("startrouter").style.visibility="visible";
}
function waitingKeypress() {
  return new Promise((resolve) => {
    document.addEventListener('keydown', onKeyHandler);
    function onKeyHandler(e) {
      if (e.keyCode === 13) {
        document.removeEventListener('keydown', onKeyHandler);
        resolve();
      }
    }
  });
}
