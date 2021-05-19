const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,100,50,50);
    box2 = new Box(240,50,50,70);
    ground = new Ground(200, 370, 20);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box2.display();
    box1.display();
   
}