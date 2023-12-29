
const khoRepository = require("../repositories/admin/khoRepository");
const KhoService = {
    GetAllKho: (callback) => {
        khoRepository.GetAllKho((err, results) => {
            callback(err, results);
        });
    },
    GetKhoById: (id, callback) => {
        khoRepository.GetKhoById(id, (err, results) => {
            callback(err, results);
        });
    },
    GetKho: (id, pageSize,pageIndex, callback) => {
        khoRepository.getKho(id, pageSize,pageIndex, (err, results) => {
            callback(err, results);
        });
    }
};

module.exports = KhoService;
