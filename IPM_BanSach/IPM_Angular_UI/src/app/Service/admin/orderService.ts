import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, forkJoin, map, switchMap } from "rxjs";
import { branch } from "src/app/Models/branch.entity";
const url = 'http://localhost:3000';
@Injectable({
    providedIn: "root"
})
export class orderService{
    constructor(private http:HttpClient){}
    getOrder(pageIndex: any):Observable<branch[]>{
        return this.http.get<branch[]>(`${url}/api/donhang/getall/${pageIndex}/8`);
    }
    countOrder(){
        return this.http.get(`${url}/api/donhang/orderCount`);
    }
    getOrderById(id: any):Observable<any>{
        return this.http.get<any>(`${url}/api/donhang/getbyid/${id}`);
    };
    getOrderDetailById(id: any):Observable<any>{
        return this.http.get(`${url}/api/donhang/getchitietbyid/${id}`);
    }
    confirmOrder(orderId: any): Observable<any> {
      return this.http.get(`${url}/api/donhang/getchitietbyid/${orderId}`).pipe(
        // Assuming the response is an array, you can use the map operator to process it
        map((response: any) => {
          response.forEach((e:any) => {
            this.http.post(`${url}/api/donhang/updatequantity/${e.sanp_id}/${e.soLuong}`, {}).subscribe();
          });
        }),
        // After processing details, update order status
        switchMap(() => this.http.post(`${url}/api/donhang/updatestatus/${orderId}`, {}))
      );
    }
    updateDelivery(id:number,st:number){
      return this.http.post<any>(`${url}/api/donhang/updateDelivery/${id}/${st}`, {})
  }

  confirmCt(data: any): Observable<any> {
    return this.http.post(`${url}/api/HoaDonBan/ConfirmCt`, data);
  }

  xacNhanThanhToan(orderId: number): Observable<any> {
    return this.http.post(`${url}/api/home/confirmOrder/${orderId}`, {});
  }
  createInvoice(data: any): Observable<any> {
    return this.http.post(`${url}/api/HoaDonBan/create`, data);
  }
    
}