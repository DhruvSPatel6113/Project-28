class Mango{

    constructor(x,y,radius){

        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }

        this.body=Bodies.circle(x,y,radius,options);

        World.add(world , this.body);

        this.radius=radius;

        this.image=loadImage("sprites/mango.png");

    }

    display(){

        imageMode(CENTER);
        image(this.image , this.body.position.x , this.body.position.y , 40 , 40);

    }

}