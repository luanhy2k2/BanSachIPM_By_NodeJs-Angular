

const { BranchRespository } = require('../respositories/BranchRepository');
const Database = require('../../config/database');
const database = new Database();
const BranchRespository = new BranchRespository(database);
class BranchService {
    constructor(BranchRespository) {
        this.BranchRespository = BranchRespository;
      }
  async getDanhMucById(req, res) {
    
    const id = req.params.id;
    try {
      const danhMuc = await BranchRespository.getDanhMucById(id);
      res.json(danhMuc);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getDanhMucAll(req, res) {
    try {
      const danhMucList = await BranchRespository.getDanhMucAll();
      res.json(danhMucList);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateDanhMuc(req, res) {
    const danhmuc = req.body;
    try {
      await BranchRespository.updateDanhMuc(danhmuc);
      res.json({ message: 'Danh Muc updated successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createDanhMuc(req, res) {
    const danhmuc_name = req.body.danhmuc_name;
    try {
      await BranchRespository.createDanhMuc(danhmuc_name);
      res.json({ message: 'Danh Muc created successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
module.exports = new BranchService();


