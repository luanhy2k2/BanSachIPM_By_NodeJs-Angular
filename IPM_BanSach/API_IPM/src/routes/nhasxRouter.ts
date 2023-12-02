import {  Router } from "express";
import { container } from "tsyringe";
import { NhasxController } from "../controllers/nhasxController";
const nhasxRouter = Router();
const ctr = container.resolve(NhasxController);
nhasxRouter.get('/getbyid/:id', ctr.GetNhasxById.bind(ctr) );
nhasxRouter.get('/getbyname/:name', ctr.GetByName.bind(ctr) );
nhasxRouter.get('/getall', ctr.GetAllNhasx.bind(ctr));
nhasxRouter.post('/create', ctr.CreateNhasx.bind(ctr));
nhasxRouter.post('/update', ctr.UpdateNhasx.bind(ctr));
nhasxRouter.delete('/delete/:id', ctr.DeleteNhasx.bind(ctr));
export default nhasxRouter;
