    var Runner
    var boundary, invisibleboundary;
    var path, pathImg1

 function preload(){
  //pre-load images
    RunnerImg = loadAnimation("Runner-1.png","Runner-2.png");
 //correction done
    pathImg = loadImage("path.png");
  }

  function setup(){
    createCanvas(400,400);
  //create sprites here
     path = createSprite(200,200);
    path.addImage(pathImg);
    
     path.velocityY = 4;
     path.scale = 1.2

     Runner = createSprite(130,200,30,30);
     Runner.addAnimation("RunnerImg1",RunnerImg);
     Runner.scale = 0.1

      boundary1 = createSprite(10,200,50,400);
      boundary1.visible = false

      boundary2 = createSprite(380,200,50,400)
      boundary2.visible = false
  }

  function draw() {
      background(0);

      Runner.x = World.mouseX;


      if(path.y > 400 ){
      path.y =path.height/2
}

      Runner.collide(boundary1,boundary2);
//corection done
     drawSprites();
}
