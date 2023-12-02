
const donhangRepository = require("../repositories/donhangRepository");
const DonHangService = {
    GetDonHangById: (id, callback) => {
        donhangRepository.GetDonHangById(id, (err, results) => {
            callback(err, results);
        });
    },
    GetChiTietDonHangById: (id, callback) => {
        donhangRepository.GetChiTietDonHangById(id, (err, results) => {
            callback(err, results);
        });
    },
    GetAllDonHang: (pageSize, pageIndex, callback) => {
        donhangRepository.GetAllDonHang(pageSize, pageIndex, (err, results) => {
            callback(err, results);
        });
    },
    UpdateOrderStatus: (id, callback) => {
        donhangRepository.UpdateOrderStatus(id, (err, results) => {
            callback(err, results);
        });
    },
    UpdateQuantity: (id, sl, callback) => {
        donhangRepository.UpdateQuantity(id, sl, (err, results) => {
            callback(err, results);
        });
    }
};

module.exports = DonHangService;


