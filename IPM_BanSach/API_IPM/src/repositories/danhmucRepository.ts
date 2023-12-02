import { injectable } from 'tsyringe';
import { Database } from '../config/database';
import express, { Request, Response } from 'express';
@injectable()
export class DanhMucRepository {
  constructor(private db: Database) { }
  async getDanhMucById(id: string): Promise<any> {
    try {
      // const sql = 'CALL GetDanhMucById(?)';
      const [results] = await this.db.query(`SELECT * FROM sanpham WHERE sanp_id = ?`, [id]);
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      }
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async getDanhMucAll(): Promise<any> {
    try {
      const sql = 'CALL GetDanhMucAll()';
      const [results] = await this.db.query(sql, []);
      return results;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async updateDanhMuc(danhmuc: any): Promise<any> {
    try {
      const sql = 'CALL UpdateDanhMuc(?, ?)';
      await this.db.query(sql, [danhmuc.danh_muc_id, danhmuc.ten_danh_muc]);
      return true;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async createDanhMuc(danhmuc_name: string): Promise<any> {
    try {
      const query = `
        INSERT INTO danhmucs (danhmuc_name)
        VALUES (?);`;
        
      const value = [danhmuc_name];
      await this.db.query(query, value);
    }
    catch {
      throw new Error;
    }
  }

}