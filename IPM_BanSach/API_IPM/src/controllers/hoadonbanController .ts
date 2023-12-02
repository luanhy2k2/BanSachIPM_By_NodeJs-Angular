import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { HoaDonBanService } from '../services/hoadonbanService';

@injectable()
export class HoaDonBanController{
    constructor(private service: HoaDonBanService){}
    async GetAllHoaDonBan(req: Request, res:Response): Promise<any>{
        try{
            const pageSize = req.params.pageSize;
            const pageIndex = req.params.pageIndex;
            const data = await this.service.GetAllHoaDonBan(pageSize,pageIndex);
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

    async GetChiTietHoaDonBanById(req: Request, res: Response): Promise<void>{
        try{
            const id = req.params.id;
            const data = await this.service.GetChiTietHoaDonBanById(id);
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
    async GetHoaDonBanById(req: Request, res: Response): Promise<void>{
        try{
            const id = req.params.id;
            const data = await this.service.GetHoaDonBanById(id);
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

    async CreateHoaDonBan(req: Request, res: Response): Promise<void>{
        try{
            const maKhachHang = req.body.maKhachHang;
          
            const data = await this.service.CreateHoaDonBan(maKhachHang);
            res.json({message: 'Thêm thành công', data: data});
        }
        catch(error: any){
            throw new Error(error.message)
        }
    }
    async CreateChiTietHoaDonBan(req: Request, res: Response): Promise<void>{
        try{
            const soHoaDon = req.body.soHoaDon;
            const sanp_id = req.body.sanp_id;
            const soLuong = req.body.soLuong;
            await this.service.CreateChiTietHoaDonBan(soHoaDon, sanp_id,soLuong);
            res.json({message: 'Thêm thành công', data: true});
        }
        catch(error: any){
            throw new Error(error.message)
        }
    }
    async ConfirmCt(req: Request, res: Response): Promise<void>{
        try{
           
            const sanp_id = req.body.sanp_id;
            const soLuong = req.body.soLuong;
            await this.service.ConfirmCt( sanp_id,soLuong);
            res.json({message: 'Thêm thành công', data: true});
        }
        catch(error: any){
            throw new Error(error.message)
        }
    }
    
}