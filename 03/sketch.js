//naves invasoras
var navex1 = -200
var navey1 = -200
var navex2 = -200
var navey2 = -200
var navex3 = 200
var navey3 = -200
var navex4 = 2100
var navey4 = -200
var navex5 = 1600
var navey5 = -200

//personas
var x1 = 0
var y1 = 0
var x2 = 0
var y2 = 0
var x3 = 0
var y3 = 0
var x4 = 0
var y4 = 0
var pv1 = 2190
var pv2 = 1300
var pax1 = 1600
var pay1 = 1560
var xpc1 = 600
var xpc2 = 640
var xpc3 = 2000
var ypc1 = 1560

//invasores
var inv1x = 1600
var inv1y = 700
var inv2x = 800
var inv2y = 200
var inv3x = 200
var inv3y = 300
var inv4x = 2100
var inv4y = 500
var inv5x = 2120
var inv6x = 1130
var inv7x = 200
var inv8x = 300
var inv9x = 650
var inv10x = 2000
var inv11x = 800
var inv12x = 100
var inv13x = 200
var inv13y = 500
var inv14x = 800
var inv14y = 500
var inv15x = 2100
var inv15y = 1300
var inv16x = 2100
var inv16y = 1000
var invpy = 1560

//edificios
var xedi1 = 100;
var xedi2 = 0;
var yedi1 = 700
var yedi2 = 800

//ventanas
var xven1 = 420
var yven1 = 800
var anven1 = 100
var alven1 = 120

//tamaño personas
var xpc = 30
var ypc = 90
var xp = 30
var yp = 50

//tamaño edificios
var anedi1 = 500
var aledi1 = 1500
var anedi2 = 350
var aledi2 = 1700


function setup() {
  createCanvas(2550, 1650);
  background(0);
  frameRate(5);
}

