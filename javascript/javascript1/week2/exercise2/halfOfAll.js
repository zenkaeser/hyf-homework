let halfThisNumbers = [17,18,19];

function halfOfAll(halfThisNumbers) {
  let newArray = [];

  for(let i=0; i<halfThisNumbers.length; i++) {
    newArray.push(halfThisNumbers[i] / 2);
  }

  return newArray;
}