import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { DonHangService } from '../services/donhangService';

@injectable()
export class DonHangController{
    constructor(private service: DonHangService){}
    async GetAllDonHang(req: Request, res:Response): Promise<any>{
        try{
            const pageSize = req.params.pageSize;
            const pageIndex = req.params.pageIndex;
            const data = await this.service.GetAllDonHang(pageSize,pageIndex);
            if (data) {
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
    async GetDonHangById(req: Request, res: Response): Promise<void>{
        try{
            const id = req.params.id;
            const data = await this.service.GetDonHangById(id);
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
    async GetChiTietDonHangById(req: Request, res: Response): Promise<void>{
        try{
            const id = req.params.id;
            const data = await this.service.GetChiTietDonHangById(id);
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
    async UpdateOrderStatus(req: Request, res: Response): Promise<void>{
        try{
            const id = req.params.id;
            await this.service.UpDateOrderStatus(id);
            res.json({message: 'Update thành công', data: true});
        }
        catch(error: any){
            throw new Error(error.message)
        }
    }
    async UpdateQuantity(req: Request, res: Response): Promise<void>{
        try{
            const id = req.params.id;
            const sl = req.params.sl;
            await this.service.UpdateQuantity(id,sl);
            res.json({message: 'Update thành công', data: true});
        }
        catch(error: any){
            throw new Error(error.message)
        }
    }
    
}