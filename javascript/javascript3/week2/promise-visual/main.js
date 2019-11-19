const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');
const boxes = [redBox, blueBox, greenBox];
const position = [{x: 20, y: 300},{x: 400, y: 300},{x: 400, y: 20}]
const indexes = [0,1,2];



Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

//playing random box with random target every function call
function translateOneByOne3() {
  moveElement(boxes.sample(), position.sample())
    .then(() => {
        console.log('Element has been moved');
    });
}

//playing a random box with exact target
function translateOneByOne2() {
  let index = indexes.sample();
  moveElement(boxes[index], position[index])
    .then(() => {
        console.log('Element has been moved');
    });
}

//another way to play one by one with the boxes
function translateOneByOne() {
  moveElement(redBox, position[0])
    .then(() => {
        console.log('Element has been moved');
        moveElement(blueBox, position[1])
            .then(() => {
                console.log('Element has been moved');
                moveElement(greenBox, position[2])
                .then(() => {
                    console.log('Element has been moved');
                });
          });
    });
}


function translateAllAtOnce() {
  
  let promise1 = moveElement(redBox, position[0])
  .then(() => {
      console.log('Element has been moved');
  });
  let promise2 = moveElement(blueBox, position[1])
  .then(() => {
      console.log('Element has been moved');
  });
  let promise3 = moveElement(greenBox, position[2])
  .then(() => {
      console.log('Element has been moved');
  });

  Promise.all([promise1, promise2, promise3])
      .then(values => {
        console.log(values)
      });
}

