const fs = require('fs');
const filepath = require('path').resolve(__dirname, '..');



function getReviewsById(id) {
    let reviews = reviewsRouter();
    let resultReviews;

    reviews.forEach(element => {
        if(element.id == id)
            resultReviews = element;
    });
    return resultReviews;
}

function reviewsRouter() {
    let reviewData = fs.readFileSync(`${filepath}/data/reviews.json`);
    let reviews = JSON.parse(reviewData);
    
    return reviews;
}


module.exports = (request, response) => {
    response.send(reviewsRouter());
};
module.exports.getReviewsById = getReviewsById;
