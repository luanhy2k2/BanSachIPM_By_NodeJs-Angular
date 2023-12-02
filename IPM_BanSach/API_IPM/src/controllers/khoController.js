const khoService = require("../services/khoService");

const KhoController = {
  GetAllKho: (req, res) => {
    khoService.GetAllKho((err, data) => {
      try {
        if (err) {
          console.error('Error fetching all Kho: ' + err.stack);
          return res.status(500).json({ message: 'Database error' });
        }
        if (data && data.length > 0) {
          res.json(data);
        } else {
          res.json({ message: 'Không lấy được danh sách' });
        }
      } catch (error) {
        res.json({ message: error.message });
      }
    });
  },

  GetKhoById: (req, res) => {
    const id = req.params.id;
    khoService.GetKhoById(id, (err, data) => {
      try {
        if (err) {
          console.error('Error fetching Kho by ID: ' + err.stack);
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
};

module.exports = KhoController;
