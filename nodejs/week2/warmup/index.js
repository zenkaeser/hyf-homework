const express = require('express');
const app = express();

app.get('/numbers/add', (request, response) => {
    const {first, second} = request.query;
    const sum = Number(first) + Number(second);

    response.send(JSON.stringify(sum));
})
app.get('/numbers/multiply/:first/:second', (request, response) => {
    const {first, second} = request.params;
    const quotient = first * second;
    
    response.send(JSON.stringify(quotient));
})

app.listen(3000);
