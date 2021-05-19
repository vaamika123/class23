class Ground {
    constructor(x, y, height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x, y, 400, height, options);
      this.width = 400;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  };
  
