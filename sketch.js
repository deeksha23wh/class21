var fixedRect, movingRect,eagle;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  eagle = createSprite(200,100,50,80);
  eagle.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(collisionMaster(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  }
  else if(collisionMaster(movingRect,eagle)){
    movingRect.shapeColor = "red";
 eagle.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  eagle.shapeColor = "green";
  }
  
  drawSprites();
}

