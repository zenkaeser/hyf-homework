const express = require('express');
const app = express();

app.get('/numbers/add', (request, response) => {
    let first = Number(request.query.first);
    let second = Number(request.query.second);
    let sum = first + second;
    response.send(JSON.stringify(sum));
})
app.get('/numbers/multiply/:first/:second', (request, response) => {
    let first = request.params["first"];
    let second = request.params["second"];
    let quotient = first * second;
    response.send(JSON.stringify(quotient));
})


app.listen(3000);