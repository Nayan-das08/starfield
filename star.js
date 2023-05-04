class Star
{
	constructor(x = random(-width/2, width/2), y = random(-height/2, height/2))
	{
		this.x = x
		this.y = y
		this.z = random(0,width)
		Star.speed = 10
		Star.acceleration = 0.25
		this.pz = this.z
		this.history = []
	}

	update()
	{
		// this.z = this.z-(mouseX/17)
		this.z = this.z-Star.speed
		
		// Star.speed += 0.0001
		// negative z is the problem
		// but we keep z > 1 so that we don't divide by zero
		if (this.z < 1) 
		{
			this.z = width
			this.x = random(-width/2, width/2)
			this.y = random(-height/2, height/2)
		}
		this.pz = this.z
		if (this.history.length > 50)
		{
			this.history.splice(0,1)
		}

	}

	display()
	{
		var sx = map(this.x/this.z, 0, 1, 0, width)
		var sy = map(this.y/this.z, 0, 1, 0, height)
		
		// strokeWeight(5)
		fill(255)
		var radius = map(this.z, 0, width, 8, 0)
		
		circle(sx, sy, radius)

		this.history.push(this.z)
		var last_z = this.history[this.history.length]

		var px = map(this.x/last_z, 0, 1, 0, width)
		var py = map(this.y/last_z, 0, 1, 0, height)
		// var px = map(this.x/this.pz, 0, 1, 0, width)
		// var py = map(this.y/this.pz, 0, 1, 0, height)
		strokeWeight(map(this.z, 0, width, 0, 1))
		stroke(255)
		line(px, py, sx, sy)


	}
}