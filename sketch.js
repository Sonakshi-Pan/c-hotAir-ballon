var ballon,position,ballonImg;
var database,updateHeight
var backimg
function preload(){

    backimg = loadImage("images/Background.png")
    ballonImg = loadImage("images/HotAir.png")
}
function setup(){
    createCanvas(1100,600);
  database = firebase.database();

   ballon = createSprite(100,450,70,100);
   ballon.addAnimation("ballon",ballonImg);
   ballon.scale = 0.6
  var ballonPosition=database.ref('ballon/height')
   ballonPosition.on("value",readPosition)
}

function draw(){
   
    background(backimg);
    if(position!== undefined){
   if(keyDown(LEFT_ARROW)){
       ballon.x = ballon.x-10
   }
   else if(keyDown(RIGHT_ARROW)){
    ballon.x = ballon.x+10
   }
  else if(keyDown(UP_ARROW)){
    ballon.y = ballon.y-10
  //  updatePosition(0,-10);
    //ballon.addAnimation("ballon",ballonImage)
    // ballon.scale=ballon.scale-0.01;
   }
  else if(keyDown(DOWN_ARROW)){
    ballon.y = ballon.y+10   
    drawSprites();
   }}
  /* if(keyDown(UP_ARROW)){
    //ballon.y = ballon.y-10
    updateHeight(0,-10);
    ballon.addAnimation("ballon",ballonImage)
     ballon.scale=ballon.scale-0.01;
   }*/
  
  
  

   
    drawSprites();
}
/*function updateHeight(x,y){
    database.ref('ballon/height').set({
        'x':Height.x+x,
        'y':height.y+y
    })

  }
  function readHeight(data){
      height = data.val()
      ballon.x = height.x;
      ballon.y = height.y;
  }*/
  function readPosition(data){
    position = data.val()
    position.x = position.x;
    position.y = position.y; 
  }




