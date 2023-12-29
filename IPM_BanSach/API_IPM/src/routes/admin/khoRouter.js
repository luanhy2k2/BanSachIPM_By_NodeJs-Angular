const express = require('express');
const KhoRouter = express.Router();
const KhoController = require('../../controllers/admin/khoController');

KhoRouter.get('/getbyid/:id', KhoController.GetKhoById);
KhoRouter.get('/getkho/:id/:pageSize/:pageIndex', KhoController.GetKho);
KhoRouter.get('/getall', KhoController.GetAllKho);

module.exports = KhoRouter;
