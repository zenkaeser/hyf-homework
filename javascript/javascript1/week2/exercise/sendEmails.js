let recepient = "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com";

console.log("\nSplitting this weird format emails: \n" + recepient);

const recepients = recepient.split("|");
console.log("\nThe new and correct format for emails:");
console.log(recepients);

//Sending Emails--
function splitRecepient(recepients) {
 for(var count = 0; count < recepients.length; count++) {
    let element = recepients[count];
    sendEmailTo(element);
    
    function sendEmailTo(element) {
      console.log("email sent to " + element);
   }
  }
}

//Sending Emails (another way) --
function sendEmailTo2 (recepients) {
  for(var countz = 0; countz < recepients.length; countz++) {
    console.log("email sent to " + recepients[countz]);
  }
}

splitRecepient(recepients);
//sendEmailTo2(recepients);