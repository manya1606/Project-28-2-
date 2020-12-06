class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    display(){
      var position = this.body.position
      push() 
      translate()
      imageMode(CENTER)
      rectMode()
      image(this.ground,0,0,)
      pop() 
    }
  }

