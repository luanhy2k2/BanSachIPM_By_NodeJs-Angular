const productDetailRepository = require("../../repositories/client/productDetailRepository");
const productDetailService = {
    getComment(id, callback){
        productDetailRepository.getComment(id, (err, results) =>{
            callback(err, results)
        })
    },
    addComment(id, content, us_id, callback){
        productDetailRepository.addComment(id, content, us_id, (err, results) =>{
            callback(err, results)
        })
    },
    GetSanphamById(id, callback) {
        productDetailRepository.GetSanphamById(id, (err, results) => {
            callback(err, results);
        });
    },
    GetSanphamByTg(id, sl, callback) {
        productDetailRepository.GetSanphamByTg(id, sl, (err, results) => {
            callback(err, results);
        });
    },
    getReplyComment(id, callback){
        productDetailRepository.getReplyComment(id, (err, results) =>{
            callback(err, results)
        })
    },
    addReplyComment(id, content, us_id, callback){
        productDetailRepository.addReplyComment(id, content, us_id, (err, results) =>{
            callback(err, results)
        })
    },
}
module.exports = productDetailService;
