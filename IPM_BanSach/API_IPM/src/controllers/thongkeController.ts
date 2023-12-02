import { ThongKeService } from "../services/thongkeService";
import { injectable } from "tsyringe";
import { Request, Response } from 'express';
@injectable()
export class ThongKeController {
    constructor(private ThongKeService: ThongKeService
    ) { }

    async ThongKeDoanhThuHomNay(req: Request, res: Response): Promise<void> {
        try {
          
            const thongke = await this.ThongKeService.ThongKeDoanhThuHomNay();
            if (thongke) {
                res.json(thongke);
            } else {
                res.json({ message: 'Bản ghi không tồn tại' });
            }
        } catch (error: any) {
            res.json({ message: error.message });
        }
    }
    async ThongKeDoanhThuTrongTuan(req: Request, res: Response): Promise<void> {
        try {
          
            const thongke = await this.ThongKeService.ThongKeDoanhThuTrongTuan();
            if (thongke) {
                res.json(thongke);
            } else {
                res.json({ message: 'Bản ghi không tồn tại' });
            }
        } catch (error: any) {
            res.json({ message: error.message });
        }
    }
    async ThongKeDoanhThuTrongThang(req: Request, res: Response): Promise<void> {
        try {
          
            const thongke = await this.ThongKeService.ThongKeDoanhThuTrongThang();
            if (thongke) {
                res.json(thongke);
            } else {
                res.json({ message: 'Bản ghi không tồn tại' });
            }
        } catch (error: any) {
            res.json({ message: error.message });
        }
    }
    async ThongKeSanPhamHetHang(req: Request, res: Response): Promise<void> {
        try {
          
            const thongke = await this.ThongKeService.ThongKeSanPhamHetHang();
            if (thongke) {
                res.json(thongke);
            } else {
                res.json({ message: 'Bản ghi không tồn tại' });
            }
        } catch (error: any) {
            res.json({ message: error.message });
        }
    }
    async ThongKeTongSoSanPham(req: Request, res: Response): Promise<void> {
        try {
          
            const thongke = await this.ThongKeService.ThongKeTongSanPham();
            if (thongke) {
                res.json(thongke);
            } else {
                res.json({ message: 'Bản ghi không tồn tại' });
            }
        } catch (error: any) {
            res.json({ message: error.message });
        }
    }
    async ThongKeSoDonHang(req: Request, res: Response): Promise<void> {
        try {
          
            const thongke = await this.ThongKeService.ThongKeSoDonHang();
            if (thongke) {
                res.json(thongke);
            } else {
                res.json({ message: 'Bản ghi không tồn tại' });
            }
        } catch (error: any) {
            res.json({ message: error.message });
        }
    }
    async ThongKeSoDonHangHomNay(req: Request, res: Response): Promise<void> {
        try {
          
            const thongke = await this.ThongKeService.ThongKeSoDonHangHomNay();
            if (thongke) {
                res.json(thongke);
            } else {
                res.json({ message: 'Bản ghi không tồn tại' });
            }
        } catch (error: any) {
            res.json({ message: error.message });
        }
    }
    async ThongKeSoDonHangTrongTuan(req: Request, res: Response): Promise<void> {
        try {
          
            const thongke = await this.ThongKeService.ThongKeSoDonHangTrongTuan();
            if (thongke) {
                res.json(thongke);
            } else {
                res.json({ message: 'Bản ghi không tồn tại' });
            }
        } catch (error: any) {
            res.json({ message: error.message });
        }
    }
    async ThongKeSoDonHangTrongThang(req: Request, res: Response): Promise<void> {
        try {
          
            const thongke = await this.ThongKeService.ThongKeSoDonHangTrongThang();
            if (thongke) {
                res.json(thongke);
            } else {
                res.json({ message: 'Bản ghi không tồn tại' });
            }
        } catch (error: any) {
            res.json({ message: error.message });
        }
    }
    async ThongKeTongSoTienBan(req: Request, res: Response): Promise<void> {
        try {
          
            const thongke = await this.ThongKeService.ThongKeTongSoTienBan();
            if (thongke) {
                res.json(thongke);
            } else {
                res.json({ message: 'Bản ghi không tồn tại' });
            }
        } catch (error: any) {
            res.json({ message: error.message });
        }
    }



}