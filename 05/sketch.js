var miHora;
var miMinuto;
var miSegundo;

var miAno;
var miMes;
var miDia;

var posXpet = 40
var posYpet = 350


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  var miHora = hour ();
  var miMinuto = minute();
  var miSegundo = second();
  var miColorPetalos = hour ();
  var miHoja = hour ();
  
  //sol y luna
  if (miHora >= 6 && miHora <= 18) {
    fill(0, 120, 220);
  } else {
    fill(0, 0, 0);
  }
  rect(0, 0, width, 250);

  var sol = map(miSegundo, 0, 59, 0, width);
  push();
  translate(sol, 0);
  if (miHora >= 6 && miHora <= 18) {
    fill('gold');
    ellipse(0, 30, 40, 40);
    fill('Darkorange');
    triangle(25, 20, 25, 40, 40, 30);
    triangle(-10, 55, 10, 55, 0, 70);
    triangle(-25, 20, -25, 40, -40, 30);
    triangle(-10, 5, 10, 5, 0, -10);
    triangle(25, 45, 35, 60, 15, 55);
    triangle(-25, 45, -35, 65, -15, 55);
    triangle(-25, 15, -35, 0, -15, 5);
    triangle(25, 15, 35, 0, 15, 5);
  } else {
    fill(230);
    arc(0, 50, 80, 80, radians(90), radians(270));
    fill(0);
    ellipse(0, 50, 40, 80);
  }
  pop();

  //tallo
  fill('yellowgreen');
  noStroke();
  rect(width / 2, height / 2, 10, 200);

  //flor
  push();
  translate(width / 2, height / 2);
  var miNuevoMinuto = map(miMinuto, 0, 59, 0, 359);
  var anguloRadianesMin = radians(miNuevoMinuto);
  rotate(anguloRadianesMin)

  if (miColorPetalos == 1 || miColorPetalos == 13) {
    fill('brown');
  }
  if (miColorPetalos == 2 || miColorPetalos == 14) {
    fill('red');
  }
  if (miColorPetalos == 3 || miColorPetalos == 15) {
    fill(255);
  }
  if (miColorPetalos == 4 || miColorPetalos == 16) {
    fill('darkOrange');
  }
  if (miColorPetalos == 5 || miColorPetalos == 17) {
    fill('Magenta ');
  }
  if (miColorPetalos == 6 || miColorPetalos == 18) {
    fill('Indigo');
  }
  if (miColorPetalos == 7 || miColorPetalos == 19) {
    fill('OrangeRed ');
  }
  if (miColorPetalos == 8 || miColorPetalos == 20) {
    fill('aqua');
  }
  if (miColorPetalos == 9 || miColorPetalos == 21) {
    fill('Violet');
  }
  if (miColorPetalos == 10 || miColorPetalos == 22) {
    fill('purple');
  }
  if (miColorPetalos == 11 || miColorPetalos == 23) {
    fill('HotPink');
  }
  if (miColorPetalos == 12 || miColorPetalos == 0) {
    fill('CornflowerBlue');
  }


  ellipse(0 + 15, 0, 60, 30);
  ellipse(0, 0 + 15, 30, 60);
  ellipse(0, 0 - 30, 30, 60);
  ellipse(0 - 15, 0, 60, 30);
  fill('gold');
  ellipse(0, 0, 30, 30);
  pop();

  //hojas tallo
  fill('green');

  if (miHoja >= 1); {
    ellipse(width / 2 - 7, height - 10, 20, 10);
  }
  if (miHoja >= 2) {
    ellipse(width / 2 + 17, height - 20, 20, 10);
  }
  if (miHoja >= 3) {
    ellipse(width / 2 - 7, height - 30, 20, 10);
  }
  if (miHoja >= 4) {
    ellipse(width / 2 + 17, height - 40, 20, 10);
  }
  if (miHoja >= 5) {
    ellipse(width / 2 - 7, height - 50, 20, 10);
  }
  if (miHoja >= 6) {
    ellipse(width / 2 + 17, height - 60, 20, 10);
  }
  if (miHoja >= 7) {
    ellipse(width / 2 - 7, height - 70, 20, 10);
  }
  if (miHoja >= 8) {
    ellipse(width / 2 + 17, height - 80, 20, 10);
  }
  if (miHoja >= 9) {
    ellipse(width / 2 - 7, height - 90, 20, 10);
  }
  if (miHoja >= 10) {
    ellipse(width / 2 + 17, height - 100, 20, 10);
  }
  if (miHoja >= 11) {
    ellipse(width / 2 - 7, height - 110, 20, 10);
  }
  if (miHoja >= 12) {
    ellipse(width / 2 + 17, height - 120, 20, 10);
  }

  //flor 13 horas
  if (miHoja >= 13) {
    fill('green');
    ellipse(posXpet + 15, posYpet, 50, 30);
    ellipse(posXpet, posYpet + 15, 30, 50);
    ellipse(posXpet, posYpet - 15, 30, 50);
    ellipse(posXpet - 15, posYpet, 50, 30);
    fill('gold');
    ellipse(posXpet, posYpet, 30, 30);
  }
 
  //flor 14 horas
  if (miHoja >= 14) {
    fill('yellowgreen');
    ellipse(posXpet + 95, posYpet, 50, 30);
    ellipse(posXpet + 80, posYpet + 15, 30, 50);
    ellipse(posXpet + 80, posYpet - 15, 30, 50);
    ellipse(posXpet + 65, posYpet, 50, 30);
    fill('gold');
    ellipse(posXpet + 80, posYpet, 30, 30);
  }

  //flor 15 horas
  if (miHoja >= 15) {
    fill('green');
    ellipse(posXpet + 175, posYpet, 50, 30);
    ellipse(posXpet + 160, posYpet + 15, 30, 50);
    ellipse(posXpet + 160, posYpet - 15, 30, 50);
    ellipse(posXpet + 145, posYpet, 50, 30);
    fill('gold');
    ellipse(posXpet + 160, posYpet, 30, 30);
  }

  //flor 16 horas
  if (miHoja >= 16) {
    fill('yellowgreen');
    ellipse(posXpet + 15, posYpet - 90, 50, 30);
    ellipse(posXpet, posYpet - 75, 30, 50);
    ellipse(posXpet, posYpet - 105, 30, 50);
    ellipse(posXpet - 15, posYpet - 90, 50, 30);
    fill('gold');
    ellipse(posXpet, posYpet - 90, 30, 30);
  }

  //flor 17 horas
  if (miHoja >= 17) {
    fill('green');
    ellipse(posXpet + 95, posYpet - 90, 50, 30);
    ellipse(posXpet + 80, posYpet - 75, 30, 50);
    ellipse(posXpet + 80, posYpet - 105, 30, 50);
    ellipse(posXpet + 65, posYpet - 90, 50, 30);
    fill('gold');
    ellipse(posXpet + 80, posYpet - 90, 30, 30);
  }

  //flor 18 horas
  if (miHoja >= 18) {
    fill('yellowgreen');
    ellipse(posXpet + 175, posYpet - 90, 50, 30);
    ellipse(posXpet + 160, posYpet - 75, 30, 50);
    ellipse(posXpet + 160, posYpet - 105, 30, 50);
    ellipse(posXpet + 145, posYpet - 90, 50, 30);
    fill('gold');
    ellipse(posXpet + 160, posYpet - 90, 30, 30);
  }

  //flor 19 horas
  if (miHoja >= 19) {
    fill('green');
    ellipse(posXpet + 365, posYpet, 50, 30);
    ellipse(posXpet + 350, posYpet + 15, 30, 50);
    ellipse(posXpet + 350, posYpet - 15, 30, 50);
    ellipse(posXpet + 335, posYpet, 50, 30);
    fill('gold');
    ellipse(posXpet + 350, posYpet, 30, 30);
  }

  //flor 20 horas
  if (miHoja >= 20) {
    fill('yellowgreen');
    ellipse(posXpet + 445, posYpet, 50, 30);
    ellipse(posXpet + 430, posYpet + 15, 30, 50);
    ellipse(posXpet + 430, posYpet - 15, 30, 50);
    ellipse(posXpet + 415, posYpet, 50, 30);
    fill('gold');
    ellipse(posXpet + 430, posYpet, 30, 30);
  }

  //flor 21 horas
  if (miHoja >= 21) {
    fill('green');
    ellipse(posXpet + 525, posYpet, 50, 30);
    ellipse(posXpet + 510, posYpet + 15, 30, 50);
    ellipse(posXpet + 510, posYpet - 15, 30, 50);
    ellipse(posXpet + 495, posYpet, 50, 30);
    fill('gold');
    ellipse(posXpet + 510, posYpet, 30, 30);
  }

  //flor 22 horas
  if (miHoja >= 22) {
    fill('yellowgreen');
    ellipse(posXpet + 365, posYpet - 90, 50, 30);
    ellipse(posXpet + 350, posYpet - 75, 30, 50);
    ellipse(posXpet + 350, posYpet - 105, 30, 50);
    ellipse(posXpet + 335, posYpet - 90, 50, 30);
    fill('gold');
    ellipse(posXpet + 350, posYpet - 90, 30, 30);
  }

  //flor 23 horas
  if (miHoja >= 23) {
    fill('green');
    ellipse(posXpet + 445, posYpet - 90, 50, 30);
    ellipse(posXpet + 430, posYpet - 75, 30, 50);
    ellipse(posXpet + 430, posYpet - 105, 30, 50);
    ellipse(posXpet + 415, posYpet - 90, 50, 30);
    fill('gold');
    ellipse(posXpet + 430, posYpet - 90, 30, 30);
  }

  //flor 00 horas
  if (miHoja == 0) {
    fill('yellowgreen');
    ellipse(posXpet + 525, posYpet - 90, 50, 30);
    ellipse(posXpet + 510, posYpet - 75, 30, 50);
    ellipse(posXpet + 510, posYpet - 105, 30, 50);
    ellipse(posXpet + 495, posYpet - 90, 50, 30);
    fill('gold');
    ellipse(posXpet + 510, posYpet - 90, 30, 30);
  }

}