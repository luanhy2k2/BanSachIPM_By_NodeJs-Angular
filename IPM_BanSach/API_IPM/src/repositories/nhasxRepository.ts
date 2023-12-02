import { injectable } from 'tsyringe';
import { Database } from '../config/database';
@injectable()
export class NhasxRepository{
    constructor(private db: Database){}
    async GetNhasxById(id: string): Promise<any>{
        try{
            const sql = 'CALL GetNhasxById(?)';
            const [results] = await this.db.query(sql, [id]);
            return results[0];
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async GetAllNhasx(): Promise<any>{
        try{
            const sql = 'CALL GetAllNhasx()';
            const [results] = await this.db.query(sql,[]);
            return results;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async CreateNhasx(nhasx:any): Promise<any>{
        try{
            const sql = 'CALL CreateNhasx(?, ?, ?)';
            await this.db.query(sql, [nhasx.nsx_name, nhasx.diaChi, nhasx.sdt]);
            return true;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async UpdateNhasx(nhasx:any): Promise<any>{
        try{
            const sql = 'CALL UpdateNhasx(?, ?, ?, ?)';
            await this.db.query(sql, [nhasx.nsx_id, nhasx.nsx_name, nhasx.diaChi, nhasx.sdt]);
            return true;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async DeleteNhasx(id:string): Promise<any>{
        try{
            const sql = 'CALL DeleteNhasx(?)';
            await this.db.query(sql, [id]);
            return true;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async GetByName(name: string): Promise<any>{
        try{
            const sql = 'CALL timKiemNhaSx(?)';
            const [results] = await this.db.query(sql, [name]);
            return results;
        }
        catch(Error: any){
            throw new Error;
        }
    }
}