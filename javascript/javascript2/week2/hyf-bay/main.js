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
  price: 150,
  rating: 4.8,
  shipsTo: [ 'denmark', 'sweden'],
},
{
  id:3,
  name:"Soap",
  price: 100,
  rating: 1,
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

    let cartList = document.querySelector('.cart ul');
    let cart = document.createElement('button');
    cart.classList.add('cart');
    cart.innerHTML = "Add to cart";
    cart.addEventListener('click', function() {
      let itemList = document.createElement('li');
      cartList.appendChild(itemList);
      let itemName = document.createElement('div');
      itemList.appendChild(itemName);
      itemName.innerHTML = item.name;
      let itemPrice = document.createElement('div');
      itemList.appendChild(itemPrice);
      itemPrice.innerHTML = item.price;
    })

    ul.appendChild(name);
    ul.appendChild(price);
    ul.appendChild(rating);
    ul.appendChild(shipsTo);
    ul.appendChild(cart);
  }
}
renderProducts(testProductNames);
let search = document.querySelector('.search input');

search.addEventListener("keyup", searchItem);

function searchItem() {
  if(search.value) {
    const resultArray = testProductNames
      .filter(products => search.value == products.name);
      productListing.innerHTML = '';
      renderProducts(resultArray);
  } else {
    const products = getAvailableProducts();
    productListing.innerHTML = '';
    renderProducts(products);
  }
}

function getAvailableProducts() {
  return testProductNames;
}


let select = document.querySelector('.country select');

select.addEventListener('change', function() { 
  let value = select.value;
  if(value == 'denmark') searchCountry(value);
  else if(value == 'sweden') searchCountry(value); 
  else if(value == 'norway') searchCountry(value); 
  else if(value == 'germany') searchCountry(value); 
  else if(value == 'iceland') searchCountry(value); 
  else if(value == 'england') searchCountry(value); 
},false);

function searchCountry(value) {
  if(value) {
    const resultArray = testProductNames
      .filter(products => products.shipsTo.includes(value));
      productListing.innerHTML = '';
      renderProducts(resultArray);

  }
}


let sort = document.querySelector('.sort select');

sort.addEventListener('change', function() { 
  let value = sort.value;
  if(value == 'cheap') sortProducts(value);
  else if(value == 'expensive') sortProducts(value); 
  else if(value == 'name') sortProducts(value); 
},false);

function sortProducts(value) {
  if(value == "cheap") {
    productListing.innerHTML = '';
      testProductNames.sort(function(a, b){return a.price - b.price});
      renderProducts(testProductNames);
  }
  if(value == "expensive") {
    productListing.innerHTML = '';
      testProductNames.sort(function(a, b){return a.price - b.price});
      testProductNames.reverse();
      renderProducts(testProductNames);
  }
  if(value == "name") {
      productListing.innerHTML = '';
      testProductNames.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;});
      renderProducts(testProductNames);
  }
}
