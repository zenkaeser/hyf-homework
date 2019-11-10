/*
1. user can search for any word.
2. the application will find the gif using the searched word.
3. use the giphy api: https://developers.giphy.com/docs/
4. user can write some text indicating the gif he is looking for, click a button and then a gif will be found (using the searched word) and the gif will be displayed to the user. 
5. add an input element, where the user can specify how many gif results the user wants.
*/

const div = document.getElementById('giphyID');

// 2.
/*
fetch("https://api.giphy.com/v1/gifs/search?api_key=16FiVpIKXcot6biF6OyKiAnS10P6DRym&q=smile&limit=25&offset=0&rating=G&lang=en")
  .then(response => response.json())
  .then(response => {
    
    for(let i=0; i<response.data.length; i++) {
      console.log(response.data[i].url);  
      const img = document.createElement('img');
      img.style.width = '100px';  
      img.src = response.data[i].url;  
      div.appendChild(img);
    }
  });
  */

 fetch("https://api.giphy.com/v1/gifs/search?api_key=16FiVpIKXcot6biF6OyKiAnS10P6DRym&q=smile&limit=25&offset=0&rating=G&lang=en")
 .then(response => response.json())
 .then(response => {
     console.log(1, response.data.length)
     for (let i = 0; i < response.data.length; i++) {
         console.log(response.data[i].url);
     }
     response.data.forEach(item =>{
         console.log(item.url);
         const img = document.createElement('img');
      img.style.width = '100px';  
      img.src = item.url;  
      div.appendChild(img);
     })
 });
