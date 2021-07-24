var deaths = 0;
var ball,restart,wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16;
var wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34;
var wall35,wall36,wall37,button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11,button12,button13,win;
var edges;
function setup(){
ball = createSprite(15,15,15,15);
ball.shapeColor = "black";

restart = createSprite(380,10,40,20);
restart.shapeColor = "black";
wall1 = createSprite(45,50,100,10);
wall2 = createSprite(175,60,10,120);
wall3 = createSprite(137.5,115,75,10);
wall4 = createSprite(97.5,82.5,10,75);
wall5 = createSprite(47.5,115,105,10);
wall6 = createSprite(230,115,100,10);
wall7 = createSprite(175,145,10,50);
wall8 = createSprite(115,165,115,10);
wall9 = createSprite(25,165,75,10);
wall10 = createSprite(100,250,10,180);
wall11 = createSprite(50,200,50,10);
wall12 = createSprite(25,265,50,10);
wall13 = createSprite(50,330,50,10);
wall14 = createSprite(15,375,30,10);
wall15 = createSprite(100,370,10,60);
wall16 = createSprite(175,325,10,200);
wall17 = createSprite(137.5,320,107.5,10);
wall18 = createSprite(225,165,100,10);
wall19 = createSprite(312.5,150,100,10);
wall20 = createSprite(270,270,10,200);
wall21 = createSprite(222.5,285,85,10);
wall22 = createSprite(222.5,285,10,80);
wall23 = createSprite(270,370,10,20);
wall24 = createSprite(270,390,10,20);
wall25 = createSprite(312.5,365,75,10);
wall26 = createSprite(340,295,75,75);
wall27 = createSprite(390,295,25,10);
wall28 = createSprite(285,295,35,10);
wall29 = createSprite(350,232.5,10,50);
wall30 = createSprite(375,185,75,10);
wall31 = createSprite(350,115,10,85);
wall32 = createSprite(275,60,10,120);
wall33 = createSprite(300,25,40,10);
wall34 = createSprite(300,55,40,10);
wall35 = createSprite(300,85,40,10);
wall36 = createSprite(280,212.5,10,10);
wall37 = createSprite(340,250,10,10);
wall36.velocityX = 2.5;
wall37.velocityX = -2.5;
wall19.rotation = 45;
wall17.rotation = 45;
wall1.shapeColor = "red";
wall2.shapeColor = "red";
wall3.shapeColor = "red";
wall4.shapeColor = "red";
wall5.shapeColor = "red";
wall6.shapeColor = "red";
wall7.shapeColor = "red";
wall8.shapeColor = "red";
wall9.shapeColor = "red";
wall10.shapeColor = "red";
wall11.shapeColor = "red";
wall12.shapeColor = "red";
wall13.shapeColor = "red";
wall14.shapeColor = "red";
wall15.shapeColor = "red";
wall16.shapeColor = "red";
wall17.shapeColor = "red";
wall18.shapeColor = "red";
wall19.shapeColor = "red";
wall20.shapeColor = "red";
wall21.shapeColor = "red";
wall22.shapeColor = "red";
wall23.shapeColor = "red";
wall24.shapeColor = "red";
wall25.shapeColor = "red";
wall26.shapeColor = "red";
wall27.shapeColor = "red";
wall28.shapeColor = "red";
wall29.shapeColor = "red";
wall30.shapeColor = "red";
wall31.shapeColor = "red";
wall32.shapeColor = "red";
wall33.shapeColor = "red";
wall34.shapeColor = "red";
wall35.shapeColor = "red";
wall36.shapeColor = "red";
wall37.shapeColor = "red";

button1 = createSprite(165,15,10,20);
button1.shapeColor = "pink";
button2 = createSprite(45,60,20,10);
button2.shapeColor = "green";
button3 = createSprite(25,125,20,10);
button3.shapeColor = "yellow";
button4 = createSprite(5,390,10,20);
button4.shapeColor = "orange";
button5 = createSprite(165,375,10,20);
button5.shapeColor = "brown";
button6 = createSprite(185,350,10,20);
button6.shapeColor = "grey";
button7 = createSprite(185,375,10,20);
button7.shapeColor = "blue";
button8 = createSprite(395,310,10,20);
button8.shapeColor = "purple";
button9 = createSprite(220,125,20,10);
button9.shapeColor = "violet";
button10 = createSprite(285,10,10,20);
button10.shapeColor = "indigo";
button11 = createSprite(285,40,10,20);
button11.shapeColor = "lightgreen";
button12 = createSprite(285,70,10,20);
button12.shapeColor = "darkorange";
button13 = createSprite(285,100,10,20);
button13.shapeColor = "silver";

win = createSprite(200,15,20,20);
win.shapeColor = "black";
edges=createEdgeSprites();
}
function draw() {
  background(rgb(ball.x,ball.y,100));
  
  fill("black");
  text("RESTART",345,30);

drawSprites();

 
 
 if(ball.isTouching(button1)){

    wall4.y = 32.5;   
    ball.shapeColor = "pink";
   
 }
  if(ball.isTouching(button2)){

    wall3.x = 32.5;   
    ball.shapeColor = "green";
   
 }
 if(ball.isTouching(button3)){
   
   wall9.x = 115;
   ball.shapeColor = "yellow";
   
 }
 if (ball.isTouching(button4)){
   
   wall15.y = 250;
   ball.shapeColor = "orange";
   
 }
 if(ball.isTouching(button5)){

   wall17.x = 100;
   wall17.y = 250;
   wall17.rotation = 90;
   ball.shapeColor = "brown";
   
 }
if(ball.isTouching(button6)){
  
  ball.shapeColor = "grey";
  wall24.y = 270;
  
}
if(ball.isTouching(button7)){
  
  ball.shapeColor = "blue";
  wall23.y = 270;
  
}
if(ball.isTouching(button8)){
  
  ball.shapeColor = "purple";
  wall28.x = 350;
  
}
if(ball.isTouching(button9)){
  
  ball.shapeColor = "violet";
  wall30.y = 295;
  
}
if(ball.isTouching(button10)){
  
  ball.shapeColor = "indigo";
  wall32.y = 90; 
  
}
if(ball.isTouching(button11)){
  
  ball.shapeColor = "lightgreen";
  wall32.y = 120;
  
}
if(ball.isTouching(button12)){
  
  ball.shapeColor = "darkorange";
  wall32.y = 150;
  
}
if(ball.isTouching(button13)){
  
  ball.shapeColor = "silver";
  wall32.y = 180;
  
}
 
 if(ball.isTouching(wall1)||ball.isTouching(wall2)||ball.isTouching(wall3)||ball.isTouching(wall4)||ball.isTouching(wall5)||ball.isTouching(wall6)||ball.isTouching(wall7)||ball.isTouching(wall8)||ball.isTouching(wall9)||ball.isTouching(wall10)||ball.isTouching(wall11)||ball.isTouching(wall12)||ball.isTouching(wall13)||ball.isTouching(wall14)||ball.isTouching(wall15)||ball.isTouching(wall16)||ball.isTouching(wall17)||ball.isTouching(wall18)||ball.isTouching(wall19)||ball.isTouching(wall20)||ball.isTouching(wall21)||ball.isTouching(wall22)||ball.isTouching(wall23)||ball.isTouching(wall24)||ball.isTouching(wall25)||ball.isTouching(wall26)||ball.isTouching(wall27)||ball.isTouching(wall28)||ball.isTouching(wall29)||ball.isTouching(wall30)||ball.isTouching(wall31)||ball.isTouching(wall32)||ball.isTouching(wall33)||ball.isTouching(wall34)||ball.isTouching(wall35)||ball.isTouching(wall36)||ball.isTouching(wall37)){
   
   deaths = deaths + 1;
   ball.x = 15;
   ball.y = 15;
   wall4.y = 82.5;
   wall3.x = 137.5;
   wall9.x = 25;
   wall15.y = 370;
   wall17.y = 320;
   wall17.x = 137.5;
   wall17.rotation = 45;
   ball.shapeColor = "black";
   wall23.y = 370;
   wall24.y = 390;
   wall28.x = 285;
   wall30.y = 185;
   wall32.y = 60;
 }
 fill("black");
 text("DEATHS:"+deaths,2.25,10);
 
 if(ball.isTouching(win)){
  
  var thumbs = createSprite(135,255,50,50);
  thumbs.setAnimation("flat_medal1_1");
  fill("black");
  textSize(35);
  text("YOU WIN",110,205);
  ball.velocityX = 0;
  ball.velocityY = 0;
  
}
  
  if(keyDown("up")){
    ball.y = ball.y - 2.5;
  }
  
   if(keyDown("down")){
    ball.y = ball.y + 2.5;
  }
  
   if(keyDown("right")){
    ball.x = ball.x + 2.5;
  }
  
   if(keyDown("left")){
    ball.x = ball.x - 2.5;
  }
  if(deaths == 10){
    
    ball.x = 15;
    ball.y = 15;
    ball.visibility = false;
    
    textSize(25);
    text("Game Over",120,200);
    
  }
  
  if(mousePressedOver(restart)){
    
    deaths = 0;
    ball.x = 15;
    ball.y = 15;
    ball.visibility = true;
    
  }
    ball.bounceOff(edges);
    
    wall36.bounceOff(wall29);
    wall36.bounceOff(wall20);
    
    wall37.bounceOff(wall29);
    wall37.bounceOff(wall20);
    
    wall11.rotation = wall11.rotation + 2.5;
    wall12.rotation = wall12.rotation + 2.5;
    wall13.rotation = wall13.rotation + 2.5;
    wall21.rotation = wall21.rotation + 0.5;
    wall22.rotation = wall22.rotation + 0.5;
    wall31.rotation = wall31.rotation - 2.5;
  
}
