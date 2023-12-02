import { injectable } from 'tsyringe';
import { UserRepository } from '../repositories/userRepository';
import multer from 'multer';
@injectable()
export class UserService {
  constructor(private userRepository: UserRepository
  ) {}
  async authenticate(username: string, password: string): Promise<any> {     
    let user = await this.userRepository.GetUserByAccount(username, password);
    if (user) { 
      return {
        maTaiKhoan: user.maTaiKhoan,
        hoTen: user.hoTen,
        taiKhoan: user.taiKhoan,
        loaiQuyen: user.loaiQuyen,
        email: user.email,
        diaChi: user.diaChi,
        sdt: user.sdt,
        maNguoiDung: user.maNguoiDung
      };
    }
    return null;
  }
  async CreateUser(User:any): Promise<any>{
    return this.userRepository.CreateUser(User);
}
  
 
  
}