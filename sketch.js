let arrowlength = 100;
let startpoint, endpoint;
let number;
let radius;
let rad;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  // put setup code here
  number = 25;

  colorMode(RGB, 255, 255, 255, 1);
  stroke(24, 202, 230, 0.1);
  strokeWeight(1);
  noFill();
  blendMode(OVERLAY);
  radius = 500;
  rad = 0;
}

let counter = 0;



function draw() {

  background(0, 0, 0, 0.9);
  counter += 0.01;
  for (let i = 0; i <= number; i++) {
    radius = 10 //noise(counter) * 15;
    rad += 0.01;
    let speed = 0.5 * i
    let angle = radians(rad);
    push();
    beginShape();
    //start
    vertex(0, -windowHeight / 2 + 20, 0);
    //middle shit
    vertex(-noise(counter) * radius * 1.4 * i * sin(angle * speed), -200 * noise(counter), radius * i * cos(angle * speed));
    vertex(-noise(counter) * radius * 1.7 * i * sin(angle * speed), -100 * noise(counter), radius * i * cos(angle * speed));
    //vertex(-radius * i * sin(angle * speed), 0, radius * i * cos(angle * speed));
    vertex(radius * i * cos(angle * speed), +200 * noise(counter), radius * i * sin(angle * speed));
    //vertex(-radius * i * sin(angle*speed), 100, radius * i * cos(angle*speed));
    //end
    vertex(0, windowHeight / 2 - 20, 0);
    endShape();
    pop();
  }

}
// put drawing code here


function drawArrow(x, y, length, angle) {
  push();
  translate(x, y);
  rotate(radians(angle));
  line(0, 0, length, 0)
  triangle(length - 5, -3, length - 5, 3, length, 0);
  pop();
}