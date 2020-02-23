const mealsRouter = require("./meals.js");
const cheapPrice = 50;

function cheapMealsRouter() {
    const meals = mealsRouter.mealsRouter;
    
    return meals.filter( (element) => element.price <= cheapPrice );
}

module.exports = (request, response) => response.send(cheapMealsRouter());
