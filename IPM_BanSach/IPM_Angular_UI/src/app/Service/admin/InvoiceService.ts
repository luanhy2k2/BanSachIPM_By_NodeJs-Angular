import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { branch } from "src/app/Models/branch.entity";
const url = 'http://localhost:3000';
@Injectable({
    providedIn: "root"
})

export class InvoiceService{
    constructor(private http:HttpClient){}
    getImportInvoice(pageInDex:any):Observable<any>{
        return this.http.get<any>(`${url}/api/hoadonnhap/getall/${pageInDex}/5`);
    }
    addImportInvoice(invoice: any) {
        return this.http.post<any>(`${url}/api/hoadonnhap/create`, invoice);
    }
    addImportInvoiceDetail(invoiceDetail: any) {
        return this.http.post<any>(`${url}/api/hoadonnhap/createchitiet`, invoiceDetail);
    }
    getImportInvoiceDetailById(id: any):Observable<any[]>{
        return this.http.get<any[]>(`${url}/api/hoadonnhap/getchitietbyid/${id}`);
    }
    
}