import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { branch } from "src/app/Models/branch.entity";
const url = 'https://localhost:7262';
@Injectable({
    providedIn: "root"
})

export class branchService{
    constructor(private http:HttpClient){}
    getBranch(pageIndex: any):Observable<branch[]>{
        return this.http.get<branch[]>(`${url}/api/categories/getAll/${pageIndex}/2`);
    }
    countBranch(){
        return this.http.get(`${url}/api/categories/count`);
    }
    getBrandbyName(name: string): Observable<branch[]>{
        return this.http.get<branch[]>(`${url}/api/categories/search/${name}/0/8`)
    }
    addProductType(data: any): Observable<any> {
        return this.http.post(`http://localhost:3000/loaisp/create`, data);
      }
}