var ballon,ballonimage,ballon1,ballon2;
var bg;
function preload(){

  ballonimage=loadAnimation("images/images2/ballon1.png")
  ballon2=loadAnimation("images/images2/ballon2.png","images/images2/ballon3.png","images/images2/ballon4.png")
  //bg=loadImage("images/images2/city.png")
}



function setup() {
  database=firebase.database();

  createCanvas(1500,700);
 ballon= createSprite(250, 650, 150, 150);
 ballon.addAnimation("ballon",ballonimage)
 ballon.scale=0.5;
 var ballonHeight=database.ref('ballon/height');
 ballonHeight.on("velue",readHeight,showError)
 textSize(20)
}

function draw() {
  background(0);  
  if(keyDown(LEFT_ARROW)){ updateHeight(-10,0);
     ballon.addAnimation("hotAirBalloon",ballon2); 
    }
   else if(keyDown(RIGHT_ARROW)){
      updateHeight(10,0); 
      ballon.addAnimation("hotAirBalloon",ballon2);
     }
      else if(keyDown(UP_ARROW)){ updateHeight(0,-10);
         ballon.addAnimation("hotAirBalloon",ballon2);
         ballon.scale=balloon.scale -0.005; 
        } 
        else if(keyDown(DOWN_ARROW)){
         updateHeight(0,+10); 
        ballon.addAnimation("hotAirBalloon",ballon2);
       ballon.scale=ballon.scale+0.005;
        }
  drawSprites();
  fill (0)
  text("use arrow keys to move the ballon")
}
function updateHeight(x,y){
 database.ref('balloon/height').set({
   'x': height.x + x , 'y': height.y + y 
  }) }
   function readHeight(data){
   height = data.val();
    console.log(height.x);
     ballon.x = height.x; ballon.y = height.y;
     }
      function showError(){ 
      console.log("Error in writing to the database");
     }