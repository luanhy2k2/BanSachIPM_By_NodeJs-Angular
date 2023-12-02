import { HoaDonNhapRepository } from "../repositories/hoadonnhapRepository";
import { injectable } from "tsyringe";
@injectable()
export class HoaDonNhapService{
    constructor(private res: HoaDonNhapRepository){}
    async GetChiTietHoaDonNhapById(id: string): Promise<any>{
        return this.res.GetChiTietHoaDonNhapById(id);
    }
    async GetAllHoaDonNhap(pageSize: any, pageIndex:any): Promise<any>{
        return this.res.GetAllHoaDonNhap(pageSize, pageIndex);
    }
    async CreateHoaDonNhap(maNguoiDung: any, nsx_id:any): Promise<any>{
        return this.res.CreateHoaDonNhap(maNguoiDung, nsx_id);
    }
    async CreateChiTietHoaDonNhap(soHoaDon: any, sanp_id:any, soLuong:any): Promise<any>{
        return this.res.CreateChiTietHoaDonNhap(soHoaDon,sanp_id,soLuong);
    }
   
}