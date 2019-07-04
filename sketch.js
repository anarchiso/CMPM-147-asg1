var sound, amplitude, level;
let string = 'From the standpoint of Taoist philosophy natural forms are not made but grown, and there is a radical difference between the organic and the mechanical.Things which are made, such as houses, furniture, and machines, are an assemblage of parts put together, or shaped, like sculpture, from the outside inwards.But things which grow shape themselves from within outwards—they are not assemblages of originally distinct parts; they partition themselves, elaborating their own structure from the whole to the parts, from the simple to the complex. \r\n -Alan Watts';
let colors = ['190,197,173,','164,180,148,','81,152,114,','59,82,73,','52,37,47,'];
let font;
let systems = [];
function preload(){
  sound = loadSound('beat.mp3');
  font = loadFont('assets/cour.ttf')
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  amplitude = new p5.Amplitude();
  textFont(font);
  textSize(32);
  textAlign(LEFT, CENTER);
};

function mouseClicked(){
  if (sound.isPlaying() ){
    systems.push(new ParticleSystem(createVector(mouseX,mouseY)));
  } else {
    sound.play();
    systems.length = 0;
    systems.push(new ParticleSystem(createVector(mouseX,mouseY)));
  }
};

function draw() {
  background(255);
  level = amplitude.getLevel();
  for (let i = 0; i < systems.length; i++){
    systems[i].addParticle();
    systems[i].run();
  }
  fill(255);
  text(string,10,10,width- 10, height - 10);
}
