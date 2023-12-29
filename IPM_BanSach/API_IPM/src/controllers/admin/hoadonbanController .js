const hoadonbanService = require("../../services/hoadonbanService");

const HoaDonBanController = {
  GetAllHoaDonBan: (req, res) => {
    const pageSize = req.params.pageSize;
    const pageIndex = req.params.pageIndex;
    hoadonbanService.GetAllHoaDonBan(pageSize, pageIndex, (err, data) => {
      try {
        if (err) {
          console.error('Error fetching all HoaDonBan: ' + err.stack);
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

  GetChiTietHoaDonBanById: (req, res) => {
    const id = req.params.id;
    hoadonbanService.GetChiTietHoaDonBanById(id, (err, data) => {
      try {
        if (err) {
          console.error('Error fetching ChiTietHoaDonBan by ID: ' + err.stack);
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

  GetHoaDonBanById: (req, res) => {
    const id = req.params.id;
    hoadonbanService.GetHoaDonBanById(id, (err, data) => {
      try {
        if (err) {
          console.error('Error fetching HoaDonBan by ID: ' + err.stack);
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

  CreateHoaDonBan: (req, res) => {
    const maKhachHang = req.body.maKhachHang;
    hoadonbanService.CreateHoaDonBan(maKhachHang, (err, data) => {
      try {
        if (err) {
          console.error('Error creating HoaDonBan: ' + err.stack);
          return res.status(500).json({ message: 'HoaDonBan creation error' });
        }
        res.json({ message: 'Thêm thành công', data: data });
      } catch (error) {
        res.json({ message: error.message });
      }
    });
  },

  CreateChiTietHoaDonBan: (req, res) => {
    const soHoaDon = req.body.soHoaDon;
    const sanp_id = req.body.sanp_id;
    const soLuong = req.body.soLuong;
    hoadonbanService.CreateChiTietHoaDonBan(soHoaDon, sanp_id, soLuong, (err) => {
      try {
        if (err) {
          console.error('Error creating ChiTietHoaDonBan: ' + err.stack);
          return res.status(500).json({ message: 'ChiTietHoaDonBan creation error' });
        }
        res.json({ message: 'Thêm thành công', data: true });
      } catch (error) {
        res.json({ message: error.message });
      }
    });
  },

  ConfirmCt: (req, res) => {
    const sanp_id = req.body.sanp_id;
    const soLuong = req.body.soLuong;
    hoadonbanService.ConfirmCt(sanp_id, soLuong, (err) => {
      try {
        if (err) {
          console.error('Error confirming ChiTietHoaDonBan: ' + err.stack);
          return res.status(500).json({ message: 'Confirmation error' });
        }
        res.json({ message: 'Xác nhận thành công', data: true });
      } catch (error) {
        res.json({ message: error.message });
      }
    });
  },
};

module.exports = HoaDonBanController;
