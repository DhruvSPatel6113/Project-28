class Tree{

    constructor( x , y  ){

        this.image=loadImage("sprites/tree.png");

        var options = {
            isStatic:true
        }

        this.body = Body.create(600 , 430 , 30 , 100);

        World.add(world , this.body);

   }

   display(){
        
        imageMode(CENTER);
        image(this.image , 600 , 430 , 350 , 350);

   }

}