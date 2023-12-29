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
