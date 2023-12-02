import { HoaDonBanRepository } from "../repositories/hoadonbanRepository";
import { injectable } from "tsyringe";
@injectable()
export class HoaDonBanService{
    constructor(private res: HoaDonBanRepository){}
    async GetChiTietHoaDonBanById(id: string): Promise<any>{
        return this.res.GetChiTietHoaDonBanById(id);
    }
    async GetHoaDonBanById(id: string): Promise<any>{
        return this.res.GetHoaDonBanById(id);
    }
    async GetAllHoaDonBan(pageSize: any, pageIndex:any): Promise<any>{
        return this.res.GetAllHoaDonBan(pageSize, pageIndex);
    }
    async CreateHoaDonBan(maKhachHang: any): Promise<any>{
        return this.res.CreateHoaDonBan(maKhachHang);
    }
    async CreateChiTietHoaDonBan(soHoaDon: any, sanp_id:any, soLuong:any): Promise<any>{
        return this.res.CreateChiTietHoaDonBan(soHoaDon,sanp_id,soLuong);
    }
    async ConfirmCt( sanp_id:any, soLuong:any): Promise<any>{
        return this.res.ConfirmCt(sanp_id,soLuong);
    }
   
}