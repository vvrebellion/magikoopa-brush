var d = 10
var scl = 1;
var angle = 0;
var angleSpeed = 1;
var s = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  cursor(HAND);

 
}

function draw() {
  if (mouseIsPressed && mouseButton == LEFT) {
    push();
    translate(mouseX, mouseY);
    rotate(radians(angle));
    noFill();
    strokeWeight(s);
    stroke(255,0,0);
    triangle((0+d)*scl, (0-d)*scl, (28+d)*scl, (-55-d)*scl, (56+d)*scl, (0-d)*scl);
    stroke(0,255,0);
    square((0-d)*scl, (0+d)*scl, 55*scl);
    stroke(0,0,255);
    circle((-25-d)*scl, (-12-d)*scl, 55*scl);
    //line(0, 0, lineLength, 0);
    pop();
    angle += angleSpeed;
  }
}

function keyPressed() {
  if (keyCode == UP_ARROW) scl += 1;
  if (keyCode == DOWN_ARROW) scl -= 1;
  if (keyCode == LEFT_ARROW) d -= 3;
  if (keyCode == RIGHT_ARROW) d += 3;
  if (key == ',') s -= 0.3;
  if (key == '.') s += 0.3;
  if (keyCode == DELETE || keyCode ==
    BACKSPACE) background(0);
  if (key == '2') blendMode(ADD);
  if (key == '1') blendMode(BLEND);
}