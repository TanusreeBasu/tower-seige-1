
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, ground, block1;
var polygon;
var stand1, stand2;
var slingshot;
var ballimg;
function preload(){

ballimg = loadImage("polygon.png");

}
function setup(){


    createCanvas(900, 400);
    engine = Engine.create();
    world= engine.world;
     
ground = new Ground(450,390,900,10);
stand1 = new Ground(400,300, 250, 10)
block1 = new Box(300,275,30,40);

stand2 = new Ground(700,200,200,10);
  
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);
  //level two
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  //level three
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  //top
  block16 = new Box(390,155,30,40);


  blocks1 = new Box(640,175,30,40);
  blocks2 = new Box(670,175,30,40);
  blocks3 = new Box(700,175,30,40);
  blocks4 = new Box(730,175,30,40);
  blocks5 = new Box(760,175,30,40);
  //level two
  blocks6 = new Box(670,135,30,40);
  blocks7 = new Box(700,135,30,40);
  blocks8 = new Box(730,135,30,40);
  //top
  blocks9 = new Box(700,95,30,40);
    
    var options={
        isStatic: false,
        restitution:0.04
    }
    polygon = Bodies.circle(90, 180, 20, options);

    World.add(world,polygon);


    
   slingshot = new Slingshot(this.polygon,{x:100,y:200})

}
function draw(){

background("cyan");
Engine.update(engine)

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
stand1.display();

stand2.display();
blocks1.display();
blocks2.display();
blocks3.display();
blocks4.display();
blocks5.display();
blocks6.display();
blocks7.display();
blocks8.display();
blocks9.display();
ground.display();
slingshot.display();
imageMode(RADIUS);
image(ballimg, polygon.position.x, polygon.position.y, 40, 40)
}
function mouseDragged(){

    Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}
function mouseReleased(){

    slingshot.fly();
}

