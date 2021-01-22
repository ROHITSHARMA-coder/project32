
class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length: 100
        }
        this.body=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.body);
    }
    attach(bodyA){
        this.body.bodyA=bodyA;
    }
    fly(){
        this.body.bodyA=null;
    }
   
    display(){
        if(this.body.bodyA){
            var pointA=this.body.bodyA.position;
            var pointB=this.pointB;
            push();
            strokeWeight(2);
            stroke("yellow");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        
        }
    }
}




















