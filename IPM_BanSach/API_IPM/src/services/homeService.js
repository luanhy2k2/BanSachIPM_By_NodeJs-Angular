const HomeRepository = require("../repositories/HomeRepository");

const HomeService = {
    GetSanphamById(id, callback) {
        HomeRepository.GetSanphamById(id, (err, results) => {
            callback(err, results);
        });
    },

    ConfirmOrder(id, callback) {
        HomeRepository.confirmOrder(id, (err, results) => {
            callback(err, results);
        });
    },

    GetKhachHangBySdt(sdt, callback) {
        HomeRepository.GetKhachHangBySdt(sdt, (err, results) => {
            callback(err, results);
        });
    },

    GetSanphamByName(name, callback) {
        HomeRepository.GetSanphamByName(name, (err, results) => {
            callback(err, results);
        });
    },

    GetSanPham(pageSize, pageIndex, callback) {
        HomeRepository.GetSanPham(pageSize, pageIndex, (err, results) => {
            callback(err, results);
        });
    },

    GetTotalSanpham(callback) {
        HomeRepository.GetTotalProduct((err, results) => {
            callback(err, results);
        });
    },
    GetOrderBySdt(sdt, callback) {
        HomeRepository.GetOrderBySdt(sdt, (err, results) => {
            callback(err, results);
        });
    },

    GetSanphamByNsx(id, callback) {
        HomeRepository.GetSanphamByNsx(id, (err, results) => {
            callback(err, results);
        });
    },

    GetSanphamByTg(id, sl, callback) {
        HomeRepository.GetSanphamByTg(id, sl, (err, results) => {
            callback(err, results);
        });
    },

    GetSanphamByLoai(id, callback) {
        HomeRepository.GetSanphamByLoai(id, (err, results) => {
            callback(err, results);
        });
    },

    GetSanPhamBanChay(id, callback) {
        HomeRepository.GetSanPhamBanChay(id, (err, results) => {
            callback(err, results);
        });
    },

    GetSpByLoaiId(id, soluong, callback) {
        HomeRepository.GetSpByLoaiId(id, soluong, (err, results) => {
            callback(err, results);
        });
    },

    GetSanPhamMoi(id, callback) {
        HomeRepository.GetSanPhamMoi(id, (err, results) => {
            callback(err, results);
        });
    },

    CreateDonHang(khachhang, chitietdonhang, gia, callback) {
        HomeRepository.CreateDonHang(khachhang, chitietdonhang, gia, (err, results) => {
            callback(err, results);
        });
    },

    GetLoaiSp(callback) {
        HomeRepository.GetLoaiSp((err, results) => {
            callback(err, results);
        });
    },

    GetTacGia(callback) {
        HomeRepository.GetTacGia((err, results) => {
            callback(err, results);
        });
    }
}

module.exports = HomeService;
