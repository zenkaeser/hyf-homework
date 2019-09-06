console.log("\n-- Weather Wear --");

function whatToWear(temperature) {
  if(temperature >= 18) {
    return "You should wear shorts and t-shirts at " + temperature + " degrees";
  } else if(temperature >= 8 && temperature < 18) {
    return "You should wear jackets and pants at " + temperature + " degrees";
  } else {
    return "You should wear parkas at " + temperature + " degrees";
  }
}

const clothesToWear = whatToWear(18);
console.log(clothesToWear);