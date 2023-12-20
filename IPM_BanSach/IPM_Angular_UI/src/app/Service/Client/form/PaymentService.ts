import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { orderPay } from "src/app/Models/orderPay.entity";
@Injectable({
    providedIn: 'root'
})
export class PaymentService{
    constructor (private http: HttpClient){}
    payMent(orderPay:any, us:any){
        return this.http.post<any>("http://localhost:3000/api/home/createdonhang", orderPay,{
            headers: {
                Authorization: `Bearer ${us.token}`
            }
        });
    }
}