let danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
let show = shortestWord(danishWords); // returns 'ø'

function shortestWord(danishWords) {
  let shortest = danishWords[0];
  for(let item of danishWords) {
    if(shortest.length > item.length ) {
      shortest = item;
    }
  }
  return shortest;
} 
console.log(show);