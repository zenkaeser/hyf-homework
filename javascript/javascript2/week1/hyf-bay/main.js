const testProductNames = [{
  id:1,
  name:"Shampoo",
  price: 40,
  rating: 4.2,
  shipsTo: [ 'denmark', 'germany'],
},
{
  id:1,
  name:"Toothpaste",
  price: 50,
  rating: 4.8,
  shipsTo: [ 'denmark', 'sweden'],
},
{
  id:1,
  name:"Soap",
  price: 100,
  rating: 5,
  shipsTo: [ 'denmark', 'amsterdam']
}];

let productListing = document.querySelector('ul');

function renderProducts(testProductNames) {
  for(let item in testProductNames) {
    let li = document.createElement('li'); 
    productListing.appendChild(li);
    let ul = document.createElement('ul'); 
    li.appendChild(ul);

    let productDetails = testProductNames[item];

    console.log(productDetails);
    for(let value in productDetails) {
      let detail = productDetails[value]; 
      let li = document.createElement('li');
      li.classList.add(value);
      li.setAttribute("style", "list-style: none;");
      
      if(value === 'shipsTo') { 
        console.log(value);
        let shipsToUl = document.createElement('ul'); 
        li.appendChild(shipsToUl);
        console.log(li);

        for(let country in detail) {
          let li3 = document.createElement('li'); 
          li3.innerText = detail[country];
          shipsToUl.appendChild(li3);
          console.log(detail[country]);
        }
        ul.appendChild(li);
        break;
      }
      
      console.log(value);

      li.innerText = detail;
      li.setAttribute("style", "list-style: none;");
      ul.appendChild(li);
    }
    
    /*
    li.innerHTML = testProductNames[item].name+
       " | " +
       testProductNames[item].price+
       " | " + 
       testProductNames[item].rating+
       " | " +
       testProductNames[item].shipsTo;
    */
    //ul.appendChild(li);
  }
}

const products = getAvailableProducts();
renderProducts(products);
console.log(products);

function getAvailableProducts() {
  return testProductNames;
}
