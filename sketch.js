
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperobject=new Paper(200,450,70)

	groundobject=new Ground(width/2,620,width,20)

	dustbin1=new Dustbin(1200,510,20,200)
	dustbin2=new Dustbin(1000,510,20,200)
	dustbin3=new Dustbin(1100,600,200,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
	dustbin1.display()
	dustbin2.display()
	dustbin3.display()

	paperobject.display()

	groundobject.display()

}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:130,y:-145})
	}
}


