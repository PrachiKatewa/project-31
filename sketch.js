const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground ;

function setup() {
  createCanvas(800,400);
  ground = new Ground(400,380,800,20);
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  drawSprites();
}