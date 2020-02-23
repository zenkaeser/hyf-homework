const mealsRouter = require("./meals.js");
const maxPeopleCount = 3;

function largeMealsRouter() {
    const meals = mealsRouter.mealsRouter;
    
    return meals.filter( element => element.maxNumberOfGuests >= maxPeopleCount )
}

module.exports = (request, response) => response.send(largeMealsRouter());
