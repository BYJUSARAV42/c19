var castleImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var car, carImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  castleImg = loadImage("castle.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  carImg = loadImage("car-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  castle = createSprite(300,300);
  castle.addImage("castle",castleImg);
  castle.velocityY = 1;
  
}

function draw() {
  background(200);
  
  if(castle.y > 400){
      castle.y = 300
    }
}
