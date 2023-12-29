import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { orderService } from 'src/app/Service/admin/orderService';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  constructor(private orderService: orderService, private http: HttpClient) { }
  order!: any[];
  total: number = 0;
  orderById!: any;
  pageIndex: number = 1;
  totalPageArray: number[] = [];
  ngOnInit() {
    this.getOrder();
  }
  getOrder() {
    this.http.get<any>("http://localhost:3000/api/donhang/orderCount").subscribe(res => {
      const productCount = Number(res.total);
      this.total = Math.ceil(productCount / 8)
      this.totalPageArray = Array.from({ length: this.total }, (_, index) => index + 1);
    })
    this.orderService.getOrder(this.pageIndex).subscribe((data) => {
      this.order = data;
    });
  }

  conFirmOrder(id: any) {
    this.orderService.confirmOrder(id).subscribe(res => {
      alert("Xác nhận thành công");
      this.getOrder();
    })
  }
  updateDelivery(id: number, st:number) {
    this.orderService.updateDelivery(id,st).subscribe(res => {
      alert("Chỉnh sửa trạng thái thành công!");
      this.getOrder();
    })
  }
  onChangeTrangThai(x: any): void {
    if (x.trangThai === 'Đã xác nhận') {
      this.conFirmOrder(x.maDonHang);
    }
  }

  onChangeGiaoHang(x: any): void {
    if (x.trangThaiGiaoHang === "Chưa giao hàng") {
      this.updateDelivery(x.maDonHang, 0);
    }
    else if (x.trangThaiGiaoHang === "Đang giao hàng") {
      this.updateDelivery(x.maDonHang, 1);
    }
    else if (x.trangThaiGiaoHang === "Giao hàng không thành công") {
      this.updateDelivery(x.maDonHang, 2);
    }
    else if (x.trangThaiGiaoHang === "Giao hàng thành công") {
      this.updateDelivery(x.maDonHang, 3);
    }
  }



  nextPage() {
    this.pageIndex++;
    this.getOrder();
  }
  previousPage() {
    this.pageIndex--;
    this.getOrder();
  }
  setPage(pageInDex: any) {
    this.pageIndex = pageInDex;
    this.getOrder();
  }
}
