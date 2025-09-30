let Fondo1; 
let Est;
let Comv;
let Mob;
let Mov = true;
function preload(){
  Fondo1 = loadImage('data/primer_imagen.png')
  Comv = loadStrings('data/1era_imagen.txt')
  Mob = 0;
  Est = 0;
  
}

function setup() {
  createCanvas(640,480);
 
}


function draw() {
background(Fondo1)
if(est == 0){
  PrimerDialogo( 30, Comv, mob);
}
else if(est == 1){
  PrimerDialogo( 30, Comv, mob);
}
else if(est == 2){
  PrimerDialogo( 30, Comv, mob);
}
else if(est == 3){
  PrimerDialogo( 30, Comv, mob);
}
function mousePressed(){
  Mov = true
}
}
