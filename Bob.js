class Bob{
    constructor(x,y,width,height){
        var options = {
            'restitution' : 0.8,
            'density' : 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/Bob.png");
        World.add(world,this.body);
    }

    position(){
        if(keyCode === 32){
            bob.body.position.x = mouseX;
            bob.body.position.y = mouseY;
        }
        else if(keyCode === ENTER){
            bob.body.position.x = 250;
        }
    }

    display(){
        var pos = this.body.position;
        fill("blue");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}