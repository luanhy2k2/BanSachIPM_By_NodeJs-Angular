import {  Router } from "express";
import { container } from "tsyringe";
import { HoaDonNhapController } from "../controllers/hoadonnhapController";
const HoaDonNhapRouter = Router();
const ctr = container.resolve(HoaDonNhapController);

HoaDonNhapRouter.get('/getchitietbyid/:id', ctr.GetChiTietHoaDonNhapById.bind(ctr) );
HoaDonNhapRouter.get('/getall/:pageIndex/:pageSize', ctr.GetAllHoaDonNhap.bind(ctr));
HoaDonNhapRouter.post('/create', ctr.CreateHoaDonNhap.bind(ctr) );
HoaDonNhapRouter.post('/createchitiet', ctr.CreateChiTietHoaDonNhap.bind(ctr) );
export default HoaDonNhapRouter;
