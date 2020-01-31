function mealsRouter(req, router) {
    
  const html = `
    <div id="container">
      <header>
        <h1>Meal Sharing</h1>
        <h3>Building community for people who loves to share and eat.</h3>
      </header>
      <main id="main">  
        <div id="featured-meals-div">
        </div>
      </main>
      <footer>
        <p>No copyright infringement intended. Created by Katrina Sayaang</p>
      </footer>
    </div>
  `;

  document.body.innerHTML = noScriptTagChecker(html);
  const div = document.getElementById('featured-meals-div');
  const ul_main = document.createElement('ul');
  ul_main.classList.add("meals-wrapper");
  ul_main.innerText = "MEALS";    

  const url = 'http://localhost:5000/api/meals';
  fetch(url)
    .then(r => r.json())
    .then(meals => {
      for (let meal of meals) {
        let li = document.createElement('li');
        li.classList.add('meal-wrapper')
        //let linkToId = `${url}/${meal.id}`
        li.innerHTML =  `
          Meal # <a href="#">${meal.id}</a>
            <ul>
              <li>Title: ${meal.title}</li>
              <li>Description: ${meal.description}
              <li>stars</li>
              <li>Location: ${meal.location}</li>
              <li>Available Reservations: ${meal.max_reservations}</li>
              <li>Price: ${meal.price}</li>
              <li><button>Reserve a seat</button></li>
            </ul>
        `;
        ul_main.appendChild(li);
      }
      div.appendChild(ul_main);
    })

}



function noScriptTagChecker(html) {
  let scriptOpen = "<script>";
  let scriptClose = "</script>";

  if(!html) 
    return false;
  else { 
    while(html.toLowerCase().includes(scriptOpen)) {
      html = html.replace(scriptOpen, '');
      
      while(html.toLowerCase().includes(scriptClose)) {
        html = html.replace(scriptClose, '');
      }
    }
    return html;
  }
}
  
  
  //this will render all the meals taken from the server
  //whatever is the result of the database of from api, I will display it on this page
  export default mealsRouter;
  