let danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
let show = shortestWord(danishWords); // returns 'ø'

function shortestWord(danishWords) {

  let shortestWord;
  let initlength = function() {
    if (danishWords!== undefined)
     return danishWords[0].length;
   };
   let sLength = initlength();
  for(let i of danishWords) {
    if(sLength > i.length ) {
      sLength = i.length;
      shortestWord = i;
    }
  }
  return shortestWord;
} 

console.log(show);