import {  Router } from "express";
import { container } from "tsyringe";
import { HoaDonBanController } from "../controllers/hoadonbanController ";
const HoaDonBanRouter = Router();
const ctr = container.resolve(HoaDonBanController);

HoaDonBanRouter.get('/getchitietbyid/:id', ctr.GetChiTietHoaDonBanById.bind(ctr) );
HoaDonBanRouter.get('/gethoadonbyid/:id', ctr.GetHoaDonBanById.bind(ctr) );
HoaDonBanRouter.get('/getall/:pageIndex/:pageSize', ctr.GetAllHoaDonBan.bind(ctr));
HoaDonBanRouter.post('/create', ctr.CreateHoaDonBan.bind(ctr) );
HoaDonBanRouter.post('/createchitiet', ctr.CreateChiTietHoaDonBan.bind(ctr) );
HoaDonBanRouter.post('/confirmct', ctr.ConfirmCt.bind(ctr) );
export default HoaDonBanRouter;
