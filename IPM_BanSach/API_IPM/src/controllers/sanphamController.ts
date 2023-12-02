import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { SanphamService } from '../services/sanphamService';

@injectable()
export class SanphamController{
    constructor(private service: SanphamService){}
    async GetAllSanpham(req: Request, res:Response): Promise<any>{
        try{
            const data = await this.service.GetAllSanpham();
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
    async GetSanphamById(req: Request, res: Response): Promise<void>{
        try{
            const id = req.params.id;
            const data = await this.service.GetSanphamById(id);
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
    async GetSanphamByName(req: Request, res: Response): Promise<void>{
        try{
            const name = req.params.name;
            const data = await this.service.GetSanphamByName(name);
            if(data && data.length > 0){
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
    async GetSanphamByLoai(req: Request, res: Response): Promise<void>{
        try{
            const id = req.params.id;
            const data = await this.service.GetSanphamByLoai(id);
            if(data && data.length > 0){
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
    async GetSanphamByTg(req: Request, res: Response): Promise<void>{
        try{
            const id = req.params.id;
            const data = await this.service.GetSanphamByTg(id);
            if(data && data.length > 0){
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

    async GetSanphamByNsx(req: Request, res: Response): Promise<void>{
        try{
            const id = req.params.id;
            const data = await this.service.GetSanphamByNsx(id);
            if(data && data.length > 0){
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

    async CreateSanpham(req: Request, res: Response): Promise<void>{
        try{
            const Sanpham = req.body as {sanp_name: any, size: any,tg_id: any,
                loai_id: any, nsx_id: any, soTrang: any, tomTat: any, namsx: any, image: any, price: any};
            await this.service.CreateSanpham(Sanpham);
            res.json({message: 'Thêm thành công', data: true});
        }
        catch(err: any){
            throw new Error(err.message);
        }
    }
    async UpdateSanpham(req: Request, res: Response): Promise<void>{
        try{
            const Sanpham = req.body as {sanp_id: any,sanp_name: any, size: any,tg_id: any,
                loai_id: any, nsx_id: any, soTrang: any, tomTat: any, namsx: any, image: any, price: any};
            await this.service.UpdateSanpham(Sanpham);
            res.json({message: 'Sửa thành công', data: true});
        }
        catch(err: any){
            throw new Error(err.message);
        }
    }
    async DeleteSanpham(req: Request, res: Response): Promise<any>{
        try{
            const id = req.params.id;
            await this.service.DeleteSanpham(id);
            res.json({message: 'Xoá thành công', data: true});
        }
        catch(err: any){
            throw new Error(err.message);
        }
    }
}