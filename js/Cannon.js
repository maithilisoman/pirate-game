class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.canon_weapon = loadImage("assets/canon.png");
    this.canon_base = loadImage("assets/cannonBase.png");
  }
  display(){
    console.log("angle of cannon is "+this.angle);
    if(keyIsDown(RIGHT_ARROW) && this.angle<55){
      this.angle=this.angle+1;
      // this.angle+=1;
    }
    if(keyIsDown(LEFT_ARROW) && this.angle>-55){
      this.angle=this.angle-1;
      // this.angle+=1;
    }
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.canon_weapon, 0, 0, this.width, this.height);
    pop();
    image(this.canon_base, 70, 20,200,200);
    noFill();
  

  }
}
