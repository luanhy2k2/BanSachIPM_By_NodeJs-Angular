const db = require('../../config/database');
var express = require('express');
var route = express()
route.get('/getall', (req, res) => {
    db.query('CALL GetTheLoaiAll()', (err, results) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).send('Database error');
      }
      res.json(results);
    });
  });
  route.get('/getbyid/:id', (req, res) => {
    const id = req.params.id;
  
    // Call the stored procedure GetCategoryById with categoryId as a parameter
    db.query('CALL GetLoaiSpById(?)', [id], (err, [results]) => {
      if (err) {
        console.error('Error executing stored procedure: ' + err.stack);
        return res.status(500).send('Database error');
      }
  
      // Stored procedure results are usually an array; you might want to handle this accordingly
      res.json(results[0]);
    });
  });
  // Assuming 'db' is your database connection

  route.post('/create', (req, res) => {
    const newCategory = req.body;
  
    // Call the stored procedure CreateLoaiSp with danhmcu_id and name as parameters
    db.query('CALL CreateLoaiSp(?, ?)', [newCategory.danhmuc_id, newCategory.name], (err, results) => {
      if (err) {
        console.error('Error executing stored procedure:', err.stack);
        return res.status(500).send('Database error');
      }
  
      // Assuming the stored procedure results are an array; adjust this based on your actual results
      const createdCategory = results[0];
  
      // Sending the created category as a JSON response
      res.json(createdCategory);
    });
  });

module.exports = route;