const db = require('../config/db')
const KhoRespository = {
    GetKhoById: function ( id, callback) {
        const sql = 'CALL GetKhoById(?)';
        db.query(sql, [id], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    GetAllKho: function ( callback) {
        const sql = 'CALL GetKhoAll()';
        db.query(sql, [], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },
};

module.exports = KhoRespository;
