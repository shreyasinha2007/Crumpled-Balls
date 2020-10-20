class Ball {
    constructor(x, y, radius) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Matter.Bodies.circle(x, y, 30, options);
      this.radius= 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var radius = this.body.radius;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      rotate(radius);
      ellipse(0, 0, this.radius);
      pop();
    }
}