const mysql = require('mysql');
const express = require("express");
const app = express();
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'hyf'
});

connection.connect(null, function(err) {
    if(err) {
        console.error("Failed to connect to db.");
    }
    else {
        console.log("Connected to concerts...")
    }
})


// connection.query('insert into concerts values ("abc","aabc","aaabc","aaaabc","aaaaabc","bcde") ');
// connection.query('insert into concerts values ("abcd","aabc","aaabc","aaaabc","aaaaabc","bcde") ');
// connection.query('insert into concerts values ("abcde","aabc","aaabc","aaaabc","aaaaabc","bcde") ');
// connection.query('select * from concerts');
// connection.query('delete from concerts where title = "abc"')

function insertData(id, title, band, venue, performanceDate, price) {
    let createdDate = new Date();
    let post = [id, title, band, venue, createdDate, performanceDate, price];
    connection.query(`INSERT INTO concerts (id,title, band, venue, createdDate, performanceDate, price) VALUES (?,?,?,?,?,?,?)`,
        post, (err, result) => {
        if (err) throw err;
      });
}

function showData(cb) {
    connection.query("SELECT * FROM concerts", [], function (err, result) {
        if (err) throw err;
        cb(result);
      });
    
}
function showDataById(value, cb) {
    connection.query("SELECT * FROM concerts WHERE id = ?", value, function (err, result) {
        if (err) throw err;
        cb(result);
      });
    
}
function showDataByCondition(condition, cb) {
    let sql = connection.query("SELECT * FROM concerts WHERE ?? = ?", condition, function (err, result) {
        if (err) throw err;
        cb(result);
      });
}
function showDateCreatedAfter(condition, cb) {
    let sql = connection.query("SELECT * FROM concerts WHERE ?? > ?", condition, function (err, result) {
        if (err) throw err;
        cb(result);
      });
}
function getLimit(value, cb) {
    let sql = connection.query("SELECT * FROM concerts LIMIT ?", Number(value), function (err, result) {
        if (err) throw err;
        cb(result);
      });
}


function deleteData(id, cb) {
    connection.query("DELETE FROM concerts WHERE id = ?",id, function (err, result) {
        if (err) throw err; 
        cb(result);
      });
}
function updateData(id, title, cb) {
    connection.query("UPDATE concerts SET title = ? WHERE id = ?",[title,id], function (err, result) {
        if (err) throw err;
        cb(result);
      });
}

// insertData(4, "abc","aabc","aaabc", new Date(),100);
// insertData(5, "abcd","aabc","aaabc", new Date(),200);
// deleteData(1);
// updateData(4,"Blank title");

app.get("/api/concerts", (request, response) => {
    const priceValue = request.query.maxPrice;
    const title = request.query.title;
    const createdAfter = request.query.createdAfter;
    const limit = request.query.limit;
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
app.post('/api/concerts', (request, response) => {
    const r = request.body;
    response.send(insertData(r.id, r.title, r.band, r.venue, r.performanceDate, r.price));
});
app.put('/api/concerts/:id', (request, response) => {
    const id = request.params.id;
    const title = request.body.title;
    updateData(id,title,(concert => response.send(concert)));
});
app.delete('/concerts/:id', (request, response) => {
    const id = request.params.id;
    deleteData(id,(concert => response.send(concert)));
});


app.listen(8000);