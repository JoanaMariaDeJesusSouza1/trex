var trex, trexCorrendo;
var bordas;
function preload(){
  
  trexCorrendo=loadAnimation("trex1.png","trex3.png","trex4.png")
}

function setup(){
  createCanvas(600,200)
  bordas= createEdgeSprites();
  //crie um sprite de trex
 trex=createSprite(50,160,20,50);
 trex.addAnimation("correndo", trexCorrendo);
 trex.scale=0.5;
}

function draw(){
  background("white")

  if(keyDown("space")){
    trex.velocityY= -10;
  }
  gravidade()

  trex.collide (bordas);
  drawSprites();

}
function gravidade(){
  trex.velocityY+=0.5;
}