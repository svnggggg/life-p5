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
      fill (255, 0, 0)
      text (this.vecinos,this.pX * this.tam, this.pY * this.tam + 10)
      if(this.viva == 0){
        fill("#FFFD98")
      }
      else{
        fill(255)
        strokeWeight(0.5);
      }
         
  
      }
    }
    
    let celulas
    let columnas
    let filas
    
    function setup() {
      createCanvas(400, 400);
      columnas = width / 10
      filas = height / 10
    
      
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
        }
      }
    }