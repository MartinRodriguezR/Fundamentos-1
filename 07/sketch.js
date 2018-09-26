var sapos = []
var guacamayos = []
var monos1 = []
var leopardos = []
var mariposas = []

var miCancion;
var posX = 500
var posY = 500



function preload() {
  mariposa = loadImage('assets/mariposa.png');
  guacamayo = loadImage('assets/guacamayo.png');
  leopardo = loadImage('assets/LEOPARDO.png');
  gorila = loadImage('assets/GORILA.png');
  frog = loadImage('assets/frog.png');
  mono1 = loadImage('assets/mono.png');
  selva = loadImage('assets/JUNGLE 3.jpg');
  miCancion = loadSound('assets/lionsleeps.mp3');
}

function setup() {
  createCanvas(700, 700);


  miCancion.play();

}

function mousePressed() {
  for (var i = 0; i < monos1.length; i++) {
    monos1[i].clicked();
  }
}

function mouseReleased() {
  mariposas[mariposas.length] = new Animal5(mouseX, mouseY);
}

function keyPressed() {
  mariposas.splice(0, 1);

}


function draw() {
  background(220);


  image(selva, 0, 0, 700, 700);

  for (var h = 0; h < mariposas.length; h = h + 1) {
    mariposas[h].move();
    mariposas[h].display();

  }
  for (var i = 0; i < leopardos.length; i++) {
    leopardos[i].move();
    leopardos[i].display();
  }

  for (var j = 0; j < sapos.length; j++) {
    sapos[j].move();
    sapos[j].display();
    if (sapos[j].edad > 300) {
      sapos[j].morir();
    }
  }

  for (var k = 0; k < guacamayos.length; k++) {
    guacamayos[k].move();
    guacamayos[k].display();
  }

  for (var l = 0; l < monos1.length; l++) {
    monos1[l].move();
    monos1[l].display();
  }


  if (frameCount % 20 == 0) {
    leopardos[leopardos.length] = new Animal1(random(0, width), random(150, 200));
  }

  if (frameCount % 20 == 0) {
    sapos[sapos.length] = new Animal2(random(0, width), random(550, 680));
  }


  if (frameCount % 20 == 0) {
    guacamayos[guacamayos.length] = new Animal3(random(0, width), random(20, 100));
  }

  if (frameCount % 10 == 0) {
    monos1[monos1.length] = new Animal4(random(40, width), random(150, 150));
  }


}

// Función 1 : Animal 1
function Animal1(x, y) {
  this.x = x;
  this.y = y;
  this.display = function() {
    image(leopardo, this.x, this.y, 200, 200);
  }

  this.move = function() {
    this.x = this.x + random(5, 1);
    this.y = this.y + random(-1, 30);
  }
}

// Función 2 : Animal 2
function Animal2(x, y) {
  this.x = x;
  this.y = y;
  this.edad = 0;
  this.estaViva = true;
  this.display = function() {
    if (this.estaViva == true) {
      image(frog, this.x, this.y, 100, 100);
    }
  }
  this.move = function() {
    this.x = this.x + random(-3, 1);
    this.y = this.y + random(-1, 1);
    this.edad = this.edad + 10;
  }
  this.morir = function() {
  this.estaViva = false;
}

}

// Función 3 : Animal 3
function Animal3(x, y) {
  this.x = x;
  this.y = y;
  this.display = function() {
    image(guacamayo, this.x, this.y, 150, 150);
  }

  this.move = function() {
    this.x = this.x + random(1, -3);
    this.y = this.y + random(-1, 1);
  }

}

// Función 4 : Animal 4
function Animal4(x, y) {
  this.x = x;
  this.y = y;
  this.col = color(255);
  this.display = function() {
    imageMode(CENTER);
    tint(this.col);
    image(mono1, this.x, this.y, 120, 120);
    imageMode(CORNER);
  }
  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 30) {
      this.col = color('orange');
    }
  }
  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 30);
  }
}
// Función 5 : Animal 5
function Animal5(x, y) {
  this.x = x;
  this.y = y;
  this.display = function() {
    imageMode(CENTER);
    image(mariposa, this.x, this.y, 80, 80);
    imageMode(CORNER);
  }
  this.move = function() {
    this.x = this.x + random(4, 1);
    this.y = this.y + random(-1, 1);
  }
}