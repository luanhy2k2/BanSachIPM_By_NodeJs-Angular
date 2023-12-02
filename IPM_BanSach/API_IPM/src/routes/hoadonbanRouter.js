const express = require('express');
const HoaDonBanRouter = express.Router();
const HoaDonBanController = require('../controllers/hoadonbanController ');

HoaDonBanRouter.get('/getchitietbyid/:id', HoaDonBanController.GetChiTietHoaDonBanById);
HoaDonBanRouter.get('/gethoadonbyid/:id', HoaDonBanController.GetHoaDonBanById);
HoaDonBanRouter.get('/getall/:pageIndex/:pageSize', HoaDonBanController.GetAllHoaDonBan);
HoaDonBanRouter.post('/create', HoaDonBanController.CreateHoaDonBan);
HoaDonBanRouter.post('/createchitiet', HoaDonBanController.CreateChiTietHoaDonBan);
HoaDonBanRouter.post('/confirmct', HoaDonBanController.ConfirmCt);

module.exports = HoaDonBanRouter;
