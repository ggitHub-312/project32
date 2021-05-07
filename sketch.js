const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world;

var pin1,pin2,pin3,pin4,pin5,pin6,pin7,pin8,pin9;
var ball, ballImg;
var link;

function preload(){

  ballImg = loadImage("ball.png")

}


function setup() {
  createCanvas(1200,800);
  engine = Engine.create()
  world = engine.world

  pin1 = new Pin(700,200,100);
  pin2 = new Pin(740,150,100);
  pin3 = new Pin(780,100,100);
  pin4 = new Pin(820,50,100);
  pin5 = new Pin(660,250,100);
  pin6 = new Pin(700,300,100);
  pin7 = new Pin(740,350,100);
  pin8 = new Pin(780,400,100);
  pin9 = new Pin(820,450,100);

  ball = new Ball(100,200,100)
 link = new Link(ball.body,{
   x: 100,
   y: 200
 })
  
}

function draw() {
  background("lightblue"); 
  
  pin1.display();
  pin2.display();
  pin3.display();
  pin4.display();
  pin5.display();
  pin6.display();
  pin7.display();
  pin8.display();
  pin9.display();
  ball.display();
  link.display();

  console.log(ball.body)



}

function mouseDragged(){

  Matter.Body.setPosition(ball.body,{
    x: mouseX,
    y:mouseY
  })
}

function mouseReleased(){

  link.fly()
}