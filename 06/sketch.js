var miFoto1;
var miFoto2;
var miFoto3;
var mig0;
var mig2;
var mig4;
var mig5;
var mig6;
var mig7;
var h1;
var h2;
var h3;
var h4;
var h5;
var h6;
var h7;
var h8;
var h9;
var h10;
var h11;
var h12;
var h13;
var h14;
var h15;
var h16;
var h17;
var h18;
var h18;
var h19;
var h20;
var h21;
var h22;
var h23;
var h24;
var h25;
var h26;
var h27;
var h28;
var h29;
var h30;


var miFuenteKnewave;
var miCancion;
var anguloGrados = 0
var miSegundo;
var posXpet = 40
var posYpet = 350


var miAmplitud;

var miMicrofono;

function preload() {
  miFoto1 = loadImage('assets/fractal.jpg');
  miFoto2 = loadImage('assets/fractal2.jpg');
  miFoto3 = loadImage('assets/bycicle.jpg');
  mig0 = loadImage('assets/0.gif');
  mig2 = loadImage('assets/2.gif');
  mig4 = loadImage('assets/4.gif');
  mig5 = loadImage('assets/5.gif');
  mig6 = loadImage('assets/6.gif');
  mig7 = loadImage('assets/giphy.gif');
  h1 = loadImage('assets/h1.gif');
  h2 = loadImage('assets/h2.gif');
  h3 = loadImage('assets/h3.gif');
  h4 = loadImage('assets/h4.gif');
  h5 = loadImage('assets/h5.gif');
  h6 = loadImage('assets/h6.gif');
  h7 = loadImage('assets/h7.gif');
  h8 = loadImage('assets/h8.gif');
  h9 = loadImage('assets/h9.gif');
  h10 = loadImage('assets/h10.gif');
  h11 = loadImage('assets/h11.gif');
  h12 = loadImage('assets/h12.gif');
  h13 = loadImage('assets/h13.gif');
  h14 = loadImage('assets/h14.gif');
  h15 = loadImage('assets/h15.gif');
  h16 = loadImage('assets/h16.gif');
  h17 = loadImage('assets/h17.gif');
  h18 = loadImage('assets/h18.gif');
  h19 = loadImage('assets/h19.gif');
  h20 = loadImage('assets/h20.gif');
  h21 = loadImage('assets/h21.gif');
  h22 = loadImage('assets/h22.gif');
  h23 = loadImage('assets/h23.gif');
  h24 = loadImage('assets/h24.gif');
  h25 = loadImage('assets/h25.gif');
  h26 = loadImage('assets/h26.gif');
  h27 = loadImage('assets/h27.gif');
  h28 = loadImage('assets/h28.gif');
  h29 = loadImage('assets/h29.gif');
  h30 = loadImage('assets/h30.gif');
  miCancion = loadSound('assets/pixies.mp3');
}

function setup() {
  createCanvas(400, 400);
  textFont("knewave");
  textSize(25);

  miAmplitud = new p5.Amplitude();
  miAmplitud.setInput(miCancion);

  miMicrofono = new p5.AudioIn();
  miMicrofono.start();
}

