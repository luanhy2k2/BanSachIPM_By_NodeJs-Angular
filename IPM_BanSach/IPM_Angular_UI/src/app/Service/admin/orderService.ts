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
  // confirmOrder(orderId: any): Observable<any> {
  //   return this.http.get(`${url}/api/donhang/getchitietbyid/${orderId}`).pipe(
  //     switchMap((response: any):any => {
  //       // Process details using map
  //       const updateQuantityRequests = response.map((e: any) => {
  //         return this.http.post(`${url}/api/donhang/updatequantity/${e.sanp_id}/${e.soLuong}`, {}).pipe(
  //           // Handle success
  //           catchError((error) => {
  //             if (error.status === 500) {
  //               console.error('Error updating quantity for product:', e.sanp_id, error);
  //               alert('Lỗi khi cập nhật số lượng cho sản phẩm: ' + e.sanp_id);
  //               // Return a custom observable to signal the error
  //               return of(false);
  //             } else {
  //               // Propagate other errors
  //               return throwError(error);
  //             }
  //           })
  //         );
  //       });
  //       return forkJoin(updateQuantityRequests);
  //     }),
  //     switchMap(() => this.http.post(`${url}/api/donhang/updatestatus/${orderId}`, {})),
  //     catchError((error) => {
  //       if (error.status === 500) {
  //         // Handle the 500 error here if needed
  //         console.error('Error 500:', error);
  //       }
  //       // Emit an empty observable to prevent the outer switchMap from running
  //       return of();
  //     })
  //   );
  // }

  confirmOrders(orderId: any) {
    return this.http.get(`${url}/api/donhang/getchitietbyid/${orderId}`).pipe(
      switchMap((response: any) => {
        let hasError = false;
  
        const updateQuantityRequests = response.map((e: any) => {
          if (!hasError) {  // Check if any error has occurred
            return this.http.post(`${url}/api/donhang/updatequantity/${e.sanp_id}/${e.soLuong}`, {}).pipe(
              catchError((error) => {
                if (error.status === 500) {
                  console.error('Error updating quantity for product:', e.sanp_id, error);
                  alert('Lỗi khi cập nhật số lượng cho sản phẩm: ' + e.sanp_id);
                  // Set the error flag to true
                  hasError = true;
                  // Return a custom observable to signal the error
                  return of(false);
                } else {
                  // Propagate other errors
                  return throwError(error);
                }
              })
            );
          } else {
            // If an error has occurred, return a dummy observable
            return of(false);
          }
        });
  
        // Use forkJoin to run all update quantity requests in parallel
        return forkJoin(updateQuantityRequests);
      }),
      map((results: any) => results.every((result: any) => result !== false)),
      switchMap((allRequestsSuccessful: boolean) => {
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
  

  // confirmOrders(orderId: number):any {
  //   this.http.get<any[]>(`http://localhost:3000/api/donhang/getchitietbyid/${orderId}`)
  //     .subscribe(
  //       (response) => {
  //         let allRequestsSuccessful = true;

  //         response.forEach((e) => {
  //           this.http.post(`http://localhost:3000/api/donhang/updatequantity/${e.sanp_id}/${e.soLuong}`, {})
  //             .subscribe(
  //               () => {},
  //               (error) => {
  //                 alert(`Error updating quantity for sanp_id ${e.sanp_id}`);
  //                 allRequestsSuccessful = false;
  //               }
  //             );
  //         });

  //         if (allRequestsSuccessful) {
  //           this.http.post(`http://localhost:3000/api/donhang/updatestatus/${orderId}`, {})
  //             .subscribe(
  //               () => {
  //                 alert("Xác nhận thành công");
  //               },
  //               (error) => {
  //                 alert(`Error updating order status for order ${orderId}`);
  //               }
  //             );
  //         }
  //       },
  //       (error) => {
  //         console.error(`Error fetching order details for order ${orderId}:`, error);
  //       }
  //     );
  // }


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