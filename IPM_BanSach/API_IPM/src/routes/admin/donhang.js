const express = require('express');
const router = express.Router();
const connection = require('../../config/db');
router.post('/confirm-order/:id', (req, res) => {
    const orderId = req.params.id;
  
    // Bắt đầu một transaction
    connection.beginTransaction((err) => {
      if (err) {
        console.error('Error beginning transaction: ', err);
        res.status(500).json({ success: false, message: 'Error confirming order' });
        return;
      }
  
      // Lấy danh sách chi tiết đơn hàng
      getOrderDetails(orderId, (err, orderDetails) => {
        if (err) {
          // Rollback transaction nếu có lỗi khi lấy danh sách chi tiết đơn hàng
          connection.rollback(() => {
            console.error('Error getting order details: ', err);
            res.status(500).json({ success: false, message: 'Error confirming order' });
          });
          return;
        }
  
        // Cập nhật số lượng sản phẩm trong kho cho từng chi tiết đơn hàng
        updateProductStock(orderDetails, (err) => {
          if (err) {
            // Rollback transaction nếu có lỗi khi cập nhật số lượng sản phẩm
            connection.rollback(() => {
              console.error('Error updating product stock: ', err);
              res.status(500).json({ success: false, message: 'Error confirming order' });
            });
          } else {
            // Commit transaction nếu không có lỗi
            connection.commit((err) => {
              if (err) {
                console.error('Error committing transaction: ', err);
                res.status(500).json({ success: false, message: 'Error confirming order' });
              } else {
                res.json({ success: true, message: 'Order confirmed successfully' });
              }
            });
          }
        });
      });
      
    });
  });
  
  // Hàm để lấy danh sách chi tiết đơn hàng
  function getOrderDetails(orderId, callback) {
    connection.query(
      'SELECT sanp_id, soLuong FROM chitietdonhang WHERE maDonHang = ?',
      [orderId],
      (err, results) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, results);
        }
      }
    );
  }
  
  // Hàm để cập nhật số lượng sản phẩm trong kho
  function updateProductStock(orderDetails, callback) {
    // Nếu không có chi tiết đơn hàng, không cần cập nhật
    if (orderDetails.length === 0) {
      callback(null);
      return;
    }
  
    // Dùng đệ quy để xử lý từng chi tiết đơn hàng một
    const updateNextProduct = (index) => {
      if (index === orderDetails.length) {
        // Đã cập nhật xong tất cả các chi tiết đơn hàng
        callback(null);
      } else {
        const detail = orderDetails[index];
        connection.query(
          'UPDATE chitietkho SET soLuong = soLuong - ? WHERE sanp_id = ?',
          [detail.soLuong, detail.sanp_id],
          (err) => {
            if (err) {
              callback(err);
            } else {
              // Cập nhật chi tiết đơn hàng tiếp theo
              updateNextProduct(index + 1);
            }
          }
        );
      }
    };
  
    // Bắt đầu quá trình cập nhật
    updateNextProduct(0);
  }
module.exports = router;
