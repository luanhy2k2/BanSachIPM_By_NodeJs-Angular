import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, forkJoin, switchMap } from "rxjs";
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
    getOrderById(id: any):Observable<branch[]>{
        return this.http.get<branch[]>(`${url}/api/donhang/getbyid/${id}`);
    };
    getOrderDetailById(id: any):Observable<branch[]>{
        return this.http.get<branch[]>(`${url}/api/donhang/getchitietbyid/${id}`);
    }
    confirmOrder(orderId: number): Observable<any> {
        return this.http.get(`${url}/api/getchitietbyid/${orderId}`)
          .pipe(
            switchMap((response: any) => {
              const updateRequests = response.data.map((e: any) => {
                return this.http.post(`${url}/api/updatequantity/${e.sanp_id}/${e.soLuong}`, {});
              });
              return forkJoin(updateRequests);
            }),
            switchMap(() => this.http.post(`${url}/api/updatestatus/${orderId}`, {}))
          );
      }
    
}