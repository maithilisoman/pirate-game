class Boat{
    constructor(x,y,width,height,boatPos){
        this.body = Bodies.rectangle(x,y,width,height,options_boat);
        this.width = width;
        this.height = height;
        var options_boat = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0
        };
        this.image = loadImage("./assets/boat.png");
        this.boatposition = boatPos;
        World.add(world, this.body);
    }
     display_boat(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,this.boatposition,this.width,this.height);
        pop();
     }
}