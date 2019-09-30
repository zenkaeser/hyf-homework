const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

// Write some code here
function removeNameOnArray(nameToRemove) {
  let i=0
  if(nameToRemove != undefined) {
    for(; i<names.length; i++) {
      if(nameToRemove === names[i]) {
        console.log(names[i],i)
        break;
        
      }
    }
    for(let j=i;j<names.length-1;j++) {
      names[j] = names[j+1];
    }
    names.pop();
  }
  else {
    console.log("Please enter a  name on the array list")
  }
}
// Code done
removeNameOnArray(nameToRemove);
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']