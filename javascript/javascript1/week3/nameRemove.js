const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

// Write some code here
function removeNameOnArray(nameToRemove) {
  let i=0
  if(nameToRemove != undefined) {
    for(; i<names.length; i++) {
      if(nameToRemove === names[i]) break;  //if name is found, the loop is force stop
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


//shortcut version of removing array element
function removeNameOnArray2(nameToRemove) {
  let pos = names.indexOf(nameToRemove);
  if(pos >= 0) 
    names.splice(pos,1);
  else
    return "Name not found on the list";
}
// Code done
removeNameOnArray(nameToRemove);
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
