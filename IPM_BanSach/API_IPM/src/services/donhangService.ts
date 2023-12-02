import { DonHangRepository } from "../repositories/donhangRepository";
import { injectable } from "tsyringe";
@injectable()
export class DonHangService{
    constructor(private res: DonHangRepository){}
    async GetDonHangById(id: string): Promise<any>{
        return this.res.GetDonHangById(id);
    }
    async GetChiTietDonHangById(id: string): Promise<any>{
        return this.res.GetChiTietDonHangById(id);
    }
    async GetAllDonHang(pageSize: any, pageIndex:any): Promise<any>{
        return this.res.GetAllDonHang(pageSize, pageIndex);
    }
    async UpDateOrderStatus(id: any): Promise<any>{
        return this.res.UpdateOrderSatus(id);
    }
    async UpdateQuantity(id: any,sl:any): Promise<any>{
        return this.res.UpdateQuantity(id,sl);
    }
   
}