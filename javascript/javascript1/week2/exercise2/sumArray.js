let arrayOfNumbers = [1,2,3,4,5];

function sumArray(arrayOfNumbers) {
  let sum = 0;

  for(var i=0;i<arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
  }
  return sum;
}
