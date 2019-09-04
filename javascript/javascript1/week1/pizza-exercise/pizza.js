console.log("I love pizza");

let favePizza = "Hawaiian";
let pizzaPrice = 20;
let orderNum = 1;
let orderFamilySize = true;

let size;


function pizza(orderNum, favePizza) {
  const totalPrice = orderNum * pizzaPrice;
  if(orderFamilySize) {
    size = "Family Size";
    return "New Pizza Order: " + orderNum + ", " + size + ", " + favePizza + ". The total cost for the order is: " + totalPrice * 2 + "kr";
  }
  else {
    size = "Regular";
    return  "New Pizza Order: " + orderNum + ", " + size + ", " + favePizza + ". The total cost for the order is: " + totalPrice + "kr";
  }
}

console.log("New Pizza Order: " + favePizza + ". The price of pizza is: " + pizzaPrice);
console.log(pizza(1, "peperroni"));
