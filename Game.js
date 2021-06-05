class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value"); 
        if(playerCountRef.exists()){ 
          playerCount = playerCountRef.val(); 
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      robo1=createSprite(900,500);
      robo1.addImage("robo1",robo1_img);
      robo1.scale=1.5;
      robo2=createSprite(500,500);
      robo2.addImage("robo2",robo2_img);
      robo2.scale=0.3;
      robots=[robo1,robo2];
      
    }
  
    play(){
      form.hide();
      textSize(30);
      text("GAME START",100,100);
      Player.getPlayerInfo();
  
      if(allPlayers!==undefined){
        //var dp=130;
        background(rgb(200,135,104));
        image(boxingRing,0,-displayHeight,displayWidth,displayHeight*2);
        //image(robo1_img,900,100,500);
        //image(robo2_img,100,100,500);
        var index=0;
        var x=100;
        var y=100;
        for(var pl in allPlayers){
          index+=1;
          x+=300;
          //y=displayHeight-allPlayers[pl].distance;
          robots[index-1].x=x;
          robots[index-1].y=y;
          if(index===player.index){
            stroke(10);
            fill("red");
            ellipse(x,y,160,160);
            robots[index-1].shapeColor="red";
            camera.position.x=displayWidth/2;
            camera.position.y=robots[index-1].y;
          }
        }
      }

  
      if(keyIsDown(RIGHT_ARROW) && player.index!==null){
        player.x+=10;
        player.update();
  
      }

      if(keyIsDown(LEFT_ARROW) && player.index!==null){
        player.x=player.x-10;
        player.update();

      }
  
      drawSprites();
    }

    end(){
      console.log("game Ended");
    }
  }
  