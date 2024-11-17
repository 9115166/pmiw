function mostrar ( estado , dialogos , boton = [] ){

  image( imagenes[ estado ] , 0 , 0  );
  
   textSize( 20 );
   fill( 255 );
   text( dialogos[ estado - 1 ], 20 , 380 , width-20 );


  // Dibujar los botones si existen
  for ( let botones of boton ) {
    botonesDesicivos(botones[0] , botones[1] , botones[2] , botones[3] , botones[4] ); // Botón con ancho y alto fijos
  }
  

}//--------------------------------------------------------------------------corchete de cierre del MOSTRAR
