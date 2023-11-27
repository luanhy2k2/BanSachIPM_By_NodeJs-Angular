
const database = require('../../config/database');
const db = new database();
class BranchRespository {
    constructor(db) {
        this.db = db;
      }
    async GetLoaiSpById(id) {
        try {
            const sql = 'CALL GetLoaiSpById(?)';
            const [results] = await this.db.query(sql, [id]);
            return results[0];
        } catch (error) {
            throw new Error();
        }
    }

    async GetAllLoaiSp() {
        try {
            const sql = 'CALL GetTheLoaiAll()';
            const [results] = await this.db.query(sql, []);
            return results;
        } catch (error) {
            throw new Error();
        }
    }

    async CreateLoaiSp(danhmuc_id, name) {
        try {
            const sql = 'CALL CreateLoaiSp(?, ?)';
            await this.db.query(sql, [danhmuc_id, name]);
            return true;
        } catch (error) {
            throw new Error();
        }
    }

    async UpdateLoaiSp(loaisp) {
        try {
            const sql = 'CALL UpdateLoaiSp(?, ?, ?)';
            await this.db.query(sql, [loaisp.loai_id, loaisp.danhmuc_id, loaisp.loai_name]);
            return true;
        } catch (error) {
            throw new Error();
        }
    }

    async DeleteLoaiSp(id) {
        try {
            const sql = 'CALL DeleteLoaiSp(?)';
            await this.db.query(sql, [id]);
            return true;
        } catch (error) {
            throw new Error();
        }
    }
}

module.exports = BranchRepository ;
