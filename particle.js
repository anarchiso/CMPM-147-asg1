let particle = function(position){
  this.acceleration = createVector(randomGaussian() * 0.1,randomGaussian() * 0.1);
  this.velocity = createVector(map(level,0,1,1,4)*randomGaussian(),map(level,0,1,1,4)*randomGaussian());
  this.position = position.copy();
  this.lifespan = 255;
  this.size = map(level, 0, 1 ,0 ,height/2);
  this.angle = random(0,TWO_PI);
  this.color = random(colors);
};

particle.prototype.run = function(){
  this.update();
  this.display();
};

particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

particle.prototype.display = function() {
  let ang1 = this.angle;
  let ang2 = ang1 + 4*PI/5;
  let ang3 = TWO_PI - ang1 - ang2;
  noStroke();
  fill('rgba(' + this.color + this.lifespan/254 + ')');
  triangle(this.position.x+this.size*cos(ang1),this.position.y+this.size*sin(ang1),this.position.x+this.size*cos(ang2),this.position.y+this.size*sin(ang2),this.position.x+this.size*cos(ang3),this.position.y+this.size*sin(ang3));
};
// Is the particle still useful?
particle.prototype.isDead = function(){
  return (this.lifespan < 2);
};
