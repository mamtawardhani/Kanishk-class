//namespacing
const E=Matter.Engine
const W=Matter.World
const B=Matter.Bodies

var en,wo,box

function setup() {
  createCanvas(400,400);

 en=E.create()
  wo=en.world //accessing world from engine
  console.log(en)

  box= new Box(200,10)
 
}

function draw() {
  background(0);  

  E.update(en)
  box.display()

}

//rect()
//ellipse()
