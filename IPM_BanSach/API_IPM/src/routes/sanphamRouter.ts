import {  Router } from "express";
import { container } from "tsyringe";
import { SanphamController } from "../controllers/sanphamController";
const SanphamRouter = Router();
const ctr = container.resolve(SanphamController);
SanphamRouter.get('/getbyid/:id', ctr.GetSanphamById.bind(ctr) );
SanphamRouter.get('/getbyloai/:id', ctr.GetSanphamByLoai.bind(ctr) );
SanphamRouter.get('/getbyname/:name', ctr.GetSanphamByName.bind(ctr) );
SanphamRouter.get('/getbynsx/:id', ctr.GetSanphamByNsx.bind(ctr) );
SanphamRouter.get('/getbytg/:id', ctr.GetSanphamByTg.bind(ctr) );
SanphamRouter.get('/getall', ctr.GetAllSanpham.bind(ctr));
SanphamRouter.post('/create', ctr.CreateSanpham.bind(ctr));
SanphamRouter.post('/update', ctr.UpdateSanpham.bind(ctr));
SanphamRouter.delete('/delete/:id', ctr.DeleteSanpham.bind(ctr));
export default SanphamRouter;