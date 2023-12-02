import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { TacgiaService } from '../services/tacgiaService';

@injectable()
export class TacgiaController{
    constructor(private service: TacgiaService){}
    async GetAllTacgia(req: Request, res:Response): Promise<any>{
        try{
            const data = await this.service.GetAllTacgia();
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
    async GetTacgiaById(req: Request, res: Response): Promise<void>{
        try{
            const id = req.params.id;
            const data = await this.service.GetTacgiaById(id);
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
    async CreateTacgia(req: Request, res: Response): Promise<void>{
        try{
            const Tacgia = req.body as {email: any, sdt: any,tG_diaChi: any,tG_name: any};
            await this.service.CreateTacgia(Tacgia);
            res.json({message: 'Thêm thành công', data: true});
        }
        catch(err: any){
            throw new Error(err.message);
        }
    }
    async UpdateTacgia(req: Request, res: Response): Promise<void>{
        try{
            const Tacgia = req.body as {tG_id: any,tG_name: any,tG_diaChi: any,sdt: any,email: any};
            await this.service.UpdateTacgia(Tacgia);
            res.json({message: 'Sửa thành công', data: true});
        }
        catch(err: any){
            throw new Error(err.message);
        }
    }
    async DeleteTacgia(req: Request, res: Response): Promise<any>{
        try{
            const id = req.params.id;
            await this.service.DeleteTacgia(id);
            res.json({message: 'Xoá thành công', data: true});
        }
        catch(err: any){
            throw new Error(err.message);
        }
    }
}