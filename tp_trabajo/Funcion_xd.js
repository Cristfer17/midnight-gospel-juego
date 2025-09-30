function PrimerDialogo( t, d, i ){
  //cuadro
  if( i % 2 == 0 ){
fill(215,110,185,200);
stroke(150,110,185);
rect(width/16,360,565,100,10);
  //texto
  textSize( t );
  fill( 50 );
  text( d[i], 100, 100, 400 );
}}
