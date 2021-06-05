
//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var canvas;
var player,form,game,index;
var gameState=0;
var playerCount;
var database;
var robo1,robo2;
var allPlayers;
var score=0;
var fuel=30;
var robots;


function preload()
{
	robo1_img=loadImage("robo1.jpg");
	robo2_img=loadImage("robo2 finall.jpg");
	boxingRing=loadImage("boxing-ring-arena-floodlights_34982-129.jpg");
	
}

function setup() {
	canvas= createCanvas(displayWidth-30, displayHeight-30);
	database = firebase.database();

	//engine = Engine.create();
	//world = engine.world;

	game = new Game();
  	game.getState();
  	game.start();

	//Create the Bodies Here.
	//x=createSprite(200,200,50,50)


	//Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  //background(boxingRing);

  if(playerCount===2){
    game.update(1);
  };

  if(gameState===1){
    clear();
    game.play();
  };
  if(gameState===2){
	  game.end();
  }
  
  drawSprites();
 
}



