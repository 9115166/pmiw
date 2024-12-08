class Juego {
  // inicializa objetos 
  // personajes 
  constructor(mike, imagenesEnemigos) {
    
    this.imagenesEnemigos = imagenesEnemigos;
    
    this.crearPersonaje(mike); // principal (mike) 
    this.enemigos = []; // arreglo de enemigos vacío // principal [freddy, chica, bonnie, foxy] selección random de enemigos 
    
    this.intervaloEnemigos = 80; // cada cuantos cuadros se agrega un enemigo
    this.contadorCuadros = 0; // contador para manejar el intervalo
    this.tiempoTranscurrido = 0; // contador de tiempo en la pantalla del juego 
    this.tiempoLimiteCuadros = 1500; // límite de tiempo en la pantalla del juego 
  }

// crea juego
 dibujar() {
 this.personaje.dibujar(); // dibuja al personaje principal 
    for (let i = 0; i < this.enemigos.length; i++) { // ciclo for para que aumente la cantidad de enemigos 
      let enemigo = this.enemigos[i];
      enemigo.dibujar(); // dibuja al enemigo 
      enemigo.caer(); // hace caer al enemigo 
      if (enemigo.posY > height) { // enemigo pasa la pantalla 
        enemigo.reiniciar(); // reinicia la caída del enemigo
      }
    }
    // controla coliciones en general
    this.controlarColisiones(); // colisión por cuerpo 
    this.controlarDisparosAEnemigos(); // disparos a enemigos
        textSize(18);
        
         rectMode(CENTER); 
    fill(0);
    push();
    strokeWeight(3);
    stroke(255);
    rect(560, 30, 120, 30);
    pop();
    fill(255);
    
    text("Tiempo: " + this.tiempoTranscurrido, 560, 30); // el tiempo aumenta hasta llegar al límite predeterminado 
  }
// crea enemigos 
  crearEnemigosContinuamente() {
    console.log("creando enemigo."); // inspecciona 
    this.contadorCuadros++; // contador en aumento 
    if (this.contadorCuadros >= this.intervaloEnemigos) { // cuando llega a la cantidad de cuadros límite se crea un nuevo enemigo
      let posX = random(0, width - 50); // posición límite en donde deben aparecer los enemigos 
      let imagenEnemigo = random(this.imagenesEnemigos); // selección random de enemigos 
      this.enemigos.push(new Enemigo(posX, 0, imagenEnemigo)); // posición en donde debe generarse el enemigo 
      this.contadorCuadros = 0; // contador en inicio 
    }
  }
// controla colisiones por cuerpo 
   controlarColisiones() {
    for (let i = 0; i < this.enemigos.length; i++) { // ciclo for para que aumente la cantidad de enemigos 
      let enemigo = this.enemigos[i];
      if (enemigo.vida && this.colisionaConPersonaje(enemigo)) { // colisión entre el enemigo y el personaje principal 
        this.personaje.vidaPerdida(); // reduce la vida del personaje principal 
        enemigo.matar(); // hace desaparecer al enemigo 
        if (this.personaje.vidas <= 0) { // personaje principal sin más vidas 
          principal.estado = 3 // muestra la pantalla de perder 
           console.log("Juego terminado: todas las vidas perdidas."); // inspecciona 
        }
      }
    }
  }
// verifica colisión por cuerpo 
  colisionaConPersonaje(enemigo) { // los personajes son representados por cuadrados de 50x50 píxeles
    return (
      enemigo.posX < this.personaje.posX + 50 &&
      enemigo.posX + 50 > this.personaje.posX &&
      enemigo.posY < this.personaje.posY + 50 &&
      enemigo.posY + 50 > this.personaje.posY
      );
  }
// crea personaje principal 
  crearPersonaje(imagen) {
    this.personaje = new Personaje(width / 2, 300, imagen);
  }
// mueve personaje principal 
  mover(keyCode) {
  if (this.personaje) {
    this.personaje.Mover(keyCode);
  }
}
// controla tiempo 
  actualizarTiempo() {
    this.tiempoTranscurrido++; // tiempo en aumento 
    if (this.tiempoTranscurrido >= this.tiempoLimiteCuadros) { // tiempo llega al límite predeterminado 
        console.log("Ganaste. Tiempo límite alcanzado."); // inspecciona 
        principal.estado = 5; // muestra la pantalla de ganar 
    }
}
// reinicia juego 
reiniciarJuego() {
    this.estado = 1; // muestra la pantalla de inicio 
    this.tiempoTranscurrido = 0; // recetea el tiempo 
    this.enemigos = []; // vacía el arreglo de enemigos
    this.contadorCuadros = 0; // recetea el contador de cuadros
    this.personaje.vidas = 10; // recetea las vidas del personaje principal 
    this.personaje = new Personaje(width / 2, 300, this.personaje.imagen); // vuelve a crearse el personaje principal
    this.temporizador = null; // detiene el tiempo
  }
  // controla disparos a enemigo
 controlarDisparosAEnemigos() {
  if (this.personaje.haDisparadoBala()) { // reinicia bala a personaje principal 
    for (let i = 0; i < this.enemigos.length; i++) { // ciclo for para que aumente la cantidad de enemigos 
      let enemigo = this.enemigos[i];
      enemigo.haTocadoLaBala (this.personaje.bala); // mata enemigo y reinicia bala

    }
  }
}
}
