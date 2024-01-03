const payMentRepository = require("../../repositories/client/payMentRepository");
const payMentService = {
    GetOrderBySdt(sdt, callback) {
        payMentRepository.GetOrderBySdt(sdt, (err, results) => {
            callback(err, results);
        });
    },
    GetOrderDetailBySdt(sdt, callback) {
        payMentRepository.GetOrderDetailBySdt(sdt, (err, results) => {
            callback(err, results);
        });
    },
    
    CreateDonHang(khachhang, chitietdonhang, gia, callback) {
        payMentRepository.CreateDonHang(khachhang, chitietdonhang, gia, (err, results) => {
            callback(err, results);
        });
    },
    ConfirmOrder(id, callback) {
        payMentRepository.confirmOrder(id, (err, results) => {
            callback(err, results);
        });
    },

}
module.exports = payMentService;
