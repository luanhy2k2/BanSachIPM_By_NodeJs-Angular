import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { orderPay } from "src/app/Models/orderPay.entity";
import { orderService } from "../../admin/orderService";
@Injectable({
    providedIn: 'root'
})
export class PaymentService{
    constructor (private http: HttpClient, private orderService:orderService){}
    payMent(orderPay:any, us:any){
        return this.http.post<any>("http://localhost:3000/api/home/createdonhang", orderPay,{
            headers: {
                Authorization: `Bearer ${us.token}`
            }
        });
    }
    orderDetail(sdt:any){
        return this.http.get<any>(`http://localhost:3000/api/home/getorderdetailbysdt/${sdt}`)
    }
    confirmOrder(id:number){
        return this.http.post<any>(`http://localhost:3000/api/home/confirmOrder/${id}`, {})
    }

    completeOrder(orderId: number): void {
        this.orderService.getOrderById(orderId).subscribe(response => {
          const data = {
            maKhachHang: response.maKhachHang
          };
          this.orderService.createInvoice(data).subscribe(() => {
            this.orderService.getOrderDetailById(orderId).subscribe(details => {
              details.forEach((e:any) => {
                const dt = {
                  sanp_id: e.sanp_id,
                  soLuong: e.soLuong
                };
                this.orderService.confirmCt(dt).subscribe(() => {
                  // Handle success if needed
                });
              });
            });
          });
          this.confirmOrder(orderId).subscribe(() => {
            alert('Hoàn tất đơn hàng');
          });
        });
    }
}