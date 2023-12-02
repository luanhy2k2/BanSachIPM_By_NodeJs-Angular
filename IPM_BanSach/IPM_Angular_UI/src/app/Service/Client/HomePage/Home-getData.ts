import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map } from "rxjs";
import { loaisp } from "src/app/Models/loaisp.entity";
import { product } from "src/app/Models/product.entity";
const host = "http://localhost:3000"
@Injectable({
    providedIn: "root"
})

export class HomeGetDataService{
    constructor(private httpClient: HttpClient) {}
    getCategories():Observable<loaisp[]>{
        return this.httpClient.get<loaisp[]>(`${host}/api/loaisp/getall`);
    }
   
    getProductByName(name:any):Observable<product[]>{
        return this.httpClient.get<product[]>(`${host}/api/Home/GetSpByName/${name}`)
    }
    getProductByLoaiId(id:any):Observable<product[]>{
        return this.httpClient.get<product[]>(`${host}/api/home/getspbyloai/${id}`)
    }
    getAllProduct(pageIndex:any):Observable<any[]>{
        
        return this.httpClient.get<any[]>(`${host}/api/home/getsp/${pageIndex}/8`)
    }
    getProductData(criteria: string, quantity: number): Observable<product[]> {
        const url = `${host}/api/home/${criteria}/${quantity}`;
    
        return this.httpClient.get<product[]>(url)
          .pipe(
            map((response: any) => response),
            catchError((error: any) => {
              console.error('Error fetching product data:', error);
              throw error;
            })
        );
    }
    getProductsCategory(categoryId: number, quantity: number): Observable<product[]> {
        const url = `${host}/api/home/getspbyloaiid/${categoryId}/${quantity}`;
        return this.httpClient.get<product[]>(url)
          .pipe(
            map((response: any) => response),
            catchError((error: any) => {
              console.error('Error fetching product data by category:', error);
              throw error;
            })
          );
      }
    
    
}