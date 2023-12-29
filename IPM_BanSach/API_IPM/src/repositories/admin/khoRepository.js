const db = require('../../config/db')
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
    getKho: function (id, pageSize, pageIndex, callback) {
        const page = pageIndex || 1;
        const limit = pageSize || 10;
        const offset = (page - 1) * limit;
        const sql = 'CALL GetKhoById(?, ?, ?)';
        db.query(sql, [id,limit, offset], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
               
                
                db.query(`
                SELECT COUNT(*) as total from chitietkho`, [], function (error, totalProducts) {
                    if (error) {
                        callback(error, null);
                    } else {
                        const tt = totalProducts[0];
                        const json = {
                            results,
                            total: tt,
                        };
                        callback(null, json);
                    }
                });
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
