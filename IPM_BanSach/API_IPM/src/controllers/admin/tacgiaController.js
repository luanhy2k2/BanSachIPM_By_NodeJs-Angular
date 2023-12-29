const tacgiaService = require("../../services/tacgiaService");

const TacgiaController = {
    
    GetAllTacgia: (req, res) => {
        tacgiaService.GetAllTacgia((err, data) => {
            if (err) {
                console.error('Error executing query: ' + err.stack);
                return res.status(500).send('Database error');
            }
            if (data && data.length > 0) {
                res.json(data);
            } else {
                res.json({ message: 'Không lấy được danh sách' });
            }
        });
    },

    GetTacgiaById: (req, res) => {
        const id = req.params.id;
        tacgiaService.GetTacgiaById(id, (err, data) => {
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
    GetTacgiaByName: (req, res) => {
        const name = req.params.name;
        tacgiaService.GetTacgiaByName(name, (err, data) => {
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

    CreateTacgia: (req, res) => {
        const Tacgia = req.body;
        tacgiaService.CreateTacgia(Tacgia, (err, data) => {
            if (err) {
                console.error('Error executing query: ' + err.stack);
                return res.status(500).send('Database error');
            }
            res.json({ message: 'Thêm thành công', data: true });
        });
    },

    UpdateTacgia: (req, res) => {
        const Tacgia = req.body;
        tacgiaService.UpdateTacgia(Tacgia, (err, data) => {
            if (err) {
                console.error('Error executing query: ' + err.stack);
                return res.status(500).send('Database error');
            }
            res.json({ message: 'Sửa thành công', data: true });
        });
    },

    DeleteTacgia: (req, res) => {
        const id = req.params.id;
        tacgiaService.DeleteTacgia(id, (err, data) => {
            if (err) {
                console.error('Error executing query: ' + err.stack);
                return res.status(500).send('Database error');
            }
            res.json({ message: 'Xoá thành công', data: true });
        });
    },
};

module.exports = TacgiaController;
