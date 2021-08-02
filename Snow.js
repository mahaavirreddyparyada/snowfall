class Snow{
    constructor(x,y){
var options={
    'friction':0.6,
    'density':0.9
}

this.body=Bodies.circle(x,y,20,options);
this.x=x;
this.y=y;
this.r=20;
this.image=loadImage("snow5.webp");
this.scale=1.5;
World.add(world,this.body);
    }
display(){
    var pos=this.body.position;
    imageMode (CENTER);
    image(this.image,pos.x,pos.y,20,20);
}
}