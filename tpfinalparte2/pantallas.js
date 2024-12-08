class Pantalla {
  // inicializa objetos 
  // fondo y botones
constructor(pantalla, textos) {
  
this.imagenInicio = inicio;
this.imagenCreditos = creditos;
this.imagenInstrucion = instrucciones;
this.imagenGano = win;
this.imagenPerdio = lose;

this.boton = new Boton( 320, 400, 130, 50, "Jugar");
this.botoncreditos = new Boton(160, 400, 130, 50, "Creditos");
this.botoninstruccion = new Boton(480, 400, 130, 50, "Instrucciones");
this.botoninicio = new Boton(320, 400, 130, 50, "Inicio");
this.botoninicioins = new Boton(80, 450, 100, 40, "Regresar");
}


// crea botones en pantalla de inicio
  pantallaInicio(){
    background( inicio );
    rectMode(CENTER);
     
    this.boton.mostrar(); // jugar 
    this.botoncreditos.mostrar();
    this.botoninstruccion.mostrar();
    
}

// crea botones en pantalla de ganar  
  pantallaGanar(){
   background( win );
   rectMode(CENTER);
      
   this.botoninicio.mostrar();
}

// crea botones en pantalla de perder 
pantallaPerdiste(){
  background(lose);
       rectMode(CENTER);
       
      this.botoninicio.mostrar();
}

// crea botones en pantalla de créditos 
pantallaCredito(){
  background(creditos); 
       rectMode(CENTER);
   
      this.botoninicio.mostrar();
}

pantallaInstrucciones(){
  background(instrucciones); 
       rectMode(CENTER);
   
this.botoninicioins.mostrar();
}
}
