console.log("\n-- Candy Helper --");
console.log("Here's the list of our candies.");
 
console.log("Candy Type     || Price per gram");
console.log("  Sweet        ||   0.5");
console.log("  Chocoloate   ||   0.7");
console.log("  Toffee       ||   1.1");
console.log("  Chewing-gum  ||   0.03 ");

let boughtCandyPrices = [];

function addCandy(candyType, weight) {
  let price;
  let type = candyType.toLowerCase();
  
  switch (type) {
    case "sweet": price = 0.5 * weight; break;
    case "chocolate": price = 0.7 * weight; break;
    case "toffee": price = 1.1 * weight; break;
    case "chewing-gum": price = 0.03; break;
    default: {
      price = 0; 
      console.log("Candy Type not recognized.");
    }
  }
  if(price > 0) {
    boughtCandyPrices.push(price);
  }
  return price;
}

function canBuyMoreCandy() {
  let amountToSpend = Math.ceil(Math.random() * 100);
  let totalPrice = 0;
  let flag = true;

  console.log("You have " + amountToSpend + "kr amount to spend.");

  for(var x=0; x<boughtCandyPrices.length; x++) {
    totalPrice += boughtCandyPrices[x];
  }
  if(totalPrice >= amountToSpend) {
    console.log("Enough candy for you!")
    return false;
  }
  console.log("You can buy more, so please do!");
  return true;
}