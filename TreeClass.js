class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.tree = loadImage ("Plucking mangoes/tree.png")
    }

    display(){
      var position = this.body.position
      push() 
      translate()
      imageMode(CENTER)
      rectMode()
      image(this.tree,0,0,)
      pop() 
    }
  }

