
//MEAL ORDERING
const orders = `[
  {
    "order_name": "Pizza",
    "order_id": 1234,
    "price": 100,
    "drinks": [{"name": "soda"}],
    "extras": ["cheese"]
  },
  {
    "order_name": "Hamburger",
    "order_id": 5678,
    "price": 120,
    "drinks": [{"price": 2, 
               "name": "soda"}],
    "extras": ["lettuce"]
}]`;

console.log(orders);


//ASTRONAURS IN SPACE
const p = document.querySelector('p');
const ulListOfAstronauts = document.querySelector('#astronauts');
const ulListOfDogs = document.querySelector('#dogImages');

fetch("http://api.open-notify.org/astros.json")
    .then(response => response.json())
    .then(response => {
        
        let astronauts = response.people;
        p.textContent = "There are " +astronauts.length+ " austronauts in space, they are: ";

        for(let i=0; i<astronauts.length; i++) {
          const li = document.createElement('li');
          li.innerText = astronauts[i].name;
          ulListOfAstronauts.appendChild(li);
        }        
    });


//DOG FAN

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(response => {
      let msg = "Random dog image";    
      getImage(response.message, msg, 1, "");
});

let ctr = 1;
setInterval(function() {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(r => r.json())
  .then(r => {
    let msg = "Random dog image every 2 seconds";  
    getImage(r.message, msg, ctr, "");
    ctr++;
  })
},2000); 

fetch("https://dog.ceo/api/breeds/list/all")
  .then(r => r.json())
  .then(r => {
    let msg = "Random image of a breed from the list";
    let count = 1;

    for(let breed in r.message) {
      const breedName = document.createElement('p');
      breedName.innerText = breed;

      fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(r => r.json())
        .then(r => {
          getImage(r.message, msg, count, breedName)
          count++;
       })
    }
  });

function getImage(url, msg, counter, tag) {
  const img = document.createElement('img');
  const li = document.createElement('li');
  const h3 = document.createElement('h3');

  h3.innerText = (counter==1) ?  msg : " ";

  img.src = url;
  img.style.width = '100px';     
  li.appendChild(h3);
  li.appendChild(img);
  if(tag)
    li.appendChild(tag);
  ulListOfDogs.appendChild(li);
}