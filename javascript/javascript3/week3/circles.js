const button = document.getElementById("screenWideButton");
const CANVAS = document.getElementById("myCanvas");

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r  = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    const ctx = CANVAS.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle * Math.PI);
    ctx.stroke();
    ctx.fillStyle = this.fillColor;
    ctx.fill();
  }
}

const circle = new Circle(100, 75, 50, 0, 2 * Math.PI, "#dedede");
const circle2 = new Circle(100, 200, 90, 0, 2 * Math.PI, "tomato");

setInterval(()=> {
  drawRandomCircle();
},500);

button.addEventListener('mouseover', function() {
  const p = document.getElementById("hiddenP")
  p.classList.add('show');
})

button.addEventListener('mouseout', function() {
  const p = document.getElementById("hiddenP")
  p.classList.remove('show');
})
button.addEventListener('click', ()=> {
  CANVAS.classList.toggle('screenWide');
})

CANVAS.addEventListener('mousemove', function (event){
  let x = event.clientX;
  let y = event.clientY;
  drawRandomCircle(x,y);
});

function drawRandomCircle(xCoord,yCoord) {

  let x = xCoord;
  let y = yCoord;
  if(x === undefined && y === undefined) {
    x = Math.floor(Math.random() * 501);
    y = Math.floor(Math.random() * 301);
  }
  let r = Math.floor(Math.random() * 10);
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  let randomCircleCreator = new Circle(x,y,r,0,2 * Math.PI,`#${randomColor}`);
  randomCircleCreator.draw();
}