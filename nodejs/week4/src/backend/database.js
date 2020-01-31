// Inspiration taken from https://medium.com/@mhagemann/create-a-mysql-database-middleware-with-node-js-8-and-async-await-6984a09d49f4
var mysql = require("mysql");

require("dotenv").config();

var pool = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mealapp',
});


pool.connect((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
    console.error(err);
  }
  if(connection) // connection.release();
  return;
});



module.exports = pool;