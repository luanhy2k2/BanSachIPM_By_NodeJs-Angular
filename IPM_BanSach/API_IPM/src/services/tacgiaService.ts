import { TacgiaRepository } from "../repositories/tacgiaRepository";
import { injectable } from "tsyringe";
@injectable()
export class TacgiaService{
    constructor(private res: TacgiaRepository){}
    async GetTacgiaById(id: string): Promise<any>{
        return this.res.GetTacgiaById(id);
    }
    async GetAllTacgia(): Promise<any>{
        return this.res.GetAllTacgia();
    }
    async CreateTacgia(Tacgia:any): Promise<any>{
        return this.res.CreateTacgia(Tacgia);
    }
    async UpdateTacgia(Tacgia: any): Promise<any>{
        return this.res.UpdateTacgia(Tacgia);
    }
    async DeleteTacgia(id: string): Promise<any>{
        return this.res.DeleteTacgia(id);
    }
}