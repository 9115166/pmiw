class Bala {
  // inicializa objetos 
  // posiciones y disparada
  constructor(posX, posY, imagen) {
    this.posX = posX;
    this.posY = posY;
    this.enDisparo = false;
 this.imagen = imagen;  
}

// crea bala 
  dibujar() {
    if( this.enDisparo ){
      image( this.imagen , this.posX , this.posY , 40 , 40 );
    this.mover();
  }
}

// mueve y recetea bala 
  mover() {
    this.posY -= 5; // de abajo para arriba 
    if (this.posY < 0) { // bala sale de pantalla 
      this.reset(); // recetea bala
    }
  }
  
  // dispara bala 
 disparar( posX , posY ) {
    this.posX = posX;
    this.posY = posY;
    this.enDisparo = true;
    sonido.play();
    sonido.setVolume( 0.1 );
    sonido.rate( 3 );
}
  

// no disparo bala 
  reset() {
    this.enDisparo = false; // no hay disparo de bala 
    this.posY = -10; // bala fuera de pantalla 
  }
}
