fetch('https://yesno.wtf/api')
  .then(res => res.json())
  .then(res => {
    console.log(res.answer);
    navigator.getBattery()
      .then((res) => {
        console.log("Charging? " + res.charging);
      })
  });

// const oneSecondTimeoutPromise = new Promise(resolve => {
//     setTimeout(() => {
//         resolve("hello (after 4 secs)");
//     }, 4000);
// });

// function logsOutAfter4Secs() {
//   oneSecondTimeoutPromise.then(result => {
//     console.log("String: ", result);
//   })
// }

//logsOutAfter4Secs();

function logsOutAfter2Secs() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(Math.random() < 0.5)
          resolve("hello world (after 2 secs)");
        else 
          reject("there is an error here!")
    }, 2000);
  })
}

logsOutAfter2Secs()
  .then(result => {
    console.log("My message is" , result);
  
  })
  .catch(error => console.log(error))

function promiseFunction(successMessage, errorMessage, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(shouldReject) {
        reject(errorMessage);
      }
      resolve(successMessage);
    }, 1000)
  })
}

promiseFunction("I am success", "ehhh error", true)
  .then(result => console.log(result))
  .catch(error => console.log(error));


  navigator.getBattery()
      .then((res) => {
        console.log("Battery Level : ", res.level);

        fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
          .then(res => res.json())
          .then(res => {
            console.log(res);
        });
      });

var promise1 = navigator.getBattery()
  .then(res => res.level);
var promise2 = fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
  .then(res => res.json());

Promise.all([promise1, promise2]).then(function(values) {
  console.log(values);
});

const oneSecondTimeoutPromise = new Promise((resolve) => {
  console.log(typeof resolve);
  setTimeout(() => {
      const resolveObject = {
          name: 'benjamin'
      };
      resolve(resolveObject);
  }, 1000);
});

oneSecondTimeoutPromise
    .then((benjaminString) => {
        console.log('one second timeout done');
        console.log(oneSecondTimeoutPromise);
        console.log(benjaminString);
    });

    setTimeout(() => {
      console.log(2);
      setTimeout(() => {
          console.log(2);
          setTimeout(() => {
              console.log(3);
              
          }, 7000);
      }, 3440);
  }, 2000);


  var promiseCount = 0;

function testPromise() {
    let thisPromiseCount = promiseCount++;

    return thisPromiseCount;
}