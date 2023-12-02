import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { HoaDonNhapService } from '../services/hoadonnhapService';

@injectable()
export class HoaDonNhapController{
    constructor(private service: HoaDonNhapService){}
    async GetAllHoaDonNhap(req: Request, res:Response): Promise<any>{
        try{
            const pageSize = req.params.pageSize;
            const pageIndex = req.params.pageIndex;
            const data = await this.service.GetAllHoaDonNhap(pageSize,pageIndex);
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

    async GetChiTietHoaDonNhapById(req: Request, res: Response): Promise<void>{
        try{
            const id = req.params.id;
            const data = await this.service.GetChiTietHoaDonNhapById(id);
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
    async CreateHoaDonNhap(req: Request, res: Response): Promise<void>{
        try{
            const maNguoiDung = req.body.maNguoiDung;
            const nsx_id = req.body.nsx_id;
            await this.service.CreateHoaDonNhap(maNguoiDung, nsx_id);
            res.json({message: 'Thêm thành công', data: true});
        }
        catch(error: any){
            throw new Error(error.message)
        }
    }
    async CreateChiTietHoaDonNhap(req: Request, res: Response): Promise<void>{
        try{
            const soHoaDon = req.body.soHoaDon;
            const sanp_id = req.body.sanp_id;
            const soLuong = req.body.soLuong;
            await this.service.CreateChiTietHoaDonNhap(soHoaDon, sanp_id,soLuong);
            res.json({message: 'Thêm thành công', data: true});
        }
        catch(error: any){
            throw new Error(error.message)
        }
    }
    
}