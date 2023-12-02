import { injectable } from 'tsyringe';
import { Database } from '../config/database';
@injectable()
export class TacgiaRepository{
    constructor(private db: Database){}
    async GetTacgiaById(id: string): Promise<any>{
        try{
            const sql = 'CALL GetTgById(?)';
            const [results] = await this.db.query(sql, [id]);
            return results[0];
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async GetAllTacgia(): Promise<any>{
        try{
            const sql = 'CALL GetAllTg()';
            const [results] = await this.db.query(sql,[]);
            return results;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async CreateTacgia(Tacgia:any): Promise<any>{
        try{
            const sql = 'CALL CreateTg(?, ?, ?,?)';
            await this.db.query(sql, [Tacgia.email, Tacgia.sdt,Tacgia.tG_diaChi,Tacgia.tG_name]);
            return true;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async UpdateTacgia(Tacgia:any): Promise<any>{
        try{
            const sql = 'CALL UpdateTg(?, ?, ?, ?,?)';
            await this.db.query(sql, [Tacgia.tG_id,Tacgia.tG_name,Tacgia.tG_diaChi,Tacgia.sdt,Tacgia.email]);
            return true;
        }
        catch(Error: any){
            throw new Error;
        }
    }
    async DeleteTacgia(id:string): Promise<any>{
        try{
            const sql = 'CALL DeleteTg(?)';
            await this.db.query(sql, [id]);
            return true;
        }
        catch(Error: any){
            throw new Error;
        }
    }
}