import {  Router } from "express";
import { container } from "tsyringe";
import { KhoController } from "../controllers/khoController";
const KhoRouter = Router();
const ctr = container.resolve(KhoController);
KhoRouter.get('/getbyid/:id', ctr.GetKhoById.bind(ctr) );
KhoRouter.get('/getall', ctr.GetAllKho.bind(ctr));

export default KhoRouter;
