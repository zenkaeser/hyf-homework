const express = require('express');
const app = express();
app.use(express.json());


const mealsRouter = require('./routes/meals.js');
const cheapMealsRouter = require('./routes/cheap-meals.js');
const largeMealsRouter = require('./routes/large-meals.js');
const mealRouter = require('./routes/meal.js');
const reservationsRouter = require('./routes/reservations.js');
const reservationRouter = require('./routes/reservation.js');

app.get("/meals", mealsRouter);
app.get('/cheap-meals', cheapMealsRouter);
app.get('/large-meals', largeMealsRouter);
app.get('/meal', mealRouter);
app.get('/reservations', reservationsRouter);
app.get('/reservation', reservationRouter);


app.listen(8000);