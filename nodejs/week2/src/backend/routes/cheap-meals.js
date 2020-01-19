const mealsRouter = require('./meals.js');

let cheapPrice = 90;
let cheapMeals = [];

function cheapMealsRouter() {
    let meals = mealsRouter.mealsRouter;
    
    meals.forEach(element => {
        if(element.price <= cheapPrice) { 
            cheapMeals.push(element);
            console.log(cheapMeals);
        }
    });
    return cheapMeals;

}

module.exports = (request, response) => {
    response.send(cheapMealsRouter());
};
