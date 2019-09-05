console.log("\n-- Weather Wear --");

function whatToWear(temperature) {
  if(temperature >= 18) {
    return "You should wear shorts and t-shirts";
  } else if(temperature >= 8 && temperature < 18) {
    return "You should wear jackets and pants";
  } else {
    return "You should wear parkas";
  }
}

const clothesToWear = whatToWear(18);
console.log(clothesToWear);