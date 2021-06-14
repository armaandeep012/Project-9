var btn_red;
var btn_green;
var btn_blue;
var btn_pink;
var btn_orange;
var btn_skyBlue;
var btn_yellow;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(1920, 1080); 

  btn_red = createButton("Red!");
  btn_red.position(700,100);
  btn_red.mousePressed(redBg);
  btn_red.size(200,100);

  btn_green = createButton("Green!");
  btn_green.position(1000,100);
  btn_green.size(200,100);
  btn_green.mousePressed(greenBg);

  btn_blue = createButton("Blue!");
  btn_blue.position(850,300);
  btn_blue.size(200,100);
  btn_blue.mousePressed(blueBg);

  btn_pink = createButton("Pink!");
  btn_pink.position(1150,300);
  btn_pink.size(200,100);
  btn_pink.mousePressed(pinkBg);

  btn_orange = createButton("Orange!");
  btn_orange.position(550,300);
  btn_orange.size(200,100);
  btn_orange.mousePressed(orangeBg);

  btn_skyBlue = createButton("Sky Blue!");
  btn_skyBlue.position(700,500);
  btn_skyBlue.size(200,100);
  btn_skyBlue.mousePressed(skyBlueBg);

  btn_yellow = createButton("Yellow!");
  btn_yellow.position(1000,500);
  btn_yellow.size(200,100);
  btn_yellow.mousePressed(yellowBg);

}

function draw() {
  background(r,g,b);
}

function redBg(){
  r = 255;
  g = 0;
  b = 0;
}

function greenBg(){
  r = 0;
  g = 255;
  b = 0;
}

function blueBg(){
  r = 0;
  g = 0;
  b = 255;
}

function pinkBg(){
  r = 255;
  g = 182;
  b = 193;
}

function orangeBg(){
  r = 255;
  g = 69;
  b = 0;
}

function skyBlueBg(){
  r = 135;
  g = 206;
  b = 235;
}

function yellowBg(){
  r= 255;
  g = 255;
  b = 0;
}