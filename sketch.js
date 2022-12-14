function setup() 
{
    createCanvas(windowWidth, windowHeight);
    stars = []
    n = 300
    for (var i=0; i<n; i++)
    {
        stars.push(new Star())
    }
}

function draw() 
{
    background(0)
    translate(width/2, height/2)
    for (var i=0; i<n; i++)
    {
        stars[i].display()
        stars[i].update()
    }
    // textFont('Consolas')
    // textSize(15)
    // fill(255)
    // text(`${stars[0].z}`, 0, 0)

}

