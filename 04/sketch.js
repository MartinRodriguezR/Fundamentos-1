// botón herramienta dibujo
var posXbot1 = 30;
var posYbot1 = 10;
var tambot1 = 20;

var posXbot2 = 70
var posYbot2 = 20
var tambot2 = 20

var posXbot3 = 90
var posYbot3 = 10
var tambot3 = 20

var posXbot4 = 120
var posYbot4 = 10
var tambot4 = 20

var posXbot5 = 150
var posYbot5 = 10
var tambot5 = 20

var posXbot6 = 180
var posYbot6 = 10
var tambot6 = 20

var posXbot7 = 210
var posYbot7 = 10
var tambot7 = 20

var posXbot8 = 240
var posYbot8 = 10
var tambot8 = 20

var posXbot9 = 270
var posYbot9 = 10
var tambot9 = 20

var posXbot10 = 300
var posYbot10 = 10
var tambot10 = 20

var posXbot11 = 330
var posYbot11 = 10
var tambot11 = 20

var posXbot12 = 370
var posYbot12 = 10
var posX1bot12 = 360
var posY1bot12 = 20
var posX2bot12 = 370
var posY2bot12 = 30
var posX3bot12 = 380
var posY3bot12 = 20

//botón colores

var posXbotcol1 = 30
var posYbotcol1 = 50
var tambotcol1 = 20

var posXbotcol2 = 60
var posYbotcol2 = 50
var tambotcol2 = 20

var posXbotcol3 = 90
var posYbotcol3 = 50
var tambotcol3 = 20

var posXbotcol4 = 120
var posYbotcol4 = 50
var tambotcol4 = 20

var posXbotcol5 = 150
var posYbotcol5 = 50
var tambotcol5 = 20

var posXbotcol6 = 180
var posYbotcol6 = 50
var tambotcol6 = 20

var posXbotcol7 = 210
var posYbotcol7 = 50
var tambotcol7 = 20

var posXbotcol8 = 240
var posYbotcol8 = 50
var tambotcol8 = 20

var posXbotcol9 = 270
var posYbotcol9 = 50
var tambotcol9 = 20

var posXbotcol10 = 300
var posYbotcol10 = 50
var tambotcol10 = 20

var posXbotcol11 = 330
var posYbotcol11 = 50
var tambotcol11 = 20

