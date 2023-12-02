import { injectable } from 'tsyringe';
import { Database } from '../config/database';
@injectable()
export class SanphamRepository{
    constructor(private db: Database){}
    async GetSanphamById(id: string): Promise<any>{
        try{
            const sql = 'CALL GetSpById(?)';
            const [results]= await this.db.query(sql, [id]);
            return results[0];
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async GetSanphamByLoai(id: string): Promise<any>{
        try{
            const sql = 'CALL GetSanphamByLoai(?)';
            const [results] = await this.db.query(sql, [id]);
            return results;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async GetSanphamByNsx(id: string): Promise<any>{
        try{
            const sql = 'CALL GetSanphamByNsx(?)';
            const [results] = await this.db.query(sql, [id]);
            return results;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async GetSanphamByTg(id: string): Promise<any>{
        try{
            const sql = 'CALL GetSanphamByTg(?)';
            const [results] = await this.db.query(sql, [id]);
            return results;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async GetSanphamByName(name: string): Promise<any>{
        try{
            const sql = 'CALL GetSanphamByName(?)';
            const [results] = await this.db.query(sql, [name]);
            return results;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async GetAllSanpham(): Promise<any>{
        try{
            const sql = 'CALL GetAllSanpham()';
            const [results] = await this.db.query(sql,[]);
            return results;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async CreateSanpham(Sanpham:any): Promise<any>{
        try{
            const sql = 'CALL CreateSanpham(?, ?, ?,?,?,?,?,?,?,?)';
            await this.db.query(sql, [Sanpham.sanp_name, Sanpham.size,Sanpham.tg_id,
                Sanpham.loai_id, Sanpham.nsx_id, Sanpham.soTrang, Sanpham.tomTat, Sanpham.namsx, Sanpham.image, Sanpham.price]);
            return true;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async UpdateSanpham(Sanpham:any): Promise<any>{
        try{
            const sql = 'CALL UpdateSanpham(?, ?, ?,?,?,?,?,?,?,?,?)';
            await this.db.query(sql, [Sanpham.sanp_id,Sanpham.sanp_name, Sanpham.size,Sanpham.tg_id,
                Sanpham.loai_id, Sanpham.nsx_id, Sanpham.soTrang, Sanpham.tomTat, Sanpham.namsx, Sanpham.image, Sanpham.price]);
            return true;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async DeleteSanpham(id:string): Promise<any>{
        try{
            const sql = 'CALL DeleteSanpham(?)';
            await this.db.query(sql, [id]);
            return true;
        }
        catch(Error: any){
            throw new Error;
        }
    }
}