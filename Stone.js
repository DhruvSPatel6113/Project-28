class Stone{

    constructor(x,y,radius){

        var options={

            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2

        }

        this.body = Bodies.circle(x , y , radius , options );

        World.add(world , this.body);

        this.Image = loadImage("sprites/stone.png");

        this.radius = radius;

    }

    display(){

        var pos = this.body.position;

        imageMode(CENTER);
        image(this.Image , this.body.position.x , this.body.position.y , 30 , 30); 

    }

}