

var express = require('express');
var router = express.Router();
var branchRouter = require('../src/routes/BranchRoute')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/loaisp', branchRouter);
module.exports = router;
