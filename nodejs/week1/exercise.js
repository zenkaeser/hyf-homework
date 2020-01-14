// const express = require('express');
// const app = express();

// app.get('/index.html', (req, res) => {
//     res.send("Hello index.html");
// })

// app.get('/', (req, res) => {
//     res.send("Hello from not index.html");
// })

// app.listen(8000);



const express = require("express");
const getTitle = require("./title");
const doStyle = require("./styles");

// const getFooter = require("./footer");
const app = express();



app.get("/", (request, response) => {
    let r = getTitle("Home");
    r += `<body>
            <h1>Katrina Sayaang</h1>
            <h2>Front-end Web Developer</h2>
            <p>Simple and honest</p>
         </body>
         ${doStyle()}
         `
    response.send(r);
    
});

app.get("/contact", (request, response) => {
    let r = getTitle("Contact");
    r += `<body>
             <h1>Contact</h1>
             <p>b7acksoul@gmail.com</p>
             <p>www.facebook.com/zenkaeser</p>
         </body>
        `;
    response.send(r);
});

app.get("/educations", (request, response) => {
    let r = getTitle("Education");
    r += `<body>
            <h1>Education</h1>
            <p>\Bachelor of Information in Information Technology</p>
         </body>
        `;
    response.send(r);
  });

app.get("/skills", (request, response) => {
    let r = getTitle("Skills");
    r += `<body>
            <h1>Skills</h1>
            <p>JavaScript</p>
        </body>
        `;
    response.send(r);
});

app.listen(8000);
