const express = require('express');
const KhoRouter = express.Router();
const KhoController = require('../controllers/KhoController');

KhoRouter.get('/getbyid/:id', KhoController.GetKhoById);
KhoRouter.get('/getall', KhoController.GetAllKho);

module.exports = KhoRouter;
