const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground, gameState,engine, world,dusbin,paper;

function setup() {
	createCanvas(1200, 800);
    //rectMode(center);

	gameState = "start";
	gameState ="play";
	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	dustbin1 = new Dustbin(1000, 710, 200, 20);
	dustbin2 = new Dustbin(910, 670, 20, 100);
	dustbin3 = new Dustbin(1100, 670, 20, 100);
	
	paper1 = new Paper(100, 50, 35);
	ground = Bodies.rectangle(width/2,height, width, 20,
		{
			isStatic: true
		})

	World.add(world, ground);
	
}

function keyPressed() {
	if(keyCode === UP_ARROW && gameState === "play") {

	   Matter.Body.applyForce(paper1.body, paper1.body.position,{
		   x:85,y:-85
		})
       
	}
}

function draw() {
gameState==="play";

if(gameState==="play") {
  rectMode(CENTER);
  background(0);
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
}
  drawSprites();
 
}