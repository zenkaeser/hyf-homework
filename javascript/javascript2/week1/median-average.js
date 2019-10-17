// use the functions on this array
const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000, 1];

function getAve() {
  let total = count = 0;
  for(let value of housePrices) {
    total += value;
    count++;
  }
  return total/count;
}
function getMedian() {
  const sortedArray = housePrices.sort(function(a, b){return a-b});
  let mid = Math.floor(sortedArray.length/2);
  let median = function(){
    if(mid%2 == 0) {
      let mean =  (sortedArray[mid] + sortedArray[mid-1]) / 2
      return mean;
    }
    return sortedArray[mid];
  }

  return median();
}
function getBoth() {
  const object = {
    ave: getAve() ,
    median: getMedian()

  } ;
  return object;
}


console.log(getAve());
console.log(getMedian());