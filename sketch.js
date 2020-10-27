var bow,bowimage;

var arrow,arrowimage;

var ground,groundimage;

var blueballon,blueballonimage;

var greenballon,greenballonimage;

var pinkballon,pinkballonimage;

var redballon,redballonimage;


function preload(){
//load your images here 
arrowimage=loadImage("arrow0.png");
  
groundimage=loadImage("background0.png");
  
blueballonimage=loadImage("blue_balloon0.png");
  
redballonimage=loadImage("red_balloon0.png");
  
greenballonimage=loadImage("green_balloon0.png");
  
pinkballonimage=loadImage("pink_balloon0.png");
  
bowimage=loadImage("bow0.png");
  
}

function setup() {
createCanvas(490, 450);
 
  
//about ground
ground=createSprite(0,0,600,450);
  
//for the animation of the ground
ground.addImage("ground",groundimage);
  
//to increase the size of ground
ground.scale=2.5
  
  
//about bow
bow=createSprite(450,10,40,40);
  
//for the animation of the bow
bow.addImage("bow",bowimage);
  
//to create multiple blueballon
for(var i=150;i < 350;i=i+60) {
blueballon=createSprite(150,i,1,1)
  
blueballon.addImage("blueballon",blueballonimage)
  
blueballon.scale=0.1
  
}
  
//to create multiple pink ballon
for(var i1=200;i1<300;i1=i1+60){
pinkballon=createSprite(200,i1,1,1)
  
pinkballon.addImage("pinkballon",pinkballonimage)
}
  
//to create multiple red ballon
for(var i2=100;i2<400;i2=i2+60){
redballon=createSprite(100,i2+15,1,1)
  
redballon.addImage("redballon",redballonimage)
  
redballon.scale=0.1
  
}
  
  //to create mutiple green ballon
for(var i3=45;i3<450;i3=i3+60){
greenballon=createSprite(50,i3,1,1)
  
greenballon.addImage("greenballon",greenballonimage)
  
greenballon.scale=0.1
  
}
  
 
}
 
function draw() {
  
//to move the ground
ground.velocityX=-4
  
//to control the bow using the mouse
bow.y= mouseY
  
//to reset the ground when its coming to the end
if(ground.x<0){
ground.x=ground.width/2
}
  
//to draw the above sprites
drawSprites();
}

