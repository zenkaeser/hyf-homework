
// getting the footer and title  module on the same folder directory
// const getFooter = require("./footer");
const getTitle = require("./title");

// getting one of the core module - express
const express = require("express");
const app = express();

function createWebElement(title, content) {
    return `${getTitle(title)}<body>${content}</body>`;
}

// Building a Portfolio
app.get("/", (request, response) => {
    // the index location or the default web location
    const content = `
        <h1>Home</h1>
        <h2>Katrina Sayaang</h2>
        <h3>Front-end Developer</h3>
        <p>Simple human complicated by programming</p>
     `;
    response.send(createWebElement("Home", content)); 
});

app.get("/contact", (request, response) => {
    const content = `
         <h1>Contact</h1>
         <p>b7acksoul@gmail.com</p>
         <p>www.facebook.com/zenkaeser</p>
    `;
    response.send(createWebElement("Contact", content));
});

app.get("/educations", (request, response) => {
    const content = `
        <h1>Educations</h1>
        <p>Bachelor of Information in Information Technology</p>
    `;
    response.send(createWebElement("Education", content));
  });

app.get("/skills", (request, response) => {
    const content = `
            <h1>Skills</h1>
            <p>JavaScript</p>
        `;
    response.send(createWebElement("Skills", content));
});
app.get("/projects", (request, response) => {
    const content = `
            <h1>Projects</h1>
            <p>Title: Notes Saver </p>
            <p>CodeURL: <a href="https://codepen.io/zenkaeser/pen/vYBqgpQ">click here</a></p>
            <p>PreviewURL: <a href="https://codepen.io/zenkaeser/full/vYBqgpQ">click here</a></p>
            <img src="https://raw.githubusercontent.com/zenkaeser/imagefiles/master/Notes%20Saver.png" width="500px" alt="notes-saver-img">
        `;
    response.send(createWebElement("Skills", content));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));




