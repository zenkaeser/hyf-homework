const fs = require('fs');
const filepath = require('path').resolve(__dirname, '..');



function getMealsById(id) {
    let meals = mealsRouter();
    let resultMeal;

    meals.forEach(element => {
        if(element.id == id)
            resultMeal = element;
    });
    return resultMeal;
}
function getMealsByIdWithDate(id) {
    let meals = mealsRouter();
    let resultMeal;

    meals.forEach(element => {
        if(element.id == id)
            resultMeal = element;
    });
    return resultMeal.createdAt;
}

function getReview(id) {
    let revData = fs.readFileSync(`${filepath}/data/reviews.json`);
    let reviews = JSON.parse(revData);
    const reviewArray = [];

    reviews.forEach(element => {
        if(element.mealId == id) {
            reviewArray.push(element);
        }
    });
    return reviewArray;
}

function mealsRouter() {
    let mealData = fs.readFileSync(`${filepath}/data/meals.json`);
    let meals = JSON.parse(mealData);
    
    meals.forEach(element => {
        element["reviews"] = getReview(element.id);
    });
    return meals;
}

function getMaxPrice(mprice) {
    let meals = mealsRouter();
    let resultMeal = []; 
    meals.forEach(element => {
        if(element.price < mprice)
            resultMeal.push(element);
    });
    return resultMeal;
}

//returns multiple answers with the same string
function getTitle(title) {
    let meals = mealsRouter();
    let resultMeal = []; 
    meals.forEach(element => {
        if((element.title).localeCompare(title))
            resultMeal.push(element);
    });
    return resultMeal;
}
function getCreatedAfter(date) {
    let meals = mealsRouter();
    let resultMeal = []; 
    meals.forEach(element => {
        if((element.createdAt) > date)
            resultMeal.push(element);
    });
    return resultMeal;
}

function getLimit(limit) {
    let meals = mealsRouter();
    let resultMeal = [];
    for(let i=0; i<limit; i++)
        resultMeal.push(meals[i]);

    return resultMeal;
}


// module.exports = (request, response) => {
//     response.send(mealsRouter());
// };

module.exports.getReview = getReview();
module.exports.mealsRouter = mealsRouter();
module.exports.getMealsById = getMealsById;
module.exports.getMaxPrice = getMaxPrice;
module.exports.getTitle = getTitle;
module.exports.getCreatedAfter = getCreatedAfter;
module.exports.getLimit = getLimit;
module.exports.getAllMeals = mealsRouter;
module.exports.getMealsByIdWithDate = getMealsByIdWithDate;
