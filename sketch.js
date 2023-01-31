var bg;
var bgImg;
var shooter;
var shooterImg;
var shooting;
var zombie;
var zombieImg;
var zombiegroup;
function preload(){
  bgImg = loadImage ("assets/bg.jpeg")
  shooterImg = loadImage ("assets/shooter_2.png")
  shooting = loadImage ("assets/shooter_3.png")
  zombieImg = loadImage ('assets/zombie.png')
  zombiegroup= new Group()
}

function setup(){
  createCanvas(windowWidth, windowHeight) ;
  //creating background
  bg= createSprite(displayWidth/2, displayHeight/2,20,20)
  bg.addImage (bgImg)
  bg.scale = 1.2
  shooter = createSprite (160,500,10,10)
  shooter.addImage (shooterImg)
  shooter.scale =0.5
  shooter.debug =true
  shooter.setCollider("rectangle",0,0,300,300)
}

function draw(){
  background("black")
  if(keyDown("UP_ARROW")){
   shooter.y = shooter.y - 30
  } 
  if(keyDown("DOWN_ARROW")){
    shooter.y = shooter.y + 30
  }
  if(keyDown("RIGHT_ARROW")){
    shooter.x = shooter.x + 30
  }
  if(keyDown("LEFT_ARROW")){
    shooter.x = shooter.x - 30
  }
  if(keyWentDown("SPACE")){
    shooter.addImage(shooting)
  }
  if(keyWentUp("SPACE")){
    shooter.addImage(shooterImg)
  }
  //calling function
  
  enemy();
  //destroy zombie when the player touches it
  if(zombiegroup.isTouching(shooter)){
    for(var i=0;i<zombiegroup.length;i++){
      if(zombiegroup[i].isTouching(shooter)){
        zombiegroup[i].destroy()
      }
    }
  }
  drawSprites();
}
function enemy(){
  if(frameCount%60==0){
    zombie =createSprite(1300,500,40,40)
    zombie.velocityX = -2
    zombie.addImage(zombieImg)
    zombie.scale =0.15;
    zombie.x = random(500,1100)
    zombie.y = random(100,500)
    zombie.lifetime =400
    zombiegroup.add(zombie)
    zombie.debug =true
  }
  
}