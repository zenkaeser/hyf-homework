console.log("-- Flight Booking Fullname Function --");

function getFullname(firstname, surname, useFormalName) {
  if(useFormalName) { 
    return "Lord " + firstname + " " + surname;
  } else if(!firstname || !surname) {
    return "Please enter your name again";
  }
  return firstname + " " + surname;
}

let useFormalName = "true";
let fullname1 =  fullname2 = getFullname("Kat","Say", true);
console.log("Fullname 1: " + fullname1);
console.log("Fullname 2: " + fullname2);

fullname1 = fullname2 = getFullname("Benjamin","Hughes", false);
console.log("Fullname 1: " + fullname1);
console.log("Fullname 2: " + fullname2);