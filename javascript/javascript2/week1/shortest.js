let danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
let show = shortestWord(danishWords); // returns 'ø'

function shortestWord(danishWords) {
  let shortest = danishWords[0];
  for(let i of danishWords) {
    if(shortest.length > i.length ) {
      shortest = i;
    }
  }
  return shortest;
} 
console.log(show);