var fireworks = [];
var gravity;

function preload() {
  explode = loadSound('sounds/explode.mp3');
}

function setup() {
  createCanvas(displayWidth, displayHeight); 
  document.documentElement.style.overflow = 'hidden'; //hide scroll bars for better viewing chrome/firefox
  document.body.scroll = "no"; //hide scrollbars for ie
  gravity = createVector(0, 0.08);
  stroke(255);
  strokeWeight(4); 
}

function draw() {
  background(0);
  for(var i = fireworks.length-1; i>=0; i--){
    fireworks[i].update();
    fireworks[i].show();
    if(fireworks[i].done()){
      fireworks.splice(i,1);
    }
  }

}

function mousePressed(){
  fireworks.push(new Firework(mouseX, mouseY));
}


