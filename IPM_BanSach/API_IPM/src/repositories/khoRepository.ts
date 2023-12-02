import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class KhoRespository{
    constructor(private db: Database){}
    async GetKhoById(id: string): Promise<any>{
        try{
            const sql = 'CALL GetKhoById(?)';
            const [results] = await this.db.query(sql, [id]);
            return results;
        }
        catch(error: any){
            throw new Error;
        }
    }
    async GetAllKho(): Promise<void>{
        try{
            const sql = 'CALL GetKhoAll()';
            const [results] = await this.db.query(sql,[]);
            return results;
        }
        catch(error: any){
            throw new Error;
        }
    }
    
}