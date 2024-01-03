const db = require('../../config/db');
const payMentRepository = {
    GetOrderBySdt: function ( sdt, callback) {
        const sql = 'CALL HomeOrderSearch(?)';
        db.query(sql, [sdt], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },
    GetOrderDetailBySdt: function ( sdt, callback) {
        const sql = 'CALL myOrder(?)';
        db.query(sql, [sdt], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    
    confirmOrder: function ( id, callback) {
        const sql = 'CALL confirmOrder(?)';
        db.query(sql, [id], function (error) {
            callback(error, !error);
        });
    },

    CreateDonHang: function (khachhang, chitietdonhang, gia, callback) {
        const sqlInsertKhachHang = `INSERT INTO khachhang (tenKhachHang, diaChi, email, sdt) VALUES (?, ?, ?, ?)`;
        const valuesKhachHang = [
            khachhang.tenKhachHang,
            khachhang.diaChi,
            khachhang.email,
            khachhang.sdt,
        ];
    
        db.query(sqlInsertKhachHang, valuesKhachHang, function (error) {
            if (error) {
                return callback(error, null);
            }
    
            db.query("SELECT LAST_INSERT_ID() AS id", [], function (error, results) {
                if (error) {
                    return callback(error, null);
                }
    
                const maKhachHang = results[0].id;
    
                const sqlInsertDonHang = `INSERT INTO donhang (maKhachHang, ngayDat, trangThai, giaTien, trangThaiThanhToan) VALUES (?, curdate(), ?, ?, ?)`;
                const valuesDonHang = [maKhachHang, 'Chưa xác nhận', gia, 'Chưa thanh toán'];
    
                db.query(sqlInsertDonHang, valuesDonHang, function (error) {
                    if (error) {
                        return callback(error, null);
                    }
    
                    db.query("SELECT LAST_INSERT_ID() AS id", [], function (error, results) {
                        if (error) {
                            return callback(error, null);
                        }
    
                        const maDonHang = results[0].id;
    
                        const insertChitietDonHang = `INSERT INTO chitietdonhang (maDonHang, sanp_id, soLuong, gia) VALUES (?, ?, ?, ?)`;
    
                        // Sử dụng vòng lặp để thêm chi tiết đơn hàng cho từng sản phẩm
                        for (let i = 0; i < chitietdonhang.length; i++) {
                            const valuesChitietDonHang = [
                                maDonHang,
                                chitietdonhang[i].sanp_id,
                                chitietdonhang[i].quantity,
                                chitietdonhang[i].gia
                            ];
    
                            db.query(insertChitietDonHang, valuesChitietDonHang, function (error) {
                                if (error) {
                                    return callback(error, null);
                                }
    
                                // Kiểm tra nếu đã thêm chi tiết đơn hàng cho tất cả sản phẩm
                                if (i === chitietdonhang.length - 1) {
                                    callback(null, true);
                                }
                            });
                        }
                    });
                });
            });
        });
    },
}
module.exports = payMentRepository;