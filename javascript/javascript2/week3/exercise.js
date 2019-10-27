

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  const button1 = document.querySelector('.button1');
  const button2 = document.querySelector('.button2');
  const button3 = document.querySelector('.button3');

  let i =0;
  button1.addEventListener('click', function() {
    console.log(i); i++;
  })
  button2.addEventListener('click', function() {
    console.log(i); i++;
  })

  button3.addEventListener('click', function(){
    console.log("I was clicked!");
    setTimeout(function() {
      console.log("This text was delayed by 3 seconds");
    }, 3000);
  })

  
  function updateDisplay(event) {
    var x = event.clientX;
    var y = event.clientY; 
    var box = document.querySelector("#box");
    var coor = "X coords: " + x + ", Y coords: " + y;
    box.innerHTML = coor;
  }
  box.addEventListener("mousemove", updateDisplay, false);
  

  let count = 0;
  let aveX = 0;
  let aveY = 0;
  let div = document.querySelector('#box');
  div.addEventListener('mousemove', function (event){
    let x = event.clientX;
    let y = event.clientY;

    div.innerHTML = "x: " +x + "y: " +y;
    count++;
    aveX +=x;
    aveY +=y;
    console.log(count, x, y);
  }, false);

  setInterval(function(){
    aveX /= count;
    aveY /= count;
    console.log("Interval at 30secs: x is " +  aveX + " y is " + aveY);
  }, 30000);

});
