let val = ["kat","is","cute"];

function toUppercaseArray(val) {
  let temp = [];
  
  for(let i=0; i<val.length; i++) {
    temp.push(val[i].toUpperCase());
  }

  return temp;
}