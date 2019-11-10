/*
1. user can search for any word.
2. the application will find the gif using the searched word.
3. use the giphy api: https://developers.giphy.com/docs/
4. user can write some text indicating the gif he is looking for, click a button and then a gif will be found (using the searched word) and the gif will be displayed to the user. 
5. add an input element, where the user can specify how many gif results the user wants.
*/

const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');
const displayCount = document.querySelector('#displayCount');
const giphyDiv = document.querySelector('#giphyDiv');


searchButton.addEventListener('click', function() { 

	let value = searchInput.value;
  let count = displayCount.value;
  let url = `https://api.giphy.com/v1/gifs/search?api_key=16FiVpIKXcot6biF6OyKiAnS10P6DRym&q=${value}&limit=${count}&offset=0&rating=G&lang=en`;

  if(value) {
    if(count > 0) { 
      fetchData(url);
    } else {
      url = `https://api.giphy.com/v1/gifs/search?api_key=16FiVpIKXcot6biF6OyKiAnS10P6DRym&q=${value}&limit=10&offset=0&rating=G&lang=en`;
      fetchData(url);
    }    
  } else {
    alert("Please enter a search item");
  }
});

function fetchData(url) {
  fetch(url)
          .then(response => response.json())
          .then(response => {
            giphyDiv.innerHTML = "";

            for(let i=0; i<response.data.length; i++) {
              const img = document.createElement('img');
              img.src = response.data[i].images.original.url;  
              giphyDiv.appendChild(img);
            }
          });

}
  