class Stone {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.body=Bodies.circle(x,y,r,options)
      this.stone = loadImage("Plucking mangoes/stone.png") 
      World.add(world.this.body)
    }
   
    fly(){
      this.sling.bodyA = null;
  }

  display(){
    var position = this.body.position
    push() 
    translate()
    imageMode(CENTER)
    ellipseMode(RADIUS)
    image(this.stone,0,0,this.r*2)
    pop() 
  }
}
