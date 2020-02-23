const mysql = require("mysql");
const express = require("express");
const app = express();
app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "hyf"
});

connection.connect(null, err => 
    err 
        ? console.error("Failed to connect to db.")
        : console.log("Connected to concerts...")
);

function insertData(id, title, band, venue, performanceDate, price) {
    const createdDate = new Date();
    const post = [id, title, band, venue, createdDate, performanceDate, price];
    
    connection.query(
       `INSERT INTO concerts (id,title, band, venue, createdDate, performanceDate, price) 
        VALUES (?,?,?,?,?,?,?)`, 
        post,
        (err) => {
            if (err) throw err;
        }
    );
}

function showData(cb) {
    connection.query("SELECT * FROM concerts", [], (err, result) => {
        if (err) throw err;
        cb(result);
      });
}

function showDataById(value, cb) {
    connection.query("SELECT * FROM concerts WHERE id = ?", value, (err, result) => {
        if (err) throw err;
        cb(result);
      });
}

function showDataByCondition(condition, cb) {
    connection.query("SELECT * FROM concerts WHERE 1 = 1 and", condition, (err, result) => {
        if (err) throw err;
        cb(result);
      });
}

function showDateCreatedAfter(condition, cb) {
    connection.query("SELECT * FROM concerts WHERE ?? > ?", condition, (err, result) => {
        if (err) throw err;
        cb(result);
      });
}

function getLimit(value, cb) {
    connection.query("SELECT * FROM concerts LIMIT ?", Number(value), (err, result) => {
        if (err) throw err;
        cb(result);
      });
}

function deleteData(id, cb) {
    connection.query("DELETE FROM concerts WHERE id = ?",id, (err, result) => {
        if (err) throw err; 
        cb(result);
      });
}

function updateData(id, title, cb) {
    connection.query("UPDATE concerts SET title = ? WHERE id = ?",[title,id], (err, result) => {
        if (err) throw err;
        cb(result);
      });
}

app.get("/api/concerts", (request, response) => {
    const { priceValue, title, createdAfter, limit } = request.query;
    let condition;

    if(priceValue) {
        condition = ["price", priceValue];
        showDataByCondition(condition, (concert => response.send(concert)));
    }
    else if(title) {
        condition = ["title", title];
        showDataByCondition(condition, (concert => response.send(concert)));
    }
    else if(createdAfter) {
        condition = ["createdDate", createdAfter];
        showDateCreatedAfter(condition, (concert => response.send(concert)));
    }
    else if(limit) {
        getLimit(limit, (concert => response.send(concert)));
    }
    else {
        showData(concert => response.send(concert));
    }
});

app.get("/api/concerts/:id", (request, response) => {
    const id = request.params.id;
    showDataById(id,(concert => response.send(concert)));
});

app.post("/api/concerts", (request, response) => {
    const r = request.body;
    response.send(insertData(r.id, r.title, r.band, r.venue, r.performanceDate, r.price));
});

app.put("/api/concerts/:id", (request, response) => {
    const id = request.params.id;
    const title = request.body.title;
    updateData(id,title,(concert => response.send(concert)));
});

app.delete("/concerts/:id", (request, response) => {
    const id = request.params.id;
    deleteData(id,(concert => response.send(concert)));
});

app.listen(8000);