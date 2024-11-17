function botonesDesicivos ( texto , x , y , ancho , alto ){

  fill( 50 );
  rect( x , y , ancho , alto , 10 );
  push();
  fill( 250 );
  textSize( 15 )
  textAlign( CENTER , CENTER );
  text( texto , x , y , ancho , alto );
  pop();
}

function areaBoton ( mx , my , x , y , ancho , alto ){

  return mx > x && mx < x + ancho && my > y && my < y + alto;

}
