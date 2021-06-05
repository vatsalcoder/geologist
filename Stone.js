class Stone{
	constructor(x,y,w,h)
	{
	// assign options to the rubber ball
		var options={
         'restitution' :0.8,
         'friction' :0.9,
         'density' :12
        }
		this.w=w
        this.h=h
		this.body=Bodies.rectangle(x,y,w,h, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("brown");
			
            rect(0,0,this.w, this.h);
			pop()
	}

}