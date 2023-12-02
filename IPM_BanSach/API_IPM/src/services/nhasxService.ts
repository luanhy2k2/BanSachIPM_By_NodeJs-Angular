import { NhasxRepository } from "../repositories/nhasxRepository";
import { injectable } from "tsyringe";
@injectable()
export class NhasxService{
    constructor(private res: NhasxRepository){}
    async GetNhasxById(id: string): Promise<any>{
        return this.res.GetNhasxById(id);
    }
    async GetAllNhasx(): Promise<any>{
        return this.res.GetAllNhasx();
    }
    async GetByName(name:string): Promise<any>{
        return this.res.GetByName(name);
    }
    async CreateNhasx(nhasx:any): Promise<any>{
        return this.res.CreateNhasx(nhasx);
    }
    async UpdateNhasx(nhasx: any): Promise<any>{
        return this.res.UpdateNhasx(nhasx);
    }
    async DeleteNhasx(id: string): Promise<any>{
        return this.res.DeleteNhasx(id);
    }
}