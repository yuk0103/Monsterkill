class Superhero {
  constructor(x,y,width,height)
	{
		var options = { 
			isStatic:false,
			friction: 1,
			restitution:0,
			density:1.2
		};
		this.body=Bodies.rectangle(x,y,width,height,options);
		this.width=width;
		this.height=height;
		this.image=loadImage("superhero1.png");
		World.add(world,this.body);


	}
	
	display()
	{
			var angle=this.body.angle;

			var pos=this.body.position;		
			push();
			translate(this.body.position.x,this.body.position.y);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.width,this.height)
			pop();
			
	}
}
