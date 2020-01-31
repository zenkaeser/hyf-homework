function homeRouter(req, router) {

  const html = `
    <div id="container">
      <header>
        <h1>Meal Sharing</h1>
        <h3>Building community for people who loves to share and eat.</h3>
      </header>
      <main id="main">
        <div>
          <img id="main-image" src="https://s3.amazonaws.com/mealshare_prod/photos/photos/000/006/072/slider/photo_breakfast_10.JPG?1430728147" alt="sample image only">
        </div>    
        <div id="featured-meals-div">
          <a href="${router.pathFor('all-meals-page')}">View all</a>
        </div>
        <div id="how-it-works-div">
          <div id="wrapper-div">
            <ul>
              <li><img id="icon" src="https://image.flaticon.com/icons/svg/467/467800.svg" alt="choose icon">Choose a Meal</li>
              <li><img id="icon" src="https://image.flaticon.com/icons/svg/481/481772.svg" alt="book icon">Book it up</li>
              <li><img id="icon" src="https://image.flaticon.com/icons/svg/255/255555.svg" alt="walkin icon">Walk in</li>
            </ul>
          </div>
        </div>
      </main>
      <footer>
        <p>No copyright infringement intended. Created by Katrina Sayaang</p>
      </footer>
    </div>
  `;
  if(noScriptTagChecker(html))
    document.body.innerHTML = html;
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

//shows the home page of the website
//everything will loaded on the DOM
export default homeRouter;