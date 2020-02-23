const mealsRouter = require("./meals.js");

function mealRouter() {
    const meals = mealsRouter.mealsRouter();
    
    return meals[ Math.floor (Math.random() * meals.length) ];
}

module.exports = (request, response) => response.send(mealRouter());
