class Chain{
 constructor(bodyA,bodyB){
     var options={
     bodyA:bodyA,
     bodyB:bodyB,
     stiffness:0.02,
     length:8,
     }
 this.chain = Constraint.create(options);
 World.add(world,this.chain);
 }
 display(){
     push();
     var pointA = this.chain.bodyA.position;
     var pointB = this.chain.bodyB.position;
     strokeWeight(5);
     stroke("purple");
     line(pointA.x,pointA.y,pointB.x,pointB.y);
     pop();
 }   
}