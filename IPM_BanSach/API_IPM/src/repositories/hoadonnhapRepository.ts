import { injectable } from 'tsyringe';
import { Database } from '../config/database';
@injectable()
export class HoaDonNhapRepository{
    constructor(private db: Database){}
    async CreateHoaDonNhap(maNguoiDung: any, nsx_id:any): Promise<any>{
        try{
            const sql = 'CALL CreateHoaDonNhap(?,?)';
            await this.db.query(sql, [maNguoiDung, nsx_id]);
            return true;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async CreateChiTietHoaDonNhap(soHoaDon: any, sanp_id:any, soLuong:any): Promise<any>{
        try{
            const sql = 'CALL CreteChiTietHoaDonNhap(?,?,?)';
            await this.db.query(sql, [soHoaDon, sanp_id, soLuong]);
            return true;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async GetChiTietHoaDonNhapById(id: string): Promise<any>{
        try{
            const sql = 'CALL GetChiTietHoaDonNhap(?)';
            const [results] = await this.db.query(sql, [id]);
            return results;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async GetAllHoaDonNhap(pageSize: any, pageIndex:any): Promise<any>{
        try{
            const page = pageIndex || 1;
            const limit = pageSize || 10;
            const offset = (page - 1) * limit;
            const sql = 'CALL GetAllHoaDonNhap(?,?)';
            const [results] = await this.db.query(sql,[limit, offset]);
            const [totalProducts] = await this.db.query(`
            SELECT COUNT(*) as total from HoaDonNhap ;`,[]);
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