const db = require('../../config/db');
const TacgiaRepository = {
    GetTacgiaById: function ( id, callback) {
        const sql = 'CALL GetTgById(?)';
        db.query(sql, [id], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },
    GetTacgiaByName: function ( name, callback) {
        const sql = 'CALL searchTacgia(?)';
        db.query(sql, [name], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    GetAllTacgia: function ( callback) {
        const sql = 'CALL GetAllTg()';
        db.query(sql, [], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    CreateTacgia: function ( Tacgia, callback) {
        const sql = 'CALL CreateTg(?, ?, ?, ?)';
        db.query(sql, [Tacgia.email, Tacgia.sdt, Tacgia.tG_diaChi, Tacgia.tG_name], function (error) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, true);
            }
        });
    },

    UpdateTacgia: function ( Tacgia, callback) {
        const sql = 'CALL UpdateTg(?, ?, ?, ?, ?)';
        db.query(sql, [Tacgia.tG_id, Tacgia.tG_name, Tacgia.tG_diaChi, Tacgia.sdt, Tacgia.email], function (error) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, true);
            }
        });
    },

    DeleteTacgia: function ( id, callback) {
        const sql = 'CALL DeleteTg(?)';
        db.query(sql, [id], function (error) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, true);
            }
        });
    },
};

module.exports = TacgiaRepository;
