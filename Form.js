class Form {

    constructor() {
      this.input = createInput("Name");
      //this.button = createButton('Play');
      this.skip= createButton("Skip");
      this.fight=createButton("Fight");
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.g1=createElement('h1');
      this.reset= createButton("Reset");
    }
    hide(){
      this.greeting.hide();
      //this.button.hide();
      this.skip.hide();
      this.fight.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("ROBO FIGHT");
      this.title.position(displayWidth/2 - 50, 0);
      this.g1.html("Fuel: "+ fuel);
      this.g1.position(displayWidth/2 -120,50);
      this.g1.fontcolor("white");
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      //this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.skip.position(displayWidth/2 + 100, displayHeight/2);
      this.fight.position(displayWidth/2 + 30, displayHeight/2);
      this.reset.position(displayWidth-100,20);
      //text("Fuel: 30",displayWidth/2+10,20);
  
      this.fight.mousePressed(()=>{
        this.input.hide();
        this.fight.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name + " Welcome To Robo Fight");
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
  
    }
  }
  