const express = require('express');
const router = express.Router();
const myController = require('../controllers/aController');

// Định nghĩa route và gọi hàm từ controller
router.get('/a', myController.myFunction);
router.get('/b', myController.all);
module.exports = router;