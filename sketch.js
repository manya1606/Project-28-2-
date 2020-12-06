
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1
var mango2
var mango3
var mango4

var stone


function preload()
{
	this.boy = loadImage ("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20);

	mango1 = new Mango()
  	mango2 = new Mango()
	mango3 = new Mango()
	mango4 = new Mango()

	stone = new Stone()

	tree = new Tree()


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  	mango1.display()
  	mango2.display()
	mango3.display()
	mango4.display()

	ground.display()

	stone.display()

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    stone.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<-lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false)
	}

}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235, y:420})
		launcherObject.attach(stone.body)
	}
}
