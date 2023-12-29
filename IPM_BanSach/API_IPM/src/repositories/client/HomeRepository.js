const db = require('../../config/db');
const HomeRepository = {
    GetSanPhamBanChay: function ( soluong, callback) {
        const sql = 'CALL HomeBanChay(?)';
        db.query(sql, [soluong], function (error, [results]) {
            callback(error, results);
        });
    },

    GetSpByLoaiId: function ( id, soluong, callback) {
        const sql = 'CALL HomeGetSanPhamByLoai(?, ?)';
        db.query(sql, [id, soluong], function (error, [results]) {
            callback(error, results);
        });
    },
    GetTotalProduct: function (callback) {
        const sql = "SELECT COUNT(*) as total from sanpham inner join loaisp on sanpham.loai_id = loaisp.loai_id inner join tg on sanpham.tg_id = tg.tG_id inner join nhasx on sanpham.nsx_id = nhasx.nsx_id inner join giaca on sanpham.sanp_id = giaca.sanp_id"
        db.query(sql, [], function (error, [results]) {
            callback(error, results);
        });
    },

    GetSanPhamMoi: function ( soluong, callback) {
        const sql = 'CALL HomeGetMoi(?)';
        db.query(sql, [soluong], function (error, [results]) {
            callback(error, results);
        });
    },

    GetSanPham: function ( pageSize, pageIndex, callback) {
        const page = pageIndex || 1;
        const limit = pageSize || 10;
        const offset = (page - 1) * limit;
        const sql = 'CALL HomeGetSanPham(?, ?)';
        db.query(sql, [limit, offset], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
                
                // db.query(`
                // SELECT COUNT(*) as total from sanpham inner join loaisp on sanpham.loai_id = loaisp.loai_id inner join tg 
                // on sanpham.tg_id = tg.tG_id inner join nhasx on sanpham.nsx_id = nhasx.nsx_id inner join giaca on sanpham.sanp_id = giaca.sanp_id;`, [], function (error, totalProducts) {
                //     if (error) {
                //         callback(error, null);
                //     } else {
                //         const tt = totalProducts[0];
                //         const json = {
                //             results,
                //             total: tt,
                //         };
                //         callback(null, json);
                //     }
                // });
            }
        });
    },

    GetLoaiSp: function ( callback) {
        const sql = 'CALL GetTheLoaiAll()';
        db.query(sql, [], function (error, [results]) {
            callback(error, results);
        });
    },

    GetTacGia: function ( callback) {
        const sql = 'CALL GetAllTg()';
        db.query(sql, [], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    GetSanphamById: function ( id, callback) {
        const sql = 'CALL GetSanphamById(?)';
        db.query(sql, [id], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },

    GetKhachHangBySdt: function ( sdt, callback) {
        const sql = 'CALL HomeGetKhachHangBySdt(?)';
        db.query(sql, [sdt], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },

    GetSanphamByLoai: function ( id, callback) {
        const sql = 'CALL GetSanphamByLoai(?)';
        db.query(sql, [id], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    GetSanphamByNsx: function ( id, callback) {
        const sql = 'CALL GetSanphamByNsx(?)';
        db.query(sql, [id], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    GetSanphamByTg: function ( id, sl, callback) {
        const sql = 'CALL GetSanphamByTg(?, ?)';
        db.query(sql, [id, sl], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    GetSanphamByName: function ( name, callback) {
        const sql = 'CALL GetSanphamByName(?)';
        db.query(sql, [name], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

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
    
    
};


module.exports = HomeRepository;
