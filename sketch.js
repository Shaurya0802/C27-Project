const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var holder;

var bob;

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    holder = new Holder(250,100,200,20);

    bob = new Bob(200,350,100,100);

    chain = new Chain(bob.body,{x:250,y:100});
}

function draw(){
    background(0);
    Engine.update(engine);

    textSize(13);
    textStyle(BOLD);
    fill(255);
    text("Press Spacebar to oscillate the pendulum to left and right with mouse",40,20);
    text("Press enter to stop the pendulum from oscillating",100,40);

    holder.display();
    bob.display();
    bob.position();
    chain.display();
}
