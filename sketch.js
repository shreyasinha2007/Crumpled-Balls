
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, log1, log2, log3, ground1;
var options;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
    ground1= new Ground(450,680,900,10);
    ball= new Ball(85,650,50);
    log1= new Log(575,619,10,100);
    log1.shapecolor= "red";
    log2= new Log(630,665,100,10);
    log3= new Log(680,619,10,100);

  Engine.run(engine);
  
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground1.display();
  log1.display();
  log2.display();
  log3.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed()
{
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:85})
  }
  if (keyCode === DOWN_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:685})
  }
  if (keyCode === LEFT_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:485})
  }
  if (keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:485,y:485})
  }
}


