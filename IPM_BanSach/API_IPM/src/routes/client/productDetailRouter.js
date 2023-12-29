const express = require('express');
const productDetailRouter = express.Router();
const Controller = require('../../controllers/client/productDetailController');

productDetailRouter.get('/getComment/:id', Controller.GetComment);
productDetailRouter.post('/addComment', Controller.addComment);
productDetailRouter.get('/getReplyComment/:id', Controller.GetReplyComment);
productDetailRouter.post('/addReplyComment', Controller.addReplyComment);

module.exports = productDetailRouter;
