const mealsRouter = require('./meals.js');

function mealRouter() {
    let meals = mealsRouter.mealsRouter;
    let item = meals[Math.floor(Math.random()*meals.length)];
    
    return item;
}

module.exports = (request, response) => {
    response.send(mealRouter());
};
