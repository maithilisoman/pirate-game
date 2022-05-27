const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var cannonball;

var canvas, angle, tower, ground, cannon;
// creating array
var balls= [];
var boats= [];

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  // changing the angle unit
  angleMode(DEGREES);
  var angle = 15;
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle); 

 

}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop(); 
  
  cannon.display();
  // cannonball.display_ball();

  for(var i = 0; i<balls.length; i++){
    showcannonball(balls[i]);
  }

  // boat.display_boat();
  // Matter.Body.setVelocity(boat.body,{x:-0.5,y:0});
  
}

function keyReleased(){
  if(keyCode=== DOWN_ARROW){
    balls[balls.length-1].shoot();
  }
}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    cannonball = new Cannonball(cannon.x, cannon.y);
    balls.push(cannonball);
  }
}

function showcannonball(ball){
  if(ball){
    ball.display_ball();
  }
}

function showboats(){
  if(boats.length>0){
    for(var j=0; j<boats.length; j++){
      if(boats[j]){
        Matter.Body.setVelocity(boats[j].body,{x:-0.5,y:0});
        boats[j].display_boat();
      }
    }
  }
  else{
    boat = new Boat(width-70,height-60,170,170,-80);
    boats.push(boat);
  }
}