var herramienta = 1
var miColor = 1


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {

  //caja opciones
  fill(255);
  rect(0, 0, windowWidth, 120);
  //botones herramientas dibujo
  //borrador
  fill(255)
  rect(posXbot1, posYbot1, tambot1, tambot1);
  //circulos
  ellipse(posXbot2, posYbot2, tambot2, tambot2);
  //linea libre
  rect(posXbot3, posYbot3, tambot3, tambot3);
  line(posXbot3, posYbot3, posXbot3 + tambot3, posYbot3 + tambot3)
  //casa
  rect(posXbot4, posYbot4, tambot4, tambot4);
  triangle(posXbot4 + 5, posYbot4 + 10, posXbot4 + 10, posYbot4 + 5, posXbot4 + 15, posYbot4 + 10);
  line(posXbot4 + 5, posYbot4 + 10, posXbot4 + 5, posYbot4 + 20);
  line(posXbot4 + 15, posYbot4 + 10, posXbot4 + 15, posYbot4 + 20);
  rect(posXbot4 + 8, posYbot4 + 14, 5, 6);
  //hexágono
  rect(posXbot5, posYbot5, tambot5, tambot5);
  beginShape();
  vertex(posXbot5 + 3, posYbot5 + 10);
  vertex(posXbot5 + 8, posYbot5 + 5);
  vertex(posXbot5 + 13, posYbot5 + 5);
  vertex(posXbot5 + 18, posYbot5 + 10);
  vertex(posXbot5 + 13, posYbot5 + 15);
  vertex(posXbot5 + 8, posYbot5 + 15);
  vertex(posXbot5 + 3, posYbot5 + 10);
  endShape();
  //estrella
  rect(posXbot6, posYbot6, tambot6, tambot6);
  beginShape();
  vertex(posXbot6 + 10, posYbot6);
  vertex(posXbot6 + 14, posYbot6 + 5);
  vertex(posXbot6 + 18, posYbot6 + 5);
  vertex(posXbot6 + 13, posYbot6 + 10);
  vertex(posXbot6 + 15, posYbot6 + 16);
  vertex(posXbot6 + 10, posYbot6 + 13);
  vertex(posXbot6 + 5, posYbot6 + 16);
  vertex(posXbot6 + 7, posYbot6 + 10);
  vertex(posXbot6 + 2, posYbot6 + 5);
  vertex(posXbot6 + 8, posYbot6 + 5);
  vertex(posXbot6 + 10, posYbot6);
  endShape();
  //flor
  rect(posXbot7, posYbot7, tambot7, tambot7);
  fill(0);
  ellipse(posXbot7 + 10, posYbot7 + 4, 2, 8);
  ellipse(posXbot7 + 10, posYbot7 + 15, 2, 8);
  ellipse(posXbot7 + 5, posYbot7 + 10, 8, 2);
  ellipse(posXbot7 + 15, posYbot7 + 10, 8, 2);
  fill(255);
  ellipse(posXbot7 + 10, posYbot7 + 10, 5, 5)
  //puntos
  rect(posXbot8, posYbot8, tambot8, tambot8);
  ellipse(posXbot8 + 3, posYbot8 + 10, 2, 2);
  ellipse(posXbot8 + 8, posYbot8 + 10, 2, 2);
  ellipse(posXbot8 + 13, posYbot8 + 10, 2, 2);
  ellipse(posXbot8 + 5, posYbot8 + 15, 2, 2);
  ellipse(posXbot8 + 10, posYbot8 + 15, 2, 2);
  ellipse(posXbot8 + 15, posYbot8 + 15, 2, 2);
  //triangulo
  rect(posXbot9, posYbot9, tambot9, tambot9);
  triangle(posXbot9 + 2, posYbot9 + 20, posXbot9 + 10, posYbot9 + 20, posXbot9 + 10, posYbot9);
  //cara
  rect(posXbot10, posYbot10, tambot10, tambot10);
  fill(0);
    rect(posXbot10+3, posYbot10, 5, 10);
      rect(posXbot10+12, posYbot10, 5, 10);
      rect(posXbot10+3, posYbot10+14, 12, 5);
  //lineas 2
  fill(255);
  rect(posXbot11, posYbot11, tambot11, tambot11);
  line(posXbot11+3, posYbot11+6, posXbot11 + 13, posYbot3 + 6);
  line(posXbot11+4, posYbot11+4, posXbot11+4, posYbot3 + 15);
  line(posXbot11+10, posYbot11+4, posXbot11+10, posYbot3 + 15);
  //rombo
  fill(0);
  quad(posXbot12, posYbot12, posX1bot12, posY1bot12, posX2bot12, posY2bot12,
    posX3bot12, posY3bot12);

  //botones colores
  fill('black');
  rect(posXbotcol1, posYbotcol1, tambotcol1, tambotcol1);
  fill('silver');
  rect(posXbotcol2, posYbotcol2, tambotcol2, tambotcol2);
  fill('red');
  rect(posXbotcol3, posYbotcol3, tambotcol3, tambotcol3);
  fill('gold');
  rect(posXbotcol4, posYbotcol4, tambotcol4, tambotcol4);
  fill('Darkorange');
  rect(posXbotcol5, posYbotcol5, tambotcol5, tambotcol5);
  fill('green');
  rect(posXbotcol6, posYbotcol6, tambotcol6, tambotcol6);
  fill('greenyellow');
  rect(posXbotcol7, posYbotcol7, tambotcol7, tambotcol7);
  fill('blue');
  rect(posXbotcol8, posYbotcol8, tambotcol8, tambotcol8);
  fill('blueviolet');
  rect(posXbotcol9, posYbotcol9, tambotcol9, tambotcol9);
  fill('fuchsia');
  rect(posXbotcol10, posYbotcol10, tambotcol10, tambotcol10);
  fill(255);
  rect(posXbotcol11, posYbotcol11, tambotcol11, tambotcol11);

  //colores
  if (mouseIsPressed == true) {
    if (miColor == 1) {
      fill('black');

    }
    if (miColor == 2) {
      fill('silver');

    }
    if (miColor == 3) {
      fill('red');

    }
    if (miColor == 4) {
      fill('gold');

    }
    if (miColor == 5) {
      fill('Darkorange');
    }
    if (miColor == 6) {
      fill('green');
    }
    if (miColor == 7) {
      fill('greenyellow');
    }
    if (miColor == 8) {
      fill('blue');
    }
    if (miColor == 9) {
      fill('blueviolet');
    }
    if (miColor == 10) {
      fill('fuchsia');
    }
    if (miColor == 11) {
      fill(255);
    }
  }

  //herramientas de dibujo
  if (mouseIsPressed == true) {
    if (herramienta == 1) {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
    if (herramienta == 2) {
      noStroke();
      ellipse(mouseX, mouseY, 30, 30);
      stroke(0, 0, 0);
    }
    if (herramienta == 3) {
      triangle(mouseX, mouseY, mouseX + 30, mouseY - 30, mouseX + 60, mouseY);
      line(mouseX + 60, mouseY, mouseX + 60, mouseY + 60);
      line(mouseX + 60, mouseY + 60, mouseX, mouseY + 60);
      line(mouseX, mouseY + 60, mouseX + 60, mouseY + 60);
      line(mouseX, mouseY + 60, mouseX, mouseY);
      rect(mouseX + 20, mouseY + 30, 20, 30);

    }
    if (herramienta == 4) {
      noStroke();
      beginShape();
      vertex(mouseX, mouseY);
      vertex(mouseX + 40, mouseY);
      vertex(mouseX + 60, mouseY + 20);
      vertex(mouseX + 40, mouseY + 40);
      vertex(mouseX, mouseY + 40);
      vertex(mouseX - 20, mouseY + 20);
      vertex(mouseX, mouseY);
      endShape();
      stroke(0, 0, 0);
    }
    if (herramienta == 5) {
      noStroke();
      beginShape();
      vertex(mouseX, mouseY);
      vertex(mouseX + 10, mouseY + 20);
      vertex(mouseX + 30, mouseY + 20);
      vertex(mouseX + 15, mouseY + 40);
      vertex(mouseX + 25, mouseY + 60);
      vertex(mouseX, mouseY + 50);
      vertex(mouseX - 25, mouseY + 60);
      vertex(mouseX - 15, mouseY + 40);
      vertex(mouseX - 30, mouseY + 20);
      vertex(mouseX - 10, mouseY + 20);
      vertex(mouseX, mouseY);
      endShape();
      stroke(0, 0, 0);
    }
    if (herramienta == 6) {
      ellipse(mouseX + 30, mouseY, 60, 30);
      ellipse(mouseX, mouseY + 30, 30, 60);
      ellipse(mouseX, mouseY - 30, 30, 60);
      ellipse(mouseX - 30, mouseY, 60, 30);
      fill('gold');
      ellipse(mouseX, mouseY, 30, 30);


    }
    if (herramienta == 7) {
      noStroke();
      ellipse(mouseX, mouseY, 5, 5);
      ellipse(mouseX + 30, mouseY, 5, 5);
      ellipse(mouseX + 60, mouseY, 5, 5);
      ellipse(mouseX + 90, mouseY, 5, 5);
      ellipse(mouseX + 15, mouseY + 30, 5, 5);
      ellipse(mouseX + 45, mouseY + 30, 5, 5);
      ellipse(mouseX + 75, mouseY + 30, 5, 5);
      stroke(0, 0, 0);
    }
    if (herramienta == 8) {
      noStroke();
      triangle(mouseX, mouseY, mouseX + 50, mouseY - 50, mouseX + 50, mouseY);
      stroke(0, 0, 0);
    }
    if (herramienta == 9) {
      noStroke();
      rect(mouseX, mouseY, 10, 30);
      rect(mouseX + 20, mouseY, 10, 30);
      rect(mouseX - 10, mouseY + 40, 50, 10);
      arc(mouseX + 15, mouseY - 10, 78, 73, PI, TWO_PI);
      arc(mouseX - 20, mouseY - 20, 78, 73, HALF_PI, TWO_PI);
      arc(mouseX + 50, mouseY - 20, 78, 73, PI, HALF_PI);
      stroke(0, 0, 0);
    }
    if (herramienta == 10) {
      line (mouseX,mouseY, 100,400);
      line(mouseX, mouseY, 450,220);
      line(mouseX, mouseY, 400,200);
    	line (mouseX,mouseY, 320,500);  
          
    }
    if (herramienta == 11) {
      noStroke();
      beginShape();
      vertex(mouseX, mouseY);
      vertex(mouseX + 15, mouseY + 20);
      vertex(mouseX, mouseY + 40);
      vertex(mouseX - 15, mouseY + 20);
      endShape();
      stroke(0, 0, 0);
    }

    //definición función herramienta en botones 
    if (mouseIsPressed == true) {
      if (mouseX > posXbot1 && mouseX < posXbot1 + tambot1 && mouseY > posYbot1 && mouseY < posYbot1 + tambot1) {
        background(255);
      }
      if (mouseX > posXbot2 && mouseX < posXbot2 + tambot2 && mouseY > posYbot2 && mouseY < posYbot2 + tambot2) {
        herramienta = 2;
      }
      if (mouseX > posXbot3 && mouseX < posXbot3 + tambot3 && mouseY > posYbot3 && mouseY < posYbot3 + tambot3) {
        herramienta = 1;
      }

      if (mouseX > posXbot4 && mouseX < posXbot4 + tambot4 && mouseY > posYbot4 && mouseY < posYbot4 + tambot4) {
        herramienta = 3;
      }

      if (mouseX > posXbot5 && mouseX < posXbot5 + tambot5 && mouseY > posYbot5 && mouseY < posYbot5 + tambot5) {
        herramienta = 4;
      }

      if (mouseX > posXbot6 && mouseX < posXbot6 + tambot6 && mouseY > posYbot6 && mouseY < posYbot6 + tambot6) {
        herramienta = 5;
      }

      if (mouseX > posXbot7 && mouseX < posXbot7 + tambot7 && mouseY > posYbot7 && mouseY < posYbot7 + tambot7) {
        herramienta = 6;
      }

      if (mouseX > posXbot8 && mouseX < posXbot8 + tambot8 && mouseY > posYbot8 && mouseY < posYbot8 + tambot8) {
        herramienta = 7;
      }

      if (mouseX > posXbot9 && mouseX < posXbot9 + tambot9 && mouseY > posYbot9 && mouseY < posYbot9 + tambot9) {
        herramienta = 8;
      }

      if (mouseX > posXbot10 && mouseX < posXbot10 + tambot10 && mouseY > posYbot10 && mouseY < posYbot10 + tambot10) {
        herramienta = 9;
      }

      if (mouseX > posXbot11 && mouseX < posXbot11 + tambot11 && mouseY > posYbot11 && mouseY < posYbot11 + tambot11) {
        herramienta = 10;
      }
      if (mouseX > posXbot12 && mouseX < posXbot12 + 10 && mouseY > posYbot12 && mouseY < posYbot12 + 20) {
        herramienta = 11;
      }

    }

    //definición colores en botones 

    if (mouseIsPressed == true) {
      if (mouseX > posXbotcol1 && mouseX < posXbotcol1 + tambotcol1 && mouseY > posYbotcol1 && mouseY < posYbotcol1 + tambotcol1) {
        miColor = 1;
      }
      if (mouseX > posXbotcol2 && mouseX < posXbotcol2 + tambotcol2 && mouseY > posYbotcol2 && mouseY < posYbotcol2 + tambotcol2) {
        miColor = 2;
      }
      if (mouseX > posXbotcol3 && mouseX < posXbotcol3 + tambotcol3 && mouseY > posYbotcol3 && mouseY < posYbotcol3 + tambotcol3) {
        miColor = 3;
      }
      if (mouseX > posXbotcol4 && mouseX < posXbotcol4 + tambotcol4 && mouseY > posYbotcol4 && mouseY < posYbotcol4 + tambotcol4) {
        miColor = 4;
      }

      if (mouseX > posXbotcol5 && mouseX < posXbotcol5 + tambotcol5 && mouseY > posYbotcol5 && mouseY < posYbotcol5 + tambotcol5) {
        miColor = 5;
      }

      if (mouseX > posXbotcol6 && mouseX < posXbotcol6 + tambotcol6 && mouseY > posYbotcol6 && mouseY < posYbotcol6 + tambotcol6) {
        miColor = 6;
      }

      if (mouseX > posXbotcol7 && mouseX < posXbotcol7 + tambotcol7 && mouseY > posYbotcol7 && mouseY < posYbotcol7 + tambotcol7) {
        miColor = 7;
      }
      if (mouseX > posXbotcol8 && mouseX < posXbotcol8 + tambotcol8 && mouseY > posYbotcol8 && mouseY < posYbotcol8 + tambotcol8) {
        miColor = 8;
      }

      if (mouseX > posXbotcol9 && mouseX < posXbotcol9 + tambotcol9 && mouseY > posYbotcol9 && mouseY < posYbotcol9 + tambotcol9) {
        miColor = 9;
      }

      if (mouseX > posXbotcol10 && mouseX < posXbotcol10 + tambotcol10 && mouseY > posYbotcol10 && mouseY < posYbotcol10 + tambotcol10) {
        miColor = 10;
      }

      if (mouseX > posXbotcol11 && mouseX < posXbotcol11 + tambotcol11 && mouseY > posYbotcol11 && mouseY < posYbotcol11 + tambotcol11) {
        miColor = 11;
      }
    }

  }
}