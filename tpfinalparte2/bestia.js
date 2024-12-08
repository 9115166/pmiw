 class Enemigo {
     // inicializa objetos 
     // posiciones - vida - velocidad - enemigos
  constructor(posX, posY, imagen) {
    this.posX = posX;
    this.posY = posY;
    this.vida = true;
    this.velocidad = 5;
    this.imagen = imagen;
  }

// caída enemigo 
  caer() {
    this.posY += this.velocidad; // enemigo cae cada dos píxeles 
  }

// crea enemigo 
  dibujar() {
    if (this.vida) { // enemigo con vida 
      image(this.imagen, this.posX, this.posY, 70, 70); // dibuja enemigo
    }
  }

// mata enemigo 
  matar() {
    this.vida = false; // enemigo sin vida 
  }

// reinicia caída enemigo
  reiniciar() {
    this.posX = random(0, width - 40); // posición límite en donde deben aparecer los enemigos 
    this.posY =- 40; // posición en donde se generan los enemigos
    this.vida = true; // enemigo con vida
  }

// colisión enemigo bala
  haTocadoLaBala(bala) {
    if (this.vida && dist(this.posX, this.posY, bala.posX, bala.posY) < 25) { // colisión enemigo bala
      this.matar(); // enemigo sin vida
      bala.reset(); // reinicia bala
    }
  }
}
