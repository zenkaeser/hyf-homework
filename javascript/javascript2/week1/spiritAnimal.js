const name = document.querySelector('#name');
const go = document.querySelector('#go');
const button = document.querySelector('#new');
const input = document.querySelector('#spirit-animal');
const select = document.querySelector('select');

const spiritAnimal = ["cat", "bat", "dog", "lizard", "hippos", "rabbit", "snake", "parrot", "eagle", "lochness"];

console.log(select.value);

select.onchange = function () {
  var x = document.getElementById("mySelect").value;
  if(x === 'click') {
     go.addEventListener('click', function(){
     if(name.value) { 
        input.value = name.value+ ":" +name.value+ "- The crying " + spiritAnimal[Math.floor((Math.random() * 9) + 1)]; 
      }
    });
  }
  else if (x == 'mouseover' && name.value!="") {
    name.addEventListener("mouseover", function( event ) {   
      input.value = name.value+ ":" +name.value+ "- The crying " + spiritAnimal[Math.floor((Math.random() * 9) + 1)]; 
    }, false);
  }
  else if (x == 'written') {
    if(name != "") { 
      name.addEventListener("mouseenter", function( event ) {   
        input.value = name.value+ ":" +name.value+ "- The crying " + spiritAnimal[Math.floor((Math.random() * 9) + 1)]; 
      }, false);
    }
  }
}

button.addEventListener('click', function(){
  if(name.value) { 
    input.value = name.value+ ":" +name.value+ "- The crying " + spiritAnimal[Math.floor((Math.random() * 10) + 1)]; 
  }
  else 
  input.value = "Enter your name first on the first input text";    
});



console.log(input);
console.log(name);