import { injectable } from 'tsyringe';
import { ThongKeRepository } from '../repositories/thongkeRepository';
@injectable()
export class ThongKeService{
    constructor(private ThongKeRepository: ThongKeRepository){}
    async ThongKeDoanhThuHomNay(): Promise<any> {
        return this.ThongKeRepository.ThongKeDoanhThuHomNay();
    }
    async ThongKeDoanhThuTrongThang(): Promise<any> {
        return this.ThongKeRepository.ThongKeDoanhThuTrongThang();
    }
    async ThongKeDoanhThuTrongTuan(): Promise<any> {
        return this.ThongKeRepository.ThongKeDoanhThuTrongTuan();
    }
    async ThongKeSanPhamHetHang(): Promise<any> {
        return this.ThongKeRepository.ThongKeSanPhamHetHang();
    }
    async ThongKeSoDonHang(): Promise<any> {
        return this.ThongKeRepository.ThongKeSoDonHang();
    }
    async ThongKeSoDonHangHomNay(): Promise<any> {
        return this.ThongKeRepository.ThongKeSoDonHangHomNay();
    }
    async ThongKeSoDonHangTrongTuan(): Promise<any> {
        return this.ThongKeRepository.ThongKeSoDonHangTrongTuan();
    }
    async ThongKeSoDonHangTrongThang(): Promise<any> {
        return this.ThongKeRepository.ThongKeSoDonHangTrongThang();
    }
    async ThongKeTongSanPham(): Promise<any> {
        return this.ThongKeRepository.ThongKeTongSanPham();
    }
    async ThongKeTongSoTienBan(): Promise<any> {
        return this.ThongKeRepository.ThongKeTongSoTienBan();
    }
}
