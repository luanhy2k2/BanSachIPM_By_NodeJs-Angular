import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { product } from "src/app/Models/product.entity";

const url = 'http://localhost:3000';
@Injectable({
    providedIn: "root"
})

export class productService{
    constructor(private http:HttpClient){}
    getAllProduct(pageIndex:any):Observable<any[]>{
        return this.http.get<any[]>(`${url}/api/home/getsp/${pageIndex}/8`)
    }
    getAllCompany():Observable<any[]>{
        return this.http.get<any[]>(`${url}/api/nhasx/getall`)
    }
    getAllTacgia():Observable<any[]>{
        return this.http.get<any[]>(`${url}/api/tacgia/getall`)
    }
    countproduct(){
        return this.http.get(`${url}/api/home/productCount`);
    }
    getBrandbyName(name: string): Observable<product[]>{
        return this.http.get<any[]>(`${url}/api/sanpham/getbyname/${name}`)
    }
    addproduct(product: any,us:any ) {
        return this.http.post<any>(`${url}/api/sanpham/create`, product,{
            headers: {
                Authorization: `Bearer ${us.token}`
            }
        });
    }
    editproduct(product: any) {
        return this.http.post<any>(`${url}/api/sanpham/update`, product);
    }
    deleteproduct(id: any) {
        return this.http.delete<any>(`${url}/api/sanpham/delete/${id}`);
    }
    getProductById(id:any):Observable<any>{
        return this.http.get<any>(`${url}/api/sanpham/getById/${id}`)
    }
}