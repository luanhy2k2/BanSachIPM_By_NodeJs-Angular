const express = require('express');
const SanphamRouter = express.Router();
const SanphamController = require('../controllers/SanphamController');

SanphamRouter.get('/getbyid/:id', SanphamController.GetSanphamById);
SanphamRouter.get('/getbyloai/:id', SanphamController.GetSanphamByLoai);
SanphamRouter.get('/getbyname/:name', SanphamController.GetSanphamByName);
SanphamRouter.get('/getbynsx/:id', SanphamController.GetSanphamByNsx);
SanphamRouter.get('/getbytg/:id', SanphamController.GetSanphamByTg);
SanphamRouter.get('/getall', SanphamController.GetAllSanpham);
SanphamRouter.post('/create', SanphamController.CreateSanpham);
SanphamRouter.post('/update', SanphamController.UpdateSanpham);
SanphamRouter.delete('/delete/:id', SanphamController.DeleteSanpham);

module.exports = SanphamRouter;
