import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { HomeService } from '../services/homeService';
import { khachHang, ChiTietDonHang } from '../model/Model';
@injectable()
export class HomeController{
    constructor(private service: HomeService){}
    
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
    async ConfirmOrder(req: Request, res: Response): Promise<void>{
        try{
            const id = req.params.id;
            await this.service.ConfirmOrder(id);
            
            res.json({message: 'Hoàn thành đơn hàng', data: true});
           
        }
        catch(error: any){
            throw new Error(error.message)
        }
    }
    async GetKhachHangBySdt(req: Request, res: Response): Promise<void>{
        try{
            const sdt = req.params.sdt;
            const data = await this.service.GetKhachHangBySdt(sdt);
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
    async GetSanPham(req: Request, res: Response): Promise<void>{
        try{
            const pageSize = req.params.pageSize;
            const pageIndex = req.params.pageIndex;
            const data = await this.service.GetSanPham(pageSize, pageIndex);
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
    async GetOrderBySdt(req: Request, res: Response): Promise<void>{
        try{
            const sdt = req.params.sdt;
            const data = await this.service.GetOrderBySdt(sdt);
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
            const sl = req.params.sl;
            const data = await this.service.GetSanphamByTg(id, sl);
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
    async GetSanphamBanChay(req: Request, res: Response): Promise<void>{
        try{
            const sl = req.params.sl;
            const data = await this.service.GetSanPhamBanChay(sl);
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
    async GetSanphamMoi(req: Request, res: Response): Promise<void>{
        try{
            const sl = req.params.sl;
            const data = await this.service.GetSanPhamMoi(sl);
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
    async GetSpByLoaiId(req: Request, res: Response): Promise<void>{
        try{
            const sl = req.params.sl;
            const id = req.params.id;
            const data = await this.service.GetSpByLoaiId(id,sl);
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
    async GetLoaiSp(req: Request, res: Response): Promise<void>{
        try{
            
            const data = await this.service.GetLoaiSp();
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
    async GetTacGia(req: Request, res: Response): Promise<void>{
        try{
            
            const data = await this.service.GetTacGia();
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
    async CreateDonHang(req: Request, res: Response): Promise<void>{
        try{
            const khachhang: khachHang = req.body.khachhang;
            const listchitiet: ChiTietDonHang[] = req.body.listchitiet;
            const gia = req.body.gia;
            await this.service.CreateDonHang(khachhang, listchitiet, gia);
            res.json({message: 'Thêm thành công', data: true});
        }
        catch(err: any){
            throw new Error(err.message);
        }
    }

    
}