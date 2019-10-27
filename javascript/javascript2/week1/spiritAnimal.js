const name = document.querySelector('#name');
const go = document.querySelector('#go');
const newButton = document.querySelector('#new');
const input = document.querySelector('#spirit-animal');
const select = document.querySelector('#mySelect');

const spiritAnimal = ["cat", "bat", "dog", "lizard", "hippos", "rabbit", "snake", "parrot", "eagle", "lochness"];


select.addEventListener('change', function() { 
  var x = document.getElementById("mySelect").value;
  if(x == 'click') {
      go.addEventListener('click', getNewSpiritAnimal); 
      name.removeEventListener("keyup", getNewSpiritAnimal);
      name.removeEventListener("mouseover", getNewSpiritAnimal);
  }
  else if (x == 'mouseover') {
      name.addEventListener("mouseover", getNewSpiritAnimal);
      name.removeEventListener("keyup", getNewSpiritAnimal);
      go.removeEventListener('click', getNewSpiritAnimal); 
  }
  else if (x == 'written') { 
      name.addEventListener("keyup", getNewSpiritAnimal);
      go.removeEventListener('click', getNewSpiritAnimal); 
      name.removeEventListener("mouseover", getNewSpiritAnimal);
  }
},false);

function getNewSpiritAnimal() {
  if(name.value) { 
    input.value = name.value+ ":" +name.value+ "- The crying " + spiritAnimal[Math.floor((Math.random() * spiritAnimal.length))]; 
  }
  else 
    input.value = "Enter your name first above";    
}

newButton.addEventListener('click', getNewSpiritAnimal);
