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

//app.get("/meals", mealsRouter);
app.get('/cheap-meals', cheapMealsRouter);
app.get('/large-meals', largeMealsRouter);
app.get('/meal', mealRouter);
app.get('/reservations', reservationsRouter);
app.get('/reservation', reservationRouter);


app.get('/meals', (request, response) => {
    let maxPrice = request.query.maxPrice;
    let title = request.query.title;
    let createdAfter = request.query.createdAfter;
    let limit = request.query.limit;

    if(maxPrice) { response.send(mealsRouter.getMaxPrice(maxPrice)) }
    else if(title) { response.send(mealsRouter.getTitle(title)) }
    else if(createdAfter) { response.send(mealsRouter.getCreatedAfter(createdAfter)) }
    else if(limit) { response.send(mealsRouter.getLimit(limit)) }
    else {
        response.send(mealsRouter.getAllMeals());
    }
})
app.use((request,response,next) => {
    next();
})

app.get('/meals/:id', (request, response) => {
    let id = request.params.id;
    let date = mealsRouter.getMealsByIdWithDate(id);
    let str = date+" request received for path: " + request.originalUrl;
    let str2 = mealsRouter.getMealsById(id);
    str2.log = str;
    response.send(str2);
})
app.get('/reservations/:id', (request, response) => {
    let id = request.params.id;
    response.send(reservationsRouter.getReservationsById(id));
})
app.get('/reviews/:id', (request, response) => {  
    let id = request.params.id;
    response.send(reviewsRouter.getReviewsById(id));
})
app.get('/reviews', reviewsRouter);


app.listen(8000);