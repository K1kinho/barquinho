var barco, mar
var marImage, barcoImage

function preload(){

              marImage = loadImage("sea.png");
        barcoImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  
    mar =createSprite(200, 200, 20, 20);
      mar.addImage("marImage");
          mar.scale= 0.5;


      barco = createSprite(200, 140, 35, 50);
      barco.addAnimation("barcoImage");
}

function draw() {
  background("red");
    drawSprites();
}
