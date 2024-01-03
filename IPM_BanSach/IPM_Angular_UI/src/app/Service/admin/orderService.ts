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
  confirmOrder(orderId: any): Observable<any> {
    return this.http.get(`${url}/api/donhang/getchitietbyid/${orderId}`).pipe(
      switchMap((response: any):any => {
        // Process details using map
        const updateQuantityRequests = response.map((e: any) => {
          return this.http.post(`${url}/api/donhang/updatequantity/${e.sanp_id}/${e.soLuong}`, {}).pipe(
            // Handle success
            catchError((error) => {
              if (error.status === 500) {
                console.error('Error updating quantity for product:', e.sanp_id, error);
                alert('Lỗi khi cập nhật số lượng cho sản phẩm: ' + e.sanp_id);
                // Return a custom observable to signal the error
                return of(false);
              } else {
                // Propagate other errors
                return throwError(error);
              }
            })
          );
        });
        return forkJoin(updateQuantityRequests);
      }),
      switchMap(() => this.http.post(`${url}/api/donhang/updatestatus/${orderId}`, {})),
      catchError((error) => {
        if (error.status === 500) {
          // Handle the 500 error here if needed
          console.error('Error 500:', error);
        }
        // Emit an empty observable to prevent the outer switchMap from running
        return of();
      })
    );
  }

  confirmOrders(orderId: any): Observable<any> {
    return this.http.get(`${url}/api/donhang/getchitietbyid/${orderId}`).pipe(
      // Assuming the response is an array, you can use the map operator to process it
      mergeMap((response: any) => {
        const updateQuantityRequests = response.map((e: any) => {
          return this.http.post(`${url}/api/donhang/updatequantity/${e.sanp_id}/${e.soLuong}`, {}).pipe(
            // Handle success
            catchError((error) => {
              if (error.status === 500) {
                console.error('Error updating quantity for product:', e.sanp_id, error);
                alert('Lỗi khi cập nhật số lượng cho sản phẩm: ' + e.sanp_id);
                // Return a custom observable to signal the error
                return of(false);
              } else {
                // Propagate other errors
                return throwError(error);
              }
            })
          );
        });

        // Use forkJoin to run all update quantity requests in parallel
        return forkJoin(updateQuantityRequests);
      }),
      // Check if any of the update quantity requests returned false
      map((results: any) => results.every((result: any) => result !== false)),
      // After processing details, update order status
      mergeMap((allRequestsSuccessful: boolean) => {
        if (allRequestsSuccessful) {
          // If all update quantity requests were successful, update order status
          return this.http.post(`${url}/api/donhang/updatestatus/${orderId}`, {});
        } else {
          // If any update quantity request failed, return an observable that emits false
          return of(false);
        }
      }),
      // Alert for successful confirmation or failure
      tap((result: any) => {
        if (result !== false) {
          // Alert for successful confirmation
          alert('Xác nhận thành công!');
        } else {
          // Alert for failure in updating quantity
          alert('Có lỗi khi cập nhật số lượng cho một số sản phẩm!');
        }
      })
    );
  }


  updateDelivery(id: number, st: number) {
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