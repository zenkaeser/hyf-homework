const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");


router.get("/", (request, response) => {
  pool.query('SELECT * FROM review', function(error, results, fields) {
    if (error) throw error;
    response.send(results)
  });

});
router.get("/:id", (request, response) => {
  const id = request.params.id;

  pool.query('SELECT * FROM review WHERE id = ?', id, function(error, results, fields) {
    if (error) throw error;
    response.send(results);
  });
});
router.post("/", (request, response) => {
  const r = request.body;
  let createdDate = new Date();
  let post = [r.id, r.title, r.description, r.meal_id, r.stars, createdDate];
  pool.query('INSERT INTO review VALUES (?,?,?,?,?,?)', post, function(error, results, fields) {
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

  pool.query('UPDATE review SET title = ? WHERE id = ?', [r.title, id], function(error, results, fields) {
    if (error) throw error;
    response.send(results);
  });
});

router.delete("/:id", (request, response) => {
  const id = Number(request.params.id);
  pool.query('DELETE FROM  review WHERE id = ?',id, function(error, results, fields) {
    if (error) throw error;
    response.send(results);
  });
});




module.exports = router;
