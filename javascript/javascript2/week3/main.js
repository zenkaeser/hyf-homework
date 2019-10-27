window.addEventListener('DOMContentLoaded', (event) => {
  
  //logs message 2.5 secs after page was loaded.
  setTimeout(function() {
    console.log("Called after 2.5 seconds")
  }, 2500);

  //creating a delayLog function
  function delayLog(delay, stringToLog) {
    setTimeout(function() {
      console.log(stringToLog);
    }, (delay*1000));
  }

  delayLog(5, "This string logged after 5 seconds");
  delayLog(3, "This string logged after 3 seconds");


  //logout after delay, calling the delay function created above
  let button = document.querySelector('.click');
  button.addEventListener('click', function() {
    delayLog(5, "This string logged after 5 seconds");
  });


  //logging out planets by passing functions as parameters
  function earthLogger() {console.log("Earth")};
  function saturnLogger() {console.log("Saturn")};

  function planetLogFunction(f) {
    f();
  }
  planetLogFunction(earthLogger);
  planetLogFunction(saturnLogger);


  //get lattitude and longitude of your place
  let logLocation = document.querySelector('.log-location');
  logLocation.addEventListener('click', getLocation);

  let x = document.getElementById("demo");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
    x.innerHTML = "This is Latitude: " + position.coords.latitude +
      "<br><br>This is Longitude: " + position.coords.longitude;
  }


  //delay function with callback
  function runAfterDelay(delay, callback) {
    setTimeout(callback, (delay*1000));
  }
  runAfterDelay(4, function() {
      console.log('should be logged after 4 seconds')
  })


  //double-click checker
  let body = document.querySelector('body');
  body.addEventListener('dblclick', function() {
    console.log("double click!");  
  })


  //funny function
  function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if(shouldTellFunnyJoke) logFunnyJoke();
    else logBadJoke();
  }
  function logFunnyJoke() {
    console.log("I hope this is funny");
  }
  function logBadJoke() {
    console.log("Nah! this is bad.")
  }
  jokeCreator(true,logFunnyJoke, logBadJoke);
  jokeCreator(false,logFunnyJoke, logBadJoke);

});

//functions as items to an array
function sum(a,b) {
  return a+b;
}
function qoutient(a,b) {
  return a*b;
}
function difference(a,b) {
  return a-b;
}
const arrayFunctions = [sum, qoutient, difference];
for(func of arrayFunctions) {
  let ans = func(10,20);
  console.log(ans);  
}


//I am not sure if normal function is with function name?!
const functionNormal = function() { 
  justNormal;
}

function justNormal() {
  console.log("This is a normal function");
}
console.log(functionNormal);


//functions as property to object
let objFunction = {
  sum: function(a,b) {
    return a+b
  },
  diff:function(a,b) {
    return a-b 
  },
  qou: function(a,b) {
    return a*b
  }
};

console.log(objFunction.sum(1,2));
console.log(objFunction.diff(1,2));
console.log(objFunction.qou(1,2));
