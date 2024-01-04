
const express = require('express');
const router = express.Router();
const khoRouter = require('./admin/khoRouter');
const sanphamRouter = require('./admin/sanphamRouter');
const donhangRouter = require('./admin/donhangRouter');
const hoadonbanRouter = require('./admin/hoadonbanRouter');
const hoadonnhapRouter = require('./admin/hoadonnhapRouter');
const userRouter = require('./userRouter');
const nhasxRouter = require('./admin/nhasxRouter');
const loaispRoute = require('./admin/loaispRouter');
const homeRoute = require('./client/homeRouter');
const tacgiaRoute = require('./admin/tacgiaRouter');
const thongkeRoute = require('./admin/thongkeRouter');
const productDetailRoute = require('./client/productDetailRouter')
const payMentRoute = require('./client/payMentRouter')
const confirm = require('./admin/donhang');
// Định nghĩa route và gọi hàm từ controller
router.use('/loaisp', loaispRoute);
router.use('/dh', confirm);
router.use('/comment', loaispRoute);
router.use('/home', homeRoute);
router.use('/home', payMentRoute);
router.use('/tacgia', tacgiaRoute);
router.use('/thongke', thongkeRoute);
router.use('/sanpham', sanphamRouter);
router.use('/nhasx', nhasxRouter);
router.use('/donhang', donhangRouter);
router.use('/hoadonnhap', hoadonnhapRouter);
router.use('/hoadonban', hoadonbanRouter);
router.use('/user', userRouter);
router.use('/kho', khoRouter);
router.use('/productDetail', productDetailRoute);
module.exports = router;