let Fondo = []
let Est = 0;
let Comv; 
let Mob;
let Mov = true;

function preload(){
  Fondo[1] = loadImage('data/primer_imagen.png')
  Fondo[2] = loadImage()
  Fondo[3] = loadImage()
  Fondo[4] = loadImage()
  Fondo[5] = loadImage()
  Fondo[] = loadImage('data/Final1.jpg')
  Fondo[] = loadImage('data/Final2.jpg')
  Fondo[] = loadImage('data/Final3.jpg')
  Fondo[] = loadImage('data/Final4.jpg')
  Fondo[] = loadImage('data/Final5.jpg')
  Comv = loadStrings('data/1era_imagen.txt')
  Mob = 0;
  Est = 0;
  
}

function setup() {
  createCanvas(640,480);
 
}


function draw() {
background(Fondo1)
if(Est == 0){
  PrimerDialogo( 30, Comv, Mob);
}
else if(Est == 1){
  PrimerDialogo( 30, Comv, Mob);
}
else if(Est == 2){
  PrimerDialogo( 30, Comv, Mob);
}
else if(Est == 3){
  PrimerDialogo( 30, Comv, Mob);
}
 function mousePressed() {
  Est++;
  Comv++;
}
}
