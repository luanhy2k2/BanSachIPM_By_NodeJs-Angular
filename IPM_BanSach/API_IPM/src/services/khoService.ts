import { injectable } from "tsyringe";
import { KhoRespository } from "../repositories/khoRepository";
@injectable()
export class KhoService{
    constructor(private res: KhoRespository){};
    async GetAllKho(): Promise<any>{
        return this.res.GetAllKho();
    }
    async GetKhoById(id: string): Promise<any>{
        return this.res.GetKhoById(id);
    }
  
}