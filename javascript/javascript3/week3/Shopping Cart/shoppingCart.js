class Product {
  constructor(name, price) {
      this.name = name;
      this.price = price;
  }
  convertCurrency(currency) {

    const currencyObj = {
        kroner: () => totalValue,
        usd:() => totalValue * 0.14745 ,
        php: () => totalValue * 7.50944,
        pound: () => totalValue * 0.11490,
        euro: () => totalValue * 0.13382
    };
    document.querySelector('section.cart p span').innerText = ` ${currencyObj[currency]().toFixed(2)} ${currency}` ;
    console.log(currencyObj[currency]());
  }
}

class ShoppingCart {
  constructor(products) {
      this.products = products;
  }
  
  addProduct(product) {
      this.products.push(product);
  }

  removeProduct(product) {
    let products = this.products;
      if(product) {
        for(let i=0; i<products.length; i++) {
          if(products[i].name.toLowerCase() === product.toLowerCase())
          products.splice(i,1);
         }
    }
  }

  searchProduct(productName) {
    let productsLists = this.products;

    let searchedProduct = productName ? productName: search.value;
    if(searchedProduct) {
      const arr = productsLists
      .filter(prod => searchedProduct.includes(prod.name))
  
      renderProductName(arr);
    } else {
      renderProductName(this.products);
    }
  }

  getTotal() {
    let products = this.products;
    let total = 0;
    for(let i=0; i<products.length; i++) {
      total += products[i].price;
    }
    document.querySelector('section.cart p span').innerText = ` ${total.toFixed(2)} kroner`;
    return total;
  }

  renderProducts() {

    const productList = document.querySelector('.productListing');
    productList.innerHTML = "";
    let products = this.products;

    products.forEach(product => {
      const li = document.createElement('li');
      const ul = document.createElement('ul');
      const innerLi = document.createElement('li');
      innerLi.innerText = product.name;
      const innerLi2 = document.createElement('li');
      innerLi2.innerText = product.price;
      
      ul.appendChild(innerLi);
      ul.appendChild(innerLi2);
      li.appendChild(ul);
      productList.appendChild(li);
    })  
  }

  getUser() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json())
        .then(res => {
          document.getElementById('user').innerText = `Hi, ${res.username}`;
          shoppingCart.renderProducts();
          shoppingCart.getTotal();
        });
  }
}

const flatscreen = new Product('flat-screen', 5000);
const computer = new Product('desktop', 7000);
const shoppingCart = new ShoppingCart([flatscreen, computer]);
const product = new Product("", 0);
let totalValue = shoppingCart.getTotal();

shoppingCart.getUser();
let search = document.querySelector('.search input');
search.addEventListener("keyup", function() {
  shoppingCart.searchProduct(search.value);
});

let select = document.querySelector('.currency select');

select.addEventListener('change', function() { 
  product.convertCurrency(select.value);
});

function renderProductName(array) {

  const productList = document.querySelector('.productListing');
  productList.innerHTML = "";

  array.forEach(product => {
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    const innerLi = document.createElement('li');
    innerLi.innerText = product.name;
    const innerLi2 = document.createElement('li');
    innerLi2.innerText = product.price;
    
    ul.appendChild(innerLi);
    ul.appendChild(innerLi2);
    li.appendChild(ul);
    productList.appendChild(li);
  });
}

