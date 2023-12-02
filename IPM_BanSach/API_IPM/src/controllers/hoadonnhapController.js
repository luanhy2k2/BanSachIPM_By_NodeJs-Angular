const hoadonnhapService = require("../services/hoadonnhapService");

const HoaDonNhapController = {
  GetAllHoaDonNhap: (req, res) => {
    const pageSize = req.params.pageSize;
    const pageIndex = req.params.pageIndex;
    hoadonnhapService.GetAllHoaDonNhap(pageSize, pageIndex, (err, data) => {
      try {
        if (err) {
          console.error('Error fetching all HoaDonNhap: ' + err.stack);
          return res.status(500).json({ message: 'Database error' });
        }
        if (data) {
          res.json(data);
        } else {
          res.json({ message: 'Không lấy được danh sách' });
        }
      } catch (error) {
        res.json({ message: error.message });
      }
    });
  },

  GetChiTietHoaDonNhapById: (req, res) => {
    const id = req.params.id;
    hoadonnhapService.GetChiTietHoaDonNhapById(id, (err, data) => {
      try {
        if (err) {
          console.error('Error fetching ChiTietHoaDonNhap by ID: ' + err.stack);
          return res.status(500).json({ message: 'Database error' });
        }
        if (data) {
          res.json(data);
        } else {
          res.json({ message: 'Bản ghi không tồn tại' });
        }
      } catch (error) {
        res.json({ message: error.message });
      }
    });
  },

  CreateHoaDonNhap: (req, res) => {
    const maNguoiDung = req.body.maNguoiDung;
    const nsx_id = req.body.nsx_id;
    hoadonnhapService.CreateHoaDonNhap(maNguoiDung, nsx_id, (err) => {
      try {
        if (err) {
          console.error('Error creating HoaDonNhap: ' + err.stack);
          return res.status(500).json({ message: 'HoaDonNhap creation error' });
        }
        res.json({ message: 'Thêm thành công', data: true });
      } catch (error) {
        res.json({ message: error.message });
      }
    });
  },

  CreateChiTietHoaDonNhap: (req, res) => {
    const soHoaDon = req.body.soHoaDon;
    const sanp_id = req.body.sanp_id;
    const soLuong = req.body.soLuong;
    hoadonnhapService.CreateChiTietHoaDonNhap(soHoaDon, sanp_id, soLuong, (err) => {
      try {
        if (err) {
          console.error('Error creating ChiTietHoaDonNhap: ' + err.stack);
          return res.status(500).json({ message: 'ChiTietHoaDonNhap creation error' });
        }
        res.json({ message: 'Thêm thành công', data: true });
      } catch (error) {
        res.json({ message: error.message });
      }
    });
  },
};

module.exports = HoaDonNhapController;
