const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var boll;
var bt1;
var bt2;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  var boll_options = {
    restitution : 0.70
  }
  boll = Bodies.circle (200,100,20,boll_options);
  World.add (world,boll);

  bt1 = createImg ('right.png');
  bt1.posiition(200,30);
  bt1.size(10,10);
  bt1.mouseClicked(forçah);

  bt2 = createImg ('up.png');
  bt2.posiition(20,30);
  bt2.size(10,10);
  bt2.mouseClicked(forçav);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(boll.position.x, boll.position.y, 20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function forçah () {
  Matter.Body.applyForce(boll,{x:0,y:0},{x:0.05,y:0});
}
function forçav () {
  Matter.Body.applyForce(boll,{x:0,y:0},{x:0,y:-0.05});
}