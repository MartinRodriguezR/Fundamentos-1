
function setup() {
createCanvas(320, 320);
 background(255,255,255)
  noStroke ();

  for (var y = 0; y <= height; y += 40) {
  for (var x = 0; x <= width; x += 40) {
  rect (x,y, 40,40);
  }
  }
  
   for (var x = 0; x < 320; x = x + 40) {
    for (var y = 0; y < 320; y = y + 40) {
      fill(0);
      triangle(x, y, x, y+40, x + 40, y + 40);
      
      }
   }
      
   for (var n1x = 80; n1x < 320; n1x = n1x + 160) {
    for (var n1y = 0; n1y < 320; n1y = n1y + 80) {
      fill(255)
      rect(n1x, n1y, 80, 40);
      noFill();

      fill(0);
      triangle(n1x, n1y, n1x+40, n1y, n1x + 40, n1y + 40);
      triangle(n1x+40, n1y, n1x+80, n1y, n1x + 80, n1y + 40);
      noFill ();
    }
  }

        for (var n2x = 40; n2x < 320; n2x = n2x + 160) {
    for (var n2y = 40; n2y < 320; n2y = n2y + 160) {
      fill(255)
      rect(n2x, n2y, 80, 40)
      noFill();

      fill(0);
      triangle(n2x, n2y, n2x + 40, n2y, n2x + 40, n2y + 40);
      triangle(n2x + 40, n2y, n2x + 80, n2y, n2x + 80, n2y + 40);
      noFill();
    }
  }
  
    for (var n3x = 0; n3x < 320; n3x = n3x + 160) {
    for (var n3y = 80; n3y < 320; n3y = n3y + 160) {
      fill(255)
      rect(n3x, n3y, 80, 40)
      noFill();

      fill(0);
      triangle(n3x, n3y, n3x + 40, n3y, n3x + 40, n3y + 40);
      triangle(n3x + 40, n3y, n3x + 80, n3y, n3x + 80, n3y + 40);
      noFill();
    }
  }
      for (var n31x = 80; n31x < 320; n31x = n31x + 160) {
      for (var n31y = 80; n31y < 320; n31y = n31y + 160) {
      fill(0)
      rect(n31x, n31y, 80, 40)
      noFill();

      fill(255);
      triangle(n31x, n31y, n31x + 40, n31y, n31x + 40, n31y + 40);
      triangle(n31x + 40, n31y, n31x + 80, n31y, n31x + 80, n31y + 40);
      noFill();
    }
  }
  
      for (var n4x = -40; n4x < 320; n4x = n4x + 160) {
      for (var n4y = 120; n4y < 320; n4y = n4y + 160) {
      fill(255)
      rect(n4x, n4y, 80, 40)
      noFill();

      fill(0);
      triangle(n4x, n4y, n4x + 40, n4y, n4x + 40, n4y + 40);
      triangle(n4x + 40, n4y, n4x + 80, n4y, n4x + 80, n4y + 40);
      noFill();
    }
  }
  
}