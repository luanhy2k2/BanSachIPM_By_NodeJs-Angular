import { Router } from 'express';
import { container } from 'tsyringe';
import { ThongKeController } from '../controllers/thongkeController';
const thongkeRouter = Router();
const thongkeController = container.resolve(ThongKeController);
thongkeRouter.get('/ThongKeDoanhThuHomNay', thongkeController.ThongKeDoanhThuHomNay.bind(thongkeController));
thongkeRouter.get('/ThongKeDoanhThuTrongTuan', thongkeController.ThongKeDoanhThuTrongTuan.bind(thongkeController));
thongkeRouter.get('/ThongKeDoanhThuTrongThang', thongkeController.ThongKeDoanhThuTrongThang.bind(thongkeController));
thongkeRouter.get('/ThongKeSoSanPhamHetHang', thongkeController.ThongKeSanPhamHetHang.bind(thongkeController));
thongkeRouter.get('/ThongKeTongSanPham', thongkeController.ThongKeTongSoSanPham.bind(thongkeController));
thongkeRouter.get('/ThongKeTongSoTienBan', thongkeController.ThongKeTongSoTienBan.bind(thongkeController));
thongkeRouter.get('/ThongKeSoDonHang', thongkeController.ThongKeSoDonHang.bind(thongkeController));
thongkeRouter.get('/ThongKeSoDonHangHomNay', thongkeController.ThongKeSoDonHangHomNay.bind(thongkeController));
thongkeRouter.get('/ThongKeSoDonHangTrongTuan', thongkeController.ThongKeSoDonHangTrongTuan.bind(thongkeController));
thongkeRouter.get('/ThongKeSoDonHangTrongThang', thongkeController.ThongKeSoDonHangTrongThang.bind(thongkeController));

export default thongkeRouter;