function draw() {
  background(255, 255, 255);


  //cielo estrellado
  fill(0, 0, 0);
  rect(0, 0, width, height);

  for (var est1 = 0; est1 < width; est1 = est1 + 40) {
    for (var est2 = 0; est2 < height; est2 = est2 + 40) {
      fill(255);
      ellipse(est1, est2, 5, 5);
    }
  }
  for (var t1 = 0; t1 < width; t1 = t1 + 250) {
    for (var t2 = 0; t2 < height; t2 = t2 + 250) {
      fill(0);
      ellipse(t1, t2, 120, 120);

    }
  }

  //nave espacial 1
  fill(0, 0, 255);
  ellipse(navex1 + 1000, navey1, 300, 100)
  navex1 = navex1 + 60
  navey1 = navey1 + 40

  if (navex1 >= 600) {
    navex1 = 600;
  }
  if (navey1 >= 700) {
    navey1 = 700
  }

  //nave espacial 2
  fill(0, 0, 255);
  ellipse(navex2 + 500, navey2, 300, 100)
  navex2 = navex2 + 60
  navey2 = navey2 + 40

  if (navex2 >= 300) {
    navex2 = 300;
  }
  if (navey2 >= 200) {
    navey2 = 200
  }

  //nave espacial 3
  fill(0, 0, 255);
  ellipse(navex3, navey3, 300, 100)
  navex3 = navex3
  navey3 = navey3 + 40

  if (navex3 >= 200) {
    navex3 = 200;
  }
  if (navey3 >= 300) {
    navey3 = 300
  }

  //nave espacial 4
  fill(0, 0, 255);
  ellipse(navex4, navey4, 300, 100);
  navey4 = navey4 + 40

  if (navex4 >= 2100) {
    navex4 = 2100;
  }
  if (navey4 >= 500) {
    navey4 = 500
  }


  //edificio 2
  fill(170, 170, 170);
  rect(xedi1, yedi1, anedi1, aledi1)
  fill(0);
  rect(xven1, yven1, anven1, alven1);
  fill(204, 204, 0);
  rect(xven1, yven1 + 200, anven1, alven1);
  rect(xven1, yven1 + 400, anven1, alven1);
  fill(0);
  rect(xven1, yven1 + 600, anven1, alven1);


  //edificio1
  fill(220, 220, 220);
  rect(xedi2, yedi2, anedi2, aledi2)
  fill(204, 204, 0);
  rect(xven1 - 220, yven1 + 100, anven1, alven1);
  fill(0);
  rect(xven1 - 220, yven1 + 300, anven1, alven1);
  rect(xven1 - 220, yven1 + 500, anven1, alven1);
  rect(xven1 - 380, yven1 + 100, anven1, alven1);
  fill(255, 0, 0);
  rect(xven1 - 350, yven1 + 170, xp, yp);
  fill(0);
  rect(xven1 - 380, yven1 + 300, anven1, alven1);
  fill(204, 204, 0);
  rect(xven1 - 380, yven1 + 500, anven1, alven1);

  //edificio3
  fill(230, 230, 230);
  rect(xedi1 + 500, yedi1 - 250, anedi2, aledi2);
  fill(204, 204, 0);
  rect(xven1 + 300, yven1 - 300, anven1, alven1);
  fill(0);
  rect(xven1 + 300, yven1 - 100, anven1, alven1);
  rect(xven1 + 300, yven1 + 100, anven1, alven1);
  fill(204, 204, 0);
  rect(xven1 + 300, yven1 + 300, anven1, alven1);
  rect(xven1 + 300, yven1 + 500, anven1, alven1);

  //edificio 4
  fill(190, 190, 190);
  rect(xedi1 + 850, yedi1 + 50, anedi2, aledi2);
  fill(0);
  rect(xven1 + 750, yven1, anven1, alven1);
  rect(xven1 + 750, yven1 + 200, anven1, alven1);
  rect(xven1 + 750, yven1 + 400, anven1, alven1);
  rect(xven1 + 750, yven1 + 600, anven1, alven1);
  rect(xven1 + 550, yven1, anven1, alven1);
  fill(204, 204, 0);
  rect(xven1 + 550, yven1 + 200, anven1, alven1);
  fill(0);
  rect(xven1 + 550, yven1 + 400, anven1, alven1);
  rect(xven1 + 550, yven1 + 600, anven1, alven1);
  fill(255, 0, 0);
  rect(xven1 + 600, yven1 + 270, xp, yp);
  fill(255, 0, 0);
  rect(xven1 + 560, yven1 + 270, xp, yp);

  //edificio5
  fill(100, 100, 100);
  rect(xedi1 + 1200, yedi1 + 500, anedi1, aledi1);
  fill(0);
  rect(xven1 + 950, yven1 + 500, anven1, alven1);
  rect(xven1 + 950, yven1 + 700, anven1, alven1);
  rect(xven1 + 1150, yven1 + 500, anven1, alven1);
  rect(xven1 + 1150, yven1 + 700, anven1, alven1);

  // edificio6
  fill(170, 170, 170);
  rect(xedi1 + 1700, yedi1 + 100, anedi1, aledi1);
  fill(204, 204, 0);
  rect(xven1 + 1450, yven1 + 80, anven1, alven1);
  fill(0);
  rect(xven1 + 1450, yven1 + 250, anven1, alven1);
  rect(xven1 + 1450, yven1 + 420, anven1, alven1);
  rect(xven1 + 1450, yven1 + 590, anven1, alven1);
  rect(xven1 + 1700, yven1 + 80, anven1, alven1);
  fill(204, 204, 0)
  rect(xven1 + 1700, yven1 + 250, anven1, alven1);
  fill(0)
  rect(xven1 + 1700, yven1 + 420, anven1, alven1);
  rect(xven1 + 1700, yven1 + 590, anven1, alven1);
  fill(255, 0, 0);
  rect(xven1 + 1470, yven1 + 155, xp, yp);
  fill(255, 0, 0);
  rect(pv1, yven1 + 300, xp, yp);
  pv1 = pv1 - 5
  if (pv1 <= 2120) {
    pv1 = 2120;
  }

  //edificio7

  fill(210, 210, 210);
  rect(xedi1 + 2200, yedi1 - 100, anedi1, aledi1)
  fill(0);
  rect(xven1 + 1950, yven1 - 100, anven1, alven1);
  fill(204, 204, 0)
  rect(xven1 + 1950, yven1 + 100, anven1, alven1);
  fill(0);
  rect(xven1 + 1950, yven1 + 300, anven1, alven1);
  fill(204, 204, 0)
  rect(xven1 + 1950, yven1 + 500, anven1, alven1);


  //personajes rojos quietos
  fill(255, 0, 0);
  rect(xpc1, ypc1, xpc, ypc);
  rect(xpc2, ypc1, xpc, ypc);
  rect(pax1, pay1, xpc, ypc);
  rect(xpc3, ypc1, xpc, ypc);

  //personajes rojos movimiento

  rect(10 + x1, 1560 + y1, xpc, ypc);
  x1 = x1 + 2;
  rect(60 + x1, 1560 + y1, xpc, ypc);
  x1 = x1 + 5

  rect(700 + x2, 1560 + y2, xpc, ypc);
  x2 = x2 + 5
  rect(2300 + x3, 1560 + y3, xpc, ypc);
  x3 = x3 - 5;

  rect(2590 + x4, 1560 + y4, xpc, ypc);
  x4 = x4 - 2;
  rect(2550 + x4, 1560 + y4, xpc, ypc);
  x4 = x4 - 5

  //encendido ventanas
  if (frameCount > 15 && frameCount < 70) {
    fill(204, 204, 0);
    rect(xven1 + 1950, yven1 - 100, anven1, alven1);
    rect(xven1 + 1700, yven1 + 590, anven1, alven1);
    rect(xven1 - 220, yven1 + 300, anven1, alven1);
  }

  if (frameCount > 10 && frameCount < 70) {
    fill(204, 204, 0);
    rect(xven1 + 1700, yven1 + 80, anven1, alven1);
    rect(xven1 + 950, yven1 + 700, anven1, alven1);
    rect(xven1 + 1150, yven1 + 500, anven1, alven1);
    rect(xven1 + 750, yven1 + 200, anven1, alven1);
    rect(xven1 + 750, yven1 + 400, anven1, alven1);
  }

  if (frameCount > 12 && frameCount < 30) {
    fill(204, 204, 0);
    rect(xven1 + 750, yven1 + 600, anven1, alven1);
    rect(xven1 + 550, yven1, anven1, alven1);

  }

  if (frameCount > 18 && frameCount < 70) {
    fill(204, 204, 0);
    rect(xven1 + 950, yven1 + 500, anven1, alven1);

  }

  //apagon general
  if (frameCount > 24 && frameCount < 70) {
    fill(0);
    //edificio 2
    rect(xven1, yven1, anven1, alven1);
    rect(xven1, yven1 + 200, anven1, alven1);
    rect(xven1, yven1 + 400, anven1, alven1);
    rect(xven1, yven1 + 600, anven1, alven1);
    //edificio1
    rect(xven1 - 220, yven1 + 100, anven1, alven1);
    rect(xven1 - 220, yven1 + 300, anven1, alven1);
    rect(xven1 - 220, yven1 + 500, anven1, alven1);
    rect(xven1 - 380, yven1 + 100, anven1, alven1);
    rect(xven1 - 350, yven1 + 170, xp, yp);
    rect(xven1 - 380, yven1 + 300, anven1, alven1);
    rect(xven1 - 380, yven1 + 500, anven1, alven1);
    //edificio3
    rect(xven1 + 300, yven1 - 300, anven1, alven1);
    rect(xven1 + 300, yven1 - 100, anven1, alven1);
    rect(xven1 + 300, yven1 + 100, anven1, alven1);
    rect(xven1 + 300, yven1 + 300, anven1, alven1);
    rect(xven1 + 300, yven1 + 500, anven1, alven1);
    //edificio 4
    rect(xven1 + 750, yven1, anven1, alven1);
    rect(xven1 + 750, yven1 + 200, anven1, alven1);
    rect(xven1 + 750, yven1 + 400, anven1, alven1);
    rect(xven1 + 750, yven1 + 600, anven1, alven1);
    rect(xven1 + 550, yven1, anven1, alven1);
    rect(xven1 + 550, yven1 + 200, anven1, alven1);
    rect(xven1 + 550, yven1 + 400, anven1, alven1);
    rect(xven1 + 550, yven1 + 600, anven1, alven1);
    rect(xven1 + 600, yven1 + 270, xp, yp);
    rect(xven1 + 560, yven1 + 270, xp, yp);
    //edificio5
    rect(xven1 + 950, yven1 + 500, anven1, alven1);
    rect(xven1 + 950, yven1 + 700, anven1, alven1);
    rect(xven1 + 1150, yven1 + 500, anven1, alven1);
    rect(xven1 + 1150, yven1 + 700, anven1, alven1);
    // edificio6
    rect(xven1 + 1450, yven1 + 80, anven1, alven1);
    rect(xven1 + 1450, yven1 + 250, anven1, alven1);
    rect(xven1 + 1450, yven1 + 420, anven1, alven1);
    rect(xven1 + 1450, yven1 + 590, anven1, alven1);
    rect(xven1 + 1700, yven1 + 80, anven1, alven1);
    rect(xven1 + 1700, yven1 + 250, anven1, alven1);
    rect(xven1 + 1700, yven1 + 420, anven1, alven1);
    rect(xven1 + 1700, yven1 + 590, anven1, alven1);
    rect(xven1 + 1470, yven1 + 155, xp, yp);
    //edificio7
    rect(xven1 + 1950, yven1 - 100, anven1, alven1);
    rect(xven1 + 1950, yven1 + 100, anven1, alven1);
    rect(xven1 + 1950, yven1 + 300, anven1, alven1);
    rect(xven1 + 1950, yven1 + 500, anven1, alven1);

  }

  //Rayos nave
  //nave 1
  if (frameCount > 26 && frameCount < 50) {
    fill(0, 150, 255);
    triangle(1600, 700, 1550, 1650, 1700, 1650)
  }
  //nave 2
  if (frameCount > 26 && frameCount < 50) {
    fill(0, 150, 255);
    triangle(800, 200, 700, 1700, 800, 1700);
  }
  //nave 3
  if (frameCount > 26 && frameCount < 50) {
    fill(0, 150, 255);
    triangle(200, 300, 100, 1700, 300, 1700);
  }
  //nave 4
  if (frameCount > 26 && frameCount < 50) {
    fill(0, 150, 255);
    triangle(2100, 500, 2000, 1700, 2200, 1700);
  }

  //segunda entrada naves

  if (frameCount > 35 && frameCount < 70) {
    //nave espacial 5
    fill(0, 0, 255);
    ellipse(navex5, navey5, 800, 200)
    navey5 = navey5 + 10
    if (navex5 >= 1600) {
      navex5 = 1600;
      if (navey5 >= 200) {
        navey5 = 200
      }
    }
  }


  //Personajes invasores

  //nave 1
  if (frameCount > 27 && frameCount < 71) {
    fill(128, 0, 128);
    ellipse(inv1x, inv1y, xpc, ypc);
    inv1y = inv1y + 60
    if (inv1y > 1560) {
      inv1y = 1560;
    }
  }

  //nave 2
  if (frameCount > 27 && frameCount < 71) {
    fill(128, 0, 128);
    ellipse(inv3x, inv3y, xpc, ypc);
    inv3y = inv3y + 50
    if (inv3y > 1560) {
      inv3y = 1560;
    }
  }

  if (frameCount > 27 && frameCount < 71) {
    fill(128, 0, 128);
    ellipse(inv13x, inv13y, xpc, ypc);
    inv13y = inv13y + 50
    if (inv13y > 750) {
      inv13y = 750;
    }
  }

  //nave3
  if (frameCount > 27 && frameCount < 71) {
    fill(128, 0, 128);
    ellipse(inv4x, inv4y, xpc, ypc);
    inv4y = inv4y + 50
    if (inv4y > 750) {
      inv4y = 750;
    }
  }

  if (frameCount > 27 && frameCount < 71) {
    fill(128, 0, 128);
    ellipse(inv15x, inv15y, xpc, ypc);
    inv15y = inv15y + 50
    if (inv15y > 1560) {
      inv15y = 1560;
    }
  }

  if (frameCount > 27 && frameCount < 71) {
    fill(128, 0, 128);
    ellipse(inv16x, inv16y, xpc, ypc);
    inv16y = inv16y + 50
    if (inv16y > 1560) {
      inv16y = 1560;
    }
  }


  //nave 4
  if (frameCount > 27 && frameCount < 71) {
    fill(128, 0, 128);
    ellipse(inv2x, inv2y, xpc, ypc);
    inv2y = inv2y + 50
    if (inv2y > 1400) {
      inv2y = 1400;
    }
  }

  //nave 4
  if (frameCount > 27 && frameCount < 71) {
    fill(128, 0, 128);
    ellipse(inv14x, inv14y, xpc, ypc);
    inv14y = inv14y + 50
    if (inv14y > 1560) {
      inv14y = 1560;
    }
  }

  //invasores en tierra

  if (frameCount > 40 && frameCount < 71) {
    fill(128, 0, 128);
    ellipse(inv5x, invpy, xpc, ypc);
    inv5x = inv5x + 5
    ellipse(inv6x, invpy, xpc, ypc);
    inv6x = inv6x + 5
    ellipse(inv7x, invpy, xpc, ypc);
    inv7x = inv7x + 5
    ellipse(inv8x, invpy, xpc, ypc);
    inv8x = inv8x - 5
    ellipse(inv9x, invpy, xpc, ypc);
    inv9x = inv9x - 5
    ellipse(inv10x, invpy, xpc, ypc);
    inv10x = inv10x + 5
    ellipse(inv11x, invpy, xpc, ypc);
    inv11x = inv11x + 5
    ellipse(inv12x, invpy, xpc, ypc);
    inv12x = inv12x + 5

  }

  //Personajes corriendo
  if (frameCount > 24 && frameCount < 71) {
    fill(255, 0, 0);
    rect(10 + x1, 1560 + y1, xpc, ypc);
    x1 = x1 + 35;

    rect(40 + x1, 1560 + y1, xpc, ypc);
    x1 = x1 + 35

    rect(700 + x2, 1560 + y2, xpc, ypc);
    x2 = x2 + 355
    rect(2300 + x3, 1560 + y3, xpc, ypc);
    x3 = x3 - 35;

    rect(2590 + x4, 1560 + y4, xpc, ypc);
    x4 = x4 - 35;
    rect(2550 + x4, 1560 + y4, xpc, ypc);
    x4 = x4 - 35

    rect(xpc1, ypc1, xpc, ypc);
    xpc1 = xpc1 + 35

    rect(xpc2, ypc1, xpc, ypc);
    xpc2 = xpc2 - 45

    rect(xpc3, ypc1, xpc, ypc);
    xpc3 = xpc3 + 40

    rect(pax1, pay1, xpc, ypc);
    pax1 = pax1 + 40
  }

  if (frameCount > 68 && frameCount < 71) {
    rect(0, 0, width, height)
  }




//     if (frameCount < 70){
//       saveCanvas("Invasión Circular_" + frameCount, 'jpg');
//      }



}