let gardenSizeInM2 = 100;
let width = 5;
let height = 11;
let depth = 8;
let houseCost = 1000000;
const volumeInMeters = width * height * depth;

const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log ("\n-- Housey pricey (A house price estimator) --");
console.log("How much you paid: " + houseCost);
console.log("How much the house should cost: " + housePrice);

if(housePrice > houseCost) {
    console.log("You are paying too little. Congrats!")
} else console.log("You are paying too much.") 