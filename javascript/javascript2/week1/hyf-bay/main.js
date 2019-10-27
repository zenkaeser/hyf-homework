const testProductNames = [{
  id:1,
  name:"Shampoo",
  price: 40,
  rating: 4.2,
  shipsTo: [ 'denmark', 'germany'],
},
{
  id:2,
  name:"Toothpaste",
  price: 50,
  rating: 4.8,
  shipsTo: [ 'denmark', 'sweden'],
},
{
  id:3,
  name:"Soap",
  price: 100,
  rating: 5,
  shipsTo: [ 'denmark', 'amsterdam']
}];

let productListing = document.querySelector('.productListing');

function renderProducts(testProductNames) {
  for(let item of testProductNames) {
    let listOfItems = document.createElement('li'); 
    productListing.appendChild(listOfItems);
    let ul = document.createElement('ul'); 
    listOfItems.appendChild(ul);

    let name = document.createElement('li');
    name.classList.add('name');
    name.innerHTML = item.name;
    let price = document.createElement('li');
    price.classList.add('price');
    price.innerHTML = item.price;
    let rating = document.createElement('li');
    rating.classList.add('rating');
    rating.innerHTML = item.rating;
    let shipsTo = document.createElement('li');
    shipsTo.classList.add('ships-to');

    let shipsToUl = document.createElement('ul'); 
    shipsTo.appendChild(shipsToUl);
    
    let country = item.shipsTo;
    for(let i=0; i<country.length; i++) { 
      let countryList = document.createElement('li'); 
      countryList.innerText = country[i];
      shipsToUl.appendChild(countryList);
    }
    ul.appendChild(name);
    ul.appendChild(price);
    ul.appendChild(rating);
    ul.appendChild(shipsTo);
  }
}

const products = getAvailableProducts();
renderProducts(products);

function getAvailableProducts() {
  return testProductNames;
}
