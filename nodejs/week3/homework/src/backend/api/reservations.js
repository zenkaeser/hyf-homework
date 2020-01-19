const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");

router.get("/", (request, response) => {

  let sql = "SELECT * FROM reservation";

  pool.query(sql, function(error, results, fields) {
     if (error) throw error;
     response.send(results)
   });
});
router.get("/:id", (request, response) => {
  const id = request.params.id;

  pool.query('SELECT * FROM reservation WHERE id = ?', id, function(error, results, fields) {
    if (error) throw error;
    response.send(results);
  });
});
router.post("/", (request, response) => {
  const r = request.body;
  let createdDate = new Date();
  let post = [r.id, r.number_of_guests, r.meal_id, createdDate];
  pool.query('INSERT INTO reservation VALUES (?,?,?,?)', post, function(error, results, fields) {
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

  pool.query('UPDATE reservation SET number_of_guests = ? WHERE id = ?', [r.number_of_guests, id], function(error, results, fields) {
    if (error) throw error;
    response.send(results);
  });
});

router.delete("/:id", (request, response) => {
  const id = Number(request.params.id);
  pool.query('DELETE FROM  reservation WHERE id = ?',id, function(error, results, fields) {
    if (error) throw error;
    response.send(results);
  });
});




module.exports = router;
