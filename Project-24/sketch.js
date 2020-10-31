const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, dustbin1Image,paper1Image;
var ground, dustbin1Image,paper1Image;


function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
ground =new Ground(400,380,800,20)
paper1 =new Paper(100,360,20,20)
dustbin2 =new Dustbin(780,360,10,20)
dustbin1 =new Dustbin(700,360,100,20)
dustbin3 =new Dustbin(620,360,100,20)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  
  ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
 paper1.display();

}

function keyPressed(){
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:85})
  } 
}


