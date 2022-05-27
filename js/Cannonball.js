class Cannonball{
    constructor(x,y){
        this.r = 30;
        var options ={
            isStatic:true
        };
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("./assets/cannonball.png");
        World.add(world,this.body);
    }
    display_ball(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
        pop();
    }
    shoot(){
        var newangle = cannon.angle-28;
        newangle = newangle*(3.14/180);
        var velocity = p5.Vector.fromAngle(newangle);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,
            {x:velocity.x*(180/3.14),
                y:velocity.y*(180/3.14)});
    }
}