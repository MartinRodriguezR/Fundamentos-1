//SONIDOS
var GUN;
var REWIND;
var MARIMBA;

//INTRO MAPA
var m01
var m02
var m03
var m04
var m05
var m06
var REWIND
var m07
var m08
var m09
var m10
var m11
var m12
var m13
var m14
var m15
var m16
var m17
var m18
var m19
var m20
var m21
var m22
var m23
var m24
var m25
var m26
var m27
var m28
var m29
var m30
var m31
var m32
var m33
var m34
var m35
var m36
var m52
var m53
var m37
var m38
var m39
var m40
var m41
var m42
var m43
var m44
var m45
var m46
var m47
var m48
var m49
var m50
var m51

function preload() {

  m01 = loadImage('Assets/01.jpeg');
  m02 = loadImage('Assets/02.jpeg');
  m03 = loadImage('Assets/03.jpeg');
  m04 = loadImage('Assets/04.jpeg');
  m05 = loadImage('Assets/05.jpeg');
  m06 = loadImage('Assets/06.jpeg');

  m07 = loadImage('Assets/07.jpeg');
  m08 = loadImage('Assets/08.jpeg');
  m09 = loadImage('Assets/09.jpeg');
  m10 = loadImage('Assets/10.jpeg');
  m11 = loadImage('Assets/11.jpeg');
  m12 = loadImage('Assets/12.jpeg');

  m13 = loadImage('Assets/13.jpeg');
  m14 = loadImage('Assets/14.jpeg');
  m15 = loadImage('Assets/15.jpeg');
  m16 = loadImage('Assets/16.jpeg');
  m17 = loadImage('Assets/17.jpeg');
  m18 = loadImage('Assets/18.jpeg');

  m19 = loadImage('Assets/19.jpeg');
  m20 = loadImage('Assets/20.jpeg');
  m21 = loadImage('Assets/21.jpeg');
  m22 = loadImage('Assets/22.jpeg');
  m23 = loadImage('Assets/23.jpeg');
  m24 = loadImage('Assets/24.jpeg');

  m25 = loadImage('Assets/25.jpeg');
  m26 = loadImage('Assets/26.jpeg');
  m27 = loadImage('Assets/27.jpeg');
  m28 = loadImage('Assets/28.jpeg');
  m29 = loadImage('Assets/29.jpeg');
  m30 = loadImage('Assets/30.jpeg');

  m31 = loadImage('Assets/31.jpeg');
  m32 = loadImage('Assets/32.jpeg');
  m33 = loadImage('Assets/33.jpeg');
  m34 = loadImage('Assets/34.jpeg');
  m35 = loadImage('Assets/35.jpeg');
  m36 = loadImage('Assets/36.jpeg');

  m52 = loadImage('Assets/52.jpeg');
  m53 = loadImage('Assets/53.jpeg');
  m37 = loadImage('Assets/37.jpeg');
  m38 = loadImage('Assets/38.jpeg');
  m39 = loadImage('Assets/39.jpeg');
  m40 = loadImage('Assets/40.jpeg');

  m41 = loadImage('Assets/41.jpeg');
  m42 = loadImage('Assets/42.jpeg');
  m43 = loadImage('Assets/43.jpeg');
  m44 = loadImage('Assets/44.jpeg');
  m45 = loadImage('Assets/45.jpeg');
  m46 = loadImage('Assets/46.jpeg');
  
   m47 = loadImage('Assets/47.jpeg');
   m48 = loadImage('Assets/48.jpeg');
   m49 = loadImage('Assets/49.jpeg');
   m50 = loadImage('Assets/50.jpeg');
   m51 = loadImage('Assets/51.jpeg');

  RE = loadImage('Assets/RE.jpeg');

  //SONIDOS
  GUN = loadSound('Assets/GUN.mp3');
  REWIND = loadSound('Assets/REWIND.mp3');
  MARIMBA = loadSound('Assets/MARIMBA.mp3');

}

function setup() {
  createCanvas(515, 495);

  GUN.play();
  GUN.stop(12);
  REWIND.play(12);
  REWIND.stop(18);
  MARIMBA.play(18);
   MARIMBA.stop(152);


}

