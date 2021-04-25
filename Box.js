class Box{

constructor(x, y){
var options={
    restitution:1
}

    this.body = Bodies.rectangle (x,y, 30,40);
    this.width = 30;
    this.height = 40;
    World.add(world,this. body);

}
display(){

    var pos = this.body.position;
    rectMode(CENTER);
    fill("purple")
    rect(pos.x, pos.y,this.width, this.height);

}

}