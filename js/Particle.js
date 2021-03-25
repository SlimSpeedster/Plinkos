class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();

        if(this.body.position.y>=780){

            
                count++;
                particles.shift();      
               
        }
        if((pos.x>0&&pos.x<160&&pos.y>=780)||(pos.x>640&&pos.y>=780&&pos.x<800) ){
  
            score = score +50;
        
          }
          if((pos.x<320&&pos.x>161&&pos.y>=780)||(pos.x<639&&pos.x>480&&pos.y>=780)){
  
            score = score +75;
        
          }
          if((pos.x<479&&pos.x>320&&pos.y>=780)){
  
            score = score +100;
        
          }

    }

    /*removal(){

        if(this.body.position.y>=780){

            World.remove(world, this.body);

        }

    }

scorekeeping(){

    
  
  
  }*/
} 
