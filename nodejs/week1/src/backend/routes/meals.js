const fs = require("fs");
const filepath = require("path").resolve(__dirname, "..");

function getReview(id) {
    const reviewData = fs.readFileSync(`${filepath}/data/reviews.json`);
    const reviews = JSON.parse(reviewData);

    return reviews.filter(element => element.mealId === id);
}

function mealsRouter() {
    const mealData = fs.readFileSync(`${filepath}/data/meals.json`);
    const meals = JSON.parse(mealData);
    
    meals.map(element => {
        const review = getReview(element.id);

        if(review.length) {
            element.reviews = getReview(element.id);
        }
    });
    return meals;
}

module.exports = (request, response) => response.send(mealsRouter());
module.exports.getReview = getReview();
module.exports.mealsRouter = mealsRouter();