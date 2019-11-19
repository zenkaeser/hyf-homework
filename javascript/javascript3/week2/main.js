fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
  .then(response => response.json())
  .then(response => {
    const badMovieSinceYear2000 = response
      .filter(movie => movie.rating <=5)
      .filter(movie => movie.year >= 2000)
      .map(movie => movie.title);
    
    //console.table(badMovieSinceYear2000);
  })

function resolveFunction(resolveAfter) {
  console.log("This function returns a promise");

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`I am called asynchronously after ${resolveAfter} seconds.`)
    },(resolveAfter*1000));
  })
}

resolveFunction(6).then(value => {console.log(value);})

function setTimeoutPromise(time) { 
   
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, time*1000);
  });
}

setTimeoutPromise(3)
    .then(() => {
      console.log("Called after 3 secondsss");
    })

function getCurrentLocation() {
    return new Promise((resolve, reject)=> {

      navigator.geolocation.getCurrentPosition((position) => {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        resolve(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
        reject('Unable to retrieve your location');
      });
    });
}

getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });


fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(function(astronautData) { 
      setTimeout(function() {
        console.log("Waited for 3 seconds");
        console.log(astronautData);
      }, 3000);
    });