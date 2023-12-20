import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
const url = 'http://localhost:3000';
@Injectable({
    providedIn: "root"
})

export class companyService{
    constructor(private http:HttpClient){}
    getCompany():Observable<any[]>{
        return this.http.get<any[]>(`${url}/api/nhasx/getall`);
    }
    getCompanyById(id:any):Observable<any>{
        return this.http.get<any>(`${url}/api/nhasx/getbyid/${id}`);
    }
    countCompany(){
        return this.http.get(`${url}/api/categories/count`);
    }
    getCompanyByName(name: string): Observable<any[]>{
        return this.http.get<any[]>(`${url}/api/nhasx/getbyname/${name}`)
    }
    addCompany(Company: any) {
        return this.http.post<any>(`${url}/api/nhasx/create`, Company);
    }
    editCompany(Company: any) {
        return this.http.post<any>(`${url}/api/nhasx/update`, Company);
    }
    deleteCompany(id: any) {
        return this.http.delete<any>(`${url}/api/nhasx/delete/${id}`);
    }
}