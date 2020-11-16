const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground , tree , stone;

var boy , img , sling;

var mango1 , mango2 , mango3 , mango4 , mango5 , mango6 , mango7 , mango8 , mango9 , mango10 , mango11 , mango12 , mango13 , mango14;

function preload()
{

	img = loadImage("sprites/boy.png");
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,600,800,10);

	tree = new Tree(600,430);

	stone = new Stone(100,500,10);

  sling = new SlingShot(stone.body , {x:65 , y:500});
  
  mango1 = new Mango(500 , 400 , 20);
  mango2 = new Mango(470 , 360 , 20);
  mango3 = new Mango(530 , 360 , 20);
  mango4 = new Mango(550 , 400 , 20);
  mango5 = new Mango(550 , 300 , 20);
  mango6 = new Mango(580 , 350 , 20);
  mango7 = new Mango(585 , 400 , 20);
  mango8 = new Mango(600 , 300 , 20);
  mango9 = new Mango(640 , 280 , 20);
  mango10 = new Mango(650 , 350 , 20);
  mango11 = new Mango(650 , 390 , 20);
  mango12 = new Mango(690 , 350 , 20);
  mango13 = new Mango(700 , 390 , 20);
  mango14 = new Mango(750 , 380 , 20);

	Engine.run(engine);
  
}

function draw() {

	Engine.update(engine);

  rectMode(CENTER);

  background(220);
  
  drawSprites();

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();

  imageMode(CENTER);
  image(img , 100 , 550 , 120 , 200);

  sling.display();
  stone.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  detectCollision(stone,mango13);
  detectCollision(stone,mango14);

}

function mouseDragged(){
    
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}

function mouseReleased(){
   sling.fly();
 
}

function keyPressed(){
  if(keyCode === 32){
  	
    Matter.Body.setPosition(stone.body , {x:100 , y:500});
    sling.attach(stone.body);
     
}

}

function detectCollision(Lstone,Lmango){

  mangobodyposition=Lmango.body.position;
  stonebodyposition=Lstone.body.position;

  var distance=dist(stonebodyposition.x , stonebodyposition.y , mangobodyposition.x , mangobodyposition.y);

  //console.log("dsp1");

  //console.log(Lmango.radius + Lstone.radius);
  
  if(distance<= Lmango.radius + Lstone.radius){

      Body.setStatic(Lmango.body , false);

      //console.log("dsp2");

  }

}
