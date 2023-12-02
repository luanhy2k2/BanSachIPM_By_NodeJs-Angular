const db = require('../../config/database');

class BranchRepository {
  async getAllLoaiSp() {
    try {
      const sql = 'CALL GetTheLoaiAll()';
      const [results] = await db.query(sql, []);
      return results;
    } catch (error) {
      // Handle errors here, e.g., log or throw an exception
      console.error('Error in getAllLoaiSp:', error);
      throw error;
    }
  }
}

module.exports = BranchRepository;
