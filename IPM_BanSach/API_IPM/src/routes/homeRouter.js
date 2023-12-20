
const express = require('express');
const HomeRouter = express.Router();
const ctr = require('../controllers/HomeController');
const authenticate = require('../middlewares/authMiddleware')

HomeRouter.get('/getspbyid/:id', ctr.GetSanphamById);
HomeRouter.post('/confirmOrder/:id', ctr.ConfirmOrder);
HomeRouter.get('/getkhachhangbysdt/:sdt', ctr.GetKhachHangBySdt);
HomeRouter.get('/getloaisp', ctr.GetLoaiSp);
HomeRouter.get('/gettacgia', ctr.GetTacGia);
HomeRouter.get('/getspbyloai/:id', ctr.GetSanphamByLoai);
HomeRouter.get('/getspbyname/:name', ctr.GetSanphamByName);
HomeRouter.get('/getsp/:pageIndex/:pageSize', ctr.GetSanPham);
HomeRouter.get('/getorderbysdt/:sdt', ctr.GetOrderBySdt);
HomeRouter.get('/getspbynsx/:id', ctr.GetSanphamByNsx);
HomeRouter.get('/getbytg/:id/:sl', ctr.GetSanphamByTg);
HomeRouter.get('/getspbyloaiid/:id/:sl', ctr.GetSpByLoaiId);
HomeRouter.get('/getbanchay/:sl', ctr.GetSanphamBanChay);
HomeRouter.get('/getsanphammoi/:sl', ctr.GetSanphamMoi);
HomeRouter.post('/createdonhang/', authenticate,ctr.CreateDonHang);
HomeRouter.get('/productCount/',ctr.GetTotalSanpham);
module.exports = HomeRouter;



