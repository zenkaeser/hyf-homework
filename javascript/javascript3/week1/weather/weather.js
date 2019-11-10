

var map;
var gettingData = false;
var openWeatherMapKey = "ABC..."


const cityInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');
const weatherDiv = document.querySelector('#weatherDiv')
google.maps.event.addDomListener(window, 'load', function() {
  initialize(60, -100, 4);
});

button.addEventListener('click', (event)  => { 
  //clearing the div
  weatherDiv.innerHTML = "";

  let searchedCity = cityInput.value;

  if(searchedCity) {    

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=3b6d6b083f434a84cdac6543524149cd`) 
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(response => {

        let lng = response.coord.lon;
        let lat = response.coord.lat;
        initialize(lat, lng, 12);
        
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
            <style display:"none">
              ul {padding: 5px;}
              li {list-style: none;}
              .icon {
                display: flex; 
                align-items: center; 
              }
              img {width: 30px}
            <style>
          `
        })
      .catch((error) => {
        const p = document.createElement('p');
        p.innerText = "City not found";
        weatherDiv.appendChild(p);
      });
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
        