import { Router } from 'express';
import 'reflect-metadata';
import danhmucRouter from './danhmucRouter';
import TacgiaRouter from './tacgiaRouter';
import { authenticate } from '../middlewares/authMiddleware';
import loaispRouter from './loaispRouter';
import nhasxRouter from './nhasxRouter';
import SanphamRouter from './sanphamRouter';
import HomeRouter from './homeRouter';
import userRouter from './userRouter';
import thongkeRouter from './thongkeRouter';
import KhoRouter from './khoRouter';
import DonHangRouter from './donhangRouter';
import HoaDonNhapRouter from './hoadonnhapRouter';
import HoaDonBanRouter from './hoadonbanRouter';

const router = Router();
router.use('/danh-muc',authenticate,  danhmucRouter);
router.use('/loaisp', loaispRouter);
router.use('/kho', KhoRouter);
router.use('/nhasx', nhasxRouter)
router.use('/tacgia',TacgiaRouter);
router.use('/sanpham',SanphamRouter);
router.use('/home', HomeRouter);
router.use('/user', userRouter);
router.use('/thongke', thongkeRouter);
router.use('/donhang', DonHangRouter);
router.use('/hoadonnhap', HoaDonNhapRouter)
router.use('/hoadonban', HoaDonBanRouter)
export default router;