function draw() {
  background(0);

  if (GUN.currentTime() > 0.0) {
    image(m01, 0, 0);
  }
  if (GUN.currentTime() > 2) {
    image(m02, 0, 0, 515, 495);
  }
  if (GUN.currentTime() > 4) {
    image(m03, 0, 0, 515, 495);
  }
  if (GUN.currentTime() > 6) {
    image(m04, 0, 0, 515, 495);
  }
  if (GUN.currentTime() > 8) {
    image(m05, 0, 0, 515, 495);
  }
  if (GUN.currentTime() > 11) {
    image(m06, 0, 0, 515, 495);
  }
  if (REWIND.currentTime() > 2) {
    image(RE, 0, 0, 515, 495);
  }
  if (REWIND.currentTime() > 3) {
    image(m05, 0, 0);
  }
  if (REWIND.currentTime() > 3.5) {
    image(m05, 0, 0);
  }
  if (REWIND.currentTime() > 4) {
    image(m04, 0, 0);
  }
  if (REWIND.currentTime() > 4.5) {
    image(m03, 0, 0);
  }
  if (REWIND.currentTime() > 5) {
    image(m02, 0, 0);
  }
  if (REWIND.currentTime() > 5.5) {
    image(m01, 0, 0);
  }
  if (MARIMBA.currentTime() > 1) {
    image(m07, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 3) {
    image(m08, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 7) {
    image(m09, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 9) {
    image(m10, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 13) {
    image(m11, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 23) {
    image(m12, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 25) {
    image(m13, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 28) {
    image(m14, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 31) {
    image(m15, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 33) {
    image(m16, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 35) {
    image(m17, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 37) {
    image(m18, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 40) {
    image(m19, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 43) {
    image(m20, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 46) {
    image(m21, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 49) {
    image(m22, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 51) {
    image(m23, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 60) {
    image(m24, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 62) {
    image(m25, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 65) {
    image(m26, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 68) {
    image(m28, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 71) {
    image(m29, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 74) {
    image(m30, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 77) {
    image(m31, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 82) {
    image(m32, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 84) {
    image(m33, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 86) {
    image(m34, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 88) {
    image(m35, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 89) {
    image(m36, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 91) {
    image(m52, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 91.5) {
    image(m53, 0, 0, 515, 495);
  }
   if (MARIMBA.currentTime() > 92) {
    image(m52, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 92.5) {
    image(m53, 0, 0, 515, 495);
  }
   if (MARIMBA.currentTime() > 93) {
    image(m52, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 93.5) {
    image(m53, 0, 0, 515, 495);
  }
   if (MARIMBA.currentTime() > 94) {
    image(m52, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 94.5) {
    image(m53, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 95) {
    image(m52, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 95.5) {
    image(m53, 0, 0, 515, 495);
  }
    if (MARIMBA.currentTime() > 96) {
    image(m37, 0, 0, 515, 495);
  }
    if (MARIMBA.currentTime() > 98) {
    image(m38, 0, 0, 515, 495);
  }
    if (MARIMBA.currentTime() > 100) {
    image(m39, 0, 0, 515, 495);
  }
    if (MARIMBA.currentTime() > 102) {
    image(m40, 0, 0, 515, 495);
  }
   if (MARIMBA.currentTime() > 104) {
    image(m41, 0, 0, 515, 495);
  }
   if (MARIMBA.currentTime() > 106) {
    image(m42, 0, 0, 515, 495);
  }
   if (MARIMBA.currentTime() > 108) {
    image(m43, 0, 0, 515, 495);
  }
   if (MARIMBA.currentTime() > 110) {
    image(m44, 0, 0, 515, 495);
  }
   if (MARIMBA.currentTime() > 112) {
    image(m45, 0, 0, 515, 495);
  }
   if (MARIMBA.currentTime() > 114) {
    image(m46, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 116) {
    image(m47, 0, 0, 515, 495);
  }
   if (MARIMBA.currentTime() > 121) {
    image(m48, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 123) {
    image(m49, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 125) {
    image(m50, 0, 0, 515, 495);
  }
  if (MARIMBA.currentTime() > 127) {
    image(m51, 0, 0, 515, 495);
  }
  fill(0);
  if (MARIMBA.currentTime() > 131) {
    rect( 0, 0, 515, 495);
  }
}