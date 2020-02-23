const express = require("express");
const router = express.Router();
const pool = require("./../database");

router.get("/", (request, response) => {
  const { maxPrice, title, createdAfter, limit, availableReservations } = request.query;

  let sql = "SELECT * FROM meal";

  if((maxPrice)) {
    title = title.split('"').join('');
    sql += ' and price < '+maxPrice;
  }
  if(title) sql += ' and title like '+ "'%"+title+"%'";
  if(createdAfter)  sql += ' and created_date > "'+createdAfter+'"';
  if(limit)  sql += ' LIMIT '+ limit;
  if(availableReservations) {
    sql = sql.substring(19);
    sql = `
    SELECT meal.id, max_reservations, title, description 
	  FROM reservation 
      JOIN meal ON reservation.meal_id = meal.id 
      ${sql}
      GROUP BY meal_id 
      HAVING COUNT(meal_id) < max_reservations;
  `;
  }

  pool.query(sql, [], function(error, results) {
     if (error) throw error;

     response.send(results)
   });
});

router.get("/:id", (request, response) => {
  const id = request.params.id;

  pool.query('SELECT * FROM meal WHERE id = ?', id, function(error, results) {
    if (error) throw error;
    response.send(results);
  });
});

router.post("/", (request, response) => {
  const r = request.body;
  const  createdDate = new Date();
  let post = [r.id, r.title, r.description, r.location, r.when, r.max_reservations, r.price, createdDate];

  pool.query('INSERT INTO meal VALUES (?,?,?,?,?,?,?,?)', post, function(error, results) {
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
  const { id } = Number(request.params);
  pool.query('DELETE FROM  meal WHERE id = ?',id, function(error, results) {
    if (error) throw error;
    
    response.send(results);
  });
});

module.exports = router;
