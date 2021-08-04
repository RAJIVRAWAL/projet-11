    var Runner
    var boundary, invisibleboundary;
    var path, pathImg1

 function preload(){
  //pre-load images
    RunnerImg = loadAnimation("Runner-1.png","Runner-2.png");
    RunnerImg = loadImage("Runner-1.png","Runner-2.png");
    pathImg = loadImage(path.png);
  }

  function setup(){
    createCanvas(400,400);
  //create sprites here
     path = createSprite(200,200);
     path.addImage(pathImg);
     path.velocityY = 4;
     path.scale = 1.2

     Runner = createSprite(130,200,30,30);
     Runner.addAnimation("RunnerImg1",RunnerImg1);
     Runner.scale = 0.25

      boundary1 = createSprite(10,200,400,20);
      boundary1.visible = false

      boundary2 = createSprite(390,210,400,20)
      boundary2.visible = false
  }

  function draw() {
      background(0);

      Runner.x = World.mouseX;


      if(path.y > 400 ){
      path.y =path.height/2
}

      Runner.collide(boundary1,boundary2);

     drawSprite();
}
