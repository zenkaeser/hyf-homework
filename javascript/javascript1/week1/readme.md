FreeCodeCamp Username: zen kaeser

//Age-ify (A future age calculator)
var yearOfBirth =  1987;
var yearFuture = 2045;
var age = yearFuture - yearOfBirth; 
var str = "You will be " + age + " years old in " + yearFuture;

console.log(str);



//Goodboy-Oldboy (A dog age calculator)
var dogYearOfBirth =  2017;
var dogYearFuture = 2027;
var dogYear = dogYearFuture - dogYearOfBirth; 
var shouldShowResultInDogYears = true;

var str = "Your dog will be " + dogYear + " human years old in " + dogYearFuture;
var str2 = "Your dog will be " + dogYear * 7 + " dog years old in " + dogYearFuture;

if(shouldShowResultInDogYears) {
  console.log(str2);
}
else 
  console.log(str);



//Housey pricey (A house price estimator)
var gardenSizeInM2 = 100;
var width = 5;
var height = 11;
var depth = 8;
var volumeInMeters = width * height * depth;
var estHousePrice = 1000000

var housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

console.log("How much the house should cost:" + housePrice);

if(housePrice > estHousePrice) {
    console.log("You are paying too little. Congrats!")
}else {
    console.log("You are paying too much.")
}
