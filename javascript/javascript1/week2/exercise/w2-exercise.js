console.log("\n -- Bank Account Balance --");

const balance = 1000;
console.log("Account Balance: " + balance);
if(balance < 0) {
  console.log("Please earn some money!");
} else if(balance > 0 && balance < 1000) {
  console.log("Your balance is looking okay");
} else if (balance >= 1000 && balance < 3000) {
  console.log("Your balance is looking good");
} else if (balance >= 3000 && balance < 10000) {
  console.log("Your balance is fantastic");
} else if (balance >= 10000) {
  console.log("Your balance is AMAZING!");
}


function getCircleArea (radius) {
  const circleArea = 2 * 3.141618 * radius;
  return circleArea;
}

function celciusToFahrenheit (celsius) {
  const fahr = celsius * 9 / 5 + 32;
  return fahr;
}

for (var i = 74; i<98; i++) {
 // console.log(i);
}
function simpleLoop(stringToLog, numberOfTimesToLog) {
  for(var i = 0; i<numberOfTimesToLog; i++) {
    console.log(stringToLog + ' ' + i);
  }
}
let recepient = "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com";
const recepients = recepient.split("|");
console.log(recepients);

function splitRecepient(recepients) {
 for(var count = 0; count < recepients.length; count++) {
    let element = recepients[count];
    sendEmailTo(element);
    
    function sendEmailTo(element) {
      console.log("email sent to " + element);
   }
  }
}

function sendEmailTo2 (recepients) {
  for(var countz = 0; countz < recepients.length; countz++) {
    console.log("email sent to " + recepients[countz]);
  }
}