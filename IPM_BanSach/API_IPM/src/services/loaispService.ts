import { injectable } from "tsyringe";
import { LoaiSpRespository } from "../repositories/loaispRepository";
@injectable()
export class LoaiSpService{
    constructor(private res: LoaiSpRespository){};
    async GetAllLoaiSp(): Promise<any>{
        return this.res.GetAllLoaiSp();
    }
    async GetLoaiSpById(id: string): Promise<any>{
        return this.res.GetLoaiSpById(id);
    }
    async CreateLoaiSp(danhmuc_id: any, name: any): Promise<any>{
        return this.res.CreateLoaiSp(danhmuc_id, name);
    }
    async UpdateLoaiSp(loaisp: any):Promise<any>{
        return this.res.UpdateLoaiSp(loaisp);
    }
    async DeleteLoaisp(id: string): Promise<any>{
        return this.res.DeleteLoaiSp(id);
    }
}