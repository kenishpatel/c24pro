const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas;
var engine, world;
var base1,base2,player

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object

   

  }

function draw() {

  background(180);

  Engine.update(engine);
 
 
  base1=new base1(150, 350, 160, 310);
  base2=new base2(300, 350, 160, 310);
  player=new player(300, 350, 160, 310);
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
 base1.desplay()
base2.desplay()
   //display Player and computerplayer
player.desplay()
 drawsprite()
}
 display() 
 {
  var pos = this.body.position;
  var angle = this.body.angle;
  
  Push();
  Translate(pos.x, pos.y);
  rotate(angle);
  imagemade(CNTER)
  image(this.image,0,0, this.width,this.height);

 }