function draw() {
  var miSegundo = second();

  if (miCancion.isPlaying() == false) {
    //miCancionsita.play();
    var tTotal = miCancion.duration();
    //miCancionsita.jump(tTotal/2);
    miCancion.play();
  }

  var miVol = map(mouseY, height, 0, 0, 1);
  miCancion.setVolume(miVol);

  var miPan = map(mouseX, 0, width, -1, 1);
  miCancion.pan(miPan);

  // var miVel = map(mouseX, 0, width, -1, 1);
  // miCancion.rate(miVel);

  background(0);

  // papeles inicio canción

  if (miCancion.currentTime() > 0) {
    image(miFoto3, 0, 0, 70, 70);
  }

  if (miCancion.currentTime() > 1) {
    image(miFoto3, 70, 30, 70, 70);
  }

  if (miCancion.currentTime() > 2) {
    image(miFoto3, 140, 60, 70, 70);
  }

  if (miCancion.currentTime() > 3) {
    image(miFoto3, 210, 90, 70, 70);
  }

  if (miCancion.currentTime() > 4) {
    image(miFoto3, 280, 120, 70, 70);
  }

  if (miCancion.currentTime() > 5) {
    image(miFoto3, 350, 150, 70, 70);
  }

  if (miCancion.currentTime() > 6) {
    image(miFoto3, 280, 180, 70, 70);
  }

  if (miCancion.currentTime() > 7) {
    image(miFoto3, 210, 210, 70, 70);
  }

  if (miCancion.currentTime() > 8) {
    image(miFoto3, 140, 240, 70, 70);
  }

  if (miCancion.currentTime() > 9) {
    image(miFoto3, 70, 270, 70, 70);
  }

  if (miCancion.currentTime() > 10) {
    image(miFoto3, 0, 300, 70, 70);
  }

  //   texto inicio

  if (miCancion.currentTime() > 1 && miCancion.currentTime() < 2) {
    fill(255);
    textSize(50);
    text("Loading...", 180, 380);
  }

  if (miCancion.currentTime() > 3 && miCancion.currentTime() < 4) {
    fill(255);
    textSize(50);
    text("Loading...", 180, 380);
  }

  if (miCancion.currentTime() > 5 && miCancion.currentTime() < 6) {
    fill(255);
    textSize(50);
    text("Loading...", 180, 380);
  }

  if (miCancion.currentTime() > 7 && miCancion.currentTime() < 8) {
    fill(255);
    textSize(50);
    text("Loading...", 180, 380);
  }


 
  if (miCancion.currentTime() > 9 && miCancion.currentTime() < 10) {
    fill(255);
    textSize(50);
    text("Loading...", 180, 380);
  }

  if (miCancion.currentTime() > 11 && miCancion.currentTime() < 12) {
    fill(255);
    textSize(50);
    text("Loading...", 180, 380);
  }

 if (miCancion.currentTime() > 12.5 && miCancion.currentTime() < 14) {
  fill (0);
   rect (0,0,width, height);
 }
  
   if (miCancion.currentTime() > 14 && miCancion.currentTime() < 16) {
  fill ('red');
   rect (0,0,width, height);
 }
  
   if (miCancion.currentTime() > 16 && miCancion.currentTime() < 18) {
  fill ('darkorange');
   rect (0,0,width, height);
 }
  
   if (miCancion.currentTime() > 18 && miCancion.currentTime() < 20) {
  fill ('gold');
   rect (0,0,width, height);
 }
  
     if (miCancion.currentTime() > 20 && miCancion.currentTime() < 22) {
  fill ('pink');
   rect (0,0,width, height);
 }
  
     if (miCancion.currentTime() > 22 && miCancion.currentTime() < 25) {
  fill (255);
   rect (0,0,width, height);
 }
  
  //conejo

  if (miCancion.currentTime() > 25 && miCancion.currentTime() < 50) {
    image(mig0, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 25.5 && miCancion.currentTime() < 50) {
    image(mig2, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 26 && miCancion.currentTime() < 50) {
    image(mig4, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 26.5 && miCancion.currentTime() < 50) {
    image(mig6, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 27 && miCancion.currentTime() < 50) {
    image(mig7, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 27.5 && miCancion.currentTime() < 50) {
    image(mig4, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 28 && miCancion.currentTime() < 50) {
    image(mig6, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 28.5 && miCancion.currentTime() < 50) {
    image(mig7, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 29 && miCancion.currentTime() < 50) {
    image(mig4, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 29.5 && miCancion.currentTime() < 50) {
    image(mig6, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 30 && miCancion.currentTime() < 50) {
    image(mig7, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 30.5 && miCancion.currentTime() < 50) {
    image(mig0, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 31 && miCancion.currentTime() < 50) {
    image(mig2, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 31.5 && miCancion.currentTime() < 50) {
    image(mig4, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 32 && miCancion.currentTime() < 50) {
    image(mig6, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 32.5 && miCancion.currentTime() < 50) {
    image(mig7, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 33 && miCancion.currentTime() < 50) {
    image(mig4, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 33.5 && miCancion.currentTime() < 50) {
    image(mig6, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 34 && miCancion.currentTime() < 50) {
    image(mig7, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 34.5 && miCancion.currentTime() < 50) {
    image(mig4, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 35 && miCancion.currentTime() < 50) {
    image(mig6, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 35.5 && miCancion.currentTime() < 50) {
    image(mig7, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 36 && miCancion.currentTime() < 50) {
    image(mig4, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 36.5 && miCancion.currentTime() < 50) {
    image(mig6, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 37 && miCancion.currentTime() < 50) {
    image(mig7, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 37.5 && miCancion.currentTime() < 50) {
    image(mig4, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 38 && miCancion.currentTime() < 50) {
    image(mig6, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 38.5 && miCancion.currentTime() < 50) {
    image(mig7, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 39 && miCancion.currentTime() < 50) {
    image(mig4, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 39.5 && miCancion.currentTime() < 50) {
    image(mig6, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 40 && miCancion.currentTime() < 50) {
    image(mig7, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 40.5 && miCancion.currentTime() < 50) {
    image(mig4, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 41 && miCancion.currentTime() < 50) {
    image(mig6, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 41.5 && miCancion.currentTime() < 50) {
    image(mig7, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 42 && miCancion.currentTime() < 50) {
    image(mig4, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 42.5 && miCancion.currentTime() < 50) {
    image(mig6, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 43 && miCancion.currentTime() < 50) {
    image(mig7, 0, 0, width, height);
  }

  //hueco

  if (miCancion.currentTime() > 43.5) {
    image(h1, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 44) {
    image(h2, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 44.5) {
    image(h3, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 45) {
    image(h4, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 45.5) {
    image(h5, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 46) {
    image(h6, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 46.5) {
    image(h7, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 47) {
    image(h8, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 47.5) {
    image(h9, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 48) {
    image(h10, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 48.5) {
    image(h11, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 49) {
    image(h12, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 49.5) {
    image(h13, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 50) {
    image(h14, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 50.5) {
    image(h15, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 51) {
    image(h16, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 51.5) {
    image(h17, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 52) {
    image(h18, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 52.5) {
    image(h19, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 53) {
    image(h20, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 53.5) {
    image(h21, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 54) {
    image(h22, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 54.5) {
    image(h23, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 55) {
    image(h24, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 55.5) {
    image(h25, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 56) {
    image(h26, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 56.5) {
    image(h27, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 57) {
    image(h28, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 57.5) {
    image(h29, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 58) {
    image(h30, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 58.5) {
    image(h1, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 59) {
    image(h2, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 59.5) {
    image(h3, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 60) {
    image(h4, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 60.5) {
    image(h5, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 61) {
    image(h6, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 61.5) {
    image(h7, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 62) {
    image(h8, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 62.5) {
    image(h9, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 63) {
    image(h10, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 63.5) {
    image(h11, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 64) {
    image(h12, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 64.5) {
    image(h13, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 65) {
    image(h14, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 65.5) {
    image(h15, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 66) {
    image(h16, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 66.5) {
    image(h17, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 67) {
    image(h18, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 67.5) {
    image(h19, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 68) {
    image(h20, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 68.5) {
    image(h21, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 69) {
    image(h22, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 69.5) {
    image(h23, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 70) {
    image(h24, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 70.5) {
    image(h25, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 71) {
    image(h26, 0, 0, width, height);
  }
  if (miCancion.currentTime() > 71.5) {
    image(h27, 0, 0, width, height);
  }

     // imagen niño
  if (miCancion.currentTime() > 90 && miCancion.currentTime() < 105) {
    image(miFoto2, 0, 0, width, height);
  }
  
  // papeles final canción
  
   if (miCancion.currentTime() > 105) {
     fill (0)
    rect(0, 0, width, height);
  }

  if (miCancion.currentTime() > 106) {
    image(miFoto3, 0, 0, 70, 70);
  }

  if (miCancion.currentTime() > 107) {
    image(miFoto3, 70, 30, 70, 70);
  }

  if (miCancion.currentTime() > 108) {
    image(miFoto3, 140, 60, 70, 70);
  }

  if (miCancion.currentTime() > 109) {
    image(miFoto3, 210, 90, 70, 70);
  }

  if (miCancion.currentTime() > 110) {
    image(miFoto3, 280, 120, 70, 70);
  }

  if (miCancion.currentTime() > 111) {
    image(miFoto3, 350, 150, 70, 70);
  }

  if (miCancion.currentTime() > 112) {
    image(miFoto3, 280, 180, 70, 70);
  }

  if (miCancion.currentTime() > 113) {
    image(miFoto3, 210, 210, 70, 70);
  }

  if (miCancion.currentTime() > 114) {
    image(miFoto3, 140, 240, 70, 70);
  }

  if (miCancion.currentTime() > 115) {
    image(miFoto3, 70, 270, 70, 70);
  }

  if (miCancion.currentTime() > 116) {
    image(miFoto3, 0, 300, 70, 70);
  }

  //   texto final

  if (miCancion.currentTime() > 105 && miCancion.currentTime() < 107) {
    fill(255);
    textSize(50);
    text("Loading...", 180, 380);
  }

  if (miCancion.currentTime() > 108 && miCancion.currentTime() < 109) {
    fill(255);
    textSize(50);
    text("Loading...", 180, 380);
  }

  if (miCancion.currentTime() > 110 && miCancion.currentTime() < 111) {
    fill(255);
    textSize(50);
    text("Loading...", 180, 380);
  }

  if (miCancion.currentTime() > 112 && miCancion.currentTime() < 113) {
    fill(255);
    textSize(50);
    text("Loading...", 180, 380);
  }
 
  if (miCancion.currentTime() > 114 && miCancion.currentTime() < 115) {
    fill(255);
    textSize(50);
    text("Loading...", 180, 380);
  }

  if (miCancion.currentTime() > 116 && miCancion.currentTime() < 117) {
    fill(255);
    textSize(50);
    text("Loading...", 180, 380);
  }
  
  //fondo mar
  if (miCancion.currentTime() > 72 && miCancion.currentTime() < 90) {
    fill(0, 0, 255)
    rect(0, 0, width, height / 2);
    fill('aqua')
    rect(0, height / 2, width, height / 2);
    //Sol
  push();
    var sol = map(miSegundo, 0, 59, 0, width);
    translate(sol, 0);
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
    pop();
  //Pescado 1
  push();
     var pez1 = map(miSegundo, 0, 59, 0, width);
    translate(pez1, 0);
    fill('red');
    ellipse(-10, 250, 80, 40);
    fill('brown');
    triangle(-50, 250, -70, 280, -70, 220);
     //Pescado 2
      var pez1 = map(miSegundo, 0, 59, 0, width);
    translate(pez1, 0);
    fill('yellow');
    ellipse(20, 300, 80, 40);
    fill('brown');
    triangle(-20, 300, -40, 330, -40, 270);
    //Pescado 3
      var pez1 = map(miSegundo, 0, 59, 0, width);
    translate(pez1, 0);
    fill('grey');
    ellipse(0, 320, 80, 40);
    fill('brown');
    triangle(-40, 320, -60, 350, -60, 290);
    pop();
  //Pescado 4
     fill('purple');
    ellipse(40, 230, 80, 40);
    fill('brown');
    triangle(10, 230, -10, 260, -10, 200);
    //Pescado 5
    fill('red');
    ellipse(250, 360, 80, 40);
    fill('brown');
    triangle(220, 360, 200, 390, 200, 330);
    //mata bajo el mar 1
    fill('green');
    ellipse(posXpet + 15, posYpet, 50, 30);
    ellipse(posXpet, posYpet + 15, 30, 50);
    ellipse(posXpet, posYpet - 15, 30, 50);
    ellipse(posXpet - 15, posYpet, 50, 30);
    fill('gold');
    ellipse(posXpet, posYpet, 30, 30);
    //mata bajo el mar 2
    fill('yellowgreen');
    ellipse(posXpet + 365, posYpet, 50, 30);
    ellipse(posXpet + 350, posYpet + 15, 30, 50);
    ellipse(posXpet + 350, posYpet - 15, 30, 50);
    ellipse(posXpet + 335, posYpet, 50, 30);
    fill('gold');
    ellipse(posXpet + 350, posYpet, 30, 30);
  }

  //   texto intermedio
  push();
  if (miCancion.currentTime() > 72 && miCancion.currentTime() < 105) {
    translate(width / 4, height / 4);
    var anguloRadianes = radians(anguloGrados);
    rotate(anguloRadianes);
    fill(0);
    text("Where", 0, 0);
    anguloGrados = anguloGrados + 1;
  }
  pop();

  push();
  if (miCancion.currentTime() > 72 && miCancion.currentTime() < 105) {
    translate(width / 2, height / 2);
    var anguloRadianes = radians(anguloGrados);
    rotate(anguloRadianes);
    fill(0);
    text("is my", 0, 0);
    anguloGrados = anguloGrados + 1;
  }
  pop();

  push();
  if (miCancion.currentTime() > 72 && miCancion.currentTime() < 105) {
    translate(width / 2 + 130, height / 2 + 130);
    var anguloRadianes = radians(anguloGrados);
    rotate(anguloRadianes);
    fill(0);
    text("mind?", 0, 0);
    anguloGrados = anguloGrados + 1;
  }
  pop();


  //Circulo quieto
  if (miCancion.currentTime() > 0 && miCancion.currentTime() < 25 ||
    miCancion.currentTime() > 44 && miCancion.currentTime() < 71.5) {
    var miTamano = map(miAmplitud.getLevel(), 0, 1, 0, 400);
    fill(255, 0, 0);
    ellipse(width / 2, height / 2, miTamano, miTamano);
    if (miTamano > 100) {
      for (var i = 0; i < 400; i = i + 1) {
        var posX = random(0, width);
        var posY = random(0, height);
        ellipse(posX, posY, 30, 30);
      }
    }
  }

  // circulos aleatorios
  if (miCancion.currentTime() > 12.5 && miCancion.currentTime() < 25) {
    var miTamano = map(miAmplitud.getLevel(), 0, 1, 0, 500);
    fill(0, 100, 220);
    stroke(0);
    ellipse(width / 2, 540, miTamano, miTamano)
    if (miTamano > 10) {
      for (var i = 0; i < miTamano; i = i + 1) {
        var posX = random(0, width);
        var posY = random(0, height);
        stroke(255);
        ellipse(posX, posY, 50, 50);
      }
    }
  }

  if (miCancion.currentTime() > 70 && miCancion.currentTime() < 73) {
    var miTamano2 = map(miAmplitud.getLevel(), 0, 1, 0, 500);
    fill(0, 100, 220);
    stroke(0);
    ellipse(width / 2, 540, miTamano2, miTamano2)
    if (miTamano2 > 10) {
      for (var i = 0; i < miTamano2; i = i + 1) {
        var posX = random(0, width);
        var posY = random(0, height);
        stroke(255);
        ellipse(posX, posY, 50, 50);
      }
    }
  }

  if (miCancion.currentTime() > 0 && miCancion.currentTime() < 25 ||
    miCancion.currentTime() > 44 && miCancion.currentTime() < 71.5) {
    var miTamanoMic = map(miMicrofono.getLevel(), 0, 1, 0, 400);
    ellipse(width / 2, height / 2, miTamanoMic, miTamanoMic);
  }
  if (miCancion.currentTime() > 116) {
      miCancion.stop();
  }
}