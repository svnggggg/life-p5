class Celula {
  constructor(pX,pY,tam){
    this.pX = pX;
    this.pY = pY;
    this.tam = tam;
    this.viva = floor(random(2));
    this.vecinos = 0;
  }

    show(){
    rect(this.pX * this.tam,this.pY * this.tam,this.tam,this.tam)
    fill (0)
    text (this.vecinos,this.pX * this.tam, this.pY * this.tam + 10)
    
    if(this.viva == 0){
      fill("#FFFD98")
    }
      
    else{
      fill(255)
      strokeWeight(0.5);
    }
    }

    esParedSup(){
      if(this.pY == 0){
           return true;
      }
    }
  
    esParedInf(){
      if(this.pY == filas - 1){
        return true;
      }
    }
  
    esParedIzq(){
      if(this.pX == 0){
        return true;
      }
    }
  
    esParedDer(){
      if(this.pX == columnas - 1){
        return true;
      }
    }

    contarVecinos() {
    this.vecinos = 0;
    let acum = 0
    //cuenta cuando no esta en ninguna pared
    if (
      !(
        this.esParedDer() ||
        this.esParedIzq() ||
        this.esParedSup() ||
        this.esParedInf()
      )
    ) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (!(i == 0 && j == 0)) {
            acum += celulas[this.pX + i][this.pY + j].viva;
          }
        }
      }
      this.vecinos = acum;
    }
    //contar para cuando esta en las esquinas
    else if (this.esParedSup() && this.esParedDer()) {
      //esquina superior derecha
      this.vecinos +=
        celulas[this.pX - 1][this.pY].viva +
        celulas[this.pX - 1][this.pY + 1].viva +
        celulas[this.pX][this.pY + 1].viva;
    } else if (this.esParedSup() && this.esParedIzq()) {
      //esquina superior izquierda
      this.vecinos +=
        celulas[this.pX + 1][this.pY].viva +
        celulas[this.pX + 1][this.pY + 1].viva +
        celulas[this.pX][this.pY + 1].viva;
    } else if (this.esParedInf() && this.esParedIzq()) {
      //esquina inf izquierda
      this.vecinos +=
        celulas[this.pX + 1][this.pY].viva +
        celulas[this.pX + 1][this.pY - 1].viva +
        celulas[this.pX][this.pY - 1].viva;
    } else if (this.esParedInf() && this.esParedDer()) {
      //esquina inf der
      this.vecinos +=
        celulas[this.pX - 1][this.pY].viva +
        celulas[this.pX - 1][this.pY - 1].viva +
        celulas[this.pX][this.pY - 1].viva;
    } else if (this.esParedSup()) {
      //pared superior
      for (let i = -1; i <= 1; i++) {
        for (let j = 0; j <= 1; j++) {
          this.vecinos += celulas[this.pX + i][this.pY + j].viva;
        }
      }
      if (this.viva == 1) {
        this.vecinos -= 1;
      }
    } else if (this.esParedIzq()) {
      //pared izquierda
      for (let i = 0; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          this.vecinos += celulas[this.pX + i][this.pY + j].viva;
        }
      }
      if (this.viva == 1) {
        this.vecinos -= 1;
      }
    } else if (this.esParedInf()) {
      //pared inferior
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 0; j++) {
          this.vecinos += celulas[this.pX + i][this.pY + j].viva;
        }
      }
      if (this.viva == 1) {
        this.vecinos -= 1;
      }
    } else if (this.esParedDer()) {
      //pared superior
      for (let i = -1; i <= 0; i++) {
        for (let j = -1; j <= 1; j++) {
          this.vecinos += celulas[this.pX + i][this.pY + j].viva;
        }
      }
      if (this.viva == 1) {
        this.vecinos -= 1;
      }
    }
  }
}
 
// Termina

  let celulas
  let columnas
  let filas
  let escala = 20;
  
  function setup() {
    createCanvas(400, 400);
    columnas = width / escala;
    filas = height / escala;
  
    
    //creo la matriz
    celulas = new Array(filas);
    for (let i = 0; i < celulas.length; i++) {
      celulas[i] = new Array(columnas);
      
    }
    
    //inicializo la matriz con células
    for (let i = 0; i < filas; i += 1) {
      for (let j = 0; j < columnas; j += 1) {
        celulas[i][j] = new Celula(i,j,10);
      }
    }
  }
  
  function draw() {
    background(220);
    //muestro la matriz de celulas
    for (let i = 0; i < filas; i += 1) {
      for (let j = 0; j < columnas; j += 1) {
        celulas[i][j].show()
        celulas[i][j].contarVecinos()
      }
    }
  }