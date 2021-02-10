const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var stand;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var img, ball;
var sling;
var player;
var score;

function preload() {

  img = loadImage("polygon.png");

}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  score = 0;

  stand = new Ground(600, 350, 300, 50);

  block1 = new Box(600,260,30,40);
  block2 = new Box(570,260,30,40);
  block3 = new Box(540,260,30,40);
  block4 = new Box(630,260,30,40);
  block5 = new Box(660,260,30,40);
  block6 = new Box(585,220,30,40);
  block7 = new Box(555,220,30,40);
  block8 = new Box(615,220,30,40);
  block9 = new Box(645,220,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  sling = new SlingShot(this.ball,{x:150, y:160});


}

function draw() {

  background(0, 0, 0);
  text("Score: " + score, 750, 40)

  stand.display();

  fill(135, 205, 236);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("lightBlue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();

  block6.score();
  block7.score();
  block8.score();
  block9.score();

  imageMode(CENTER);
  image(img,ball.position.x,ball.position.y,40,40);

  sling.display();

  // drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{
		Matter.Body.setPosition(ball.body,{x:235, y:420})
		sling.attach(ball.body);
	}
}