
const express = require('express');
const router = express.Router();
const khoRouter = require('./khoRouter');
const sanphamRouter = require('./sanphamRouter');
const donhangRouter = require('./donhangRouter');
const hoadonbanRouter = require('./hoadonbanRouter');
const hoadonnhapRouter = require('./hoadonnhapRouter');
const userRouter = require('./userRouter');
const nhasxRouter = require('./nhasxRouter');
const loaispRoute = require('./loaispRouter');
const homeRoute = require('./homeRouter');
const tacgiaRoute = require('./tacgiaRouter');
const thongkeRoute = require('./thongkeRouter');
const a = require('./basic/loaisp');
const b = require('./basic/tacgia')
// Định nghĩa route và gọi hàm từ controller
router.use('/loaisp', loaispRoute);
router.use('/home', homeRoute);
router.use('/tacgia', tacgiaRoute);
router.use('/thongke', thongkeRoute);
router.use('/sanpham', sanphamRouter);
router.use('/nhasx', nhasxRouter);
router.use('/donhang', donhangRouter);
router.use('/hoadonnhap', hoadonnhapRouter);
router.use('/hoadonban', hoadonbanRouter);
router.use('/user', userRouter);
router.use('/kho', khoRouter);
router.use('/a', a);
router.use('/b', b);
module.exports = router;