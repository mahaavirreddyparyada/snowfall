const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var girl,snow;
var backgroundImg,girlImg;
fall=[];

function preload(){
  backgroundImg=loadImage("snow2.jpg");
  girlImg=loadImage("girl.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

engine=Engine.create();
world=engine.world;

  girl=createSprite(displayWidth/2-200,displayHeight/2+380, 50, 50);
  girl.addImage("girl",girlImg);
  girl.scale=0.04;

}

function draw() {
  background(backgroundImg);  

  Engine.update(engine);

if(keyDown(RIGHT_ARROW)){
  girl.x=girl.x+10;
}
if(keyDown(LEFT_ARROW)){
  girl.x=girl.x-10;
}

for(var i=0;i<fall.length;i++){
  fall[i].display();
}
if(frameCount%5===0){
  fall.push(snow=new Snow(i,displayHeight/2-500));
}

  drawSprites();
}