class Dustbin{
    
    constructor(x,y,width,height){
    var options={
    
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
     }
    this.x=x;
    this.y=y;
   this.width=width;
   this.height=height
    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
    this.image=loadImage("dustbingreen.png")
    World.add(world,this.body);
    
    }
    display()
    {
    var dustbinpos=this.body.position
    push()
    translate(dustbinpos.x,dustbinpos.y);
   imageMode(CENTER);
 image(this.image,0,0,this.width,this.height)
pop()
    
      }
    }