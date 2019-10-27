const name = document.querySelector('#name');
const go = document.querySelector('#go');
const newButton = document.querySelector('#new');
const input = document.querySelector('#spirit-animal');
const select = document.querySelector('#mySelect');

const spiritAnimal = ["cat", "bat", "dog", "lizard", "hippos", "rabbit", "snake", "parrot", "eagle", "lochness"];


select.addEventListener('change', function() { 
  var x = document.getElementById("mySelect").value;
  if(x == 'click') {
      go.addEventListener('click', myFunction); 
      name.removeEventListener("keyup", myFunction, false);
      name.removeEventListener("mouseover", myFunction, false);
  }
  else if (x == 'mouseover') {
      name.addEventListener("mouseover", myFunction, false);
      name.removeEventListener("keyup", myFunction, false);
      go.removeEventListener('click', myFunction); 
  }
  else if (x == 'written') { 
      name.addEventListener("keyup", myFunction, false);
      go.removeEventListener('click', myFunction); 
      name.removeEventListener("mouseover", myFunction, false);
  }
},false);

function myFunction() {
  if(name.value) { 
    input.value = name.value+ ":" +name.value+ "- The crying " + spiritAnimal[Math.floor((Math.random() * spiritAnimal.length-1) + 1)]; 
  }
  else 
    input.value = "Enter your name first above";    
}

newButton.addEventListener('click', myFunction);
