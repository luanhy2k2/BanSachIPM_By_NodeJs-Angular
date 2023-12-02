import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { LoaiSpService } from "../services/loaispService";

@injectable()
export class LoaiSpController{
    constructor(private service: LoaiSpService){}
    async GetAllLoaiSp(req: Request, res:Response): Promise<any>{
        try{
            const data = await this.service.GetAllLoaiSp();
            if (data && data.length > 0) {
                res.json(data);
            }
            else{
                res.json({message: 'Không lấy được danh sách'});
            }
        }
        catch(error: any){
            res.json({message: error.message});
        }
    }
    async GetLoaiSpById(req: Request, res: Response): Promise<void>{
        try{
            const id = req.params.id;
            const data = await this.service.GetLoaiSpById(id);
            if(data){
                res.json(data);
            }
            else{
                res.json({message: 'Bản ghi không tồn tại'});
            }
        }
        catch(error: any){
            throw new Error(error.message)
        }
    }
    async CreateLoaiSp(req: Request, res: Response): Promise<void>{
        try{
            const Loaisp = req.body as {danhmuc_id: any, name: any};
            await this.service.CreateLoaiSp(Loaisp.danhmuc_id, Loaisp.name);
            res.json({message: 'Thêm thành công', data: true});
        }
        catch(err: any){
            throw new Error(err.message);
        }
    }
    async UpdateLoaiSp(req: Request, res: Response): Promise<void>{
        try{
            const Loaisp = req.body as {loai_id: any, danhmuc_id: any, loai_name: any};
            await this.service.UpdateLoaiSp(Loaisp);
            res.json({message: 'Sửa thành công', data: true});
        }
        catch(err: any){
            throw new Error(err.message);
        }
    }
    async DeleteLoaiSp(req: Request, res: Response): Promise<any>{
        try{
            const id = req.params.id;
            await this.service.DeleteLoaisp(id);
            res.json({message: 'Xoá thành công', data: true});
        }
        catch(err: any){
            throw new Error(err.message);
        }
    }
}