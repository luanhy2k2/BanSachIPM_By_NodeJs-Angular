const homeService = require("../services/homeService");
const HomeController = {
  GetSanphamById(req, res) {
    const id = req.params.id;
    homeService.GetSanphamById(id, (err, data) => {
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

  ConfirmOrder(req, res) {
    const id = req.params.id;
    homeService.ConfirmOrder(id, (err) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).send('Database error');
      }

      res.json({ message: 'Hoàn thành đơn hàng', data: true });
    });
  },
  GetKhachHangBySdt(req, res) {
    const sdt = req.params.sdt;
    homeService.GetKhachHangBySdt(sdt, (err, data) => {
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
  GetTotalSanpham(req, res) {
    
    homeService.GetTotalSanpham( (err, data) => {
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
  GetSanphamByName(req, res) {
    const name = req.params.name;
    homeService.GetSanphamByName(name, (err, data) => {
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

  GetSanPham(req, res) {
    const pageSize = req.params.pageSize;
    const pageIndex = req.params.pageIndex;
    homeService.GetSanPham(pageSize, pageIndex, (err, data) => {
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

  GetOrderBySdt(req, res) {
    const sdt = req.params.sdt;
    homeService.GetOrderBySdt(sdt, (err, data) => {
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
  GetSanphamByLoai(req, res) {
    const id = req.params.id;
    homeService.GetSanphamByLoai(id, (err, data) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).send('Database error');
      }

      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },
  GetSanphamByTg(req, res) {
    const id = req.params.id;
    const sl = req.params.sl;
    homeService.GetSanphamByTg(id, sl, (err, data) => {
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
  },GetSanphamBanChay(req, res) {
    const sl = req.params.sl;
    homeService.GetSanPhamBanChay(sl, (err, data) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).send('Database error');
      }

      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },
  GetSanphamMoi(req, res) {
    const sl = req.params.sl;
    homeService.GetSanPhamMoi(sl, (err, data) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).send('Database error');
      }

      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },
  GetSpByLoaiId(req, res) {
    const sl = req.params.sl;
    const id = req.params.id;
    homeService.GetSpByLoaiId(id, sl, (err, data) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).send('Database error');
      }

      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },

  GetSanphamByNsx(req, res) {
    const id = req.params.id;
    homeService.GetSanphamByNsx(id, (err, data) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).send('Database error');
      }

      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },
  GetLoaiSp(req, res) {
    homeService.GetLoaiSp((err, data) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).send('Database error');
      }

      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },
  // ... (similar modifications for other functions)

  GetTacGia(req, res) {
    homeService.GetTacGia((err, data) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).send('Database error');
      }

      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },
  // ... (similar modifications for other functions)

  CreateDonHang(req, res) {
    const khachhang = req.body.khachhang;
    const listchitiet = req.body.listchitiet;
    const gia = req.body.gia;

    homeService.CreateDonHang(khachhang, listchitiet, gia, (err) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).send('Database error');
      }

      res.json({ message: 'Thêm thành công', data: true });
    });
  }
}

module.exports = HomeController;
