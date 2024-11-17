//Gimenez Nazarena--Gareca Emelyn (Comision 2)
//VIDEO: 
  
  let estado = 1 ;
  let imagenes = [];
  let dialogos = [];
  let musica;


function preload(){

  lodesconocido = loadFont('data/Tomeoftheunknown-3gL3.ttf');
  musica = loadSound ('/data/pianotradicional.mp3');


 for (let i = 0; i < 23 ; i++) {
    imagenes[i] = loadImage("/data/imagen" + i + ".png");
  }


}//--------------------------------------------------------------------------corchete de cierre del PRELOAD

function setup() {
  
  createCanvas( 640 , 480 );
  
    textFont(lodesconocido);
  dialogos = loadStrings("data/dialogos.txt");
  
  
}//--------------------------------------------------------------------------corchete de cierre del SETUP

function draw() {
  background( 255 );
  
    cambioPantallas();
  
}//--------------------------------------------------------------------------corchete de cierre del DRAW

function mousePressed() {

//PANTALLA DE INICIO -------------------------------------------------------------------------------------------------------------  

  if ( estado === 1 ) {
    if ( areaBoton( mouseX, mouseY, 270 , 430 , 100 , 40 ) ) {
      estado = 2;
} 
    else if ( areaBoton(mouseX, mouseY, 220 , 370 , 200 , 50) ) {
      estado = 3;
      musica.play();
}
  }

//PANTALLA DE CREDITOS-------------------------------------------------------------------------------------------------------------  

  else if ( estado === 2 ) {
    if ( areaBoton ( mouseX, mouseY, 530, 10 , 110 , 30) ) {
      estado = 1;
}
  }
  
//COMIENZO DE LA HISTORIA-------------------------------------------------------------------------------------------------------------    
  
  else if ( estado === 3 ) {
    if ( areaBoton( mouseX, mouseY, 20 , 380 , width-20 , 80) ) {
      estado = 4;
    } 
  } 
  
  else if ( estado === 4 ) {
    if ( areaBoton( mouseX, mouseY, 20 , 380 , width-20 , 80) ) {
      estado = 5;
    }
  } 
  else if ( estado === 5 ) {
    if ( areaBoton(mouseX, mouseY, 420, 300 , 200 , 50) ) {
      estado = 6;
    } else if ( areaBoton(mouseX, mouseY, 420, 240 , 200 , 50) ) {
      estado = 7;
    }
  } 
  
//FINAL MALO 1-------------------------------------------------------------------------------------------------------------    
  
  else if ( estado === 6 ) {
    if ( areaBoton(mouseX, mouseY, 420, 240 , 200 , 50) ) {
      estado = 21;
    } else if ( areaBoton(mouseX, mouseY, 420, 300 , 200 , 50) ) {
      estado = 7;
    }   
  }

  else if ( estado === 21 ) {
    if ( areaBoton( mouseX, mouseY, 20 , 380 , width-20 , 80) ) {
      musica.stop();
      estado = 1;
    }
  }
  
//CONTINUACION-------------------------------------------------------------------------------------------------------------    

  else if ( estado === 7 ) {
    if ( areaBoton(mouseX, mouseY, 420, 240 , 200 , 50) ) {
      estado = 20;
    } else if ( areaBoton(mouseX, mouseY, 420, 300 , 200 , 50) ) {
      estado = 8;
    }
  } 
  
//FINAL MALO 2-------------------------------------------------------------------------------------------------------------      
  
  else if ( estado === 20 ) {
    if ( areaBoton(mouseX, mouseY, 20 , 380 , width-20 , 80) ) {
      musica.stop();
      estado = 1;
    }
  }
  
//CONTINUACION-------------------------------------------------------------------------------------------------------------      
  
  else if ( estado === 8 ) {
    if ( areaBoton(mouseX, mouseY, 20 , 380 , width-20 , 80) ) {
      estado = 9;
    }
  }  
  
  else if ( estado === 9 ) {
    if ( areaBoton(mouseX, mouseY, 20 , 380 , width-20 , 80) ) {
      estado = 10;
    }
  } 
  
  else if ( estado === 10 ) {
    if ( areaBoton(mouseX, mouseY, 420, 240 , 200 , 50) ) {
      estado = 22;
    } else if ( areaBoton(mouseX, mouseY, 420, 300 , 200 , 50) ) {
      estado = 11;
    }
  } 
  
//FINAL MALO 1 Y 2-------------------------------------------------------------------------------------------------------------      
  
  else if ( estado === 22 ) {
    if ( areaBoton(mouseX, mouseY, 420, 240 , 200 , 50) ) {
      estado = 20;
    } else if ( areaBoton(mouseX, mouseY, 420, 300 , 200 , 50) ) {
      estado = 21;
    }
  }
  
//CONTINUACION-------------------------------------------------------------------------------------------------------------      
    
  
  else if ( estado === 11 ) {
    if ( areaBoton(mouseX, mouseY, 20 , 380 , width-20 , 80) ) {
      estado = 12;
    }
  } 
  
  else if ( estado === 12 ) {
    if ( areaBoton(mouseX, mouseY, 20 , 380 , width-20 , 80) ) {
      estado = 13;
    }
  }
  
  else if ( estado === 13 ) {
    if ( areaBoton(mouseX, mouseY, 420, 240 , 200 , 50) ) {
      estado = 14;
    } else if ( areaBoton(mouseX, mouseY, 420, 300 , 200 , 50) ) {
      estado = 14;
    }
  }

//CONTINUACION-------------------------------------------------------------------------------------------------------------       
  
  else if ( estado === 14 ) {
    if ( areaBoton(mouseX, mouseY, 20 , 380 , width-20 , 80) ) {
      estado = 15;
    } 
  }
  
  else if ( estado === 15 ) {
    if ( areaBoton(mouseX, mouseY, 20 , 380 , width-20 , 80) ) {
      estado = 16;
    }
  }
  
  else if ( estado === 16 ) {
    if ( areaBoton(mouseX, mouseY, 420, 240 , 200 , 50) ) {
      estado = 17;
    } else if ( areaBoton(mouseX, mouseY, 420, 300 , 200 , 50) ) {
      estado = 18;
    }
  }
  
//FINAL MALO 3-------------------------------------------------------------------------------------------------------------         
  
  else if ( estado === 17 ) {
    if ( areaBoton(mouseX, mouseY, 20 , 380 , width-20 , 80) ) {
      musica.stop();
      estado = 1;
    }
  } 
  
//FINAL NEUTRAL-------------------------------------------------------------------------------------------------------------         
  
  else if ( estado === 18 ) {
    if ( areaBoton(mouseX, mouseY, 20 , 380 , width-20 , 80) ) {
      estado = 19;
    } 
  }
  
  else if ( estado === 19 ) {
    if ( areaBoton(mouseX, mouseY, 20 , 380 , width-20 , 80) ) {
      musica.stop();
      estado = 1;
    }
  } 
  
}//--------------------------------------------------------------------------corchete de cierre del MOUSEPRESSED
