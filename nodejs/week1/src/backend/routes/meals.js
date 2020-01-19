const fs = require('fs');
const filepath = require('path').resolve(__dirname, '..');


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


module.exports = (request, response) => {
    response.send(mealsRouter());
};
module.exports.getReview = getReview();
module.exports.mealsRouter = mealsRouter();