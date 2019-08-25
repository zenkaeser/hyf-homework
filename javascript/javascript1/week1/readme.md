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
