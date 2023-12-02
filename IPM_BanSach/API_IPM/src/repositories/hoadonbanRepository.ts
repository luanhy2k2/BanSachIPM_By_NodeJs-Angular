import { injectable } from 'tsyringe';
import { Database } from '../config/database';
@injectable()
export class HoaDonBanRepository{
    constructor(private db: Database){}
    async CreateHoaDonBan(maKhachHang: any): Promise<any>{
        try{
            const sql = 'CALL CreateHoaDonBan(?)';
            const data = await this.db.query(sql, [maKhachHang]);
            return data;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async CreateChiTietHoaDonBan(soHoaDon: any, sanp_id:any, soLuong:any): Promise<any>{
        try{
            const sql = 'CALL CreteChiTietHoaDonBan(?,?,?)';
            await this.db.query(sql, [soHoaDon, sanp_id, soLuong]);
            return true;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async ConfirmCt( sanp_id:any, soLuong:any): Promise<any>{
        try{
            const sql = 'CALL ConfirmCt(?,?)';
            await this.db.query(sql, [sanp_id, soLuong]);
            return true;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async GetChiTietHoaDonBanById(id: string): Promise<any>{
        try{
            const sql = 'CALL GetChiTietHoaDonBan(?)';
            const [results] = await this.db.query(sql, [id]);
            return results;
        }
        catch(Error: any){
            throw new Error;
        }
    }

    async GetHoaDonBanById(id: string): Promise<any>{
        try{
            const sql = 'CALL GetHoaDonBanById(?)';
            const [results] = await this.db.query(sql, [id]);
            return results[0];
        }
        catch(Error: any){
            throw new Error;
        }
    }

    async GetAllHoaDonBan(pageSize: any, pageIndex:any): Promise<any>{
        try{
            const page = pageIndex || 1;
            const limit = pageSize || 10;
            const offset = (page - 1) * limit;
            const sql = 'CALL GetAllHoaDonBan(?,?)';
            const [results] = await this.db.query(sql,[limit, offset]);
            const [totalProducts] = await this.db.query(`
            SELECT COUNT(*) as total from HoaDonBan ;`,[]);
            const tt = totalProducts;
            const json = {
                results,
                total: tt,
              }
            return json;
        }
        catch(Error: any){
            throw new Error;
        }
    }
   
    
}