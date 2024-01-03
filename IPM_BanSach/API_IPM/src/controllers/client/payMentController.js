const payMentService = require("../../services/client/payMentService");
const payMentController = {
    GetOrderBySdt(req, res) {
        const sdt = req.params.sdt;
        payMentService.GetOrderBySdt(sdt, (err, data) => {
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
      GetOrderDetailBySdt(req, res) {
        const sdt = req.params.sdt;
        payMentService.GetOrderDetailBySdt(sdt, (err, data) => {
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
        payMentService.ConfirmOrder(id, (err) => {
          if (err) {
            console.error('Error executing query: ' + err.stack);
            return res.status(500).send('Database error');
          }
    
          res.json({ message: 'Hoàn thành đơn hàng', data: true });
        });
      },
      CreateDonHang(req, res) {
        const khachhang = req.body.khachhang;
        const listchitiet = req.body.listchitiet;
        const gia = req.body.gia;
    
        payMentService.CreateDonHang(khachhang, listchitiet, gia, (err) => {
          if (err) {
            console.error('Error executing query: ' + err.stack);
            return res.status(500).send('Database error');
          }
    
          res.json({ message: 'Thêm thành công', data: true });
        });
      }
}
module.exports = payMentController;