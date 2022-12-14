class Star
{
	constructor(x = random(-width/2, width/2), y = random(-height/2, height/2))
	{
		this.x = x
		this.y = y
		this.z = random(0,width)
	}

	update()
	{
		this.z = this.z-4
		// negative z is the problem
		// but we keep z > 1 so that we don't divide by zero
		if (this.z < 1) 
		{
			this.z = width
			this.x = random(-width/2, width/2)
			this.y = random(-height/2, height/2)

		}

	}

	display()
	{
		this.sx = map(this.x/this.z, 0, 1, 0, width)
		this.sy = map(this.y/this.z, 0, 1, 0, height)
		
		strokeWeight(5)
		fill(255)
		var radius = map(this.z, 0, width, 10, 5)
		
		circle(this.sx, this.sy, radius)
		
		line(this.x, this.y, this.sx, this.sy)
	}
}