import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const url = 'http://localhost:3000';
@Injectable({
    providedIn: "root"
})

export class statisticService{
    constructor(private http:HttpClient){}
    DoanhThuTrongNgay():Observable<any>{
        return this.http.get<any>(`${url}/api/thongke/ThongKeDoanhThuHomNay`);
    }
    DoanhThuTrongTuan():Observable<any>{
        return this.http.get<any>(`${url}/api/thongke/ThongKeDoanhThuTrongTuan`);
    }
    DoanhThuTrongThang():Observable<any>{
        return this.http.get<any>(`${url}/api/thongke/ThongKeDoanhThuTrongThang`);
    }
    ThongKeSoSanPhamHetHang():Observable<any>{
        return this.http.get<any>(`${url}/api/thongke/ThongKeSoSanPhamHetHang`);
    }
    ThongKeSoSanPham():Observable<any>{
        return this.http.get<any>(`${url}/api/thongke/ThongKeTongSanPham`);
    }
    ThongKeTongSoTienBan():Observable<any>{
        return this.http.get<any>(`${url}/api/thongke/ThongKeTongSoTienBan`);
    }
    ThongKeSoDonHang():Observable<any>{
        return this.http.get<any>(`${url}/api/thongke/ThongKeSoDonHang`);
    }
    ThongKeSoDonHangHomNay():Observable<any>{
        return this.http.get<any>(`${url}/api/thongke/ThongKeSoDonHangHomNay`);
    }
    ThongKeSoDonHangTrongTuan():Observable<any>{
        return this.http.get<any>(`${url}/api/thongke/ThongKeSoDonHangTrongTuan`);
    }
    ThongKeSoDonHangTrongThang():Observable<any>{
        return this.http.get<any>(`${url}/api/thongke/ThongKeSoDonHangTrongThang`);
    }
}