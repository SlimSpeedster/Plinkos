var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var gameState = "PLAY";

var divisionHeight=300;
var score =0;
var maxdots = 2;
var count = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
     
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
       
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)

  if(gameState === "PLAY"){

 text("Score : "+score,20,30);
 text("50", 30, 525);
 text("50", 105, 525);
 text("75", 185, 525);
 text("75", 265, 525);
 text("100", 345, 525);
 text("100", 425, 525);
 text("75", 505, 525);
 text("75", 585, 525);
 text("50", 665, 525);
 text("50", 745, 525);
  Engine.update(engine);
 
  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if(frameCount%200===0&&count<maxdots){
    particles.push(new Particle(random(30, 770), 10,10));
  }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(count>=maxdots){
     gameState= "END";
   }
  } else{
    text("Game Over(Score=" + score + ")", 300, 390);
  }
   //console.log(particles);
   

}

/*function scorekeeping(){

  if(j.x<160&&j.y>=770){

    score = score +50;

  }


}*/