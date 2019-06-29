let arrowlength = 100;
let startpoint, endpoint;
let number;
let radius;
let rad;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/breathing.mp3');
}

function togglePlay() {
  if (mySound.isPlaying()) {
    mySound.pause();
  } else {
    mySound.loop();
  }
}


function setup() {
  frameRate(60);
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  background(0);

  // put setup code here
  number = 100;

  colorMode(RGB, 255, 255, 255, 1);
  stroke(24, 202, 230, 0);
  strokeWeight(1);
  //fill(0,0,0,0.1);
  noFill()
  blendMode(OVERLAY);
  radius = 1000;
  rad = 0;
}

let counter = 0;



function draw() {
  waveform = fft.waveform();

  background(0, 0, 0, 0.9);
  counter += 0.01;
  for (let i = 0; i <= number; i++) {
    radius = 350 //noise(counter) * 15;
    rad += 0.03;
    let speed = i/(number*2);
    let angle = radians(rad);
    push();

    rotateZ(PI/8);
    rotateX(-PI/16);
    beginShape();
    //---------------start
    curveVertex(50*sin(angle* speed), 5, 0);
    //---------------middle shit
    curveVertex(radius*sin(angle* speed), noise(i)*200 -100 +waveform[i]*20 , radius * cos(angle * speed));
    curveVertex(radius*sin(angle* speed), noise(i)*200 -100 + waveform[i]*20  , radius * cos(angle * speed));
    curveVertex(50 * sin(angle * speed),200, 50 * cos(angle * speed));
    //---------------end
    curveVertex(0, windowHeight / 2 - 50, 0);
    curveVertex(0, windowHeight / 2 - 50, 0);
    endShape();
    pop();
    
  }


  // vertex(-noise(counter) * radius * 2 * i * sin(angle * speed), -200 * noise(counter), radius * i * cos(angle * speed));
  // //vertex(-noise(counter) * radius * 1.7 * i * sin(angle * speed), -100 * noise(counter), radius * i * cos(angle * speed));
  // //vertex(-radius * i * sin(angle * speed), 0, radius * i * cos(angle * speed));
  // vertex(radius * i * cos(angle + speed), +200 * noise(counter), radius * i * sin(angle + speed));
  // vertex(-radius * i * sin(angle * speed), 100, radius * i * cos(angle * speed));

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