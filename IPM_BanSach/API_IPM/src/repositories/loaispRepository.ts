import { injectable } from 'tsyringe';
import { Database } from '../config/database';
import express, { Request, Response } from 'express';
@injectable()
export class LoaiSpRespository{
    constructor(private db: Database){}
    async GetLoaiSpById(id: string): Promise<any>{
        try{
            const sql = 'CALL GetLoaiSpById(?)';
            const [results] = await this.db.query(sql, [id]);
            return results[0];
        }
        catch(error: any){
            throw new Error;
        }
    }
    async GetAllLoaiSp(): Promise<void>{
        try{
            const sql = 'CALL GetTheLoaiAll()';
            const [results] = await this.db.query(sql,[]);
            return results;
        }
        catch(error: any){
            throw new Error;
        }
    }
    async CreateLoaiSp(danhmuc_id: any, name: any): Promise<any>{
        try{
            const sql = 'CALL CreateLoaiSp(?, ?)';
            await this.db.query(sql, [danhmuc_id, name]);
            return true;
        }
        catch(error: any){
            throw new Error;
        }
    }
    async UpdateLoaiSp(loaisp:any): Promise<any>{
        try{
            const sql = 'CALL UpdateLoaiSp(?, ?, ?)';
            await this.db.query(sql,[loaisp.loai_id, loaisp.danhmuc_id, loaisp.loai_name]);
            return true;
        }
        catch(error: any){
            throw new Error;
        }
    }
    async DeleteLoaiSp(id: string): Promise<any>{
        try{
            const sql = 'CALL DeleteLoaiSp(?)';
            await this.db.query(sql, [id]);
            return true;
        }
        catch(error:any){
            throw new Error;
        }
    }
}