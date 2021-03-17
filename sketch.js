
function setup() {
  createCanvas(800,400);
  // createSprite(400, 200, 50, 50);

  movingrect=createSprite(450, 200, 50, 50);
  fixedrect =createSprite(402,250,80,40);

  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";

}

function draw() {
  background("black");  

  movingrect.y=mouseY;
  movingrect.x=mouseX;

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    &&movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
  }

  else{
    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";
  }

  drawSprites();
}