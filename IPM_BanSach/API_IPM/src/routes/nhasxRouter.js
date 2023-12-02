const express = require('express');
const nhasxRouter = express.Router();
const nhasxController = require('../controllers/nhasxController');

nhasxRouter.get('/getbyid/:id', nhasxController.GetNhasxById);
nhasxRouter.get('/getbyname/:name', nhasxController.GetByName);
nhasxRouter.get('/getall', nhasxController.GetAllNhasx);
nhasxRouter.post('/create', nhasxController.CreateNhasx);
nhasxRouter.post('/update', nhasxController.UpdateNhasx);
nhasxRouter.delete('/delete/:id', nhasxController.DeleteNhasx);

module.exports = nhasxRouter;
