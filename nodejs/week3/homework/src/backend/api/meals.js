const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");

router.get("/", (request, response) => {

  let maxPrice = request.query.maxPrice;
  let title = request.query.title;
  let createdAfter = request.query.createdAfter;
  let limit = request.query.limit;
  let isAvail = request.query.availableReservations;
  let sql = "SELECT * FROM meal";
  
  if(maxPrice) sql = `SELECT * FROM meal WHERE price < ${maxPrice}`;
  else if(title) sql = `SELECT * FROM meal WHERE title = ${title}`;
  else if(createdAfter)  sql = `SELECT * FROM meal WHERE createdDate > ${createdAfter}`;
  else if(isAvail)  sql = `SELECT * FROM meal LIMIT ${limit}`;
  else if(limit)  sql = `SELECT * FROM meal`;

  pool.query(sql, function(error, results, fields) {
     if (error) throw error;
     response.send(results)
   });
});
router.get("/:id", (request, response) => {
  const id = request.params.id;

  pool.query('SELECT * FROM meal WHERE id = ?', id, function(error, results, fields) {
    if (error) throw error;
    response.send(results);
  });
});
router.post("/", (request, response) => {
  const r = request.body;
  let createdDate = new Date();
  let post = [r.id, r.title, r.description, r.location, r.when, r.max_reservations, r.price, createdDate];
  pool.query('INSERT INTO meal VALUES (?,?,?,?,?,?,?,?)', post, function(error, results, fields) {
    if (error) {
      if(error.code== 'ER_DUP_ENTRY') {
        console.log("Duplicate Entry");
      }
      throw error;
    }
    response.send(results);
  });
});

router.put("/:id", (request, response) => {
  const id = request.params.id;
  const r = request.body;

  pool.query('UPDATE meal SET title = ? WHERE id = ?', [r.title, id], function(error, results, fields) {
    if (error) throw error;
    response.send(results);
  });
});

router.delete("/:id", (request, response) => {
  const id = Number(request.params.id);
  pool.query('DELETE FROM  meal WHERE id = ?',id, function(error, results, fields) {
    if (error) throw error;
    response.send(results);
  });
});




module.exports = router;
