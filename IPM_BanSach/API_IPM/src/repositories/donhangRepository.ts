import { injectable } from 'tsyringe';
import { Database } from '../config/database';
@injectable()
export class DonHangRepository{
    constructor(private db: Database){}
    async GetDonHangById(id: string): Promise<any>{
        try{
            const sql = 'CALL GetDonHangById(?)';
            const [results] = await this.db.query(sql, [id]);
            return results[0];
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async GetChiTietDonHangById(id: string): Promise<any>{
        try{
            const sql = 'CALL GetChiTietDonHang(?)';
            const [results] = await this.db.query(sql, [id]);
            return results;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async GetAllDonHang(pageSize: any, pageIndex:any): Promise<any>{
        try{
            const page = pageIndex || 1;
            const limit = pageSize || 10;
            const offset = (page - 1) * limit;
            const sql = 'CALL GetAllDonHang(?,?)';
            const [results] = await this.db.query(sql,[limit, offset]);
            const [totalProducts] = await this.db.query(`
            SELECT COUNT(*) as total from donhang ;`,[]);
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
    async UpdateOrderSatus(id:any): Promise<any>{
        try{
            const sql = 'CALL updateOrderStatus(?)';
            await this.db.query(sql, [id]);
            return true;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async UpdateQuantity(id:any, sl:any): Promise<any>{
        try{
            const sql = 'CALL UpdateQuantity(?,?)';
            await this.db.query(sql, [id,sl]);
            return true;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    
}