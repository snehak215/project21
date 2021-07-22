const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var button1, button2;
var ball;

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  
 
  ground =new Ground(400,600,800,10);
  right = new Ground(700,550,10,100);
  left = new Ground(600,550,10,100);
  right_wall=new Ground(790,350,20,700);
  left_wall=new Ground(10,350,20,700);
  top_wall = new Ground(400,10,800,20);

  var ball_options={
   restitution: 0.3,
   density:1.2,
   isStatic:false,
   friction:0
  }
  ball=Bodies.circle(50,100,10,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,10);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  left_wall.show();
  right_wall.show();
  Engine.update(engine);
}

function keyPressed(){
  if (keyCode===UP_ARROW){
  Matter.Body.applyForce(ball, {x:0,y:0},{x:0,y:-2});}
  if (keyCode===RIGHT_ARROW){
  Matter.Body.applyForce(ball, {x:0,y:0},{x:2,y:0});
}}