const express = require("express");
const app = express();

app.get("/calculators/add", (request, response) => {
    let sum = 0;
    const values = request.query;

    for (const key in values) {
        sum += +key;
    }
    response.send(JSON.stringify(sum));
});

app.get("/calculators/multiply", (request, response) => {
    let quotient = 1;
    const values = request.query;

    for (const key in values) {
        quotient *= +key;
    }
    response.send(JSON.stringify(quotient));
});

app.get("/calculators/multiply/:first/:second", (request, response) => {
    const {first, second} = request.params;
    const quotient = first * second;

    response.send(JSON.stringify(quotient));
});

app.listen(3000);