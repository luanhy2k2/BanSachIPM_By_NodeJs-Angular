import { Component } from '@angular/core';
import { statisticService } from 'src/app/Service/admin/staticsticService';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent {
    constructor(private service:statisticService){}
    doanhThuTrongNgay:any = 0;
    doanhThuTrongTuan:any = 0;
    doanhThuTrongThang:any = 0;
    SoSanPham:any = 0;
    SoSanPhamHetHang:any = 0;
    SoDonHang:any = 0;
    SoDonTrongNgay:any = 0;
    SoDonTrongTuan:any = 0;
    SoDonTrongThang:any = 0;
    SoTienBan:any = 0;
    ngOnInit(){
      this.service.DoanhThuTrongNgay().subscribe(res=>{
        this.doanhThuTrongNgay = res.total
      });
      this.service.DoanhThuTrongTuan().subscribe(res=>{
        this.doanhThuTrongTuan = res.tong_sotien
      })
      this.service.DoanhThuTrongThang().subscribe(res=>{
        this.doanhThuTrongThang = res.tong_sotien
      })
      this.service.ThongKeSoDonHang().subscribe(res=>{
        this.SoDonHang = res.SoLuong
      })
      this.service.ThongKeSoDonHangHomNay().subscribe(res=>{
        this.SoDonTrongNgay = res.sl
      });
      this.service.ThongKeSoDonHangTrongThang().subscribe(res=>{
        this.SoDonTrongThang = res.tong_donhang
      });
      this.service.ThongKeSoDonHangTrongTuan().subscribe(res=>{
        this.SoDonTrongTuan = res.tong_donhang
      });
      this.service.ThongKeSoSanPham().subscribe(res=>{
        this.SoSanPham = res.soluong
      });
      this.service.ThongKeSoSanPhamHetHang().subscribe(res=>{
        this.SoSanPhamHetHang = res.sl
      });
      this.service.ThongKeTongSoTienBan().subscribe(res=>{
        this.SoTienBan = res.total
      })
    }
}
