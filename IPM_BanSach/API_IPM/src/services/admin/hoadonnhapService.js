
const hoadonnhapRepository = require("../../repositories/admin/hoadonnhapRepository");
const HoaDonNhapService = {
    GetChiTietHoaDonNhapById: (id, callback) => {
        hoadonnhapRepository.GetChiTietHoaDonNhapById(id, (err, results) => {
            callback(err, results);
        });
    },
    GetAllHoaDonNhap: (pageSize, pageIndex, callback) => {
        hoadonnhapRepository.GetAllHoaDonNhap(pageSize, pageIndex, (err, results) => {
            callback(err, results);
        });
    },
    CreateHoaDonNhap: (maNguoiDung, nsx_id, callback) => {
        hoadonnhapRepository.CreateHoaDonNhap(maNguoiDung, nsx_id, (err, results) => {
            callback(err, results);
        });
    },
    CreateChiTietHoaDonNhap: (soHoaDon, sanp_id, soLuong, callback) => {
        hoadonnhapRepository.CreateChiTietHoaDonNhap(soHoaDon, sanp_id, soLuong, (err, results) => {
            callback(err, results);
        });
    }
};

module.exports = HoaDonNhapService;
