import { SanphamRepository } from "../repositories/sanphamRepository";
import { injectable } from "tsyringe";
@injectable()
export class SanphamService{
    constructor(private res: SanphamRepository){}
    async GetSanphamById(id: string): Promise<any>{
        return this.res.GetSanphamById(id);
    }
    async GetSanphamByName(name: string): Promise<any>{
        return this.res.GetSanphamByName(name);
    }
    async GetSanphamByNsx(id: string): Promise<any>{
        return this.res.GetSanphamByNsx(id);
    }
    async GetSanphamByTg(id: string): Promise<any>{
        return this.res.GetSanphamByTg(id);
    }
    async GetSanphamByLoai(id: string): Promise<any>{
        return this.res.GetSanphamByLoai(id);
    }
    async GetAllSanpham(): Promise<any>{
        return this.res.GetAllSanpham();
    }
    async CreateSanpham(Sanpham:any): Promise<any>{
        return this.res.CreateSanpham(Sanpham);
    }
    async UpdateSanpham(Sanpham: any): Promise<any>{
        return this.res.UpdateSanpham(Sanpham);
    }
    async DeleteSanpham(id: string): Promise<any>{
        return this.res.DeleteSanpham(id);
    }
}