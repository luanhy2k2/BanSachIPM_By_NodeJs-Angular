const express = require('express');
const TacgiaRouter = express.Router();
const ctr = require('../../controllers/admin/tacgiaController');
TacgiaRouter.get('/getbyname/:name', ctr.GetTacgiaByName);
TacgiaRouter.get('/getbyid/:id', ctr.GetTacgiaById);
TacgiaRouter.get('/getall', ctr.GetAllTacgia);
TacgiaRouter.post('/create', ctr.CreateTacgia);
TacgiaRouter.post('/update', ctr.UpdateTacgia);
TacgiaRouter.delete('/delete/:id', ctr.DeleteTacgia);

module.exports = TacgiaRouter;
