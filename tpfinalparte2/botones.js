class Boton {
  // inicializa objetos 
  // coordenadas - ancho - alto - texto 
  constructor(x, y, ancho, alto, texto) {
    
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;

}

  mostrar() { 
push(); 
    fill( 170 , 100 , 15 );
    strokeWeight( 2 ); 
    stroke( 0 );
    rect( this.x , this.y , this.ancho , this.alto );
pop();
 
push();  
    fill( 255 ); 
    textAlign( CENTER , CENTER );
    textSize( 15 );
    text( this.texto , this.x , this.y );
    }


// verifica si las coordenadas del mouse están dentro de los límites dados para dicho botón
  clicEnBoton() {
    return mouseX >= this.x - this.ancho / 2 &&
      mouseX <= this.x + this.ancho / 2 &&
      mouseY >= this.y - this.alto / 2 &&
      mouseY <= this.y + this.alto / 2;
  }
}
