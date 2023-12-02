import { injectable } from 'tsyringe';
import { DanhMucRepository } from '../repositories/danhmucRepository';

@injectable()
export class DanhMucService {
  constructor(private danhMucRepository: DanhMucRepository
  ) {}
  async getDanhMucById(id: string): Promise<any> {
    return this.danhMucRepository.getDanhMucById(id);
  }
  async getDanhMucAll(): Promise<any> {
    return this.danhMucRepository.getDanhMucAll();
  }
  async updateDanhMuc(danhmuc: any): Promise<any> {
    return this.danhMucRepository.updateDanhMuc(danhmuc);
  }
  async createDanhMuc(danhmuc_name:string): Promise<any>{
    return this.danhMucRepository.createDanhMuc(danhmuc_name)
  }
}