function Firework(X,Y){
  
  this.firework = new Particle(X, Y, true);
  this.exploded = false
  this.particles = [];
  
  function randombinary(){
    x = random(1);
    if(x<0.5){
      return 1;
    } else {
      return 0;
    }
  }
  
  this.colorR = 255*randombinary();
  this.colorG = 255*randombinary();
  this.colorB = 255*randombinary();
  
  if (this.colorR+this.colorG+this.colorB == 0){
    this.colorR = 255*randombinary();
    this.colorG = 255*randombinary();
    this.colorB = 255;
  }
  
  this.done = function(){
    if(this.exploded && this.particles.length === 0){
      return true;
    } else {
      return false;
    }
  }
  
  this.update = function() {
    
    if(!this.exploded){
      this.firework.applyForce(gravity);
      this.firework.update();
      
      if(this.firework.vel.y >= 0){
        this.exploded = true
        this.explode();
      }
     
    }
    
    for(var i = this.particles.length-1; i>=0; i--){
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      
      if(this.particles[i].done()){
        this.particles.splice(i,1);
      }
    }
  }
  
  this.explode = function() {
    
    explode.setVolume(0.1);
    explode.play();
    
    for(var i = 0; i<50; i++){
      var p = new Particle(this.firework.pos.x, this.firework.pos.y, false, this.colorR, this.colorG, this.colorB);
      this.particles.push(p);
    }
  }
  
  this.show = function() {
    if(!this.exploded){ 
      this.firework.show()
    }
    for(var i = 0; i<this.particles.length; i++){
      this.particles[i].show();
    }
  }
  
}
