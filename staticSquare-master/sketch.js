const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var square
var square2
var circle 
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
var square_options={
    restitution:2.0
}
var square2_options={
    restitution:2.0
}
var circle_options={
    restitution:2.0
}
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
square=Bodies.rectangle(50,50,20,20,square_options);
square2=Bodies.rectangle(200,200,20,20,square2_options)
circle=Bodies.circle(300,200,60,circle_options)
 World.add(world,square) ; 
 World.add (world,square2);
 World.add(world,circle)
console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(square.position.x,square.position.y,20,20)
    rect(ground.position.x,ground.position.y,400,20);
    rect(square2.position.x,square2.position.y,20,20)
    ellipseMode(RADIUS);
    ellipse(circle.position.x,circle.position.y,60,60);
}