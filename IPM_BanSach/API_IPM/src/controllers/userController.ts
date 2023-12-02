import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { UserService } from '../services/userService';
import { generateToken } from '../config/jwt';
import multer from 'multer';
import { upload } from '../middlewares/authMiddleware';
@injectable()
export class UserController {
  constructor(private userService: UserService 
  ) { } 
  
  async authenticate(req: Request, res: Response): Promise<void> {
    try {
      const { username, password } = req.body;
      const user = await this.userService.authenticate(username, password);
      if (user) {
        const token = generateToken(user);
        user.token = token;
        res.json(user);
      } else {
        res.status(401).json({ message: "Sai mật tài khoản hoặc mật khẩu" });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async saveUser (req: Request, res: Response): Promise<void>{
    const key = req.body.key;
    const value = req.body.value;
  
    localStorage.setItem(key, value);
  
    res.status(200).send('Thông tin đã được lưu trữ thành công');
  };
  async CreateUser(req: Request, res: Response): Promise<void>{
    try{
        const User = req.body as {hoTen: any, ngaySinh: any,gioiTinh: any,diaChi: any, email:any, sdt:any, taiKhoan:any, matKhau:any};
        await this.userService.CreateUser(User);
        res.json({message: 'Thêm thành công', data: true});
    }
    catch(err: any){
        throw new Error(err.message);
    }
}
  async UploaFile(req:Request, res:Response):Promise<any>{
    const file = req.file
    upload.single("file");
    console.log(req.file);
    res.send({
    message: "File uploaded successfully",
  });
  }
  

}