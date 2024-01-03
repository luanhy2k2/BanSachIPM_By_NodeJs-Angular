const donhangService = require("../../services/admin/donhangService");

const DonHangController = {
  GetAllDonHang: (req, res) => {
    const pageSize = req.params.pageSize;
    const pageIndex = req.params.pageIndex;
    donhangService.GetAllDonHang(pageSize, pageIndex, (err, data) => {
      try {
        if (err) {
          console.error('Error fetching all DonHang: ' + err.stack);
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

  GetDonHangById: (req, res) => {
    const id = req.params.id;
    donhangService.GetDonHangById(id, (err, data) => {
      try {
        if (err) {
          console.error('Error fetching DonHang by ID: ' + err.stack);
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
  GetTotalDonhang(req, res) {
    
    donhangService.GetTotalDonhang( (err, data) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).send('Database error');
      }

      if (data) {
        res.json(data);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },
  GetChiTietDonHangById: (req, res) => {
    const id = req.params.id;
    donhangService.GetChiTietDonHangById(id, (err, data) => {
      try {
        if (err) {
          console.error('Error fetching ChiTietDonHang by ID: ' + err.stack);
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

  UpdateOrderStatus: (req, res) => {
    const id = req.params.id;
    donhangService.UpdateOrderStatus(id, (err) => {
      try {
        if (err) {
          console.error('Error updating OrderStatus: ' + err.stack);
          return res.status(500).json({ message: 'Update error' });
        }
        res.json({ message: 'Update thành công', data: true });
      } catch (error) {
        res.json({ message: error.message });
      }
    });
  },
  UpdateOrderDelivery: (req, res) => {
    const id = req.params.id;
    const st = req.params.st;
    donhangService.UpdateOrderDelivery(id,st, (err) => {
      try {
        if (err) {
          console.error('Error updating OrderStatus: ' + err.stack);
          return res.status(500).json({ message: 'Update error' });
        }
        res.json({ message: 'Update thành công', data: true });
      } catch (error) {
        res.json({ message: error.message });
      }
    });
  },

  UpdateQuantity: (req, res) => {
    const id = req.params.id;
    const sl = req.params.sl;
    donhangService.UpdateQuantity(id, sl, (err) => {
      try {
        if (err) {
          console.error('Error updating Quantity: ' + err.stack);
          return res.status(500).json({ message: 'Update error' });
        }
        res.json({ message: 'Update thành công', data: true });
      } catch (error) {
        res.json({ message: error.message });
      }
    });
  },
};

module.exports = DonHangController;
