function Particle(x,y,firework,red,green,blue) {
  
  this.firework = firework;
  this.lifespan = 255;
  
  this.pos = createVector(x,y);
  
  if(this.firework){
    this.vel = createVector(0 , random(-3, -7));
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1,5));
  }
  this.acc = createVector(0,0);
  
this.applyForce = function(force) {
  this.acc.add(force);
  }
  
this.update = function() {
  
  if(!this.firework){
    this.vel.mult(0.98);
    this.lifespan -= 2;
  }
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  this.acc.mult(0);
  }
  

this.done = function(){
  if(this.lifespan < 0){
    return true;
  } else {
    return false;
  }
}
this.show = function() {
  
  if(!this.firework){
    strokeWeight(4);
    stroke(red,green,blue,this.lifespan);
  } else {
    strokeWeight(4);
    stroke(255);
  }
  point(this.pos.x, this.pos.y);
  }

}
