
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;

function preload(){
  
  
    monkey_running =              loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

    bananaImage = loadImage("banana.png");
    obstacleImage = loadImage("obstacle.png");

}



function setup() {
  
  createCanvas(400,400);
  
  monkey=createSprite(60,300,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.13;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
  background(255);
  stroke(0);
  textSize(20);
  text("Survival Time:"+score,150,50);
  score=Math.round(frameCount/100);
  
  
  ground=createSprite(200,342,400,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  if(keyDown("space")&&monkey.y>120){
    monkey.velocityY=-10;
  }
  
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  bannanas();
  obstacles();

  drawSprites();
  
}
function bannanas(){
  if(frameCount%80==0){
    banana = createSprite(400,200,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-6;
    banana.lifetime=105;
    banana.y=Math.round(random(120,200));
    
    FoodGroup.add(banana);
    
  }
}
function obstacles(){
  if(frameCount%300==0){
    obstacle = createSprite(400,300,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-5;
    obstacle.lifetime=85;
    obstacle.scale=0.2;
    
    obstacleGroup.add(obstacle);
  }
}




