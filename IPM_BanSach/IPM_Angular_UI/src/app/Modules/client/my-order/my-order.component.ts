import { Component } from '@angular/core';
import { PaymentService } from 'src/app/Service/Client/form/PaymentService';
import { UserService } from 'src/app/Service/UserService';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent {
  constructor(private service: PaymentService, private us:UserService) { }
  orderDetail: any[] = [];
  order: any
  sdt: any = "";
  
  ngOnInit() {
    this.orderDetails();


  }
  loadData() {

  }
  orderDetails() {
    const us = this.us.getUser();
    this.sdt = us.sdt;
    this.service.orderDetail(this.sdt).subscribe(res => {
      
      this.orderDetail = res;
      this.groupByOrderId(this.orderDetail);
      console.log(this.order);
      console.log(this.orderDetail);
    })
  }
  completeOrder(id:number){
    this.service.completeOrder(id);
    this.orderDetails();
  }
  
  groupByOrderId(orderDetails: any[]) {
    const groupedDetails: { [key: string]: any[] } = {};

    orderDetails.forEach((detail) => {
      if (!groupedDetails[detail.maDonHang]) {
        groupedDetails[detail.maDonHang] = [detail];
      } else {
        groupedDetails[detail.maDonHang].push(detail);
      }
    });
    const resultArray = Object.values(groupedDetails)
        .sort((a, b) => {
            const maDonHangA = a[0]?.maDonHang || 0;
            const maDonHangB = b[0]?.maDonHang || 0;
            return maDonHangB - maDonHangA;
        });
    return this.order = resultArray;
    console.log(this.order)
  }


}
