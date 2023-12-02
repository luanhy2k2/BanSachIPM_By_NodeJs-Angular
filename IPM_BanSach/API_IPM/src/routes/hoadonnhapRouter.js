const express = require('express');
const HoaDonNhapRouter = express.Router();
const HoaDonNhapController = require('../controllers/HoaDonNhapController');

HoaDonNhapRouter.get('/getchitietbyid/:id', HoaDonNhapController.GetChiTietHoaDonNhapById);
HoaDonNhapRouter.get('/getall/:pageIndex/:pageSize', HoaDonNhapController.GetAllHoaDonNhap);
HoaDonNhapRouter.post('/create', HoaDonNhapController.CreateHoaDonNhap);
HoaDonNhapRouter.post('/createchitiet', HoaDonNhapController.CreateChiTietHoaDonNhap);

module.exports = HoaDonNhapRouter;
