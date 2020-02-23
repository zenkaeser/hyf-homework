const fs = require("fs");
const filepath = require("path").resolve(__dirname, "..");

function getReviewById(id) {
    const reviews = reviewsRouter();

    return reviews.filter(element => element.id == id);
}

function reviewsRouter() {
    const reviewData = fs.readFileSync(`${filepath}/data/reviews.json`);

    return JSON.parse(reviewData);
}

module.exports = (request, response) => response.send(reviewsRouter());
module.exports.getReviewById = getReviewById;
