import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { KhoService } from "../services/khoService";

@injectable()
export class KhoController{
    constructor(private service: KhoService){}
    async GetAllKho(req: Request, res:Response): Promise<any>{
        try{
            const data = await this.service.GetAllKho();
            if (data && data.length > 0) {
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
    async GetKhoById(req: Request, res: Response): Promise<void>{
        try{
            const id = req.params.id;
            const data = await this.service.GetKhoById(id);
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
 
}