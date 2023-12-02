var express = require('express');
const db = require('../../config/database');
var route = express()
const ress = require('../client/a')
var myclass = new ress()
route.get('/categories', function(req, res){
     res.json(myclass.getAllLoaiSp());
})
    
module.exports = route;