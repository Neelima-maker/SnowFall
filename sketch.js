var snowflake,snowflakeImg
var bgImg

function preload() {
  snowflakeImg = loadImage("snow5.webp");
  bgImg = loadImage("snow2.jpg");
  girlImg = loadImage("I.png")
}
function setup() {
  createCanvas(800,400);
 bg= createSprite(0,0);
 bg.addImage(bgImg);
 bg.scale = 1.2;
 girl = createSprite(300,250);
 girl.addImage(girlImg);
 girl.scale =0.18
}

function draw() {
  background(0); 

  bg.velocityX= -4
  if(bg.x<100){
    bg.x = bg.width/4
  } 

  if(keyDown("space")){
    girl.velocityX = 2
  }
  edges = createEdgeSprites();
  girl.bounceOff(edges)
  drawSprites();
  fill("yellow");
textSize(20)
  text("PRESS SPACE TO PLAY WITH SNOW!!",0,20)
  createSnowflake();
}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}