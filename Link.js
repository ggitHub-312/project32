class Link{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness: 0.001,
            length: 2,       
        }
        this.pointB = pointB;
        this.link = Constraint.create(options);
        World.add(world, this.link);
    }
    
	
    display(){
        if(this.link.bodyA ){
        var pointA = this.link.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        this.link.bodyA = null;
    }
}