
const khoRepository = require("../repositories/khoRepository");
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
    }
};

module.exports = KhoService;
