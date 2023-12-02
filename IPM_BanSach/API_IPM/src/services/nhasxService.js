
const nhasxRepository = require("../repositories/nhasxRepository");

const NhasxService = {
    GetNhasxById: (id, callback) => {
        nhasxRepository.GetNhasxById(id, (err, results) => {
            callback(err, results);
        });
    },
    GetAllNhasx: (callback) => {
        nhasxRepository.GetAllNhasx((err, results) => {
            callback(err, results);
        });
    },
    GetByName: (name, callback) => {
        nhasxRepository.GetByName(name, (err, results) => {
            callback(err, results);
        });
    },
    CreateNhasx: (nhasx, callback) => {
        nhasxRepository.CreateNhasx(nhasx, (err, results) => {
            callback(err, results);
        });
    },
    UpdateNhasx: (nhasx, callback) => {
        nhasxRepository.UpdateNhasx(nhasx, (err, results) => {
            callback(err, results);
        });
    },
    DeleteNhasx: (id, callback) => {
        nhasxRepository.DeleteNhasx(id, (err, results) => {
            callback(err, results);
        });
    }
};

module.exports = NhasxService;
