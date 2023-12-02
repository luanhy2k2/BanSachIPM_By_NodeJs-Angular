
const hoadonbanRepository = require("../repositories/hoadonbanRepository");
const HoaDonBanService = {
    GetChiTietHoaDonBanById: (id, callback) => {
        hoadonbanRepository.GetChiTietHoaDonBanById(id, (err, results) => {
            callback(err, results);
        });
    },
    GetHoaDonBanById: (id, callback) => {
        hoadonbanRepository.GetHoaDonBanById(id, (err, results) => {
            callback(err, results);
        });
    },
    GetAllHoaDonBan: (pageSize, pageIndex, callback) => {
        hoadonbanRepository.GetAllHoaDonBan(pageSize, pageIndex, (err, results) => {
            callback(err, results);
        });
    },
    CreateHoaDonBan: (maKhachHang, callback) => {
        hoadonbanRepository.CreateHoaDonBan(maKhachHang, (err, results) => {
            callback(err, results);
        });
    },
    CreateChiTietHoaDonBan: (soHoaDon, sanp_id, soLuong, callback) => {
        hoadonbanRepository.CreateChiTietHoaDonBan(soHoaDon, sanp_id, soLuong, (err, results) => {
            callback(err, results);
        });
    },
    ConfirmCt: (sanp_id, soLuong, callback) => {
        hoadonbanRepository.ConfirmCt(sanp_id, soLuong, (err, results) => {
            callback(err, results);
        });
    }
};

module.exports = HoaDonBanService;

