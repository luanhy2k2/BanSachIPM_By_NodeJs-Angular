import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, forkJoin, map, mergeMap, of, switchMap, tap, throwError } from "rxjs";
import { branch } from "src/app/Models/branch.entity";
const url = 'http://localhost:3000';
@Injectable({
  providedIn: "root"
})
export class orderService {
  constructor(private http: HttpClient) { }
  getOrder(pageIndex: any): Observable<branch[]> {
    return this.http.get<branch[]>(`${url}/api/donhang/getall/${pageIndex}/8`);
  }
  countOrder() {
    return this.http.get(`${url}/api/donhang/orderCount`);
  }
  getOrderById(id: any): Observable<any> {
    return this.http.get<any>(`${url}/api/donhang/getbyid/${id}`);
  };
  getOrderDetailById(id: any): Observable<any> {
    return this.http.get(`${url}/api/donhang/getchitietbyid/${id}`);
  }
  confirmOrder(id:number):Observable<any>{
    return this.http.post(`${url}/api/donhang/confirm-order/${id}`, {})
  }
  updateDelivery(id: number, st: number) {
    return this.http.post<any>(`${url}/api/donhang/updateDelivery/${id}/${st}`, {})
  }
  updateStatus(orderId:number){
    return this.http.post(`${url}/api/donhang/updatestatus/${orderId}`, {});
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