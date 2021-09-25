var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var line0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  lines0=new pack(10,890,150,200);
   //               10
  lines1=new pack(120,880,80,200);
  //                 10
  lines2=new pack(200,860,80,200);
  //        10+10=20=20
  lines3=new pack(280,830,80,200);
  //        20+10=30=30
  lines4=new pack(360,850,80,200);
  //        30+20=50=50
  lines5=new pack(440,780,80,200);
  //        50+30=80=80
  lines6=new pack(520,670,80,200);
  //       80+50=130=130
  lines7=new pack(600,630,80,200);
  //      130+80=210=210
  lines8=new pack(680,600,80,200);
  lines9=new pack(760,810,10,100);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 0; j <=width; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("₹ 0.001",8,550);
  text("₹ 0.01",90,550);
  text("₹ 0.1",180,550);
  text("₹ 1",260,550);
  text("₹ 5",340,550);
  text("₹ 25",420,550);
  text("₹ 100",500,550);
  text("₹ 1,000",565,550);
  text("₹ 10,0",650,550);
  text("      00",650,570);
  text("₹ 1,00,",730,550);
  text("    000",730,570);

  lines0.display();
  lines1.display();
  lines2.display();
  lines3.display();
  lines4.display();
  lines5.display();
  lines6.display();
  lines7.display();
  lines8.display();
  lines9.display();
  Engine.update(engine);

  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }

  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //create the particles using frameCount
   if(frameCount%20==0){
     particles.push(new Particles(random(0,1000),0))
    }

  //display the particles 
 for (var a=0; a < particles.length; a++){
   particles[a].display();
 }
}