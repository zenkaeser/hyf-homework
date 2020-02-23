const express = require('express');
const app = express();

app.get('/numbers/add', (request, response) => {
    const first = Number(request.query.first);
    const second = Number(request.query.second);
    const sum = first + second;
    response.send(JSON.stringify(sum));
})
app.get('/numbers/multiply/:first/:second', (request, response) => {
    const first = request.params["first"];
    const second = request.params["second"];
    const quotient = first * second;
    response.send(JSON.stringify(quotient));
})

app.listen(3000);