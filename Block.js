class Block{
    constructor(x,y){
        var options={
            isStatic: false
        }

        this.body=Bodies.rectangle(x,y,30,40,options);
        this.width=30;
        this.height=40;
       World.add(world,this.body);
       this.visibility=255;

    }

    display(){
        if(this.body.speed<3){
            var pos=this.body.position;
            push();
            translate(pos.x,pos.y);
            rectMode(CENTER);
            stroke("red");
            rect(0,0,this.width,this.height);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility=this.visibility-5;
            tint(255,this.visibility);
            pop();
        }
    }
   
   getscore(){
   if(this.visibility<=0&&this.visibility>-10){
     score++;
   
    }

}
}

