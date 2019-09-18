let numbers = [];

function maxArray(numbers) {
  let max = 0;

  for(let i=0; i<numbers.length; i++) {
    if(max < numbers[i]) {
      max = numbers[i];
    }
  }
  return max;
}