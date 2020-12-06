class Mango {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          restitution:0,
          friction:1
      }
      this.mango = loadImage ("Plucking mangoes/mango.png")
    }
    display(){
      var position = this.body.position
      push() 
      translate()
      imageMode(CENTER)
      rectMode()
      image(this.mango,0,0,)
      pop() 
    }
  }

