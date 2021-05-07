class Pin{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restituiton:0,
            friction :1 ,
            density:0.2      
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("bowlingPin.png")
       
        World.add(world,this.body);
    }

    display(){

    var stonePos = this.body.position
    var angle = this.body.angle
    push()
    translate(stonePos.x,stonePos.y)
    rotate(angle)
    imageMode(CENTER)
    
    image(this.image,0,0,this.r,this.r)

    pop()
}
}
