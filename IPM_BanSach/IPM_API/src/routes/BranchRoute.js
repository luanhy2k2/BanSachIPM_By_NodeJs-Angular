
const { Router } = require("express");
require("reflect-metadata");
const { container } = require("tsyringe");
const { BranchController } = require("../controller/BranchController");
const branchRouter = Router();
const ctr = container.resolve(BranchController);

branchRouter.get('/getbyid/:id', ctr.GetLoaiSpById.bind(ctr));
branchRouter.get('/getall', ctr.GetAllLoaiSp.bind(ctr));
branchRouter.post('/create', ctr.CreateLoaiSp.bind(ctr));
branchRouter.post('/update', ctr.UpdateLoaiSp.bind(ctr));
branchRouter.delete('/delete/:id', ctr.DeleteLoaiSp.bind(ctr));

module.exports = branchRouter;
