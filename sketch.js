var ship,shipMoving
var sea ,seaImage


function preload(){
shipMoving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(600,400);
 //creating a ship animation

sea=createSprite(400,200)
sea.addImage(seaImage)
sea.scale=0.3
sea.x=sea.width/2
  ship=createSprite(100,200,10,10)
ship.addAnimation("abc",shipMoving)
ship.scale=0.25
}


function draw() {
  background("blue");
 
 sea.velocityX=-3
  if(sea.x<=0){
    sea.x=sea.width/8
  }
  
 
drawSprites()
}