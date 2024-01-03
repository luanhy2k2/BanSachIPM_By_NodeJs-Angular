
const express = require('express');
const HomeRouter = express.Router();
const ctr = require('../../controllers/client/HomeController');

HomeRouter.get('/getkhachhangbysdt/:sdt', ctr.GetKhachHangBySdt);
HomeRouter.get('/getloaisp', ctr.GetLoaiSp);
HomeRouter.get('/gettacgia', ctr.GetTacGia);
HomeRouter.get('/getspbyloai/:id', ctr.GetSanphamByLoai);
HomeRouter.get('/getspbyname/:name', ctr.GetSanphamByName);
HomeRouter.get('/getsp/:pageIndex/:pageSize', ctr.GetSanPham);
HomeRouter.get('/getspbynsx/:id', ctr.GetSanphamByNsx);

HomeRouter.get('/getspbyloaiid/:id/:sl', ctr.GetSpByLoaiId);
HomeRouter.get('/getbanchay/:sl', ctr.GetSanphamBanChay);
HomeRouter.get('/getsanphammoi/:sl', ctr.GetSanphamMoi);

HomeRouter.get('/productCount/',ctr.GetTotalSanpham);
module.exports = HomeRouter;



