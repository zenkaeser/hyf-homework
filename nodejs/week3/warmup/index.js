const express = require('express');
const app = express();

const paramValues = [];

app.get('/numbers/add', (request, response) => {
    let sum = 0;
    let values = request.query;

    for (const key in values) {
            paramValues.push(values[key]);
    }
    for(let i=0; i<paramValues.length; i++) {
        sum += Number(paramValues[i]);
    }
    response.send(JSON.stringify(sum));
})

app.get('/numbers/multiply', (request, response) => {
    let quotient;
    let values = request.query;

    for (const key in values) {
            paramValues.push(values[key]);
            if(values[key] === 0) {
                quotient = 0;
                break;
            }
            quotient = 1;
    }
    for(let i=0; i<paramValues.length; i++) {
        quotient *= Number(paramValues[i]);
    }
    response.send(JSON.stringify(quotient));
})

app.get('/numbers/multiply/:first/:second', (request, response) => {
    let first = request.params["first"];
    let second = request.params["second"];
    let quotient = first * second;
    response.send(JSON.stringify(quotient));
})


app.listen(3000);