class pack{
    constructor(x,y,w,h) {
      var options = {
        isStatic: true
    }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w=w;
      this.h=h;
      this.x=x;
      this.y=y;
      this.image = loadImage("horizontal line.png");
      World.add(world, this.body);
    }
    display(){
      push();
      imageMode(CENTER);
      fill("white");
      image(this.image,this.x,this.y, this.w,this.h)
      pop();
    }
  };
