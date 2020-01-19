const mealsRouter = require('./meals.js');

let isMaxPeople = 3;
const largeMeals = [];

function largeMealsRouter() {
    let meals = mealsRouter.mealsRouter;
    
    meals.forEach(element => {
        if(element.maxNumberOfGuests >= isMaxPeople) { 
            largeMeals.push(element);
            console.log(largeMeals);
        }
    });
    return largeMeals;

}

module.exports = (request, response) => {
    response.send(largeMealsRouter());
};
