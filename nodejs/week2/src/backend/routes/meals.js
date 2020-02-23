const fs = require("fs");
const filepath = require("path").resolve(__dirname, "..");
const reviewsRouter = require("./reviews");

const mealsData = fs.readFileSync(`${filepath}/data/meals.json`);
const meals = JSON.parse(mealsData);

function mealsRouter() {
    meals.map( (element, id) => {
        const review = reviewsRouter.getReviewById(id);

        if(review.length) {
            element.reviews = reviewsRouter.getReviewById(id);
        }
    });
    return meals;
}

function getMealById(id) {
    return meals.filter(element => element.id == id );
}

function getMealCreatedDate(id) {
    const result = meals.filter(element => element.id == id);

    return result.createdAt;
}

function getMaxPrice(price) {
    return meals.filter(element => element.price < price);
}

//returns multiple answers with the same string
function getTitle(title) {
    return meals.filter(element => (element.title.toLowerCase()).includes(title));
}

function getCreatedAfter(date) {
    return meals.filter(element => {
        const createdAt = new Date(element.createdAt)
        date = new Date(date);

        return (createdAt > date);
    });
}

function getLimit(limit) {
    return meals.filter( (element, i) => i < limit);
}

module.exports = (request, response) => response.send(mealsRouter);
module.exports.getMealById = getMealById;
module.exports.getMaxPrice = getMaxPrice;
module.exports.getTitle = getTitle;
module.exports.getCreatedAfter = getCreatedAfter;
module.exports.getLimit = getLimit;
module.exports.mealsRouter = mealsRouter;
module.exports.getMealCreatedDate = getMealCreatedDate