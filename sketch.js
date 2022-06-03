const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;
//Buildings
let h1,h2,h3,h4,h5,h6,h7;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Define colors
  b1 = color(255);
  b2 = color(0);
  c1 = color(51, 255, 255);
  c2 = color(0, 102, 153);

  h1=new Building();
  h1.height=60;
  h1.position=3;
  h1.floors=30;

  h2=new Building();
  h3=new Building();
  h4=new Building();
  h5=new Building();
  h6=new Building();
  h7=new Building();
  /*this.height=10;
      this.position=1;    
      this.width=25;
      this.floors=10;
      */

  noLoop();
}

function draw() {
  setGradient(0,0, width, height, c1, c2, X_AXIS);
  //fill("deeppink");

  h1.position=1;
  h1.floors=5;

  fill("magenta");
  h1.display();

  h2.position=2;
  h2.floors=3;

  fill("indigo");
  h2.display();

  h3.position=3;
  h3.floors=2;
  fill("brown");
  h3.display();

  h4.position=5;
  h4.floors=4;
  fill("navy");
  h4.display();

  h5.position=6;
  h5.floors=5;
  fill("blueviolet");
  h5.display();

  h6.position=7;
  h6.floors=1;
  fill("deeppink");
  h6.display();


  h7.position=3.25;
  h7.floors=0.5;
  h7.width=250;
  fill("green");

  h7.display();


  
 }


function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
