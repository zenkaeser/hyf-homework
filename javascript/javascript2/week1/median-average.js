// use the functions on this array
const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000, 1];

function getAve(housePrices) {
  let total = count = 0;
  for(let value of housePrices) {
    total += value;
    count++;
  }
  return total/count;
}
function getMedian(housePrices) {
  const sortedArray = housePrices.sort(function(a, b){return a-b});
  let mid = Math.floor(sortedArray.length/2);

  if(sortedArray.length % 2 == 0) {
    return (sortedArray[mid] + sortedArray[mid-1]) / 2
  }
  return sortedArray[mid];
}
function getBoth() {
  const object = {
    ave: getAve(housePrices) ,
    median: getMedian(housePrices)

  };
  return object;
}


console.log(getAve(housePrices));
console.log(getMedian(housePrices));