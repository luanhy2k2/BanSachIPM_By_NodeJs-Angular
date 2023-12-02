import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { NhasxService } from '../services/nhasxService';

@injectable()
export class NhasxController{
    constructor(private service: NhasxService){}
    async GetAllNhasx(req: Request, res:Response): Promise<any>{
        try{
            const data = await this.service.GetAllNhasx();
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
    async GetNhasxById(req: Request, res: Response): Promise<void>{
        try{
            const id = req.params.id;
            const data = await this.service.GetNhasxById(id);
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
    async CreateNhasx(req: Request, res: Response): Promise<void>{
        try{
            const nhasx = req.body as {nsx_name: any, diaChi: any, sdt:any};
            await this.service.CreateNhasx(nhasx);
            res.json({message: 'Thêm thành công', data: true});
        }
        catch(err: any){
            throw new Error(err.message);
        }
    }
    async GetByName(req: Request, res: Response): Promise<void>{
        try{
            const name = req.params.name;
            const data = await this.service.GetByName(name);
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
    async UpdateNhasx(req: Request, res: Response): Promise<void>{
        try{
            const nhasx = req.body as {nsx_id: any,nsx_name: any, diaChi: any, sdt:any};
            await this.service.UpdateNhasx(nhasx);
            res.json({message: 'Sửa thành công', data: true});
        }
        catch(err: any){
            throw new Error(err.message);
        }
    }
    async DeleteNhasx(req: Request, res: Response): Promise<any>{
        try{
            const id = req.params.id;
            await this.service.DeleteNhasx(id);
            res.json({message: 'Xoá thành công', data: true});
        }
        catch(err: any){
            throw new Error(err.message);
        }
    }
}