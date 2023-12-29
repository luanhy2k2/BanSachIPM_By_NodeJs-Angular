const productDetailService = require("../../services/client/productDetailService");
const productDetailController = {
  GetComment(req, res) {
    const id = req.params.id;
    productDetailService.getComment(id, (err, data) => {
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
  addComment(req, res) {
    const {id, content, us_id} = req.body;
    productDetailService.addComment(id, content, us_id, (err, data) => {
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
  GetReplyComment(req, res) {
    const id = req.params.id;
    productDetailService.getReplyComment(id, (err, data) => {
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
  addReplyComment(req, res) {
    const {id, content, us_id} = req.body;
    productDetailService.addReplyComment(id, content, us_id, (err, data) => {
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
}
module.exports = productDetailController;