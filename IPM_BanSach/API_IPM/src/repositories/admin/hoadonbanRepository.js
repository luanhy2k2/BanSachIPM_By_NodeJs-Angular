const db = require('../../config/db');
const HoaDonBanRepository = {
    CreateHoaDonBan: function ( maKhachHang, callback) {
        const sql = 'CALL CreateHoaDonBan(?)';
        db.query(sql, [maKhachHang], function (error, data) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, data);
            }
        });
    },

    CreateChiTietHoaDonBan: function ( soHoaDon, sanp_id, soLuong, callback) {
        const sql = 'CALL CreteChiTietHoaDonBan(?,?,?)';
        db.query(sql, [soHoaDon, sanp_id, soLuong], function (error) {
            if (error) {
                callback(error);
            } else {
                callback(null, true);
            }
        });
    },

    ConfirmCt: function ( sanp_id, soLuong, callback) {
        const sql = 'CALL ConfirmCt(?,?)';
        db.query(sql, [sanp_id, soLuong], function (error) {
            if (error) {
                callback(error);
            } else {
                callback(null, true);
            }
        });
    },

    GetChiTietHoaDonBanById: function ( id, callback) {
        const sql = 'CALL GetChiTietHoaDonBan(?)';
        db.query(sql, [id], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    GetHoaDonBanById: function ( id, callback) {
        const sql = 'CALL GetHoaDonBanById(?)';
        db.query(sql, [id], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },

    GetAllHoaDonBan: function ( pageSize, pageIndex, callback) {
        const page = pageIndex || 1;
        const limit = pageSize || 10;
        const offset = (page - 1) * limit;
        const sql = 'CALL GetAllHoaDonBan(?,?)';
        db.query(sql, [limit, offset], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                db.query('SELECT COUNT(*) as total from HoaDonBan;', [], function (
                    errorCount,
                    [totalProducts]
                ) {
                    if (errorCount) {
                        callback(errorCount, null);
                    } else {
                        const tt = totalProducts.total;
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
};

module.exports = HoaDonBanRepository;
