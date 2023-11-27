
const { BranchService } = require("../service/BranchService");

class BranchController {
    constructor(BranchRespository) {
        this.BranchRespository = BranchRespository;
      }
    async GetAllLoaiSp(req, res) {
        try {
            const data = await BranchService.GetAllLoaiSp();
            if (data && data.length > 0) {
                res.json(data);
            } else {
                res.json({ message: 'Không lấy được danh sách' });
            }
        } catch (error) {
            res.json({ message: error.message });
        }
    }

    async GetLoaiSpById(req, res) {
        try {
            const id = req.params.id;
            const data = await BranchService.GetLoaiSpById(id);
            if (data) {
                res.json(data);
            } else {
                res.json({ message: 'Bản ghi không tồn tại' });
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async CreateLoaiSp(req, res) {
        try {
            const Loaisp = req.body;
            await BranchService.CreateLoaiSp(Loaisp.danhmuc_id, Loaisp.name);
            res.json({ message: 'Thêm thành công', data: true });
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async UpdateLoaiSp(req, res) {
        try {
            const Loaisp = req.body;
            await BranchService.UpdateLoaiSp(Loaisp);
            res.json({ message: 'Sửa thành công', data: true });
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async DeleteLoaiSp(req, res) {
        try {
            const id = req.params.id;
            await BranchService.DeleteLoaisp(id);
            res.json({ message: 'Xoá thành công', data: true });
        } catch (err) {
            throw new Error(err.message);
        }
    }
}

module.exports = { BranchController};
