function setup() {
  createCanvas(600,300);
}

function draw() {
  background(239,226,175);
  
  strokeWeight (0)
  fill (209,228,229);
  ellipse (50,300,130,60);
  ellipse (250,200,120,260);
  ellipse (180,250,150,340);
  ellipse (325,250,150,220);

  
  //arcos superiores
  
  strokeWeight (1);
  fill (90,165,198);
  arc (118,50,85,80, PI ,TWO_PI);
  strokeWeight (0);
  fill (245,245,245);
  arc (118,50,78,73, PI , TWO_PI);
 
  strokeWeight (1);
  fill (249,221,40);
  arc (205,50,85,80, PI,TWO_PI);
  strokeWeight (0);
  fill (245,245,245);
  arc (205,50,78,73, PI, TWO_PI);
  
  strokeWeight (0);
  fill (202,27,27);
  arc (295,50,85,80, PI, TWO_PI);
  fill (245,245,245);
  arc (295,50,78,73, PI, TWO_PI);
  
  strokeWeight (1);
  fill (245,245,245);
  arc (382,50,85,80, PI, TWO_PI);
  
  //arcos inferiores
  strokeWeight (1)
  fill (230,230,230,140);
  arc (170,92,80,80, radians (170), radians (355));
  arc (251,92,80,80, radians (185), radians (10));
  arc (292,140,80,80, radians (180), radians (10));
  fill (249,221,40);
  arc (330,185,80,80, radians (185), radians (15));
  fill (230,230,230);
  strokeWeight (0);
  arc (330,185,76,76, radians (185), radians (15));
  
  
  //lineas cruzan dos hemisferios
  strokeWeight (1);
  line (324,3,205,116);
  line (326,5,209,120);
  line (328,7,213,125);
  strokeWeight (5);
  fill (0,0,0)
  line (326,0,190,90);
  strokeWeight (1);
  fill (130,130,130);
  quad (306,11,310,14,243,60,240,55);
  fill (255,255,255);
  quad (243,60,240,55,206,77,209,81);
  line (209,75,211,78);
  line (211,73,214,78);
  line (214,71,217,76);
  line (220,68,222,72);
  line (224,64,227,70);
  line (228,62,232,67);
  line (230,60,234,65);
  line (235,58,238,62);
  strokeWeight (1);
  line (330,52,230,175);
  line (335,54,235,180);
  line (340,56,240,185);
  
  //figuras hemisferio derecho
  strokeWeight (0);
  fill (72,127,64);
  ellipse (520,160,95,95);
  fill (229,173,20,180);
  triangle (505,50,450,130,535,140);
  fill (121,34,34);
  rect (562,180,30,30);
  strokeWeight (2)
  line (575,200,600,200);
  strokeWeight (1);
  line (575,196,600,196);
  
  //lineas hemisferio derecho
  strokeWeight (0);
  fill (144,74,198);
  ellipse (410,110,50,50);
  strokeWeight (1);
  line (325,107,485,107); //linea vertical arriba
  line (375,187,500,187); //linea vertical abajo
  line (370,0,460,230); //diagonal delgada cruz 
  strokeWeight (3);
  line (360,0,510,154); //diagonal gruesa cruz 
  
  //lineas hemisferio izquierdo
  strokeWeight(2);
  line (0,50, 505,50);  //cruz horizontal
  line (137,0,78,200); //diagonal cruz
  line (65,130,150,130); //linea horizontal arriba
  line (65,150,160,150); //linea horizontal abajo
  line (250,0,250,300); //cruz vertical
  line (78,100,0,160); //saliendo a la izquierda
  
  //circulo hemisferio izquierda
  strokeWeight (0);
  fill (249,221,40);
  ellipse (39,187, 72, 72); 
  fill (255,178,102);
  ellipse (35,187,55,55);
  fill (41,83,196)
  ellipse (34,187,47,47);
  strokeWeight (1);
  line (70,135,0,200); //sobre los circulos
    


   
  
  
}