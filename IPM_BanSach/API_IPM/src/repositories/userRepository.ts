import { injectable } from 'tsyringe';
import { Database } from '../config/database';
import multer from 'multer';
import { Request } from 'express';
@injectable()
export class UserRepository {
  constructor(private db: Database) { }  
  async GetUserByAccount(username: string, password: string): Promise<any> {
    try {
      const sql = 'CALL authenticate(?,?)';
      const [results] = await this.db.query(sql, [username,password]);      
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 
  async CreateUser(User:any): Promise<any>{
    try{
        const sql = 'CALL CreatetaiKhoan(?, ?, ?, ?, ?, ?, ?, ?)';
        await this.db.query(sql, [User.hoTen, User.ngaySinh, User.gioiTinh, User.diaChi, User.email, User.sdt, User.taiKhoan, User.matKhau]);
        return true;
    }
    catch(Error: any){
        throw new Error;
    }
}

  
  
}