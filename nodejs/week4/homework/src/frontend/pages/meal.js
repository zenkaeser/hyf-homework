function mealRouterId(req, router) {
  const id = req.param.id;
  const body = document.body;
  const div = document.createElement("div");
  const main = document.createElement("main");
  const ul_main = document.createElement("ul");
  const h1 = document.createElement("h1");
  const url = `http://localhost:5000/api/meals/${id}`; 

  div.setAttribute("id", "container");
  body.appendChild(div);
  div.appendChild(main);
  ul_main.innerText = "MEALS";

  fetch(url)
    .then(r => r.json())
    .then(meal => {

        const m = meal[0];
        const li = document.createElement("li");
        li.innerHTML =  `
          <li>Meal # ${m.id}
            <ul>
              <li><img src="https://s3.amazonaws.com/mealshare_prod/photos/photos/000/006/339/slider/image.jpg?1433227120" alt="sample image only"></li>
              <li>Title: ${m.title}</li>
              <li>stars</li>
              <li>Description: ${m.description}</li>
              <li>Location: ${m.location}</li>
              <li>Available Reservations: ${m.max_reservations}</li>
              <li>Price: ${m.price}</li>
              <li><button>Reserve a seat</button></li>
            </ul>
          </li>
        `;
        ul_main.appendChild(li);
  
      main.appendChild(ul_main);
  });

  const reservationsWrapper = document.createElement("div");
  const button = document.createElement("button");
  reservationsWrapper.innerHTML =  `
    <form">
					<div id="reservation-div">
						<div class="wrap-div">
							<label for="name">Name*</label>
								<input id="name" type="text" name="name" required autofocus>
							<label for="phone">Phone Number*</label>
                <input id="phone" type="number" name="phone" required>
              <label for="email">Email*</label>
                <input id="email" type="email" name="email" required>
              <label for="no_of_guest">No. of guests*</label>
								<input id="no_of_guest" type="number" name="no_of_guest" required>
            </div>
    </form>
  `;
  main.appendChild(reservationsWrapper);


}


//this will render all the meals taken from the server
//whatever is the result of the database of from api, I will display it on this page
export default mealRouterId;
