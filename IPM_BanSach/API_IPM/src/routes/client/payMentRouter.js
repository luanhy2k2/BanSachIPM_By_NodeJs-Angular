const express = require('express');
const authenticate = require('../../middlewares/authMiddleware')
const payMentRouter = express.Router();
const ctr = require('../../controllers/client/payMentController');
payMentRouter.post('/createdonhang/', authenticate,ctr.CreateDonHang);
payMentRouter.post('/confirmOrder/:id', ctr.ConfirmOrder);
payMentRouter.get('/getorderbysdt/:sdt', ctr.GetOrderBySdt);
payMentRouter.get('/getorderdetailbysdt/:sdt', ctr.GetOrderDetailBySdt);
module.exports = payMentRouter;
