const db = require('../config/db')
const HoaDonNhapRepository = {
    CreateHoaDonNhap: function ( maNguoiDung, nsx_id, callback) {
        const sql = 'CALL CreateHoaDonNhap(?,?)';
        db.query(sql, [maNguoiDung, nsx_id], function (error) {
            if (error) {
                callback(error);
            } else {
                callback(null, true);
            }
        });
    },

    CreateChiTietHoaDonNhap: function ( soHoaDon, sanp_id, soLuong, callback) {
        const sql = 'CALL CreteChiTietHoaDonNhap(?,?,?)';
        db.query(sql, [soHoaDon, sanp_id, soLuong], function (error) {
            if (error) {
                callback(error);
            } else {
                callback(null, true);
            }
        });
    },

    GetChiTietHoaDonNhapById: function ( id, callback) {
        const sql = 'CALL GetChiTietHoaDonNhap(?)';
        db.query(sql, [id], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    GetAllHoaDonNhap: function ( pageSize, pageIndex, callback) {
        const page = pageIndex || 1;
        const limit = pageSize || 10;
        const offset = (page - 1) * limit;
        const sql = 'CALL GetAllHoaDonNhap(?,?)';
        db.query(sql, [limit, offset], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                db.query(
                    'SELECT COUNT(*) as total from HoaDonNhap;',
                    [],
                    function (errorCount, [totalProducts]) {
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
                    }
                );
            }
        });
    },
};

module.exports = HoaDonNhapRepository;
