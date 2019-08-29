let dogYearOfBirth =  2017;
let dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth; 
let shouldShowResultInDogYears = true;

const str = "Your dog will be " + dogYear + " human years old in " + dogYearFuture;
const str2 = "Your dog will be " + dogYear * 7 + " dog years old in " + dogYearFuture;

console.log("\n-- Goodboy-Oldboy (A dog age calculator) --");
if(shouldShowResultInDogYears) {
  console.log(str2);
} else console.log(str);