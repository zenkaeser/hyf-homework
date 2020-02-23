const express = require('express');
const app = express();
app.use(express.json());

const mealsRouter = require('./routes/meals.js');
const cheapMealsRouter = require('./routes/cheap-meals.js');
const largeMealsRouter = require('./routes/large-meals.js');
const mealRouter = require('./routes/meal.js');
const reservationsRouter = require('./routes/reservations.js');
const reservationRouter = require('./routes/reservation.js');
const reviewsRouter = require('./routes/reviews.js');

app.get('/cheap-meals', cheapMealsRouter);
app.get('/large-meals', largeMealsRouter);
app.get('/meal', mealRouter);
app.get('/reservations', reservationsRouter);
app.get('/reservation', reservationRouter);


app.get('/meals', (request, response) => {
    const { maxPrice, title, createdAfter, limit } = request.query;

    if(maxPrice) { response.send(mealsRouter.getMaxPrice(maxPrice)) }
    else if(title) { response.send(mealsRouter.getTitle(title.toLowerCase())) }
    else if(createdAfter) { response.send(mealsRouter.getCreatedAfter(createdAfter)) }
    else if(limit) { response.send(mealsRouter.getLimit(limit)) }
    else {
        response.send(mealsRouter.mealsRouter());
    }
})
app.use((request,response,next) => {
    next();
})

app.get('/meals/:id', (request, response) => {
    let id = request.params.id;
    let date = mealsRouter.getMealCreatedDate(id);
    let str = date+" request received for path: " + request.originalUrl;
    let str2 = mealsRouter.getMealById(id);
    str2.log = str;
    response.send(str2);
})
app.get('/reservations/:id', (request, response) => {
    let id = request.params.id;
    response.send(reservationsRouter.getReservationsById(id));
})
app.get('/reviews/:id', (request, response) => {  
    let id = request.params.id;
    response.send(reviewsRouter.getReviewById(id));
})
app.get('/reviews', reviewsRouter);

app.listen(8000);