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
  createCanvas(1000 , 1000);
  population = new Population();
  lifeP = createP();
  target = createVector(width / 2, 50);
  let button = createButton("reset sketch");
  button.mousePressed(resetSketch);
  paused = false;
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
    console.log('RESET');
    textSize(70);
    textAlign(CENTER , CENTER);
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
    fill(128,0,0);
    ellipse(target.x, target.y, 16, 16);
  }
}

let x = 10;
let y = 10;
let xspeed = 5;
let yspeed = 2;

function resetSketch() {
  x=10;
  y=10;
}
function keyPressed() {
  if (key === 'p') {
      paused = !paused;
  }
}
function mouseMoved() {
  console.log(`${mouseX} , ${mouseY}`);
  // prevent default
  return false;
}
function mouseClicked() {
  // Update the colors of the rockets
  population.updateColors();
  return false;
}
