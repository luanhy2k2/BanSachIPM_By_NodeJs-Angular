import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { commentProduct } from "src/app/Models/commentProduct.entity";
import { product } from "src/app/Models/product.entity";
import { productDetail } from "src/app/Models/productDetail.entity";
const url = 'http://localhost:3000';
@Injectable({
    providedIn: "root"
})
export class UserService {
    constructor(private httpClient: HttpClient) { }
    login(username: string, password: string): Observable<any> {
        return this.httpClient.post<any>('http://localhost:3000/api/user/login', { username, password, })
    }
    singUp(user:any) {
        return this.httpClient.post<any>('http://localhost:3000/api/user/createUser', user)
    }
    uploadFile(file: File): Observable<any> {
        const formData: FormData = new FormData();
        formData.append('file', file);

        return this.httpClient.post<any>("http://localhost:3000/upload", formData);
    }
    getUser() {
        var userString = localStorage.getItem('user');
        return userString ? JSON.parse(userString) : null;
    }


}