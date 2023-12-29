const express = require('express');
const DonHangRouter = express.Router();
const DonHangController = require('../../controllers/admin/donhangConTroller');

DonHangRouter.get('/getbyid/:id', DonHangController.GetDonHangById);
DonHangRouter.get('/orderCount', DonHangController.GetTotalDonhang);
DonHangRouter.get('/getchitietbyid/:id', DonHangController.GetChiTietDonHangById);
DonHangRouter.get('/getall/:pageIndex/:pageSize', DonHangController.GetAllDonHang);
DonHangRouter.post('/updatestatus/:id', DonHangController.UpdateOrderStatus);
DonHangRouter.post('/updateDelivery/:id/:st', DonHangController.UpdateOrderDelivery);
DonHangRouter.post('/updatequantity/:id/:sl', DonHangController.UpdateQuantity);

module.exports = DonHangRouter;
