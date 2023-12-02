import { HomeRepository } from "../repositories/HomeRepository";
import { injectable } from "tsyringe";
import { khachHang, ChiTietDonHang } from "../model/Model";
@injectable()
export class HomeService{
    constructor(private res: HomeRepository){}
    async GetSanphamById(id: string): Promise<any>{
        return this.res.GetSanphamById(id);
    }
    async ConfirmOrder(id: string): Promise<any>{
        return this.res.confirmOrder(id);
    }
    async GetKhachHangBySdt(sdt: string): Promise<any>{
        return this.res.GetKhachHangBySdt(sdt);
    }
    async GetSanphamByName(name: string): Promise<any>{
        return this.res.GetSanphamByName(name);
    }
    async GetSanPham(pageSize: any, pageIndex:any): Promise<any>{
        return this.res.GetSanPham(pageSize, pageIndex);
    }
    async GetOrderBySdt(sdt: string): Promise<any>{
        return this.res.GetOrderBySdt(sdt);
    }
    async GetSanphamByNsx(id: string): Promise<any>{
        return this.res.GetSanphamByNsx(id);
    }
    async GetSanphamByTg(id: string, sl:string): Promise<any>{
        return this.res.GetSanphamByTg(id, sl);
    }
    async GetSanphamByLoai(id: string): Promise<any>{
        return this.res.GetSanphamByLoai(id);
    }
    async GetSanPhamBanChay(id: string): Promise<any>{
        return this.res.GetSanPhamBanChay(id);
    }
    async GetSpByLoaiId(id: string,soluong:any): Promise<any>{
        return this.res.GetSpByLoaiId(id,soluong);
    }
    async GetSanPhamMoi(id: string): Promise<any>{
        return this.res.GetSanPhamMoi(id);
    }
    async CreateDonHang(khachhang: khachHang, chitietdonhang: ChiTietDonHang[], gia:any): Promise<any>{
        return this.res.CreateDonHang(khachhang, chitietdonhang, gia);
    }
    async GetLoaiSp(): Promise<any>{
        return this.res.GetLoaiSp();
    }
    async GetTacGia(): Promise<any>{
        return this.res.GetTacGia();
    }
    
}