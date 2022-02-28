var box1
function setup() 
{
  createCanvas(400, 400);
  box1=new Box(30, 40, 15, 20, 2, 2)
}

function draw() 
{
  background(220);
box1.show()
box1.movey()
}

