class Principal {
  //inicializa objetos 
  constructor() {
   this.Juego = new Juego(willder, [thebeast]); // imagenes personajes
    this.pantalla = new Pantalla(fondo); // imagen fondo
    this.estado = 1; // pantalla de inicio 
}

// crea pantallas 
  dibujar() {
    if (this.estado === 1) { // muestra la pantalla de inicio 
      this.pantalla.pantallaInicio(); 

      
    } else if (this.estado === 2) { // sino la pantalla del juego 
      background( fondo );
    this.Juego.crearEnemigosContinuamente(); // crea enemigos continuamente
    this.Juego.actualizarTiempo(); // límite de tiempo en la pantalla del juego 
     
   this.Juego.dibujar();
   
    } else if (this.estado === 3) { // muestra la pantalla de perder 

      this.pantalla.pantallaPerdiste(); 
    } else if (this.estado === 4) {  // muestra la pantalla de créditos
      this.pantalla.pantallaCredito();
    } else if (this.estado === 5) { // muestra la pantalla de ganar
      this.pantalla.pantallaGanar(); 

    
      } else if (this.estado === 6) { // muestra la pantalla de ganar
      this.pantalla.pantallaInstrucciones(); 
    }
    
    
  }

// pasa pantallas 
  mousePresionado() {
    if (this.estado === 1) { // arranca en pantalla de inicio 
      if (this.pantalla.boton.clicEnBoton()) { // pasa a la pantalla del juego
         console.log("Botón 'Jugar' presionado."); // inspecciona 
        this.estado = 2; 
      } else if (this.pantalla.botoncreditos.clicEnBoton()) { // pasa a la pantalla de créditos 
        this.estado = 4; 
      }
      
      else if (this.pantalla.botoninstruccion.clicEnBoton()) { // pasa a la pantalla de créditos 
        this.estado = 6; 
      }
      
    } else if (this.estado === 3 || this.estado === 5) { // pasa a la pantalla de perder o ganar 
      if (this.pantalla.botoninicio.clicEnBoton()) { // pasa a la pantalla de inicio 
        this.reiniciarJuego();
      }
    } else if (this.estado === 4) { // pasa a la pantalla de créditos 
      if (this.pantalla.botoninicio.clicEnBoton()) { // pasa a la pantalla de inicio 
        this.estado = 1; 
      }
    }
    else if (this.estado === 2) { // pasa a la pantalla del juego 
      if (this.pantalla.botoninicio.clicEnBoton()) { // pasa a la pantalla de incio 
        this.estado = 1; 
      }
    }
      else if (this.estado === 6) { // pasa a la pantalla del juego 
      if (this.pantalla.botoninicioins.clicEnBoton()) { // pasa a la pantalla de incio 
        this.estado = 1; 
      }
      
      }
  }

//reincia 
    reiniciarJuego() {
    this.estado = 1; // vuelve a la pantalla de inicio
    this.Juego.reiniciarJuego(); // reinicia el juego completo
  }
}
