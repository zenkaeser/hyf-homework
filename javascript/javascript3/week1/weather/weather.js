var map;
var url;
var lat;
var lng;
var gettingData = false;
var openWeatherMapKey = "ABC..."
const myStorage = Window.localStorage;
const savedLocationsArray = [];

const cityInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');
const weatherDiv = document.querySelector('#weatherDiv');
const positionButton = document.querySelector('#positionButton');
const savedLocationDiv = document.querySelector('#savedLocationDiv')
const savedCitiesUl = document.querySelector('#savedCitiesUl');

//checking if geolocation is available on your browser
if ("geolocation" in navigator) {
  console.log("geolocation is available");
} else {
  console.log("geolocation is NOT available");
}


//loading the map upon loading the web page
google.maps.event.addDomListener(window, 'load', function() {
  initialize(60, -100, 4);
});

positionButton.addEventListener('click', function() {
  //getting current position
  navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    console.log(position.coords.latitude, position.coords.longitude);
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3b6d6b083f434a84cdac6543524149cd`;

    fetchedData(url);
  });
})

searchButton.addEventListener('click', (event)  => { 
  //clearing the div
  weatherDiv.innerHTML = "";

  let searchedCity = cityInput.value;

  if(searchedCity) {    
    url = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=3b6d6b083f434a84cdac6543524149cd`;
    fetchedData(url);
  }
  else { 
    alert("Please enter city on input")
  }
});


function initialize(lat, lng, zoom) {
  let mapOptions = {
    zoom: zoom,
    center: new google.maps.LatLng(lat,lng)
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function fetchedData(url) {
  fetch(url) 
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(response => {

        lng = response.coord.lon;
        lat = response.coord.lat;
        initialize(lat, lng, 12);
        loadWeatherReport(response);
      })
      .catch((error) => {
        const p = document.createElement('p');
        p.innerText = "City not found";
        weatherDiv.appendChild(p);
      });
}

function loadWeatherReport(response) {
  weatherDiv.innerHTML = `
    <ul>
      <li>City: ${response.name}</li>
      <li>Temperature: ${response.main.temp} deg</li>
      <li>Wind speed: ${response.wind.speed}</li>
      <li class="icon">Icon: <img src="http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">
      </li>
      <li>Cloudiness: ${response.weather[0].description}</li>
      <li>Sunrise: ${response.sys.sunrise}</li>
      <li>Sunset: ${response.sys.sunrise}</li>
      <li>Optional a map showing where the city is located  
      </li>
    </ul>
    <button class="save">Save Location</button> <br><br>
  `;

  const saveLocationButton = document.querySelector('.save');
  saveLocationButton.addEventListener('click', function() {
    
    if(savedLocationsArray.includes(response.name)) { 
      alert("City already saved!")
    } else { 
      addCityOnTheList(response.name);
      localStorage.setItem('city', JSON.stringify(savedLocationsArray));
    }
    //add the eventlistener for delete
  });
}

//turning the JSON into object
let parsedJSONdata = JSON.parse(localStorage.getItem('city'));
if(parsedJSONdata) { 
  displaySavedCities(parsedJSONdata); 
  let clear = document.createElement('button')
  clear.innerText = "Clear All Saved Cities";
  clear.classList = "clear";
  savedLocationDiv.appendChild(clear);
}


function addCityOnTheList(city) {
  let li = document.createElement('li');
  let a = document.createElement('a');
  let span = document.createElement('span');
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3b6d6b083f434a84cdac6543524149cd`;
  a.href = "#";
  a.innerText = city
  span.innerText = "delete";
  a.appendChild(span);
  li.appendChild(a);
  savedCitiesUl.appendChild(li);
  savedLocationsArray.push(city);

  //event listener for displaying the weather info on the page base on the city selected
  a.addEventListener('click', function() {
    fetchedData(url);    
   });

  //event listener for deleting the city from the list
  span.addEventListener('click', function() {
    //preventing the parent event to run
    //event.stopImmediatePropagation();
    //parsedJSONdata = JSON.parse(localStorage.getItem('city'));
    //console.log(parsedJSONdata);
    console.log(city);
    deleteCity(city);
  });
  
}

function deleteCity(city) {
  console.log(city);
  //update the array data
  parsedJSONdata = JSON.parse(localStorage.getItem('city'));
  parsedJSONdata.splice(parsedJSONdata.indexOf(city), 1);
  //add the new data to the localStorage
  localStorage.removeItem('city');  
  localStorage.setItem('city', JSON.stringify(parsedJSONdata));
  console.log(localStorage);
  console.log(savedLocationsArray);
  console.log(parsedJSONdata);
  //getting the new data from the localStorage
  parsedJSONdata = JSON.parse(localStorage.getItem('city'));
  //loads the new data to the page
  displaySavedCities(parsedJSONdata);
}


function displaySavedCities(parsedJSONdata) { 
  savedCitiesUl.innerHTML = "";
  for(let item of parsedJSONdata) {
    addCityOnTheList(item)
  }
}

let clear = document.querySelector('.clear');
if(clear) {
    clear.addEventListener('click', function() {
      localStorage.removeItem('city');
      savedCitiesUl.innerHTML = "";
  });
}


