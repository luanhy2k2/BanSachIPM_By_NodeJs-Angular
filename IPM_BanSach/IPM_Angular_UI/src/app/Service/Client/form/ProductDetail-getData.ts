import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { commentProduct } from "src/app/Models/commentProduct.entity";
import { product } from "src/app/Models/product.entity";
import { productDetail } from "src/app/Models/productDetail.entity";

@Injectable({
    providedIn: "root"
})
export class ProductDetailService{
    constructor(private httpClient: HttpClient){}
    getProductById(id:any):Observable<productDetail>{
        return this.httpClient.get<productDetail>(`http://localhost:3000/api/productDetail/getspbyid/${id}`)
    }
    getComment(id:any):Observable<any[]>{
        return this.httpClient.get<any[]>(`http://localhost:3000/api/productDetail/getComment/${id}`)
    }
    getReplyComment(id:any):Observable<any[]>{
        return this.httpClient.get<any[]>(`http://localhost:3000/api/productDetail/getReplyComment/${id}`)
    }
    addComment(comment:any){
        return this.httpClient.post(`http://localhost:3000/api/productDetail/addComment`, comment);
    }
    addReplyComment(comment:any){
        return this.httpClient.post(`http://localhost:3000/api/productDetail/addReplyComment`, comment);
    }
    getProductSameAuthor(id:any):Observable<product[]>{
        return this.httpClient.get<product[]>(`http://localhost:3000/api/productDetail/getbytg/${id}/4`)
    }
    getCommentProduct(id:any):Observable<any>{
        return this.httpClient.get<any>(`http://localhost:3000/api/productDetail/getComment/${id}`)
    }
    addCommentProduct(comment:any){
        return this.httpClient.post(`http://localhost:3000/api/productDetail/addComment`, comment)
    }
    
}