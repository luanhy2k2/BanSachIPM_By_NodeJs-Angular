const myRepository = require('../repositories/admin/tacgiaRepository')
const TacgiaService = {
    GetTacgiaById: (id, callback) => {
        myRepository.GetTacgiaById(id, (err, results) => {
            callback(err, results);
        });
    },
    GetTacgiaByName: (name, callback) => {
        myRepository.GetTacgiaByName(name, (err, results) => {
            callback(err, results);
        });
    },
    GetAllTacgia: (callback) => {
        myRepository.GetAllTacgia((err, results) => {
            callback(err, results);
        });
    },
    CreateTacgia: (Tacgia, callback) => {
        myRepository.CreateTacgia(Tacgia, (err, results) => {
            callback(err, results);
        });
    },
    UpdateTacgia: (Tacgia, callback) => {
        myRepository.UpdateTacgia(Tacgia, (err, results) => {
            callback(err, results);
        });
    },
    DeleteTacgia: (id, callback) => {
        myRepository.DeleteTacgia(id, (err, results) => {
            callback(err, results);
        });
    }
};

module.exports = TacgiaService;
